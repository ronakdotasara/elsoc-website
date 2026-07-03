import { makeCollectionHandlers } from "@/lib/admin/crud";
import { teamCrud } from "@/lib/admin/entities";

export const { GET, POST } = makeCollectionHandlers(teamCrud);
