import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { requireAdmin } from "@/lib/admin/guard";
import { requireDb } from "@/lib/db";
import { writeAudit } from "@/lib/audit";
import { sparkathonSettingsSchema } from "@/lib/validators";
import { sparkathonDefaults } from "@/content/sparkathon";

export async function GET() {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;
  try {
    const row = await requireDb().setting.findUnique({ where: { key: "sparkathon" } });
    const value =
      row?.value && typeof row.value === "object"
        ? { ...sparkathonDefaults, ...(row.value as object) }
        : { ...sparkathonDefaults };
    return NextResponse.json(value);
  } catch (error) {
    console.error("[admin:settings] read failed:", error);
    return NextResponse.json({ error: "database_unavailable" }, { status: 503 });
  }
}

export async function PUT(req: NextRequest) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.response;

  const parsed = sparkathonSettingsSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await requireDb().setting.upsert({
      where: { key: "sparkathon" },
      create: { key: "sparkathon", value: parsed.data },
      update: { value: parsed.data },
    });
    await writeAudit({
      action: "update",
      entity: "setting",
      entityId: "sparkathon",
      summary: "Updated Sparkathon settings (date/venue/registration)",
      actor: guard.username,
    });
    revalidatePath("/sparkathon");
    revalidatePath("/");
    return NextResponse.json(parsed.data);
  } catch (error) {
    console.error("[admin:settings] write failed:", error);
    return NextResponse.json({ error: "update_failed" }, { status: 500 });
  }
}
