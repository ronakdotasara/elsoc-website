import { makeReorderHandler } from "@/lib/admin/crud";

export const POST = makeReorderHandler({
  entity: "teamMember",
  revalidate: ["/", "/team", "/sparkathon"],
});
