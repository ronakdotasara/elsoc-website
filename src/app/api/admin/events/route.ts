import { makeCollectionHandlers } from "@/lib/admin/crud";
import { eventCrud } from "@/lib/admin/entities";

export const { GET, POST } = makeCollectionHandlers(eventCrud);
