import "server-only";
import {
  getEvents,
  getProblemStatements,
  getProjects,
  getSparkathonSettings,
  getTeam,
} from "@/lib/data";
import { faqs } from "@/content/about";
import { site } from "@/content/site";
import { formatDate, humanize } from "@/lib/utils";

/**
 * Retrieval layer for the ELSOC assistant.
 *
 * The corpus is assembled live from the same data services that render the
 * site, so the bot always answers from current content. Ranking is lexical
 * (TF overlap + phrase and title bonuses) — deliberately dependency-free and
 * fully offline. The ChatChunk table (pgvector) is the drop-in upgrade path:
 * populate embeddings and swap `rank()` for a cosine query without touching
 * the route or the UI.
 */

export interface Chunk {
  id: string;
  title: string;
  url: string;
  content: string;
}

const STOP = new Set(
  "a an and are as at be by for from has have how i in is it of on or that the this to was we what when where which who will with you your".split(
    " ",
  ),
);

const tokenize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter((t) => t.length > 1 && !STOP.has(t));

export async function buildCorpus(): Promise<Chunk[]> {
  const [projects, events, statements, team, sparkathon] = await Promise.all([
    getProjects(),
    getEvents(),
    getProblemStatements(),
    getTeam(),
    getSparkathonSettings(),
  ]);

  const chunks: Chunk[] = [];

  chunks.push({
    id: "about",
    title: "About ELSOC",
    url: "/about",
    content: `${site.mission} ELSOC stands for the Electrical Engineering Society of ${site.institute}. Contact: ${site.contact.email}, ${site.contact.phoneLabel}. Address: ${site.contact.address}. Instagram: ${site.socials[1]?.url}. Membership is free and recruitment happens at the start of each academic year.`,
  });

  for (const faq of faqs) {
    chunks.push({
      id: `faq:${faq.question}`,
      title: faq.question,
      url: "/contact",
      content: faq.answer,
    });
  }

  for (const p of projects) {
    chunks.push({
      id: `project:${p.slug}`,
      title: `Project — ${p.title}`,
      url: `/projects/${p.slug}`,
      content: `${p.summary} Category: ${p.category}. Status: ${p.workStatus} (${p.year}). Team: ${p.team.join(", ")}${p.facultyCoordinator ? `. Faculty coordinator: ${p.facultyCoordinator}` : ""}. Technologies: ${p.technologies.join(", ")}. ${p.abstract.slice(0, 500)}`,
    });
  }

  for (const e of events) {
    const when =
      e.recurrence === "WEEKLY" && e.dayOfWeek
        ? `every ${humanize(e.dayOfWeek)}`
        : (e.dateLabel ?? "date TBA");
    chunks.push({
      id: `event:${e.slug}`,
      title: `Event — ${e.title}`,
      url: "/events",
      content: `${e.description} Category: ${e.category}. Status: ${e.status.toLowerCase()}. When: ${when}${e.timeLabel ? `, ${e.timeLabel}` : ""}. Where: ${e.location}.`,
    });
  }

  chunks.push({
    id: "sparkathon",
    title: "Sparkathon (flagship hackathon)",
    url: "/sparkathon",
    content: `Sparkathon is ELSOC's flagship hackathon-style competition at ${sparkathon.venue}. ${
      sparkathon.eventDate
        ? `Scheduled for ${formatDate(sparkathon.eventDate)}${sparkathon.dateIsTentative ? " (tentative)" : ""}.`
        : "Date to be announced."
    } Prize pool: ₹10,000 winner, ₹6,000 first runner-up, ₹3,000 second runner-up, plus additional gifts. There are ${statements.length} official problem statements covering smart energy, AI, robotics, blockchain and smart cities. Open to all students.`,
  });

  for (const ps of statements) {
    chunks.push({
      id: `ps:${ps.code}`,
      title: `${ps.code} — ${ps.title}`,
      url: "/sparkathon#problem-statements",
      content: `${ps.description} Category: ${ps.category}. Theme: ${ps.theme}.`,
    });
  }

  const leadership = team
    .filter((m) => m.group === "FACULTY" || m.group === "CORE" || m.group === "THIRD_YEAR")
    .map((m) => `${m.name}${m.position ? ` (${m.position})` : ""}`)
    .join(", ");
  chunks.push({
    id: "team",
    title: "ELSOC team & leadership",
    url: "/team",
    content: `ELSOC has ${team.length} listed members across faculty mentors, the core team, third-year coordinators and first-year executives. Leadership: ${leadership}.`,
  });

  return chunks;
}

export function rank(query: string, corpus: Chunk[], k = 5): Chunk[] {
  const terms = tokenize(query);
  if (terms.length === 0) return [];
  const queryLower = query.toLowerCase();

  const scored = corpus.map((chunk) => {
    const titleTokens = new Set(tokenize(chunk.title));
    const bodyTokens = tokenize(chunk.content);
    const bodySet = new Set(bodyTokens);

    let score = 0;
    for (const term of terms) {
      if (titleTokens.has(term)) score += 3;
      if (bodySet.has(term)) score += 1;
    }
    // exact phrase bonus
    if (queryLower.length > 6 && chunk.content.toLowerCase().includes(queryLower)) {
      score += 4;
    }
    return { chunk, score };
  });

  return scored
    .filter((s) => s.score >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.chunk);
}

export async function retrieve(query: string, k = 5): Promise<Chunk[]> {
  const corpus = await buildCorpus();
  return rank(query, corpus, k);
}

/** Rule-assisted answer for offline mode (no ANTHROPIC_API_KEY configured). */
export async function offlineAnswer(query: string): Promise<string> {
  const q = query.toLowerCase();

  if (/^(hi|hello|hey|namaste|yo)\b/.test(q)) {
    return `Hello! I'm the ELSOC assistant. I can tell you about our events, the Sparkathon hackathon, ongoing projects, the team, and how to join. What would you like to know?`;
  }

  const hits = await retrieve(query, 3);
  if (hits.length === 0) {
    return `I couldn't find that in ELSOC's site content. Try asking about our events, Sparkathon, projects, or the team — or reach us directly at ${site.contact.email}.`;
  }

  const parts = hits.map((h) => `**${h.title}**\n${h.content.slice(0, 320).trim()}…\n→ ${h.url}`);
  return `Here's what I found:\n\n${parts.join("\n\n")}`;
}
