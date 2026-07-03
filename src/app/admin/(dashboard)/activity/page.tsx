"use client";

import { useQuery } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/admin/data-table";
import { PageHeader } from "@/components/admin/entity-manager";
import { formatDate } from "@/lib/utils";

interface AuditRow {
  id: string;
  action: string;
  entity: string;
  summary: string;
  actor: string;
  createdAt: string;
}

const actionVariant = (action: string) =>
  action === "delete"
    ? ("danger" as const)
    : action === "create"
      ? ("success" as const)
      : action === "login"
        ? ("pulse" as const)
        : ("volt" as const);

const columns: ColumnDef<AuditRow, unknown>[] = [
  {
    accessorKey: "createdAt",
    header: "When",
    cell: ({ getValue }) => (
      <span className="whitespace-nowrap font-mono text-xs text-fg-subtle">
        {formatDate(String(getValue()), {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ getValue }) => (
      <Badge variant={actionVariant(String(getValue()))}>{String(getValue())}</Badge>
    ),
  },
  { accessorKey: "entity", header: "Entity" },
  { accessorKey: "summary", header: "Summary" },
  {
    accessorKey: "actor",
    header: "By",
    cell: ({ getValue }) => <span className="font-mono text-xs">{String(getValue())}</span>,
  },
];

export default function AdminActivityPage() {
  const query = useQuery<AuditRow[]>({
    queryKey: ["/api/admin/audit"],
    queryFn: async () => {
      const res = await fetch("/api/admin/audit");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Activity Log"
        description="Every create, update, delete and sign-in — with the session it came from. Useful because the admin account is shared."
      />
      {query.isLoading ? (
        <Skeleton className="h-72 w-full" />
      ) : query.isError ? (
        <p className="rounded-xl border border-danger/40 bg-danger/10 p-6 text-sm">
          Could not load the log — is the database running?
        </p>
      ) : (
        <DataTable
          columns={columns}
          data={query.data ?? []}
          searchPlaceholder="Search activity…"
          pageSize={20}
          emptyMessage="No activity recorded yet."
        />
      )}
    </div>
  );
}
