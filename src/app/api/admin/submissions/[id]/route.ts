import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { requireAdmin } from "@/lib/admin/guard";
import { requireDb } from "@/lib/db";
import { writeAudit } from "@/lib/audit";
import { submissionModerationSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

/** Moderate (approve/reject) a community idea. */
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;
  const { id } = await ctx.params;

  const parsed = submissionModerationSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  try {
    const row = await requireDb().sparkathonSubmission.update({
      where: { id },
      data: { status: parsed.data.status },
    });
    await writeAudit({
      action: "moderate",
      entity: "sparkathonSubmission",
      entityId: id,
      summary: `Marked idea "${row.title}" as ${parsed.data.status.toLowerCase()}`,
      actor: guard.username,
    });
    revalidatePath("/sparkathon");
    return NextResponse.json(row);
  } catch (error) {
    console.error("[admin:submissions] moderate failed:", error);
    return NextResponse.json({ error: "update_failed" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;
  const { id } = await ctx.params;

  try {
    const row = await requireDb().sparkathonSubmission.delete({ where: { id } });
    await writeAudit({
      action: "delete",
      entity: "sparkathonSubmission",
      entityId: id,
      summary: `Deleted idea "${row.title}"`,
      actor: guard.username,
    });
    revalidatePath("/sparkathon");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin:submissions] delete failed:", error);
    return NextResponse.json({ error: "delete_failed" }, { status: 500 });
  }
}
