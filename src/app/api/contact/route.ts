import { NextResponse, type NextRequest } from "next/server";
import { contactMessageSchema } from "@/lib/validators";
import { prisma } from "@/lib/db";
import { FORM_LIMIT, rateLimit, sweepExpiredBuckets } from "@/lib/rate-limit";

function clientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  sweepExpiredBuckets();
  const limit = rateLimit(`contact:${clientIp(req)}`, FORM_LIMIT);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = contactMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot tripped → pretend success, store nothing.
  if (body && typeof body === "object" && (body as { website?: string }).website) {
    return NextResponse.json({ ok: true });
  }

  const { website: _website, ...message } = parsed.data;

  if (prisma) {
    try {
      await prisma.contactMessage.create({ data: message });
    } catch (error) {
      console.error("[contact] failed to persist message:", error);
      return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
    }
  } else {
    // No database configured (static/demo mode): acknowledge without storing,
    // and log so self-hosters notice.
    console.warn("[contact] message received but DATABASE_URL is not configured");
  }

  return NextResponse.json({ ok: true });
}
