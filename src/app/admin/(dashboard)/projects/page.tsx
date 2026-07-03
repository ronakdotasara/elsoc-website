"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { projectInputSchema } from "@/lib/validators";
import { Badge } from "@/components/ui/badge";
import { BoolDot } from "@/components/admin/data-table";
import { EntityManager, type FieldDef } from "@/components/admin/entity-manager";

interface ProjectRow {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  workStatus: string;
  status: "DRAFT" | "PUBLISHED";
  featured: boolean;
  draft: boolean;
  [key: string]: unknown;
}

const columns: ColumnDef<ProjectRow, unknown>[] = [
  { accessorKey: "title", header: "Title" },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => <Badge variant="pulse">{String(getValue())}</Badge>,
  },
  { accessorKey: "year", header: "Year" },
  { accessorKey: "workStatus", header: "Progress" },
  {
    accessorKey: "status",
    header: "Visibility",
    cell: ({ getValue }) => (
      <Badge variant={getValue() === "PUBLISHED" ? "success" : "default"}>
        {String(getValue())}
      </Badge>
    ),
  },
  {
    accessorKey: "featured",
    header: "Featured",
    cell: ({ getValue }) => <BoolDot value={Boolean(getValue())} />,
  },
  {
    accessorKey: "draft",
    header: "Draft copy",
    cell: ({ getValue }) =>
      getValue() ? <Badge variant="signal">draft</Badge> : null,
  },
];

const fields: FieldDef[] = [
  { name: "title", label: "Title", type: "text", wide: true },
  {
    name: "slug",
    label: "Slug",
    type: "text",
    help: "URL path: /projects/<slug> — lowercase-with-dashes",
  },
  { name: "category", label: "Category", type: "text", placeholder: "IoT, Robotics…" },
  { name: "summary", label: "Summary (card text)", type: "textarea", rows: 2, wide: true },
  {
    name: "abstract",
    label: "Abstract (flowing paragraphs, blank line between them)",
    type: "textarea",
    rows: 10,
    wide: true,
  },
  { name: "coverImage", label: "Cover image", type: "image", wide: true },
  { name: "technologies", label: "Technologies", type: "tags", wide: true },
  { name: "team", label: "Team members", type: "tags", wide: true },
  { name: "facultyCoordinator", label: "Faculty coordinator", type: "text" },
  { name: "year", label: "Year", type: "text" },
  {
    name: "workStatus",
    label: "Progress",
    type: "select",
    options: [
      { value: "Completed", label: "Completed" },
      { value: "In Progress", label: "In Progress" },
      { value: "Proposed", label: "Proposed" },
    ],
  },
  {
    name: "status",
    label: "Visibility",
    type: "select",
    options: [
      { value: "PUBLISHED", label: "Published" },
      { value: "DRAFT", label: "Hidden (draft)" },
    ],
  },
  { name: "featured", label: "Featured on home page", type: "checkbox" },
  {
    name: "draft",
    label: "Contains placeholder copy",
    type: "checkbox",
    help: "Flag so the team can find and replace filler text",
  },
  { name: "sortOrder", label: "Sort order", type: "number" },
];

const defaults = {
  slug: "",
  title: "",
  summary: "",
  abstract: "",
  category: "IoT",
  coverImage: null,
  technologies: [],
  team: [],
  facultyCoordinator: "",
  year: String(new Date().getFullYear()),
  workStatus: "Proposed",
  status: "PUBLISHED",
  featured: false,
  draft: false,
  sortOrder: 0,
};

export default function AdminProjectsPage() {
  return (
    <EntityManager<ProjectRow>
      title="Projects"
      description="Portfolio shown on /projects — each row is a live page at /projects/<slug>."
      endpoint="/api/admin/projects"
      schema={projectInputSchema}
      fields={fields}
      defaults={defaults}
      columns={columns}
      nameKey="title"
      reorderable={false}
    />
  );
}
