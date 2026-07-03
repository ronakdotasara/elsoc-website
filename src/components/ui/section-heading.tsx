import { cn } from "@/lib/utils";

/**
 * Consistent section header: mono eyebrow → display title → optional lede.
 * `data-animate="heading"` is picked up by the GSAP scroll orchestrator for
 * a staggered kinetic reveal (no-op when reduced motion is preferred).
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      data-animate="heading"
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          data-animate-child
          className="mono-label inline-flex items-center gap-2 text-volt"
        >
          <span aria-hidden className="inline-block h-px w-6 bg-volt/60" />
          {eyebrow}
          <span aria-hidden className="inline-block h-px w-6 bg-volt/60" />
        </span>
      )}
      <Tag
        data-animate-child
        className="text-display-lg font-display font-semibold text-gradient"
      >
        {title}
      </Tag>
      {lede && (
        <p data-animate-child className="text-balance text-fg-muted">
          {lede}
        </p>
      )}
    </div>
  );
}
