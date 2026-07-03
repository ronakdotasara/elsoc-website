import { describe, expect, it } from "vitest";
import { rank, type Chunk } from "@/lib/rag";

const corpus: Chunk[] = [
  {
    id: "sparkathon",
    title: "Sparkathon (flagship hackathon)",
    url: "/sparkathon",
    content:
      "Sparkathon is ELSOC's flagship hackathon-style competition. Prize pool: ₹10,000 winner, ₹6,000 first runner-up, ₹3,000 second runner-up.",
  },
  {
    id: "project:ert",
    title: "Project — ERT-Based Landslide Alert System",
    url: "/projects/ert-landslide-alert-system",
    content:
      "Electrical resistivity tomography network for landslide early warning on hillsides using ESP32 and IoT telemetry.",
  },
  {
    id: "faq:join",
    title: "How can I become a member of ELSOC?",
    url: "/contact",
    content:
      "ELSOC conducts interviews for first-year and second-year students during the recruitment drive at the beginning of each academic year.",
  },
];

describe("rank", () => {
  it("returns the most relevant chunk first", () => {
    const hits = rank("when is the sparkathon hackathon and what are the prizes", corpus);
    expect(hits[0]?.id).toBe("sparkathon");
  });

  it("matches domain terms in project chunks", () => {
    const hits = rank("landslide monitoring project", corpus);
    expect(hits.map((h) => h.id)).toContain("project:ert");
  });

  it("returns nothing for unrelated queries", () => {
    expect(rank("quantum blockchain pizza recipe cooking", corpus)).toHaveLength(0);
    expect(rank("", corpus)).toHaveLength(0);
  });

  it("caps results at k", () => {
    expect(rank("elsoc", corpus, 1).length).toBeLessThanOrEqual(1);
  });
});
