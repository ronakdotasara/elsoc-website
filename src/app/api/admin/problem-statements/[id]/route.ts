import { makeItemHandlers } from "@/lib/admin/crud";
import { problemStatementCrud } from "@/lib/admin/entities";

export const { PATCH, DELETE } = makeItemHandlers(problemStatementCrud);
