import { makeItemHandlers } from "@/lib/admin/crud";
import { prizeTierCrud } from "@/lib/admin/entities";

export const { PATCH, DELETE } = makeItemHandlers(prizeTierCrud);
