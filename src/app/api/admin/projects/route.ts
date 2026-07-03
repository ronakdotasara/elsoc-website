import { makeCollectionHandlers } from "@/lib/admin/crud";
import { projectCrud } from "@/lib/admin/entities";

export const { GET, POST } = makeCollectionHandlers(projectCrud);
