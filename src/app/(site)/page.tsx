import { getFeaturedProjects, getTeamByGroup, getUpcomingEvents } from "@/lib/data";
import { Hero } from "@/components/home/hero";
import {
  CtaSection,
  DomainsSection,
  EventsPreview,
  FacultySection,
  FeaturedProjects,
  GalleryMarquee,
  NumbersSection,
} from "@/components/home/sections";

export const revalidate = 300; // ISR — admin saves trigger on-demand revalidation

export default async function HomePage() {
  const [groups, featured, upcoming] = await Promise.all([
    getTeamByGroup(),
    getFeaturedProjects(),
    getUpcomingEvents(),
  ]);

  return (
    <>
      <Hero />
      <FacultySection faculty={groups.FACULTY} />
      <NumbersSection />
      <DomainsSection />
      <FeaturedProjects projects={featured} />
      <GalleryMarquee />
      <EventsPreview events={upcoming.slice(0, 3)} />
      <CtaSection />
    </>
  );
}
