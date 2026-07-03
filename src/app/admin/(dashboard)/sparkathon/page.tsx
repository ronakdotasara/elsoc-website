"use client";

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { Check, Loader2, Save, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import {
  prizeTierInputSchema,
  problemStatementInputSchema,
  sparkathonSettingsSchema,
  type SparkathonSettings,
} from "@/lib/validators";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { EntityManager, PageHeader, type FieldDef } from "@/components/admin/entity-manager";
import { CheckboxField, Input, Label } from "@/components/admin/fields";
import { formatDate, formatINR } from "@/lib/utils";

/* ── Settings tab ────────────────────────────────────────────────────────── */

function SettingsTab() {
  const queryClient = useQueryClient();
  const query = useQuery<SparkathonSettings>({
    queryKey: ["/api/admin/settings/sparkathon"],
    queryFn: async () => {
      const res = await fetch("/api/admin/settings/sparkathon");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });

  const [form, setForm] = useState<SparkathonSettings | null>(null);
  useEffect(() => {
    if (query.data && !form) setForm(query.data);
  }, [query.data, form]);

  const save = useMutation({
    mutationFn: async (data: SparkathonSettings) => {
      const res = await fetch("/api/admin/settings/sparkathon", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    onSuccess: () => {
      toast.success("Sparkathon settings saved");
      void queryClient.invalidateQueries({ queryKey: ["/api/admin/settings/sparkathon"] });
    },
    onError: (e) => toast.error(`Save failed: ${e.message}`),
  });

  if (query.isLoading || !form) return <Skeleton className="h-64 w-full" />;
  if (query.isError) {
    return (
      <p className="rounded-xl border border-danger/40 bg-danger/10 p-6 text-sm">
        Could not load settings — is the database running?
      </p>
    );
  }

  const toLocal = (iso: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const parsed = sparkathonSettingsSchema.safeParse(form);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Check the form");
          return;
        }
        save.mutate(parsed.data);
      }}
      className="card-raised max-w-2xl space-y-5 rounded-xl p-6"
    >
      <div>
        <Label htmlFor="sp-date">Event date & time</Label>
        <Input
          id="sp-date"
          type="datetime-local"
          value={toLocal(form.eventDate)}
          onChange={(e) =>
            setForm({
              ...form,
              eventDate: e.target.value ? new Date(e.target.value).toISOString() : "",
            })
          }
        />
        <p className="mt-1 text-[0.65rem] text-fg-subtle">
          Drives the countdown on /sparkathon. Clear it to show “date to be announced”.
        </p>
      </div>
      <CheckboxField
        id="sp-tentative"
        label="Date is tentative"
        help="Shows a “tentative” note next to the countdown"
        checked={form.dateIsTentative}
        onChange={(v) => setForm({ ...form, dateIsTentative: v })}
      />
      <div>
        <Label htmlFor="sp-reg">Registration link</Label>
        <Input
          id="sp-reg"
          placeholder="https://forms.gle/…"
          value={form.registrationLink}
          onChange={(e) => setForm({ ...form, registrationLink: e.target.value })}
        />
        <p className="mt-1 text-[0.65rem] text-fg-subtle">
          Empty = the hero shows “Registration Opening Soon” (disabled button).
        </p>
      </div>
      <div>
        <Label htmlFor="sp-venue">Venue</Label>
        <Input
          id="sp-venue"
          value={form.venue}
          onChange={(e) => setForm({ ...form, venue: e.target.value })}
        />
      </div>
      <Button type="submit" disabled={save.isPending}>
        {save.isPending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          <Save className="size-4" aria-hidden />
        )}
        Save settings
      </Button>
    </form>
  );
}

/* ── Prize tiers tab ─────────────────────────────────────────────────────── */

interface PrizeRow {
  id: string;
  place: number;
  label: string;
  amountInr: number;
  extras: string | null;
  [key: string]: unknown;
}

const prizeColumns: ColumnDef<PrizeRow, unknown>[] = [
  { accessorKey: "place", header: "Place" },
  { accessorKey: "label", header: "Label" },
  {
    accessorKey: "amountInr",
    header: "Amount",
    cell: ({ getValue }) => (
      <span className="font-mono text-volt">{formatINR(Number(getValue()))}</span>
    ),
  },
  { accessorKey: "extras", header: "Extras" },
];

const prizeFields: FieldDef[] = [
  { name: "place", label: "Place (1 = winner)", type: "number" },
  { name: "label", label: "Label", type: "text", placeholder: "Winner / 1st Runner-up" },
  { name: "amountInr", label: "Amount (₹)", type: "number" },
  { name: "extras", label: "Extras", type: "text", placeholder: "+ additional gifts" },
  { name: "sortOrder", label: "Sort order", type: "number" },
];

/* ── Problem statements tab ──────────────────────────────────────────────── */

interface PsRow {
  id: string;
  code: string;
  title: string;
  category: string;
  theme: string;
  [key: string]: unknown;
}

const psColumns: ColumnDef<PsRow, unknown>[] = [
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ getValue }) => <Badge variant="volt">{String(getValue())}</Badge>,
  },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "theme", header: "Theme" },
];

const psFields: FieldDef[] = [
  { name: "code", label: "Code", type: "text", placeholder: "PS-119" },
  { name: "title", label: "Title", type: "text", wide: true },
  { name: "description", label: "Description", type: "textarea", rows: 5, wide: true },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: [
      { value: "Software", label: "Software" },
      { value: "Hardware", label: "Hardware" },
      { value: "Hardware & Software", label: "Hardware & Software" },
    ],
  },
  { name: "theme", label: "Theme", type: "text", placeholder: "Smart Energy / AI" },
  { name: "imageUrl", label: "Original poster (optional)", type: "image", wide: true },
  { name: "sortOrder", label: "Sort order", type: "number" },
];

/* ── Submissions tab ─────────────────────────────────────────────────────── */

interface SubmissionRow {
  id: string;
  title: string;
  description: string;
  submitterName: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
}

function SubmissionsTab() {
  const queryClient = useQueryClient();
  const key = ["/api/admin/submissions"];
  const query = useQuery<SubmissionRow[]>({
    queryKey: key,
    queryFn: async () => {
      const res = await fetch("/api/admin/submissions");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });

  const moderate = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: SubmissionRow["status"] }) => {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    onSuccess: () => {
      toast.success("Updated");
      void queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (e) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    },
    onSuccess: () => {
      toast.success("Deleted");
      void queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (e) => toast.error(e.message),
  });

  if (query.isLoading) return <Skeleton className="h-64 w-full" />;
  if (query.isError) {
    return (
      <p className="rounded-xl border border-danger/40 bg-danger/10 p-6 text-sm">
        Could not load submissions — is the database running?
      </p>
    );
  }

  const rows = query.data ?? [];
  if (rows.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line-strong bg-surface p-10 text-center text-sm text-fg-subtle">
        No community ideas submitted yet.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {rows.map((row) => (
        <li key={row.id} className="card-raised rounded-xl p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display font-semibold">{row.title}</p>
                <Badge
                  variant={
                    row.status === "APPROVED"
                      ? "success"
                      : row.status === "REJECTED"
                        ? "danger"
                        : "signal"
                  }
                >
                  {row.status}
                </Badge>
              </div>
              <p className="mt-1.5 text-sm text-fg-muted">{row.description}</p>
              <p className="mt-2 font-mono text-[0.65rem] text-fg-subtle">
                {row.submitterName ? `${row.submitterName} · ` : "anonymous · "}
                {formatDate(row.createdAt, { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              {row.status !== "APPROVED" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => moderate.mutate({ id: row.id, status: "APPROVED" })}
                >
                  <Check className="size-3.5" aria-hidden /> Approve
                </Button>
              )}
              {row.status !== "REJECTED" && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => moderate.mutate({ id: row.id, status: "REJECTED" })}
                >
                  <X className="size-3.5" aria-hidden /> Reject
                </Button>
              )}
              <Button
                size="icon-sm"
                variant="ghost"
                aria-label="Delete submission"
                className="hover:text-danger"
                onClick={() => remove.mutate(row.id)}
              >
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function AdminSparkathonPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sparkathon"
        description="Event settings, prize tiers, problem statements, and community-idea moderation for /sparkathon."
      />
      <Tabs defaultValue="settings">
        <TabsList aria-label="Sparkathon sections">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="prizes">Prizes</TabsTrigger>
          <TabsTrigger value="statements">Problem Statements</TabsTrigger>
          <TabsTrigger value="submissions">Idea Inbox</TabsTrigger>
        </TabsList>

        <TabsContent value="settings">
          <SettingsTab />
        </TabsContent>

        <TabsContent value="prizes">
          <EntityManager<PrizeRow>
            title="Prize tiers"
            description="Rendered as the podium on /sparkathon."
            endpoint="/api/admin/prize-tiers"
            schema={prizeTierInputSchema}
            fields={prizeFields}
            defaults={{ place: 1, label: "", amountInr: 0, extras: "", sortOrder: 0 }}
            columns={prizeColumns}
            nameKey="label"
          />
        </TabsContent>

        <TabsContent value="statements">
          <EntityManager<PsRow>
            title="Problem statements"
            description="Typeset statements shown (and filtered) on /sparkathon."
            endpoint="/api/admin/problem-statements"
            schema={problemStatementInputSchema}
            fields={psFields}
            defaults={{
              code: "",
              title: "",
              description: "",
              category: "Software",
              theme: "",
              imageUrl: null,
              sortOrder: 0,
            }}
            columns={psColumns}
            nameKey="title"
          />
        </TabsContent>

        <TabsContent value="submissions">
          <SubmissionsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
