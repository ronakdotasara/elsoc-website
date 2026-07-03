import { Award, Gift, Medal, Trophy } from "lucide-react";
import type { PrizeTier } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { cn } from "@/lib/utils";

const podiumMeta = [
  // index by place
  null,
  {
    icon: Trophy,
    accent: "text-signal",
    ring: "border-signal/50",
    glow: "shadow-[0_0_60px_rgba(251,191,36,0.18)]",
    height: "lg:min-h-[21rem]",
    order: "lg:order-2",
  },
  {
    icon: Medal,
    accent: "text-volt",
    ring: "border-volt/40",
    glow: "shadow-[0_0_40px_var(--glow-volt)]",
    height: "lg:min-h-[18rem] lg:mt-12",
    order: "lg:order-1",
  },
  {
    icon: Award,
    accent: "text-pulse-strong",
    ring: "border-pulse/40",
    glow: "shadow-[0_0_40px_var(--glow-pulse)]",
    height: "lg:min-h-[16rem] lg:mt-20",
    order: "lg:order-3",
  },
] as const;

/** Olympic-style podium: 2nd — 1st — 3rd on desktop, stacked on mobile. */
export function PrizePodium({ tiers }: { tiers: PrizeTier[] }) {
  const sorted = [...tiers].sort((a, b) => a.place - b.place);

  return (
    <div>
      <ol data-animate="stagger" className="grid gap-5 lg:grid-cols-3 lg:items-start">
        {sorted.slice(0, 3).map((tier) => {
          const meta = podiumMeta[tier.place] ?? podiumMeta[3]!;
          const Icon = meta.icon;
          return (
            <li
              key={tier.id}
              data-animate-child
              className={cn("flex", meta.order)}
              value={tier.place}
            >
              <article
                className={cn(
                  "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border bg-bg-raised p-8 text-center",
                  meta.ring,
                  meta.glow,
                  meta.height,
                )}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface-strong to-transparent"
                />
                <span
                  aria-hidden
                  className="mono-label absolute left-4 top-4 !text-[0.65rem] text-fg-subtle"
                >
                  #{tier.place}
                </span>
                <Icon className={cn("size-10", meta.accent)} strokeWidth={1.5} aria-hidden />
                <h3 className="font-display text-lg font-semibold">{tier.label}</h3>
                <p className={cn("font-display text-4xl font-bold tabular-nums", meta.accent)}>
                  {formatINR(tier.amountInr)}
                </p>
                {tier.extras && (
                  <p className="flex items-center gap-1.5 text-xs text-fg-muted">
                    <Gift className="size-3.5" aria-hidden />
                    {tier.extras}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ol>
      <p data-animate="rise" className="mt-6 text-center text-sm text-fg-muted">
        Every shortlisted team takes home certificates — and the top three walk away with
        the pool above <span className="text-signal">plus additional gifts</span>.
      </p>
    </div>
  );
}
