import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/guard";
import { requireDb } from "@/lib/db";

/** Inbound contact messages + newsletter subscribers (read-only). */
export async function GET() {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;
  try {
    const db = requireDb();
    const [messages, subscribers] = await Promise.all([
      db.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
      db.newsletterSubscriber.findMany({ orderBy: { createdAt: "desc" }, take: 500 }),
    ]);
    return NextResponse.json({ messages, subscribers });
  } catch (error) {
    console.error("[admin:messages] list failed:", error);
    return NextResponse.json({ error: "database_unavailable" }, { status: 503 });
  }
}
