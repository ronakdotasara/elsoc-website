"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Calendar, FolderKanban, Trophy, Users } from "lucide-react";
import { site } from "@/content/site";

const icons = [FolderKanban, Calendar, Users, Trophy];
const accents = ["text-volt", "text-pulse-strong", "text-volt", "text-signal"];

function CountUp({ value }: { value: string }) {
  const numeric = parseInt(value, 10);
  const suffix = value.replace(String(numeric), "");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? numeric : 0);

  useEffect(() => {
    if (!inView || reduceMotion || Number.isNaN(numeric)) return;
    let frame: number;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(numeric * (1 - Math.pow(1 - t, 4))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, reduceMotion]);

  return (
    <span ref={ref}>
      {Number.isNaN(numeric) ? value : display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {site.stats.map((stat, i) => {
        const Icon = icons[i % icons.length]!;
        return (
          <motion.li
            key={stat.label}
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-xl card-raised p-6 text-center transition-colors hover:border-volt/30"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 left-1/2 size-32 -translate-x-1/2 rounded-full bg-volt/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <Icon
              className={`mx-auto mb-3 size-7 ${accents[i % accents.length]}`}
              strokeWidth={1.6}
              aria-hidden
            />
            <p className="font-display text-4xl font-bold tracking-tight text-fg">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-fg-subtle">
              {stat.label}
            </p>
          </motion.li>
        );
      })}
    </ul>
  );
}
