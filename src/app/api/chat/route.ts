import { NextResponse, type NextRequest } from "next/server";
import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { chatRequestSchema } from "@/lib/validators";
import { offlineAnswer, retrieve } from "@/lib/rag";
import { CHAT_LIMIT, rateLimit, sweepExpiredBuckets } from "@/lib/rate-limit";
import { site } from "@/content/site";

export const maxDuration = 30;

/**
 * Streaming chat endpoint.
 *
 * - With ANTHROPIC_API_KEY: Vercel AI SDK `streamText` over Claude, grounded
 *   in content retrieved from the live data layer (RAG).
 * - Without a key: retrieval-only "offline mode" — still useful, clearly
 *   labelled via the `x-elsoc-chat-mode` header so the UI can say so.
 *
 * Plain-text streaming keeps the client protocol trivial and identical for
 * both modes.
 */
export async function POST(req: NextRequest) {
  sweepExpiredBuckets();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(`chat:${ip}`, CHAT_LIMIT);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "rate_limited", retryAfter: limit.retryAfterSeconds },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const parsed = chatRequestSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const messages = parsed.data.messages.slice(-12);
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const query = lastUser?.content ?? "";

  // ── Offline mode ─────────────────────────────────────────────────────────
  if (!process.env.ANTHROPIC_API_KEY) {
    const answer = await offlineAnswer(query);
    return new Response(answer, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "x-elsoc-chat-mode": "offline",
      },
    });
  }

  // ── AI mode with retrieval grounding ─────────────────────────────────────
  const chunks = await retrieve(query, 5);
  const context =
    chunks.length > 0
      ? chunks.map((c) => `### ${c.title} (${c.url})\n${c.content}`).join("\n\n")
      : "No specific site content matched this question.";

  try {
    const result = streamText({
      model: anthropic(process.env.ELSOC_CHAT_MODEL ?? "claude-haiku-4-5-20251001"),
      system: [
        `You are the ELSOC Assistant — the friendly guide for the Electrical Engineering Society of ${site.institute}.`,
        `Answer ONLY from the context below. If the context doesn't cover the question, say so briefly and point the user to ${site.contact.email} or the relevant page. Never invent dates, prices, names, or links.`,
        `Keep answers concise (2–5 sentences), warm, and student-friendly. Use the page paths from the context (like /sparkathon) when pointing somewhere.`,
        ``,
        `## ELSOC site context`,
        context,
      ].join("\n"),
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      maxOutputTokens: 600,
      temperature: 0.4,
    });

    return result.toTextStreamResponse({
      headers: { "x-elsoc-chat-mode": "ai" },
    });
  } catch (error) {
    console.error("[chat] provider error:", error);
    // Provider failure → degrade to retrieval so the user still gets an answer.
    const answer = await offlineAnswer(query);
    return new Response(answer, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "x-elsoc-chat-mode": "offline",
      },
    });
  }
}
