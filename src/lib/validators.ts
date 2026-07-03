import { z } from "zod";

/**
 * Shared Zod schemas — imported by client forms AND API route handlers so the
 * two can never drift. Server code must always re-parse with these before
 * touching the database.
 */

// ────────────────────────────────────────────────────────────────── enums ──

export const publishStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);
export const eventStatusSchema = z.enum(["UPCOMING", "ONGOING", "COMPLETED"]);
export const recurrenceSchema = z.enum(["NONE", "WEEKLY"]);
export const dayOfWeekSchema = z.enum([
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
]);
export const teamGroupSchema = z.enum([
  "FACULTY",
  "CORE",
  "THIRD_YEAR",
  "EXECUTIVE",
  "VOLUNTEER",
]);
export const submissionStatusSchema = z.enum(["PENDING", "APPROVED", "REJECTED"]);

const slug = z
  .string()
  .min(2)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase words separated by dashes");

const optionalUrl = z
  .union([z.url(), z.literal(""), z.string().regex(/^\/[^\s]*$/)])
  .optional()
  .nullable()
  .transform((v) => (v === "" ? null : (v ?? null)));

// ──────────────────────────────────────────────────────────────── project ──

export const projectInputSchema = z.object({
  slug,
  title: z.string().min(3).max(160),
  summary: z.string().min(10).max(300),
  abstract: z.string().min(40),
  category: z.string().min(2).max(60),
  coverImage: optionalUrl,
  technologies: z.array(z.string().min(1).max(80)).max(24).default([]),
  team: z.array(z.string().min(1).max(80)).max(24).default([]),
  facultyCoordinator: z.string().max(120).optional().nullable(),
  year: z.string().min(4).max(20),
  workStatus: z.enum(["Completed", "In Progress", "Proposed"]).default("Completed"),
  status: publishStatusSchema.default("PUBLISHED"),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
});
export type ProjectInput = z.infer<typeof projectInputSchema>;

// ────────────────────────────────────────────────────────────────── event ──

export const eventInputSchema = z
  .object({
    slug,
    title: z.string().min(3).max(160),
    description: z.string().min(10),
    category: z.string().min(2).max(60),
    location: z.string().min(2).max(160),
    coverImage: optionalUrl,
    startAt: z.coerce.date().optional().nullable(),
    endAt: z.coerce.date().optional().nullable(),
    dateLabel: z.string().max(80).optional().nullable(),
    timeLabel: z.string().max(80).optional().nullable(),
    recurrence: recurrenceSchema.default("NONE"),
    dayOfWeek: z.preprocess(
      (v) => (v === "" ? null : v),
      dayOfWeekSchema.nullable().optional(),
    ),
    status: eventStatusSchema.default("UPCOMING"),
    registrationLink: optionalUrl,
    participants: z.string().max(120).optional().nullable(),
    highlights: z.array(z.string().min(1).max(120)).max(12).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    sortOrder: z.number().int().default(0),
  })
  .refine((e) => e.recurrence === "NONE" || e.dayOfWeek != null, {
    message: "Recurring events need a day of week",
    path: ["dayOfWeek"],
  });
export type EventInput = z.infer<typeof eventInputSchema>;

// ─────────────────────────────────────────────────────────────────── team ──

export const teamMemberInputSchema = z.object({
  name: z.string().min(2).max(120),
  position: z.string().max(120).optional().nullable(),
  group: teamGroupSchema,
  department: z.string().max(160).optional().nullable(),
  yearLabel: z.string().max(60).optional().nullable(),
  bio: z.string().max(600).optional().nullable(),
  email: z.union([z.email(), z.literal("")]).optional().nullable()
    .transform((v) => (v === "" ? null : (v ?? null))),
  photo: optionalUrl,
  linkedin: optionalUrl,
  github: optionalUrl,
  committee: z.boolean().default(false),
  draft: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
});
export type TeamMemberInput = z.infer<typeof teamMemberInputSchema>;

export const reorderSchema = z.object({
  ids: z.array(z.string().min(1)).min(1).max(500),
});

// ────────────────────────────────────────────────────────────── sparkathon ──

export const prizeTierInputSchema = z.object({
  place: z.number().int().min(1).max(10),
  label: z.string().min(2).max(60),
  amountInr: z.number().int().min(0),
  extras: z.string().max(160).optional().nullable(),
  sortOrder: z.number().int().default(0),
});
export type PrizeTierInput = z.infer<typeof prizeTierInputSchema>;

export const problemStatementInputSchema = z.object({
  code: z.string().regex(/^PS-\d{3}$/, "Format: PS-101"),
  title: z.string().min(3).max(200),
  description: z.string().min(20),
  category: z.string().min(2).max(60),
  theme: z.string().min(2).max(80),
  imageUrl: optionalUrl,
  sortOrder: z.number().int().default(0),
});
export type ProblemStatementInput = z.infer<typeof problemStatementInputSchema>;

export const sparkathonSubmissionSchema = z.object({
  title: z.string().min(4, "Give your idea a title").max(120),
  description: z
    .string()
    .min(20, "Describe your idea in a little more detail")
    .max(2000),
  submitterName: z.string().max(120).optional(),
  submitterEmail: z.union([z.email(), z.literal("")]).optional(),
  // Honeypot — bots fill it, humans never see it.
  website: z.literal("").optional(),
});
export type SparkathonSubmissionInput = z.infer<typeof sparkathonSubmissionSchema>;

export const submissionModerationSchema = z.object({
  status: submissionStatusSchema,
});

// ──────────────────────────────────────────────────────── public messages ──

export const contactMessageSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(120),
  email: z.email("Enter a valid email address"),
  phone: z.string().max(20).optional(),
  subject: z.string().min(3, "What is this about?").max(160),
  message: z.string().min(10, "Tell us a little more").max(4000),
  website: z.literal("").optional(), // honeypot
});
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email address"),
});

// ─────────────────────────────────────────────────────────────────── auth ──

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required").max(64),
  password: z.string().min(1, "Password is required").max(128),
});
export type LoginInput = z.infer<typeof loginSchema>;

// ──────────────────────────────────────────────────────────────── settings ──

export const sparkathonSettingsSchema = z.object({
  eventDate: z.string().datetime({ offset: true }).or(z.literal("")),
  dateIsTentative: z.boolean().default(true),
  registrationLink: z.string().url().or(z.literal("")),
  venue: z.string().max(160),
});
export type SparkathonSettings = z.infer<typeof sparkathonSettingsSchema>;

// ─────────────────────────────────────────────────────────────── chat API ──

export const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(4000),
      }),
    )
    .min(1)
    .max(40),
});
export type ChatRequest = z.infer<typeof chatRequestSchema>;
