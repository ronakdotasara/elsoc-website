"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, CircleDot } from "lucide-react";
import type { Project } from "@/lib/data";
import { projectCategories } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

const statusVariant = (status: Project["workStatus"]) =>
  status === "Completed" ? "success" : status === "In Progress" ? "signal" : "default";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<string>("All");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [projects, category],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full border px-4 py-1.5 font-display text-sm font-medium transition-all",
              category === c
                ? "border-volt bg-volt text-[#04070f] shadow-[0_2px_16px_var(--glow-volt)]"
                : "border-line bg-surface text-fg-muted hover:border-line-strong hover:text-fg",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.ul layout={!reduceMotion} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.li
              key={project.id}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                <SpotlightCard as="article" className="flex h-full flex-col">
                  <div className="relative aspect-[8/5] overflow-hidden border-b border-line">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover/spot:scale-[1.04]"
                      />
                    ) : (
                      <PlaceholderMedia label={project.title} className="absolute inset-0" />
                    )}
                    <div className="absolute left-3 top-3">
                      <Badge variant="pulse">{project.category}</Badge>
                    </div>
                    <div className="absolute right-3 top-3">
                      <Badge variant={statusVariant(project.workStatus)}>
                        <CircleDot className="size-2.5" aria-hidden />
                        {project.workStatus}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-fg-muted">
                      {project.summary}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[0.65rem] text-fg-muted"
                        >
                          {tech}
                        </li>
                      ))}
                      {project.technologies.length > 3 && (
                        <li className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[0.65rem] text-volt">
                          +{project.technologies.length - 3}
                        </li>
                      )}
                    </ul>
                    <div className="mt-auto flex items-center justify-between pt-2 text-xs text-fg-subtle">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5" aria-hidden />
                        {project.year}
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium text-volt">
                        View Details <ArrowRight className="size-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
