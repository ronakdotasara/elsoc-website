import { makeCollectionHandlers } from "@/lib/admin/crud";
import { prizeTierCrud } from "@/lib/admin/entities";

export const { GET, POST } = makeCollectionHandlers(prizeTierCrud);
