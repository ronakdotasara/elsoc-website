/**
 * Plain TypeScript shapes for seed/fallback content.
 *
 * These deliberately mirror the Prisma models (minus DB-generated fields) so
 * the same objects can be fed to `prisma.….create()` at seed time and served
 * directly by the data layer when no database is configured.
 */

export type PublishStatus = "DRAFT" | "PUBLISHED";
export type EventStatus = "UPCOMING" | "ONGOING" | "COMPLETED";
export type Recurrence = "NONE" | "WEEKLY";
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export type TeamGroup = "FACULTY" | "CORE" | "THIRD_YEAR" | "EXECUTIVE" | "VOLUNTEER";

export interface ProjectRecord {
  slug: string;
  title: string;
  summary: string;
  abstract: string;
  category: string;
  coverImage: string | null;
  technologies: string[];
  team: string[];
  facultyCoordinator: string | null;
  year: string;
  workStatus: "Completed" | "In Progress" | "Proposed";
  status: PublishStatus;
  featured: boolean;
  draft: boolean;
  sortOrder: number;
}

export interface EventRecord {
  slug: string;
  title: string;
  description: string;
  category: string;
  location: string;
  coverImage: string | null;
  startAt: string | null; // ISO string in content, Date in DB
  endAt: string | null;
  dateLabel: string | null;
  timeLabel: string | null;
  recurrence: Recurrence;
  dayOfWeek: DayOfWeek | null;
  status: EventStatus;
  registrationLink: string | null;
  participants: string | null;
  highlights: string[];
  featured: boolean;
  draft: boolean;
  sortOrder: number;
}

export interface TeamMemberRecord {
  name: string;
  position: string | null;
  group: TeamGroup;
  department: string | null;
  yearLabel: string | null;
  bio: string | null;
  email: string | null;
  photo: string | null;
  linkedin: string | null;
  github: string | null;
  committee: boolean;
  draft: boolean;
  sortOrder: number;
}

export interface PrizeTierRecord {
  place: number;
  label: string;
  amountInr: number;
  extras: string | null;
  sortOrder: number;
}

export interface ProblemStatementRecord {
  code: string;
  title: string;
  description: string;
  category: string;
  theme: string;
  imageUrl: string | null;
  sortOrder: number;
}

export interface GalleryAlbumRecord {
  slug: string;
  title: string;
  year: string | null;
  sortOrder: number;
  images: { url: string; alt: string; sortOrder: number }[];
}
