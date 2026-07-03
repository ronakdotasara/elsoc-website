"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a cursor-following radial highlight — the site-wide hover
 * micro-interaction. Pure CSS-variable trick (no re-render per mousemove),
 * inert on touch devices and under prefers-reduced-motion.
 */
export function SpotlightCard({
  className,
  children,
  as: Tag = "div",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: "div" | "article" | "li" }) {
  const ref = React.useRef<HTMLElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as React.Ref<never>}
      onPointerMove={onPointerMove}
      className={cn("group/spot relative overflow-hidden card-raised rounded-xl", className)}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
          "group-hover/spot:opacity-100 motion-reduce:hidden",
        )}
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--volt) 9%, transparent), transparent 65%)",
        }}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-300",
          "group-hover/spot:border-volt/25",
        )}
      />
      {children}
    </Tag>
  );
}
