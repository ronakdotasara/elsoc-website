"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { Input, Label, Textarea, fieldClasses } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/* ── Image upload field ──────────────────────────────────────────────────── */

/** Downscale client-side to ≤1600px / JPEG-quality-0.85 before upload. */
async function optimizeImage(file: File): Promise<Blob> {
  if (file.type === "image/avif") return file; // already tiny, canvas can't re-encode
  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) return file;
  const MAX = 1600;
  const scale = Math.min(1, MAX / Math.max(bitmap.width, bitmap.height));
  if (scale === 1 && file.size < 1.5 * 1024 * 1024) return file;

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

  const type = file.type === "image/png" ? "image/png" : "image/webp";
  return new Promise((resolve) =>
    canvas.toBlob((blob) => resolve(blob ?? file), type, 0.85),
  );
}

export function ImageField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string | null;
  onChange: (url: string | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  async function upload(file: File) {
    setBusy(true);
    try {
      const optimized = await optimizeImage(file);
      const ext = optimized.type.split("/")[1] ?? "jpg";
      const name = file.name.replace(/\.[^.]+$/, "") + "." + ext;
      const form = new FormData();
      form.append("file", new File([optimized], name, { type: optimized.type }));
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      const { url } = (await res.json()) as { url: string };
      onChange(url);
      toast.success("Image uploaded");
    } catch (e) {
      toast.error(`Upload failed: ${(e as Error).message}`);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-start gap-3">
        <div className="relative flex h-24 w-36 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-line-strong bg-surface">
          {value ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={value} alt="Preview" className="size-full object-cover" />
              <button
                type="button"
                onClick={() => onChange(null)}
                aria-label="Remove image"
                className="absolute right-1 top-1 rounded-full bg-bg/80 p-1 text-fg transition-colors hover:text-danger"
              >
                <X className="size-3.5" />
              </button>
            </>
          ) : busy ? (
            <Loader2 className="size-5 animate-spin text-fg-subtle" aria-hidden />
          ) : (
            <ImagePlus className="size-5 text-fg-subtle" aria-hidden />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <input
            ref={inputRef}
            id={id}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            disabled={busy}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void upload(file);
            }}
            className="block w-full text-xs text-fg-muted file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-volt/15 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-volt hover:file:bg-volt/25"
          />
          <Input
            aria-label={`${label} URL`}
            placeholder="…or paste an image URL / path"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value || null)}
          />
          <p className="text-[0.65rem] text-fg-subtle">
            Auto-resized to ≤1600px on upload. Stored in{" "}
            {typeof window !== "undefined" ? "the configured object storage" : "storage"}.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Tags field (string[]) ───────────────────────────────────────────────── */

export function TagsField({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}) {
  const [draft, setDraft] = useState("");

  const commit = () => {
    const tag = draft.trim();
    if (tag && !value.includes(tag)) onChange([...value, tag]);
    setDraft("");
  };

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className={cn(fieldClasses, "flex flex-wrap items-center gap-1.5 py-2")}>
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-md border border-line bg-surface-strong px-2 py-0.5 text-xs"
          >
            {tag}
            <button
              type="button"
              aria-label={`Remove ${tag}`}
              onClick={() => onChange(value.filter((t) => t !== tag))}
              className="text-fg-subtle hover:text-danger"
            >
              <X className="size-3" />
            </button>
          </span>
        ))}
        <input
          id={id}
          value={draft}
          placeholder={value.length === 0 ? (placeholder ?? "Type and press Enter") : ""}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              commit();
            } else if (e.key === "Backspace" && !draft && value.length) {
              onChange(value.slice(0, -1));
            }
          }}
          onBlur={commit}
          className="min-w-24 flex-1 bg-transparent text-sm outline-none placeholder:text-fg-subtle"
        />
      </div>
    </div>
  );
}

/* ── Simple select ───────────────────────────────────────────────────────── */

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(fieldClasses, "appearance-none")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-bg-raised text-fg">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function CheckboxField({
  id,
  label,
  help,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  help?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-lg border border-line bg-surface p-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 size-4 accent-[var(--volt)]"
      />
      <span>
        <span className="block text-sm font-medium text-fg">{label}</span>
        {help && <span className="block text-xs text-fg-subtle">{help}</span>}
      </span>
    </label>
  );
}

export { Input, Label, Textarea };
