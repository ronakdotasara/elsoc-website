import { makeItemHandlers } from "@/lib/admin/crud";
import { teamCrud } from "@/lib/admin/entities";

export const { PATCH, DELETE } = makeItemHandlers(teamCrud);
