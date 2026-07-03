import { NextResponse, type NextRequest } from "next/server";
import { sparkathonSubmissionSchema } from "@/lib/validators";
import { prisma } from "@/lib/db";
import { FORM_LIMIT, rateLimit, sweepExpiredBuckets } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  sweepExpiredBuckets();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(`ideas:${ip}`, FORM_LIMIT);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = sparkathonSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if ((body as { website?: string })?.website) {
    return NextResponse.json({ ok: true }); // honeypot
  }

  if (!prisma) {
    return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
  }

  const { website: _hp, submitterEmail, ...rest } = parsed.data;
  try {
    await prisma.sparkathonSubmission.create({
      data: { ...rest, submitterEmail: submitterEmail || null },
    });
  } catch (error) {
    console.error("[sparkathon] failed to persist idea:", error);
    return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
