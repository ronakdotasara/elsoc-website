"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { z } from "zod";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, ListOrdered, Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "./data-table";
import { useCollection, type WithId } from "./use-collection";
import {
  CheckboxField,
  ImageField,
  Input,
  Label,
  SelectField,
  TagsField,
  Textarea,
} from "./fields";

/* ── field definitions ───────────────────────────────────────────────────── */

export interface FieldDef {
  name: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "number"
    | "checkbox"
    | "select"
    | "tags"
    | "image"
    | "datetime";
  options?: readonly { value: string; label: string }[];
  placeholder?: string;
  help?: string;
  /** span both columns of the form grid */
  wide?: boolean;
  rows?: number;
}

const toLocalInput = (iso: unknown): string => {
  if (typeof iso !== "string" || !iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const fromLocalInput = (value: string): string | null =>
  value ? new Date(value).toISOString() : null;

/* ── generic manager ─────────────────────────────────────────────────────── */

export function EntityManager<T extends WithId>({
  title,
  description,
  endpoint,
  schema,
  fields,
  defaults,
  columns,
  nameKey,
  reorderable = false,
  searchPlaceholder,
}: {
  title: string;
  description: string;
  endpoint: string;
  schema: z.ZodTypeAny;
  fields: FieldDef[];
  defaults: Record<string, unknown>;
  columns: ColumnDef<T, unknown>[];
  nameKey: keyof T & string;
  reorderable?: boolean;
  searchPlaceholder?: string;
}) {
  const { query, create, update, remove, reorder } = useCollection<T>(endpoint);
  const [editing, setEditing] = useState<T | "new" | null>(null);
  const [deleting, setDeleting] = useState<T | null>(null);
  const [reordering, setReordering] = useState(false);
  const [form, setForm] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const openForm = (row: T | "new") => {
    setErrors({});
    if (row === "new") {
      setForm({ ...defaults });
    } else {
      const picked: Record<string, unknown> = {};
      for (const field of fields) picked[field.name] = row[field.name as keyof T];
      setForm(picked);
    }
    setEditing(row);
  };

  const submit = () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        map[key] ??= issue.message;
      }
      setErrors(map);
      toast.error(
        `Check the form: ${Object.entries(map)[0]?.[0]} — ${Object.entries(map)[0]?.[1]}`,
      );
      return;
    }
    if (editing === "new") {
      create.mutate(parsed.data as Partial<T>, { onSuccess: () => setEditing(null) });
    } else if (editing) {
      update.mutate(
        { id: editing.id, data: parsed.data as Partial<T> },
        { onSuccess: () => setEditing(null) },
      );
    }
  };

  const allColumns = useMemo<ColumnDef<T, unknown>[]>(
    () => [
      ...columns,
      {
        id: "actions",
        header: () => <span className="sr-only">Actions</span>,
        enableSorting: false,
        cell: ({ row }) => (
          <div className="flex justify-end gap-1.5">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={`Edit ${String(row.original[nameKey])}`}
              onClick={() => openForm(row.original)}
            >
              <Pencil className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={`Delete ${String(row.original[nameKey])}`}
              className="hover:text-danger"
              onClick={() => setDeleting(row.original)}
            >
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns, nameKey],
  );

  if (query.isLoading) {
    return (
      <div className="space-y-4">
        <PageHeader title={title} description={description} />
        <Skeleton className="h-72 w-full" />
      </div>
    );
  }

  if (query.isError) {
    return (
      <div className="space-y-4">
        <PageHeader title={title} description={description} />
        <div className="rounded-xl border border-danger/40 bg-danger/10 p-6 text-sm text-fg-muted">
          Could not load data — is the database running? ({(query.error as Error).message})
        </div>
      </div>
    );
  }

  const data = query.data ?? [];

  return (
    <div className="space-y-5">
      <PageHeader title={title} description={description}>
        {reorderable && data.length > 1 && (
          <Button variant="outline" size="sm" onClick={() => setReordering(true)}>
            <ListOrdered className="size-4" aria-hidden /> Reorder
          </Button>
        )}
        <Button size="sm" onClick={() => openForm("new")}>
          <Plus className="size-4" aria-hidden /> Add
        </Button>
      </PageHeader>

      <DataTable
        columns={allColumns}
        data={data}
        searchPlaceholder={searchPlaceholder ?? `Search ${title.toLowerCase()}…`}
      />

      {/* create / edit form */}
      <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent size="lg">
          <DialogHeader>
            <DialogTitle>
              {editing === "new" ? `Add ${title.replace(/s$/, "")}` : `Edit ${title.replace(/s$/, "")}`}
            </DialogTitle>
            <DialogDescription>
              Changes publish to the live site immediately after saving.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {fields.map((field) => {
              const id = `field-${field.name}`;
              const value = form[field.name];
              const setValue = (v: unknown) => {
                setForm((f) => ({ ...f, [field.name]: v }));
                setErrors((prev) => {
                  if (!(field.name in prev)) return prev;
                  const next = { ...prev };
                  delete next[field.name];
                  return next;
                });
              };
              const error = errors[field.name];
              const wrap = (node: React.ReactNode) => (
                <div key={field.name} className={field.wide ? "sm:col-span-2" : undefined}>
                  {node}
                  {error && <p className="mt-1 text-xs text-danger">{error}</p>}
                </div>
              );

              switch (field.type) {
                case "textarea":
                  return wrap(
                    <div>
                      <Label htmlFor={id}>{field.label}</Label>
                      <Textarea
                        id={id}
                        rows={field.rows ?? 4}
                        placeholder={field.placeholder}
                        value={String(value ?? "")}
                        aria-invalid={Boolean(error)}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>,
                  );
                case "number":
                  return wrap(
                    <div>
                      <Label htmlFor={id}>{field.label}</Label>
                      <Input
                        id={id}
                        type="number"
                        value={value === null || value === undefined ? "" : Number(value)}
                        aria-invalid={Boolean(error)}
                        onChange={(e) =>
                          setValue(e.target.value === "" ? 0 : Number(e.target.value))
                        }
                      />
                    </div>,
                  );
                case "checkbox":
                  return wrap(
                    <CheckboxField
                      id={id}
                      label={field.label}
                      help={field.help}
                      checked={Boolean(value)}
                      onChange={setValue}
                    />,
                  );
                case "select":
                  return wrap(
                    <SelectField
                      id={id}
                      label={field.label}
                      value={String(value ?? field.options?.[0]?.value ?? "")}
                      onChange={setValue}
                      options={field.options ?? []}
                    />,
                  );
                case "tags":
                  return wrap(
                    <TagsField
                      id={id}
                      label={field.label}
                      value={Array.isArray(value) ? (value as string[]) : []}
                      onChange={setValue}
                      placeholder={field.placeholder}
                    />,
                  );
                case "image":
                  return wrap(
                    <ImageField
                      id={id}
                      label={field.label}
                      value={(value as string | null) ?? null}
                      onChange={setValue}
                    />,
                  );
                case "datetime":
                  return wrap(
                    <div>
                      <Label htmlFor={id}>{field.label}</Label>
                      <Input
                        id={id}
                        type="datetime-local"
                        value={toLocalInput(value)}
                        onChange={(e) => setValue(fromLocalInput(e.target.value))}
                      />
                      {field.help && (
                        <p className="mt-1 text-[0.65rem] text-fg-subtle">{field.help}</p>
                      )}
                    </div>,
                  );
                default:
                  return wrap(
                    <div>
                      <Label htmlFor={id}>{field.label}</Label>
                      <Input
                        id={id}
                        placeholder={field.placeholder}
                        value={String(value ?? "")}
                        aria-invalid={Boolean(error)}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      {field.help && (
                        <p className="mt-1 text-[0.65rem] text-fg-subtle">{field.help}</p>
                      )}
                    </div>,
                  );
              }
            })}

            <div className="flex justify-end gap-2 sm:col-span-2">
              <Button type="button" variant="ghost" onClick={() => setEditing(null)}>
                Cancel
              </Button>
              <Button type="submit" disabled={create.isPending || update.isPending}>
                {editing === "new" ? "Create" : "Save changes"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* delete confirm */}
      <Dialog open={deleting !== null} onOpenChange={(open) => !open && setDeleting(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete “{deleting ? String(deleting[nameKey]) : ""}”?</DialogTitle>
            <DialogDescription>
              This removes it from the live site immediately. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDeleting(null)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (deleting) remove.mutate(deleting.id);
                setDeleting(null);
              }}
            >
              <Trash2 className="size-4" aria-hidden /> Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* drag-and-drop reorder */}
      {reorderable && (
        <ReorderDialog
          open={reordering}
          onOpenChange={setReordering}
          items={data}
          nameKey={nameKey}
          onSave={(ids) => {
            reorder.mutate(ids, { onSuccess: () => setReordering(false) });
          }}
          saving={reorder.isPending}
        />
      )}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-fg-muted">{description}</p>
      </div>
      <div className="flex gap-2">{children}</div>
    </div>
  );
}

/* ── dnd-kit reorder dialog ──────────────────────────────────────────────── */

function SortableRow({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });
  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm ${
        isDragging ? "z-10 border-volt/50 shadow-lg" : ""
      }`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        aria-label={`Drag to reorder ${label}`}
        className="cursor-grab touch-none text-fg-subtle hover:text-fg active:cursor-grabbing"
      >
        <GripVertical className="size-4" />
      </button>
      <span className="truncate">{label}</span>
    </li>
  );
}

function ReorderDialog<T extends WithId>({
  open,
  onOpenChange,
  items,
  nameKey,
  onSave,
  saving,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: T[];
  nameKey: keyof T & string;
  onSave: (ids: string[]) => void;
  saving: boolean;
}) {
  const [order, setOrder] = useState<string[] | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const ids = order ?? items.map((item) => item.id);
  const byId = new Map(items.map((item) => [item.id, item]));

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setOrder((current) => {
        const list = current ?? items.map((i) => i.id);
        return arrayMove(list, list.indexOf(String(active.id)), list.indexOf(String(over.id)));
      });
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) setOrder(null);
        onOpenChange(o);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reorder</DialogTitle>
          <DialogDescription>
            Drag rows into position (keyboard: focus a handle, Space to lift, arrows to
            move). Order controls how entries appear on the site.
          </DialogDescription>
        </DialogHeader>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            <ul className="max-h-80 space-y-1.5 overflow-y-auto pr-1" data-lenis-prevent>
              {ids.map((id) => (
                <SortableRow
                  key={id}
                  id={id}
                  label={String(byId.get(id)?.[nameKey] ?? id)}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onSave(ids)} disabled={saving || order === null}>
            Save order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
