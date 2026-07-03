import "server-only";
import { requireDb } from "@/lib/db";
import {
  eventInputSchema,
  prizeTierInputSchema,
  problemStatementInputSchema,
  projectInputSchema,
  teamMemberInputSchema,
} from "@/lib/validators";
import type { CrudConfig } from "./crud";

/** Per-entity CRUD configuration, shared by the collection + item routes. */

export const projectCrud: CrudConfig<typeof projectInputSchema> = {
  entity: "project",
  schema: projectInputSchema,
  delegate: () => requireDb().project,
  revalidate: ["/", "/projects", "/projects/[slug]"],
  orderBy: [{ sortOrder: "asc" }],
  describe: (row) => String(row.title ?? row.slug ?? row.id),
};

export const eventCrud: CrudConfig<typeof eventInputSchema> = {
  entity: "event",
  schema: eventInputSchema,
  delegate: () => requireDb().event,
  revalidate: ["/", "/events", "/sparkathon"],
  orderBy: [{ sortOrder: "asc" }],
  describe: (row) => String(row.title ?? row.slug ?? row.id),
  toDb: (data) => ({
    ...data,
    startAt: data.startAt ? new Date(data.startAt) : data.startAt,
    endAt: data.endAt ? new Date(data.endAt) : data.endAt,
  }),
};

export const teamCrud: CrudConfig<typeof teamMemberInputSchema> = {
  entity: "teamMember",
  schema: teamMemberInputSchema,
  delegate: () => requireDb().teamMember,
  revalidate: ["/", "/team", "/sparkathon"],
  orderBy: [{ group: "asc" }, { sortOrder: "asc" }],
  describe: (row) => String(row.name ?? row.id),
};

export const prizeTierCrud: CrudConfig<typeof prizeTierInputSchema> = {
  entity: "prizeTier",
  schema: prizeTierInputSchema,
  delegate: () => requireDb().prizeTier,
  revalidate: ["/sparkathon"],
  orderBy: [{ sortOrder: "asc" }],
  describe: (row) => `${row.label ?? ""} (₹${row.amountInr ?? "?"})`,
};

export const problemStatementCrud: CrudConfig<typeof problemStatementInputSchema> = {
  entity: "problemStatement",
  schema: problemStatementInputSchema,
  delegate: () => requireDb().problemStatement,
  revalidate: ["/sparkathon"],
  orderBy: [{ sortOrder: "asc" }],
  describe: (row) => `${row.code ?? ""} ${row.title ?? ""}`.trim(),
};
