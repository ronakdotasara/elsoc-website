import "server-only";
import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import type { z } from "zod";
import { requireDb } from "@/lib/db";
import { writeAudit } from "@/lib/audit";
import { requireAdmin } from "./guard";

/**
 * Factory for the admin collection endpoints.
 *
 * Every entity (projects, events, team, …) gets identical semantics:
 *   GET    /api/admin/<entity>        list
 *   POST   /api/admin/<entity>        create   (Zod-validated)
 *   PATCH  /api/admin/<entity>/[id]   update   (Zod-validated, partial)
 *   DELETE /api/admin/<entity>/[id]   delete
 * plus audit-log entries and on-demand ISR revalidation of affected paths.
 */

interface Delegate {
  findMany(args?: unknown): Promise<unknown[]>;
  create(args: { data: never }): Promise<unknown>;
  update(args: { where: { id: string }; data: never }): Promise<unknown>;
  delete(args: { where: { id: string } }): Promise<unknown>;
}

export interface CrudConfig<S extends z.ZodTypeAny> {
  entity: string;
  schema: S;
  delegate: () => Delegate;
  /** Paths to revalidate after any mutation (ISR on-demand). */
  revalidate: string[];
  orderBy?: Record<string, "asc" | "desc">[];
  /** Human-readable label for the audit log. */
  describe: (row: Record<string, unknown>) => string;
  /** Optional transform (e.g. ISO strings → Date) before persistence. */
  toDb?: (data: z.infer<S>) => Record<string, unknown>;
}

function revalidateAll(paths: string[]) {
  for (const path of paths) {
    // Dynamic project pages need the layout-level invalidation.
    revalidatePath(path, path.includes("[") ? "layout" : "page");
  }
}

export function makeCollectionHandlers<S extends z.ZodTypeAny>(config: CrudConfig<S>) {
  async function GET() {
    const guard = await requireAdmin();
    if (!guard.ok) return guard.response;
    try {
      const rows = await config.delegate().findMany({
        orderBy: config.orderBy ?? [{ sortOrder: "asc" }],
      });
      return NextResponse.json(rows);
    } catch (error) {
      console.error(`[admin:${config.entity}] list failed:`, error);
      return NextResponse.json({ error: "database_unavailable" }, { status: 503 });
    }
  }

  async function POST(req: NextRequest) {
    const guard = await requireAdmin();
    if (!guard.ok) return guard.response;

    const parsed = config.schema.safeParse(await req.json().catch(() => null));
    if (!parsed.success) {
      return NextResponse.json(
        { error: "invalid_input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    try {
      const data = config.toDb ? config.toDb(parsed.data) : parsed.data;
      const row = (await config.delegate().create({ data: data as never })) as Record<
        string,
        unknown
      >;
      await writeAudit({
        action: "create",
        entity: config.entity,
        entityId: String(row.id ?? ""),
        summary: `Created ${config.entity}: ${config.describe(row)}`,
        actor: guard.username,
      });
      revalidateAll(config.revalidate);
      return NextResponse.json(row, { status: 201 });
    } catch (error) {
      console.error(`[admin:${config.entity}] create failed:`, error);
      return NextResponse.json({ error: "create_failed" }, { status: 500 });
    }
  }

  return { GET, POST };
}

export function makeItemHandlers<S extends z.ZodTypeAny>(config: CrudConfig<S>) {
  type Ctx = { params: Promise<{ id: string }> };

  async function PATCH(req: NextRequest, ctx: Ctx) {
    const guard = await requireAdmin();
    if (!guard.ok) return guard.response;
    const { id } = await ctx.params;

    // Partial updates re-use the same schema relaxed to optional fields.
    const partial = (config.schema as unknown as z.ZodObject<z.ZodRawShape>).partial();
    const parsed = partial.safeParse(await req.json().catch(() => null));
    if (!parsed.success) {
      return NextResponse.json(
        { error: "invalid_input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    try {
      const data = config.toDb
        ? config.toDb(parsed.data as z.infer<S>)
        : (parsed.data as Record<string, unknown>);
      // strip undefined so partial patches don't null-out columns
      for (const key of Object.keys(data)) {
        if (data[key] === undefined) delete data[key];
      }
      const row = (await config
        .delegate()
        .update({ where: { id }, data: data as never })) as Record<string, unknown>;
      await writeAudit({
        action: "update",
        entity: config.entity,
        entityId: id,
        summary: `Updated ${config.entity}: ${config.describe(row)}`,
        actor: guard.username,
      });
      revalidateAll(config.revalidate);
      return NextResponse.json(row);
    } catch (error) {
      console.error(`[admin:${config.entity}] update failed:`, error);
      return NextResponse.json({ error: "update_failed" }, { status: 500 });
    }
  }

  async function DELETE(_req: NextRequest, ctx: Ctx) {
    const guard = await requireAdmin();
    if (!guard.ok) return guard.response;
    const { id } = await ctx.params;

    try {
      const row = (await config.delegate().delete({ where: { id } })) as Record<
        string,
        unknown
      >;
      await writeAudit({
        action: "delete",
        entity: config.entity,
        entityId: id,
        summary: `Deleted ${config.entity}: ${config.describe(row)}`,
        actor: guard.username,
      });
      revalidateAll(config.revalidate);
      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error(`[admin:${config.entity}] delete failed:`, error);
      return NextResponse.json({ error: "delete_failed" }, { status: 500 });
    }
  }

  return { PATCH, DELETE };
}

/** Shared reorder endpoint (drag-and-drop persistence). */
export function makeReorderHandler(config: {
  entity: "teamMember" | "prizeTier" | "problemStatement" | "project" | "event";
  revalidate: string[];
}) {
  return async function POST(req: NextRequest) {
    const guard = await requireAdmin();
    if (!guard.ok) return guard.response;

    const body = (await req.json().catch(() => null)) as { ids?: string[] } | null;
    if (!Array.isArray(body?.ids) || body.ids.length === 0 || body.ids.length > 500) {
      return NextResponse.json({ error: "invalid_input" }, { status: 400 });
    }
    const ids = body.ids;

    try {
      const db = requireDb();
      await db.$transaction(async (tx) => {
        for (let index = 0; index < ids.length; index++) {
          const id = ids[index]!;
          switch (config.entity) {
            case "teamMember":
              await tx.teamMember.update({ where: { id }, data: { sortOrder: index } });
              break;
            case "prizeTier":
              await tx.prizeTier.update({ where: { id }, data: { sortOrder: index } });
              break;
            case "problemStatement":
              await tx.problemStatement.update({ where: { id }, data: { sortOrder: index } });
              break;
            case "project":
              await tx.project.update({ where: { id }, data: { sortOrder: index } });
              break;
            case "event":
              await tx.event.update({ where: { id }, data: { sortOrder: index } });
              break;
          }
        }
      });
      await writeAudit({
        action: "reorder",
        entity: config.entity,
        summary: `Reordered ${ids.length} ${config.entity} entries`,
        actor: guard.username,
      });
      for (const path of config.revalidate) revalidatePath(path);
      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error(`[admin:${config.entity}] reorder failed:`, error);
      return NextResponse.json({ error: "reorder_failed" }, { status: 500 });
    }
  };
}
