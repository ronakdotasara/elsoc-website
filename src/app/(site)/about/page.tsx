import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Cpu,
  Eye,
  GraduationCap,
  Lightbulb,
  Rocket,
  Settings,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import {
  aboutDomains,
  aboutFeatures,
  aboutIntro,
  milestones,
  objectives,
  whyJoin,
} from "@/content/about";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "ELSOC — the Departmental Society of Electrical Engineering at NIT Hamirpur. Vision, mission, objectives and our journey since 2020.",
};

export const revalidate = 3600;

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  eye: Eye,
  rocket: Rocket,
  zap: Zap,
  "graduation-cap": GraduationCap,
  cpu: Cpu,
  settings: Settings,
  activity: Activity,
  users: Users,
  calendar: Calendar,
  lightbulb: Lightbulb,
  trophy: Trophy,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ELSOC"
        title="Engineering minds, electric futures"
        lede="Electrical Society — Empowering Innovation at NIT Hamirpur"
      />

      {/* Who we are */}
      <section className="container-site py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div data-animate="rise">
            <h2 className="text-display-md font-display font-semibold text-gradient">
              Who We Are
            </h2>
            <div aria-hidden className="mt-6 h-px w-24 bg-gradient-to-r from-volt to-transparent" />
          </div>
          <div data-animate="stagger" className="space-y-6">
            {aboutIntro.map((paragraph, index) => (
              <p
                key={index}
                data-animate-child
                className="text-pretty leading-relaxed text-fg-muted first:text-lg first:text-fg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* The society, in one frame */}
        <figure data-animate="rise" className="mt-16">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-line sm:aspect-[16/6.5]">
            <Image
              src="/img/gallery/emma-workshop/emma-workshop-12.jpeg"
              alt="ELSOC members and faculty coordinators gathered in the Mini Auditorium after the AI-emma Workshop"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-3 text-xs text-fg-subtle">
            <span>Team ELSOC with our faculty coordinators — Mini Auditorium, NIT Hamirpur</span>
            <span className="mono-label hidden sm:block">AI-emma Workshop · 2025</span>
          </figcaption>
        </figure>
      </section>

      {/* Vision / mission / values / approach */}
      <section className="border-y border-line bg-bg-raised/50 py-24">
        <div className="container-site">
          <div data-animate="stagger" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {aboutFeatures.map((feature) => {
              const Icon = icons[feature.icon] ?? Zap;
              return (
                <div data-animate-child key={feature.title}>
                  <SpotlightCard className="h-full p-6">
                    <Icon className="mb-4 size-8 text-volt" aria-hidden />
                    <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {feature.description}
                    </p>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical domains */}
      <section className="container-site py-24">
        <SectionHeading
          eyebrow="Focus Areas"
          title="Our Technical Domains"
          lede="Explore the diverse areas where ELSOC members innovate and excel."
        />
        <div data-animate="stagger" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutDomains.map((domain) => {
            const Icon = icons[domain.icon] ?? Cpu;
            return (
              <div data-animate-child key={domain.title}>
                <SpotlightCard className="h-full p-6 text-center">
                  <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl border border-line bg-surface">
                    <Icon className="size-6 text-pulse-strong" aria-hidden />
                  </span>
                  <h3 className="font-display font-semibold">{domain.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {domain.description}
                  </p>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* Objectives */}
      <section className="border-y border-line bg-bg-raised/50 py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Direction"
            title="Our Objectives"
            lede="Key goals driving our mission to create future-ready electrical engineers."
          />
          <ul data-animate="stagger" className="grid gap-3 md:grid-cols-2">
            {objectives.map((objective) => (
              <li
                key={objective}
                data-animate-child
                className="group flex items-start gap-3 rounded-lg border border-line bg-surface p-4 transition-colors hover:border-volt/30"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-volt transition-transform group-hover:scale-110"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-fg-muted">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="container-site py-24">
        <SectionHeading
          eyebrow="Since 2020"
          title="Our Journey"
          lede="Milestones that shaped ELSOC's legacy of excellence and innovation."
        />
        <ol className="relative mx-auto max-w-3xl">
          <span
            aria-hidden
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-volt via-pulse to-transparent sm:left-1/2"
          />
          {milestones.map((milestone, i) => (
            <li
              key={milestone.year}
              data-animate="rise"
              className={`relative mb-10 flex gap-6 pl-14 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:mr-auto sm:pr-14 sm:text-right"
                  : "sm:ml-auto sm:pl-14"
              }`}
            >
              <span
                aria-hidden
                className={`absolute top-1 flex size-10 items-center justify-center rounded-full border border-volt/50 bg-bg font-mono text-[0.6rem] text-volt ${
                  i % 2 === 0
                    ? "left-0 sm:left-auto sm:-right-5"
                    : "left-0 sm:-left-5"
                }`}
              >
                {milestone.year}
              </span>
              <div className="card-raised w-full rounded-xl p-5">
                <p className="mono-label mb-1 text-volt">{milestone.year}</p>
                <h3 className="font-display font-semibold">{milestone.title}</h3>
                <p className="mt-1.5 text-sm text-fg-muted">{milestone.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Why join */}
      <section className="border-t border-line bg-bg-raised/50 py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Membership"
            title="Why Join ELSOC?"
            lede="Discover the benefits of being part of NIT Hamirpur's premier technical society."
          />
          <div data-animate="stagger" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoin.map((reason) => {
              const Icon = icons[reason.icon] ?? Users;
              return (
                <div data-animate-child key={reason.title}>
                  <SpotlightCard className="h-full p-6 text-center">
                    <Icon className="mx-auto mb-3 size-7 text-signal" aria-hidden />
                    <h3 className="font-display font-semibold">{reason.title}</h3>
                    <p className="mt-2 text-sm text-fg-muted">{reason.description}</p>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
          <div data-animate="rise" className="mt-14 text-center">
            <p className="mb-5 text-fg-muted">
              Become part of ELSOC and unlock opportunities for learning, innovation, and
              professional growth in electrical engineering.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
