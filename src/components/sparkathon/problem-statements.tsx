"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { ProblemStatement } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * The 18 official problem statements as typeset, accessible content
 * (native <details> disclosure per statement — keyboard and screen-reader
 * friendly by construction), with category filtering and a link to each
 * original poster scan for reference.
 */
export function ProblemStatementsBrowser({
  statements,
}: {
  statements: ProblemStatement[];
}) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(statements.map((s) => s.category)))],
    [statements],
  );
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All" ? statements : statements.filter((s) => s.category === category);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter problem statements by category"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full border px-4 py-1.5 font-display text-sm font-medium transition-all",
              category === c
                ? "border-volt bg-volt text-[#04070f]"
                : "border-line bg-surface text-fg-muted hover:border-line-strong hover:text-fg",
            )}
          >
            {c}
            <span className="ml-2 font-mono text-[0.65rem] opacity-70">
              {c === "All"
                ? statements.length
                : statements.filter((s) => s.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <ol className="grid gap-3 lg:grid-cols-2" aria-label="Problem statements">
        {filtered.map((ps) => (
          <li key={ps.id}>
            <details className="group rounded-xl border border-line bg-surface transition-colors open:border-volt/30 open:bg-surface-strong hover:border-line-strong">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <span className="mono-label shrink-0 rounded-md border border-volt/40 bg-volt/10 px-2 py-1 !text-[0.65rem] !tracking-[0.12em] text-volt">
                  {ps.code}
                </span>
                <span className="flex-1 font-display font-semibold leading-snug">
                  {ps.title}
                </span>
                <ChevronDown
                  className="size-4 shrink-0 text-fg-subtle transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-sm leading-relaxed text-fg-muted">{ps.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge variant="pulse">{ps.category}</Badge>
                  <Badge variant="volt">{ps.theme}</Badge>
                  {ps.imageUrl && (
                    <a
                      href={ps.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-xs text-fg-subtle transition-colors hover:text-volt"
                    >
                      Original poster <ExternalLink className="size-3" aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}
