import type { Metadata } from "next";
import { getProjects } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Innovative solutions through hands-on learning and collaborative engineering excellence — ELSOC's project portfolio.",
};

export const revalidate = 300;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Projects"
        lede="Innovative solutions through hands-on learning and collaborative engineering excellence."
      />
      <section className="container-site py-16">
        <ProjectsExplorer projects={projects} />
      </section>
    </>
  );
}
