"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { eventInputSchema } from "@/lib/validators";
import { Badge } from "@/components/ui/badge";
import { EntityManager, type FieldDef } from "@/components/admin/entity-manager";

interface EventRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: "UPCOMING" | "ONGOING" | "COMPLETED";
  recurrence: "NONE" | "WEEKLY";
  dateLabel: string | null;
  location: string;
  draft: boolean;
  [key: string]: unknown;
}

const columns: ColumnDef<EventRow, unknown>[] = [
  { accessorKey: "title", header: "Title" },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => <Badge variant="pulse">{String(getValue())}</Badge>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const value = String(getValue());
      return (
        <Badge
          variant={value === "UPCOMING" ? "volt" : value === "ONGOING" ? "signal" : "default"}
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "recurrence",
    header: "Recurs",
    cell: ({ getValue, row }) =>
      getValue() === "WEEKLY" ? (
        <Badge variant="signal">weekly · {String(row.original.dayOfWeek ?? "")}</Badge>
      ) : (
        <span className="text-fg-subtle">one-off</span>
      ),
  },
  { accessorKey: "dateLabel", header: "When" },
  { accessorKey: "location", header: "Where" },
  {
    accessorKey: "draft",
    header: "Draft copy",
    cell: ({ getValue }) => (getValue() ? <Badge variant="signal">draft</Badge> : null),
  },
];

const fields: FieldDef[] = [
  { name: "title", label: "Title", type: "text", wide: true },
  { name: "slug", label: "Slug", type: "text", help: "unique-id-with-dashes" },
  { name: "category", label: "Category", type: "text", placeholder: "Workshop, Competition…" },
  { name: "description", label: "Description", type: "textarea", rows: 4, wide: true },
  { name: "coverImage", label: "Cover image", type: "image", wide: true },
  { name: "location", label: "Location", type: "text" },
  { name: "participants", label: "Participants", type: "text", placeholder: "Open to All" },
  {
    name: "startAt",
    label: "Starts at",
    type: "datetime",
    help: "Leave empty while the date is TBD",
  },
  { name: "endAt", label: "Ends at", type: "datetime" },
  {
    name: "dateLabel",
    label: "Date label (shown on cards)",
    type: "text",
    placeholder: "Sept, 2026 (Tentative)",
  },
  { name: "timeLabel", label: "Time label", type: "text", placeholder: "10:00 AM - 6:00 PM" },
  {
    name: "recurrence",
    label: "Recurrence",
    type: "select",
    options: [
      { value: "NONE", label: "One-off event" },
      { value: "WEEKLY", label: "Weekly (recurring)" },
    ],
  },
  {
    name: "dayOfWeek",
    label: "Day of week (for recurring)",
    type: "select",
    options: [
      { value: "", label: "—" },
      { value: "MONDAY", label: "Monday" },
      { value: "TUESDAY", label: "Tuesday" },
      { value: "WEDNESDAY", label: "Wednesday" },
      { value: "THURSDAY", label: "Thursday" },
      { value: "FRIDAY", label: "Friday" },
      { value: "SATURDAY", label: "Saturday" },
      { value: "SUNDAY", label: "Sunday" },
    ],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "UPCOMING", label: "Upcoming" },
      { value: "ONGOING", label: "Ongoing" },
      { value: "COMPLETED", label: "Completed" },
    ],
  },
  { name: "registrationLink", label: "Registration link", type: "text", placeholder: "https://…" },
  { name: "highlights", label: "Highlight chips", type: "tags", wide: true },
  { name: "featured", label: "Featured on home page", type: "checkbox" },
  { name: "draft", label: "Contains placeholder copy", type: "checkbox" },
  { name: "sortOrder", label: "Sort order", type: "number" },
];

const defaults = {
  slug: "",
  title: "",
  description: "",
  category: "Workshop",
  location: "NIT Hamirpur",
  coverImage: null,
  startAt: null,
  endAt: null,
  dateLabel: "",
  timeLabel: "",
  recurrence: "NONE",
  dayOfWeek: null,
  status: "UPCOMING",
  registrationLink: "",
  participants: "",
  highlights: [],
  featured: false,
  draft: false,
  sortOrder: 0,
};

export default function AdminEventsPage() {
  return (
    <EntityManager<EventRow>
      title="Events"
      description="Everything on /events. Weekly events (like the Friday Group Discussion) are modelled with a recurrence rule — no manual re-creation."
      endpoint="/api/admin/events"
      schema={eventInputSchema}
      fields={fields}
      defaults={defaults}
      columns={columns}
      nameKey="title"
    />
  );
}
