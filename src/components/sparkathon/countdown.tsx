"use client";

import { useEffect, useState } from "react";

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number): Parts | null {
  const delta = target - Date.now();
  if (delta <= 0) return null;
  return {
    days: Math.floor(delta / 86_400_000),
    hours: Math.floor((delta / 3_600_000) % 24),
    minutes: Math.floor((delta / 60_000) % 60),
    seconds: Math.floor((delta / 1000) % 60),
  };
}

/**
 * Countdown to the Sparkathon start. Renders nothing until mounted (avoids
 * hydration mismatch), announces politely to screen readers, and switches to
 * a "live" state once the date passes.
 */
export function Countdown({ target, tentative }: { target: string; tentative: boolean }) {
  const [parts, setParts] = useState<Parts | null | "pending">("pending");

  useEffect(() => {
    const ts = new Date(target).getTime();
    if (Number.isNaN(ts)) {
      setParts(null);
      return;
    }
    setParts(diff(ts));
    const id = setInterval(() => setParts(diff(ts)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (parts === "pending") {
    return <div aria-hidden className="h-24" />;
  }

  if (parts === null) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-5 py-2.5 font-display font-semibold text-success">
        <span className="relative flex size-2.5">
          <span className="absolute size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
          <span className="relative size-2.5 rounded-full bg-success" />
        </span>
        Sparkathon is live — see you there!
      </p>
    );
  }

  const cells = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Minutes", value: parts.minutes },
    { label: "Seconds", value: parts.seconds },
  ];

  return (
    <div>
      <div
        role="timer"
        aria-live="polite"
        aria-label={`${parts.days} days ${parts.hours} hours ${parts.minutes} minutes until Sparkathon`}
        className="flex justify-center gap-3 sm:gap-4"
      >
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="w-[4.6rem] rounded-xl card-raised px-2 py-3.5 text-center sm:w-24 sm:py-5"
          >
            <p className="font-mono text-2xl font-semibold tabular-nums text-volt sm:text-4xl">
              {String(cell.value).padStart(2, "0")}
            </p>
            <p className="mono-label mt-1 !text-[0.55rem]">{cell.label}</p>
          </div>
        ))}
      </div>
      {tentative && (
        <p className="mt-3 text-center font-mono text-[0.7rem] text-fg-subtle">
          * date tentative — follow our socials for confirmation
        </p>
      )}
    </div>
  );
}
