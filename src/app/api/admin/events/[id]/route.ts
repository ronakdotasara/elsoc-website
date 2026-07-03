import { makeItemHandlers } from "@/lib/admin/crud";
import { eventCrud } from "@/lib/admin/entities";

export const { PATCH, DELETE } = makeItemHandlers(eventCrud);
