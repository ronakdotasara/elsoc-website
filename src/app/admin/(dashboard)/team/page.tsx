"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { teamMemberInputSchema } from "@/lib/validators";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { BoolDot } from "@/components/admin/data-table";
import { EntityManager, type FieldDef } from "@/components/admin/entity-manager";
import { humanize } from "@/lib/utils";

interface MemberRow {
  id: string;
  name: string;
  position: string | null;
  group: string;
  yearLabel: string | null;
  photo: string | null;
  committee: boolean;
  [key: string]: unknown;
}

const columns: ColumnDef<MemberRow, unknown>[] = [
  {
    accessorKey: "name",
    header: "Member",
    cell: ({ row }) => (
      <span className="flex items-center gap-3">
        <Avatar
          name={row.original.name}
          src={row.original.photo}
          size={64}
          className="size-8 rounded-full"
        />
        <span className="font-medium">{row.original.name}</span>
      </span>
    ),
  },
  { accessorKey: "position", header: "Position" },
  {
    accessorKey: "group",
    header: "Group",
    cell: ({ getValue }) => <Badge variant="pulse">{humanize(String(getValue()))}</Badge>,
  },
  { accessorKey: "yearLabel", header: "Year" },
  {
    accessorKey: "committee",
    header: "Committee",
    cell: ({ getValue }) => <BoolDot value={Boolean(getValue())} />,
  },
];

const fields: FieldDef[] = [
  { name: "name", label: "Full name", type: "text", wide: true },
  { name: "position", label: "Position / role", type: "text" },
  {
    name: "group",
    label: "Group",
    type: "select",
    options: [
      { value: "FACULTY", label: "Faculty" },
      { value: "CORE", label: "Core Team" },
      { value: "THIRD_YEAR", label: "3rd Year" },
      { value: "EXECUTIVE", label: "Executive" },
      { value: "VOLUNTEER", label: "Volunteer" },
    ],
  },
  { name: "yearLabel", label: "Year label", type: "text", placeholder: "Final Year / 3rd Year…" },
  { name: "department", label: "Department", type: "text" },
  { name: "photo", label: "Photo", type: "image", wide: true },
  { name: "bio", label: "Bio", type: "textarea", rows: 3, wide: true },
  { name: "email", label: "Email", type: "text" },
  { name: "linkedin", label: "LinkedIn URL", type: "text" },
  { name: "github", label: "GitHub URL", type: "text" },
  {
    name: "committee",
    label: "Sparkathon organizing committee",
    type: "checkbox",
    help: "Shows on the Sparkathon credits section",
  },
  { name: "draft", label: "Contains placeholder copy", type: "checkbox" },
  { name: "sortOrder", label: "Sort order", type: "number" },
];

const defaults = {
  name: "",
  position: "",
  group: "EXECUTIVE",
  department: "",
  yearLabel: "First Year",
  bio: "",
  email: "",
  photo: null,
  linkedin: "",
  github: "",
  committee: false,
  draft: false,
  sortOrder: 0,
};

export default function AdminTeamPage() {
  return (
    <EntityManager<MemberRow>
      title="Team"
      description="Faculty, core team, coordinators and executives shown on /team. Use Reorder to drag members into display order."
      endpoint="/api/admin/team"
      schema={teamMemberInputSchema}
      fields={fields}
      defaults={defaults}
      columns={columns}
      nameKey="name"
      reorderable
    />
  );
}
