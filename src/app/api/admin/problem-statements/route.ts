import { makeCollectionHandlers } from "@/lib/admin/crud";
import { problemStatementCrud } from "@/lib/admin/entities";

export const { GET, POST } = makeCollectionHandlers(problemStatementCrud);
