import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/guard";
import { requireDb } from "@/lib/db";

export async function GET() {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;
  try {
    const rows = await requireDb().auditLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 300,
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[admin:audit] list failed:", error);
    return NextResponse.json({ error: "database_unavailable" }, { status: 503 });
  }
}
