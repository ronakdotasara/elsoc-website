"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import type { TeamMember } from "@/lib/data";
import type { TeamGroup } from "@/content/types";
import { Avatar } from "@/components/ui/avatar";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GitHubIcon, LinkedInIcon } from "@/components/site/social-icons";
import { cn } from "@/lib/utils";

type Groups = Record<TeamGroup, TeamMember[]>;

const filters = [
  { id: "all", label: "All Team" },
  { id: "FACULTY", label: "Faculty" },
  { id: "CORE", label: "Core Team" },
  { id: "THIRD_YEAR", label: "3rd Year" },
  { id: "EXECUTIVE", label: "Executive" },
  { id: "VOLUNTEER", label: "Volunteer" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const sections: { group: TeamGroup; title: string; blurb: string }[] = [
  {
    group: "FACULTY",
    title: "Faculty Mentors",
    blurb: "Guiding us towards excellence with decades of expertise",
  },
  { group: "CORE", title: "Core Team", blurb: "Leadership that inspires" },
  {
    group: "THIRD_YEAR",
    title: "Third Year Team",
    blurb: "Department heads and coordinators",
  },
  { group: "EXECUTIVE", title: "Executive Members", blurb: "The backbone of ELSOC" },
  { group: "VOLUNTEER", title: "Volunteer Members", blurb: "The backbone of ELSOC" },
];

function SocialRow({ member, className }: { member: TeamMember; className?: string }) {
  if (!member.linkedin && !member.github && !member.email) return null;
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="flex size-7 items-center justify-center rounded-md border border-line bg-surface text-fg-subtle transition-colors hover:border-volt/50 hover:text-volt"
        >
          <LinkedInIcon className="size-3.5" />
        </a>
      )}
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on GitHub`}
          className="flex size-7 items-center justify-center rounded-md border border-line bg-surface text-fg-subtle transition-colors hover:border-volt/50 hover:text-volt"
        >
          <GitHubIcon className="size-3.5" />
        </a>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="flex size-7 items-center justify-center rounded-md border border-line bg-surface text-fg-subtle transition-colors hover:border-volt/50 hover:text-volt"
        >
          <Mail className="size-3.5" />
        </a>
      )}
    </div>
  );
}

export function TeamDirectory({ groups }: { groups: Groups }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const reduceMotion = useReducedMotion();

  const visibleSections = sections.filter(
    (s) => (filter === "all" || filter === s.group) && groups[s.group].length > 0,
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter team members"
        className="mb-14 flex flex-wrap justify-center gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={cn(
              "rounded-full border px-4 py-1.5 font-display text-sm font-medium transition-all",
              filter === f.id
                ? "border-volt bg-volt text-[#04070f] shadow-[0_2px_16px_var(--glow-volt)]"
                : "border-line bg-surface text-fg-muted hover:border-line-strong hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {visibleSections.map(({ group, title, blurb }) => (
            <section key={group} className="mb-20 last:mb-0" aria-label={title}>
              <div className="mb-8 text-center">
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-1.5 text-sm text-fg-muted">{blurb}</p>
              </div>

              {group === "FACULTY" ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {groups[group].map((member) => (
                    <SpotlightCard key={member.id} as="article" className="p-6">
                      <div className="mb-4 flex justify-center">
                        <Avatar
                          name={member.name}
                          src={member.photo}
                          size={120}
                          className="size-28 rounded-full ring-2 ring-line"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-display font-semibold">{member.name}</h3>
                        <p className="mt-0.5 text-xs font-medium text-volt">
                          {member.position}
                        </p>
                        <p className="mt-0.5 text-[0.7rem] text-fg-subtle">
                          {member.department}
                        </p>
                        {member.bio && (
                          <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                            {member.bio}
                          </p>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="mt-3 inline-flex items-center gap-1.5 text-xs text-fg-muted transition-colors hover:text-volt"
                          >
                            <Mail className="size-3.5" aria-hidden /> {member.email}
                          </a>
                        )}
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              ) : group === "CORE" ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {groups[group].map((member) => (
                    <SpotlightCard key={member.id} as="article" className="group">
                      <div className="relative aspect-[4/4.6] overflow-hidden">
                        <Avatar
                          name={member.name}
                          src={member.photo}
                          size={400}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                          className="absolute inset-0 size-full transition-transform duration-500 group-hover/spot:scale-[1.04]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                        <SocialRow
                          member={member}
                          className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100 max-lg:opacity-100"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold leading-tight">
                          {member.name}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-volt">
                          {member.position}
                        </p>
                        <p className="text-[0.7rem] text-fg-subtle">{member.yearLabel}</p>
                        {member.bio && (
                          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-fg-muted">
                            {member.bio}
                          </p>
                        )}
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {groups[group].map((member) => (
                    <SpotlightCard key={member.id} as="article" className="p-4 text-center">
                      <div className="mx-auto mb-3 flex justify-center">
                        <Avatar
                          name={member.name}
                          src={member.photo}
                          size={160}
                          className="size-20 rounded-full ring-2 ring-line sm:size-24"
                        />
                      </div>
                      <h3 className="font-display text-sm font-semibold leading-tight">
                        {member.name}
                      </h3>
                      {member.position && (
                        <p className="mt-0.5 text-[0.7rem] font-medium text-volt">
                          {member.position}
                        </p>
                      )}
                      <p className="mt-0.5 text-[0.65rem] text-fg-subtle">
                        {member.yearLabel}
                      </p>
                      <SocialRow member={member} className="mt-2.5 justify-center" />
                    </SpotlightCard>
                  ))}
                </div>
              )}
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
