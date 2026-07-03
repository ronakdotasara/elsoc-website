import { ImageIcon, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Branded placeholder for media that ELSOC hasn't supplied yet.
 * Swapping in a real image later only means providing `coverImage` in the
 * admin panel — no markup changes anywhere.
 */
export function PlaceholderMedia({
  label,
  className,
  iconSize = 28,
}: {
  label: string;
  className?: string;
  iconSize?: number;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — image coming soon`}
      className={cn(
        "relative flex size-full min-h-40 flex-col items-center justify-center gap-3 overflow-hidden",
        "bg-blueprint bg-bg-raised",
        className,
      )}
    >
      {/* corner ticks, engineering-drawing style */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full text-line-strong"
        fill="none"
      >
        <path d="M12 24V12h12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 24V12h12" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 50 50)" className="origin-top-right translate-x-[calc(100%-62px)]" />
      </svg>
      <span className="relative flex items-center justify-center rounded-full border border-line-strong bg-surface p-3.5 text-fg-subtle">
        <ImageIcon size={iconSize} strokeWidth={1.5} aria-hidden />
        <Zap
          size={12}
          className="absolute -right-0.5 -top-0.5 fill-signal text-signal"
          aria-hidden
        />
      </span>
      <span className="mono-label relative px-4 text-center">{label}</span>
    </div>
  );
}
