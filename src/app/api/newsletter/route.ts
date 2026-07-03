import { NextResponse, type NextRequest } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { prisma } from "@/lib/db";
import { FORM_LIMIT, rateLimit, sweepExpiredBuckets } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  sweepExpiredBuckets();
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(`newsletter:${ip}`, FORM_LIMIT);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const parsed = newsletterSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (prisma) {
    try {
      await prisma.newsletterSubscriber.upsert({
        where: { email: parsed.data.email },
        create: { email: parsed.data.email },
        update: {},
      });
    } catch (error) {
      console.error("[newsletter] failed to persist subscriber:", error);
      return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
    }
  } else {
    console.warn("[newsletter] subscription received but DATABASE_URL is not configured");
  }

  return NextResponse.json({ ok: true });
}
