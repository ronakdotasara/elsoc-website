import { prisma } from "./db";

/**
 * Append-only audit trail. Every admin mutation calls this; with a single
 * shared account the log is the only way to reconstruct "who did what, when".
 * Failures are swallowed — auditing must never take a mutation down with it.
 */
export async function writeAudit(entry: {
  action: "create" | "update" | "delete" | "reorder" | "login" | "moderate";
  entity: string;
  entityId?: string;
  summary: string;
  actor: string;
}) {
  if (!prisma) return;
  try {
    await prisma.auditLog.create({ data: entry });
  } catch (error) {
    console.error("[audit] failed to record entry:", error);
  }
}
