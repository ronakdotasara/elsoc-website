import { makeItemHandlers } from "@/lib/admin/crud";
import { projectCrud } from "@/lib/admin/entities";

export const { PATCH, DELETE } = makeItemHandlers(projectCrud);
