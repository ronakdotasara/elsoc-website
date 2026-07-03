import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, CircleDot, GraduationCap, Users } from "lucide-react";
import { getProjectBySlug, getProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";

/** SSG for every published project + on-demand ISR from the admin panel. */
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: project.coverImage
      ? { images: [{ url: project.coverImage }] }
      : undefined,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const all = await getProjects();
  const index = all.findIndex((p) => p.id === project.id);
  const next = all[(index + 1) % all.length];
  const paragraphs = project.abstract.split(/\n\n+/);

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line pt-[calc(var(--nav-height)+3.5rem)] pb-14">
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-70" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
        <div className="container-site relative">
          <Link
            href="/projects"
            className="mono-label mb-6 inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-volt"
          >
            <ArrowLeft className="size-3.5" aria-hidden /> All projects
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="pulse">{project.category}</Badge>
            <Badge variant={project.workStatus === "Completed" ? "success" : "signal"}>
              <CircleDot className="size-2.5" aria-hidden /> {project.workStatus}
            </Badge>
            <Badge>
              <Calendar className="size-3" aria-hidden /> {project.year}
            </Badge>
          </div>
          <h1
            data-animate="chars"
            className="mt-5 max-w-4xl text-display-lg font-display font-bold text-gradient"
          >
            {project.title}
          </h1>
          <p data-animate="rise" className="mt-4 max-w-2xl text-pretty text-fg-muted">
            {project.summary}
          </p>
        </div>
      </header>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <div className="relative mb-10 aspect-video overflow-hidden rounded-xl border border-line">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            ) : (
              <PlaceholderMedia label={project.title} className="absolute inset-0" />
            )}
          </div>

          <h2 className="mono-label mb-5 text-volt">Abstract</h2>
          <div className="space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-fg-muted first:first-letter:float-left first:first-letter:mr-2 first:first-letter:font-display first:first-letter:text-5xl first:first-letter:font-bold first:first-letter:leading-[0.85] first:first-letter:text-volt"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card-raised rounded-xl p-6">
            <h2 className="mono-label mb-4 text-fg">Specifications</h2>

            <dl className="space-y-5 text-sm">
              <div>
                <dt className="mb-2 flex items-center gap-2 font-medium text-fg">
                  <Users className="size-4 text-volt" aria-hidden /> Team
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.team.map((member) => (
                    <span
                      key={member}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-fg-muted"
                    >
                      {member}
                    </span>
                  ))}
                </dd>
              </div>

              {project.facultyCoordinator && (
                <div>
                  <dt className="mb-2 flex items-center gap-2 font-medium text-fg">
                    <GraduationCap className="size-4 text-volt" aria-hidden /> Faculty
                    Coordinator
                  </dt>
                  <dd className="text-fg-muted">{project.facultyCoordinator}</dd>
                </div>
              )}

              <div>
                <dt className="mb-2 font-medium text-fg">Technology Stack</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-[0.68rem] text-fg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {next && next.id !== project.id && (
            <Link
              href={`/projects/${next.slug}`}
              className="group mt-5 block rounded-xl border border-line bg-surface p-5 transition-colors hover:border-volt/40"
            >
              <p className="mono-label mb-1.5">Next project</p>
              <p className="flex items-center justify-between gap-3 font-display font-semibold text-fg">
                <span className="line-clamp-1">{next.title}</span>
                <ArrowRight
                  className="size-4 shrink-0 text-volt transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </p>
            </Link>
          )}

          <Button asChild className="mt-5 w-full" variant="outline">
            <Link href="/contact">Collaborate with this team</Link>
          </Button>
        </aside>
      </div>
    </article>
  );
}
