import { describe, expect, it } from "vitest";
import {
  contactMessageSchema,
  eventInputSchema,
  projectInputSchema,
  sparkathonSubmissionSchema,
} from "@/lib/validators";

describe("projectInputSchema", () => {
  const valid = {
    slug: "ert-landslide-alert-system",
    title: "ERT-Based Landslide Alert System",
    summary: "A low-cost ERT network that raises early landslide warnings.",
    abstract: "A".repeat(60),
    category: "IoT",
    year: "2026",
  };

  it("accepts a valid project and applies defaults", () => {
    const parsed = projectInputSchema.parse(valid);
    expect(parsed.status).toBe("PUBLISHED");
    expect(parsed.technologies).toEqual([]);
    expect(parsed.featured).toBe(false);
  });

  it("rejects malformed slugs", () => {
    expect(projectInputSchema.safeParse({ ...valid, slug: "Bad Slug!" }).success).toBe(false);
    expect(projectInputSchema.safeParse({ ...valid, slug: "-leading" }).success).toBe(false);
  });

  it("normalizes empty cover image to null", () => {
    const parsed = projectInputSchema.parse({ ...valid, coverImage: "" });
    expect(parsed.coverImage).toBeNull();
  });
});

describe("eventInputSchema", () => {
  const base = {
    slug: "weekly-group-discussion",
    title: "Weekly Group Discussion",
    description: "Recurring open-floor technical discussion.",
    category: "Discussion",
    location: "EED",
  };

  it("models weekly recurrence with a required day", () => {
    expect(
      eventInputSchema.safeParse({ ...base, recurrence: "WEEKLY", dayOfWeek: "FRIDAY" })
        .success,
    ).toBe(true);
    // WEEKLY without a day must fail
    expect(eventInputSchema.safeParse({ ...base, recurrence: "WEEKLY" }).success).toBe(false);
  });

  it("treats empty-string dayOfWeek as null for one-off events", () => {
    const parsed = eventInputSchema.parse({ ...base, recurrence: "NONE", dayOfWeek: "" });
    expect(parsed.dayOfWeek).toBeNull();
  });
});

describe("public form schemas", () => {
  it("validates contact messages", () => {
    expect(
      contactMessageSchema.safeParse({
        name: "Ronak",
        email: "ronak@example.com",
        subject: "Membership",
        message: "How do I join ELSOC this year?",
      }).success,
    ).toBe(true);
    expect(
      contactMessageSchema.safeParse({
        name: "R",
        email: "not-an-email",
        subject: "",
        message: "short",
      }).success,
    ).toBe(false);
  });

  it("caps sparkathon idea length", () => {
    expect(
      sparkathonSubmissionSchema.safeParse({
        title: "Grid balancer",
        description: "x".repeat(2001),
      }).success,
    ).toBe(false);
  });
});
