import type { Metadata } from "next";
import { getPastEvents, getUpcomingEvents } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { EventCard } from "@/components/site/event-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description:
    "ELSOC's technical events, workshops, and learning opportunities designed to empower aspiring electrical engineers.",
};

export const revalidate = 300;

export default async function EventsPage() {
  const [upcoming, past] = await Promise.all([getUpcomingEvents(), getPastEvents()]);

  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Events & Workshops"
        lede="Discover ELSOC's technical events, workshops, and learning opportunities designed to empower aspiring electrical engineers."
      />

      <section className="container-site py-16">
        <Tabs defaultValue="upcoming">
          <div className="flex justify-center">
            <TabsList aria-label="Filter events">
              <TabsTrigger value="upcoming">
                Upcoming
                <span className="rounded-full bg-bg/30 px-2 py-0.5 font-mono text-[0.65rem]">
                  {upcoming.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="past">
                Past Events
                <span className="rounded-full bg-bg/30 px-2 py-0.5 font-mono text-[0.65rem]">
                  {past.length}
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            {upcoming.length === 0 && (
              <p className="py-16 text-center text-fg-muted">
                New events are being planned — check back soon.
              </p>
            )}
          </TabsContent>

          <TabsContent value="past">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
