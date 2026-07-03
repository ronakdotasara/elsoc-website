"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, FolderKanban, Users } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/site/hero-visual";

const heroStats = [
  { icon: FolderKanban, label: "35+ Projects" },
  { icon: Calendar, label: "10+ Events/Year" },
  { icon: Users, label: "33 Members" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const reduceMotion = useReducedMotion();
  const anim = (delay: number) => (reduceMotion ? {} : fadeUp(delay));

  return (
    <section
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-[var(--nav-height)]"
      aria-label="ELSOC introduction"
    >
      {/* Electrical Engineering Department building, faded under the field */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/img/campus/nith-02.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.16] saturate-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg/70" />
      </div>

      <HeroVisual />

      {/* readability scrim over the WebGL field */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_38%,transparent_0%,var(--bg)_100%)]"
      />

      {/* institutional marks */}
      <div className="absolute left-0 right-0 top-[calc(var(--nav-height)+1.25rem)]">
        <div className="container-site flex items-center justify-between">
          <Image
            src={site.nithLogo}
            alt="National Institute of Technology, Hamirpur"
            width={88}
            height={88}
            className="size-16 rounded-full bg-white/95 p-1 shadow-[0_4px_24px_rgba(2,6,16,0.45)] ring-1 ring-line sm:size-[5.5rem]"
          />
          <Image
            src={site.logo}
            alt="ELSOC"
            width={88}
            height={88}
            className="size-16 rounded-full shadow-[0_4px_24px_rgba(2,6,16,0.45)] ring-2 ring-line-strong sm:size-[5.5rem]"
          />
        </div>
      </div>

      <div className="container-site relative z-10 py-24 text-center">
        <motion.p
          {...anim(0.05)}
          className="mono-label mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 !text-[0.7rem] text-fg-muted"
        >
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-volt opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-volt" />
          </span>
          {site.heroBadge}
        </motion.p>

        <motion.h1
          {...anim(0.15)}
          className="text-display-2xl font-display font-bold text-gradient"
        >
          ELSOC
        </motion.h1>

        <motion.p
          {...anim(0.3)}
          className="mt-3 font-mono text-sm uppercase tracking-[0.35em] text-volt"
        >
          {site.department}
        </motion.p>

        <motion.p
          {...anim(0.42)}
          className="mx-auto mt-7 max-w-3xl text-pretty text-sm leading-relaxed text-fg-muted sm:text-base"
        >
          {site.mission}
        </motion.p>

        <motion.div
          {...anim(0.55)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg">
            <Link href="/contact">
              Join Our Community
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/about">Explore More</Link>
          </Button>
        </motion.div>

        <motion.ul {...anim(0.68)} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {heroStats.map((stat) => (
            <li
              key={stat.label}
              className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-fg-muted"
            >
              <stat.icon className="size-3.5 text-volt" aria-hidden />
              {stat.label}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#faculty"
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.4, duration: 0.8 },
            })}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to content"
      >
        <span className="flex flex-col items-center gap-1.5 text-fg-subtle transition-colors hover:text-volt">
          <span className="mono-label !text-[0.6rem]">Discover More</span>
          <ChevronDown className="size-4 motion-safe:animate-bounce" aria-hidden />
        </span>
      </motion.a>
    </section>
  );
}
