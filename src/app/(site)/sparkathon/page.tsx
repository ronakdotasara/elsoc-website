import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Lightbulb, MapPin, Users } from "lucide-react";
import {
  getApprovedIdeas,
  getGalleryAlbums,
  getOrganizingCommittee,
  getPrizeTiers,
  getProblemStatements,
  getSparkathonSettings,
} from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { Countdown } from "@/components/sparkathon/countdown";
import { PrizePodium } from "@/components/sparkathon/prize-podium";
import { ProblemStatementsBrowser } from "@/components/sparkathon/problem-statements";
import { IdeaForm } from "@/components/sparkathon/idea-form";

export const metadata: Metadata = {
  title: "Sparkathon",
  description:
    "ELSOC's flagship hackathon: 18 problem statements across smart energy, AI and robotics, a ₹19,000+ prize pool, and a stage to build solutions that matter.",
};

export const revalidate = 300;

export default async function SparkathonPage() {
  const [settings, tiers, statements, committee, albums, ideas] = await Promise.all([
    getSparkathonSettings(),
    getPrizeTiers(),
    getProblemStatements(),
    getOrganizingCommittee(),
    getGalleryAlbums(),
    getApprovedIdeas(),
  ]);

  const faculty = committee.filter((m) => m.group === "FACULTY");
  const students = committee.filter((m) => m.group !== "FACULTY");
  const workshopAlbum = albums[0];
  const hasRegistration = Boolean(settings.registrationLink);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pt-[calc(var(--nav-height)+3.5rem)] pb-20">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/img/events/sparkathon-banner.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.16] blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
          <div className="absolute inset-0 bg-blueprint opacity-50" />
        </div>

        <div className="container-site relative text-center">
          <p className="mono-label mx-auto mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-volt">
            ELSOC Flagship Event
          </p>
          <h1
            data-animate="chars"
            className="text-display-2xl font-display font-bold text-gradient"
          >
            Sparkathon
          </h1>
          <p data-animate="rise" className="mx-auto mt-5 max-w-2xl text-pretty text-fg-muted">
            A hackathon-style technical competition where participants solve real-world
            engineering problems and build innovative solutions.
          </p>

          <div
            data-animate="rise"
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
          >
            <Badge variant="volt">
              <CalendarDays className="size-3" aria-hidden />
              {settings.eventDate
                ? `${formatDate(settings.eventDate)}${settings.dateIsTentative ? " (tentative)" : ""}`
                : "Date to be announced"}
            </Badge>
            <Badge variant="pulse">
              <MapPin className="size-3" aria-hidden /> {settings.venue}
            </Badge>
            <Badge variant="signal">
              <Users className="size-3" aria-hidden /> Open to All
            </Badge>
          </div>

          <div className="mt-10">
            {settings.eventDate && (
              <Countdown target={settings.eventDate} tentative={settings.dateIsTentative} />
            )}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {hasRegistration ? (
              <Button asChild size="lg">
                <a href={settings.registrationLink} target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </Button>
            ) : (
              <Button size="lg" disabled aria-disabled title="Registration opens soon">
                Registration Opening Soon
              </Button>
            )}
            <Button asChild size="lg" variant="secondary">
              <a href="#problem-statements">Browse Problem Statements</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Prize pool */}
      <section className="container-site py-24" aria-labelledby="prizes">
        <SectionHeading
          eyebrow="Prize Pool"
          title="₹19,000+ on the line"
          lede="Tiered prizes for the top three teams — plus additional gifts and certificates."
        />
        <PrizePodium tiers={tiers} />
      </section>

      {/* Problem statements */}
      <section
        id="problem-statements"
        className="scroll-mt-24 border-y border-line bg-bg-raised/50 py-24"
        aria-labelledby="ps-heading"
      >
        <div className="container-site">
          <SectionHeading
            eyebrow="The Challenge"
            title="Official Problem Statements"
            lede="Eighteen problems across smart energy, AI, robotics and smart cities — pick one and build something that matters."
          />
          <ProblemStatementsBrowser statements={statements} />
        </div>
      </section>

      {/* Idea submission + community ideas */}
      <section className="container-site py-24" aria-labelledby="ideas">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div data-animate="rise" className="card-raised rounded-2xl p-6 sm:p-8">
            <h2
              id="ideas"
              className="flex items-center gap-2.5 font-display text-2xl font-semibold"
            >
              <Lightbulb className="size-6 text-signal" aria-hidden />
              Got a Smart Energy Idea?
            </h2>
            <p className="mb-6 mt-2 text-sm text-fg-muted">
              Have your own problem statement related to smart energy? Share it with the
              community!
            </p>
            <IdeaForm />
          </div>

          <div data-animate="rise">
            <h3 className="mono-label mb-4 text-fg">Community Ideas</h3>
            {ideas.length === 0 ? (
              <div className="flex h-[calc(100%-2rem)] min-h-40 items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface p-8 text-center">
                <p className="text-sm text-fg-subtle">
                  Approved community ideas will appear here — yours could be first.
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {ideas.map((idea) => (
                  <li
                    key={idea.id}
                    className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-volt/30"
                  >
                    <p className="font-display font-semibold">{idea.title}</p>
                    <p className="mt-1.5 line-clamp-3 text-sm text-fg-muted">
                      {idea.description}
                    </p>
                    <p className="mt-2.5 font-mono text-[0.65rem] text-fg-subtle">
                      {idea.submitterName ? `${idea.submitterName} · ` : ""}
                      {formatDate(idea.createdAt, { month: "short" })}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Workshop gallery */}
      {workshopAlbum && (
        <section className="border-y border-line bg-bg-raised/50 py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Warm-up"
              title="Workshop Gallery"
              lede={`Scenes from the ${workshopAlbum.title} — the hands-on session that kicked off this Sparkathon season.`}
            />
            <LightboxGallery images={workshopAlbum.images.slice(0, 8)} />
          </div>
        </section>
      )}

      {/* Organizing committee */}
      <section className="container-site py-24" aria-labelledby="committee">
        <SectionHeading
          eyebrow="Credits"
          title="Organizing Committee"
          lede="The people wiring this event together."
        />

        {faculty.length > 0 && (
          <>
            <h3 className="mono-label mb-5 text-center text-fg">Faculty Coordinators</h3>
            <div
              data-animate="stagger"
              className="mx-auto mb-14 grid max-w-3xl gap-4 sm:grid-cols-3"
            >
              {faculty.map((member) => (
                <div data-animate-child key={member.id}>
                  <SpotlightCard className="p-5 text-center">
                    <Avatar
                      name={member.name}
                      src={member.photo}
                      size={112}
                      className="mx-auto mb-3 size-20 rounded-full ring-2 ring-line"
                    />
                    <p className="font-display text-sm font-semibold">{member.name}</p>
                    <p className="mt-0.5 text-xs text-volt">{member.position}</p>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </>
        )}

        {students.length > 0 && (
          <>
            <h3 className="mono-label mb-5 text-center text-fg">Student Committee</h3>
            <div
              data-animate="stagger"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            >
              {students.map((member) => (
                <div data-animate-child key={member.id}>
                  <SpotlightCard className="p-4 text-center">
                    <Avatar
                      name={member.name}
                      src={member.photo}
                      size={96}
                      className="mx-auto mb-3 size-16 rounded-full ring-2 ring-line"
                    />
                    <p className="font-display text-sm font-semibold leading-tight">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] text-volt">{member.position}</p>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </>
        )}

        <p className="mt-12 text-center text-sm text-fg-muted">
          Questions about the event?{" "}
          <Link href="/contact" className="text-volt underline-offset-4 hover:underline">
            Reach the committee →
          </Link>
        </p>
      </section>
    </>
  );
}
