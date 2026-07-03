import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import type { EventItem, Project, TeamMember } from "@/lib/data";
import { homeDomains } from "@/content/site";
import { galleryAlbums } from "@/content/gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { EventCard } from "@/components/site/event-card";
import { StatsSection } from "./stats-section";

/* ── Faculty ──────────────────────────────────────────────────────────────── */

export function FacultySection({ faculty }: { faculty: TeamMember[] }) {
  return (
    <section id="faculty" className="container-site py-24">
      <SectionHeading
        eyebrow="Mentorship"
        title="What's Our Faculty Say?"
        lede="Guidance from the Department of Electrical Engineering's finest."
      />
      <div data-animate="stagger" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {faculty.map((member) => (
          <div data-animate-child key={member.id}>
            <SpotlightCard as="article" className="flex h-full flex-col">
              <div className="relative aspect-[4/4.3] overflow-hidden border-b border-line">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/spot:scale-[1.03]"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center bg-surface">
                    <GraduationCap className="size-12 text-fg-subtle" aria-hidden />
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg/80 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-tight text-fg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-volt">
                  {member.position}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{member.bio}</p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Numbers ─────────────────────────────────────────────────────────────── */

export function NumbersSection() {
  return (
    <section className="border-y border-line bg-bg-raised/50 bg-scanlines">
      <div className="container-site py-20">
        <SectionHeading eyebrow="Our Impact" title="ELSOC by the Numbers" />
        <StatsSection />
      </div>
    </section>
  );
}

/* ── Domains ─────────────────────────────────────────────────────────────── */

export function DomainsSection() {
  return (
    <section className="container-site py-24">
      <SectionHeading
        eyebrow="Our Expertise"
        title="Technical Domains"
        lede="Explore diverse areas where ELSOC members innovate and excel."
      />
      <div data-animate="stagger" className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {homeDomains.map((domain) => (
          <div data-animate-child key={domain.title}>
            <SpotlightCard as="article" className="group h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover saturate-[0.85] transition-all duration-500 group-hover/spot:scale-105 group-hover/spot:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-semibold text-fg sm:text-base">
                  {domain.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-fg-muted">
                  {domain.description}
                </p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Rolling gallery ─────────────────────────────────────────────────────── */

export function GalleryMarquee() {
  const images = galleryAlbums[0]?.images ?? [];
  const loop = [...images, ...images];

  return (
    <section className="overflow-hidden py-24" aria-label="Photo highlights">
      <div className="container-site">
        <SectionHeading
          eyebrow="Memories"
          title="Our Journey in Pictures"
          lede="Capturing moments of innovation, collaboration, and excellence."
        />
      </div>
      <div className="group relative" data-testid="gallery-marquee">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <ul
          className="flex w-max gap-4 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]"
          aria-hidden={false}
        >
          {loop.map((img, i) => (
            <li
              key={`${img.url}-${i}`}
              className="relative h-52 w-80 shrink-0 overflow-hidden rounded-xl border border-line"
              aria-hidden={i >= images.length}
            >
              <Image
                src={img.url}
                alt={i < images.length ? img.alt : ""}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="container-site mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/gallery">
            View Full Gallery <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}

/* ── Featured projects rail ──────────────────────────────────────────────── */

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="border-y border-line bg-bg-raised/50 py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Team OJAS × ELSOC"
          title="The Final Five — 2026 Projects"
          lede="Faculty-approved research builds our members are engineering this year."
        />
      </div>
      <div className="container-site">
        <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className="w-[19rem] shrink-0 snap-start sm:w-[22rem]"
            >
              <SpotlightCard as="article" className="flex h-full flex-col">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="352px"
                      className="object-cover"
                    />
                  ) : (
                    <PlaceholderMedia label={project.title} className="absolute inset-0" />
                  )}
                  <span className="mono-label absolute left-3 top-3 rounded-full bg-bg/70 px-2.5 py-1 !text-[0.6rem] text-volt backdrop-blur">
                    {String(i + 1).padStart(2, "0")} / {project.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-2">
                    <Badge variant="volt">{project.category}</Badge>
                    <Badge>{project.workStatus}</Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-fg">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-fg-muted">
                    {project.summary}
                  </p>
                  <div className="mt-auto pt-2">
                    <Button asChild variant="link" size="sm">
                      <Link href={`/projects/${project.slug}`}>
                        Read the abstract <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link href="/projects">
              All Projects <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Upcoming events ─────────────────────────────────────────────────────── */

export function EventsPreview({ events }: { events: EventItem[] }) {
  return (
    <section className="container-site py-24">
      <SectionHeading
        eyebrow="What's Next"
        title="Upcoming Events & Highlights"
        lede="Join us for transformative workshops, competitions, and seminars designed to elevate your technical skills."
      />
      <div data-animate="stagger" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <div data-animate-child key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href="/events">
            View All Events <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────────────────── */

export function CtaSection() {
  return (
    <section className="container-site pb-8 pt-12">
      <div
        data-animate="rise"
        className="relative overflow-hidden rounded-2xl border border-line bg-bg-raised px-6 py-16 text-center sm:px-16"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-blueprint opacity-60"
        />
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-volt/10 blur-3xl"
        />
        <div className="relative">
          <h2 className="text-display-lg font-display font-semibold text-gradient">
            Ready to Innovate?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-fg-muted sm:text-base">
            Join ELSOC and be part of a community that’s shaping the future of
            electrical engineering. Access exclusive workshops, collaborate on
            cutting-edge projects, and network with industry leaders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Become a Member <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
