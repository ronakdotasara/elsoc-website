import "server-only";
import { cache } from "react";
import { prisma } from "@/lib/db";
import { events as seedEvents } from "@/content/events";
import { projects as seedProjects } from "@/content/projects";
import { teamMembers as seedTeam } from "@/content/team";
import { galleryAlbums as seedAlbums } from "@/content/gallery";
import {
  prizeTiers as seedPrizes,
  problemStatements as seedStatements,
  sparkathonDefaults,
} from "@/content/sparkathon";
import type {
  EventRecord,
  GalleryAlbumRecord,
  PrizeTierRecord,
  ProblemStatementRecord,
  ProjectRecord,
  TeamMemberRecord,
} from "@/content/types";
import type { SparkathonSettings } from "@/lib/validators";

/**
 * Data-access layer used by every public page and by the chatbot's retrieval.
 *
 * Strategy: read from Postgres when configured and reachable, otherwise serve
 * the bundled seed content (identical shape). Pages therefore never hardcode
 * copy, and the site keeps working before the database exists.
 */

export type Project = ProjectRecord & { id: string };
export type EventItem = EventRecord & { id: string };
export type TeamMember = TeamMemberRecord & { id: string };
export type PrizeTier = PrizeTierRecord & { id: string };
export type ProblemStatement = ProblemStatementRecord & { id: string };
export type GalleryAlbum = GalleryAlbumRecord & { id: string };

const iso = (d: Date | null): string | null => (d ? d.toISOString() : null);

function withIds<T>(rows: T[], prefix: string): (T & { id: string })[] {
  return rows.map((row, i) => ({ ...row, id: `${prefix}-${i}` }));
}

async function fromDb<T>(query: () => Promise<T>): Promise<T | null> {
  if (!prisma) return null;
  try {
    return await query();
  } catch (error) {
    console.error("[data] database unavailable, serving seed content:", error);
    return null;
  }
}

// ──────────────────────────────────────────────────────────────── projects ──

export const getProjects = cache(async (): Promise<Project[]> => {
  const rows = await fromDb(() =>
    prisma!.project.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    }),
  );
  if (!rows) {
    return withIds(
      seedProjects.filter((p) => p.status === "PUBLISHED"),
      "seed-project",
    );
  }
  return rows.map((r) => ({
    ...r,
    workStatus: r.workStatus as Project["workStatus"],
    status: r.status as Project["status"],
  }));
});

export const getProjectBySlug = cache(async (slug: string): Promise<Project | null> => {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) ?? null;
});

export const getFeaturedProjects = cache(async (): Promise<Project[]> => {
  const all = await getProjects();
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured : all.slice(0, 5);
});

// ────────────────────────────────────────────────────────────────── events ──

export const getEvents = cache(async (): Promise<EventItem[]> => {
  const rows = await fromDb(() =>
    prisma!.event.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }] }),
  );
  if (!rows) return withIds([...seedEvents], "seed-event");
  return rows.map((r) => ({
    ...r,
    startAt: iso(r.startAt),
    endAt: iso(r.endAt),
    recurrence: r.recurrence as EventItem["recurrence"],
    dayOfWeek: r.dayOfWeek as EventItem["dayOfWeek"],
    status: r.status as EventItem["status"],
  }));
});

export const getUpcomingEvents = cache(async (): Promise<EventItem[]> => {
  const all = await getEvents();
  return all.filter((e) => e.status === "UPCOMING" || e.status === "ONGOING");
});

export const getPastEvents = cache(async (): Promise<EventItem[]> => {
  const all = await getEvents();
  return all.filter((e) => e.status === "COMPLETED");
});

// ──────────────────────────────────────────────────────────────────── team ──

export const getTeam = cache(async (): Promise<TeamMember[]> => {
  const rows = await fromDb(() =>
    prisma!.teamMember.findMany({ orderBy: [{ group: "asc" }, { sortOrder: "asc" }] }),
  );
  if (!rows) return withIds([...seedTeam], "seed-member");
  return rows.map((r) => ({ ...r, group: r.group as TeamMember["group"] }));
});

export const getTeamByGroup = cache(
  async (): Promise<Record<TeamMemberRecord["group"], TeamMember[]>> => {
    const all = await getTeam();
    const groups: Record<TeamMemberRecord["group"], TeamMember[]> = {
      FACULTY: [],
      CORE: [],
      THIRD_YEAR: [],
      EXECUTIVE: [],
      VOLUNTEER: [],
    };
    for (const member of all) groups[member.group].push(member);
    for (const list of Object.values(groups)) {
      list.sort((a, b) => a.sortOrder - b.sortOrder);
    }
    return groups;
  },
);

export const getOrganizingCommittee = cache(async (): Promise<TeamMember[]> => {
  const all = await getTeam();
  return all.filter((m) => m.committee);
});

// ────────────────────────────────────────────────────────────── sparkathon ──

export const getPrizeTiers = cache(async (): Promise<PrizeTier[]> => {
  const rows = await fromDb(() =>
    prisma!.prizeTier.findMany({ orderBy: { sortOrder: "asc" } }),
  );
  if (!rows) return withIds([...seedPrizes], "seed-prize");
  return rows;
});

export const getProblemStatements = cache(async (): Promise<ProblemStatement[]> => {
  const rows = await fromDb(() =>
    prisma!.problemStatement.findMany({ orderBy: { sortOrder: "asc" } }),
  );
  if (!rows) return withIds([...seedStatements], "seed-ps");
  return rows;
});

export const getSparkathonSettings = cache(async (): Promise<SparkathonSettings> => {
  const row = await fromDb(() =>
    prisma!.setting.findUnique({ where: { key: "sparkathon" } }),
  );
  if (row?.value && typeof row.value === "object") {
    return { ...sparkathonDefaults, ...(row.value as Partial<SparkathonSettings>) };
  }
  return { ...sparkathonDefaults };
});

export interface ApprovedIdea {
  id: string;
  title: string;
  description: string;
  submitterName: string | null;
  createdAt: string;
}

/** Community ideas live only in the database (no seed equivalent). */
export const getApprovedIdeas = cache(async (): Promise<ApprovedIdea[]> => {
  const rows = await fromDb(() =>
    prisma!.sparkathonSubmission.findMany({
      where: { status: "APPROVED" },
      orderBy: { createdAt: "desc" },
      take: 24,
    }),
  );
  if (!rows) return [];
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    submitterName: r.submitterName,
    createdAt: r.createdAt.toISOString(),
  }));
});

// ───────────────────────────────────────────────────────────────── gallery ──

export const getGalleryAlbums = cache(async (): Promise<GalleryAlbum[]> => {
  const rows = await fromDb(() =>
    prisma!.galleryAlbum.findMany({
      orderBy: { sortOrder: "asc" },
      include: { images: { orderBy: { sortOrder: "asc" } } },
    }),
  );
  if (!rows) return withIds([...seedAlbums], "seed-album");
  return rows.map((album) => ({
    id: album.id,
    slug: album.slug,
    title: album.title,
    year: album.year,
    sortOrder: album.sortOrder,
    images: album.images.map((img) => ({
      url: img.url,
      alt: img.alt,
      sortOrder: img.sortOrder,
    })),
  }));
});
