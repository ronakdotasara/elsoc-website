import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTeamByGroup } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { TeamDirectory } from "@/components/team/team-directory";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Team",
  description: "The brilliant minds driving innovation and excellence at ELSOC.",
};

export const revalidate = 300;

export default async function TeamPage() {
  const groups = await getTeamByGroup();

  return (
    <>
      <PageHero
        eyebrow="People"
        title="Meet Our Team"
        lede="The brilliant minds driving innovation and excellence at ELSOC."
      />

      <section className="container-site py-16">
        <TeamDirectory groups={groups} />
      </section>

      <section className="container-site pb-24">
        <div
          data-animate="rise"
          className="rounded-2xl border border-line bg-bg-raised px-6 py-14 text-center"
        >
          <h2 className="text-display-md font-display font-semibold text-gradient">
            Want to Join Our Team?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-fg-muted">
            We’re always looking for passionate individuals who want to make a difference.
          </p>
          <Button asChild size="lg" className="mt-7">
            <Link href="/contact">
              Get in Touch <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
