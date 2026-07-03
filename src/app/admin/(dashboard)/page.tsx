import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  Database,
  FolderKanban,
  Users,
  Zap,
} from "lucide-react";
import { hasDatabase, prisma } from "@/lib/db";
import { getEvents, getProjects, getTeam } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

export default async function AdminOverview() {
  const [projects, events, team] = await Promise.all([
    getProjects(),
    getEvents(),
    getTeam(),
  ]);

  let pendingIdeas = 0;
  let recentAudit: { id: string; summary: string; actor: string; createdAt: Date }[] = [];
  let unreadMessages = 0;
  if (prisma) {
    try {
      [pendingIdeas, unreadMessages, recentAudit] = await Promise.all([
        prisma.sparkathonSubmission.count({ where: { status: "PENDING" } }),
        prisma.contactMessage.count(),
        prisma.auditLog.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
      ]);
    } catch {
      // dashboard still renders without DB
    }
  }

  const cards = [
    { label: "Projects", value: projects.length, href: "/admin/projects", icon: FolderKanban },
    { label: "Events", value: events.length, href: "/admin/events", icon: CalendarDays },
    { label: "Team members", value: team.length, href: "/admin/team", icon: Users },
    { label: "Pending ideas", value: pendingIdeas, href: "/admin/sparkathon", icon: Zap },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="mt-1 text-sm text-fg-muted">
            Everything on the public site is editable from here — no redeploy needed.
          </p>
        </div>
        <Badge variant={hasDatabase ? "success" : "danger"}>
          <Database className="size-3" aria-hidden />
          {hasDatabase ? "Database connected" : "No database — read-only seed mode"}
        </Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group card-raised rounded-xl p-5 transition-colors hover:border-volt/40"
          >
            <card.icon className="mb-3 size-5 text-volt" aria-hidden />
            <p className="font-display text-3xl font-bold">{card.value}</p>
            <p className="mt-1 flex items-center justify-between text-xs text-fg-subtle">
              {card.label}
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card-raised rounded-xl p-5">
          <h2 className="mb-4 flex items-center gap-2 font-display font-semibold">
            <Activity className="size-4 text-volt" aria-hidden /> Recent activity
          </h2>
          {recentAudit.length === 0 ? (
            <p className="py-6 text-center text-sm text-fg-subtle">
              No activity recorded yet.
            </p>
          ) : (
            <ul className="space-y-3">
              {recentAudit.map((entry) => (
                <li key={entry.id} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="min-w-0 flex-1 truncate text-fg-muted">{entry.summary}</span>
                  <span className="shrink-0 font-mono text-[0.65rem] text-fg-subtle">
                    {formatDate(entry.createdAt, {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/admin/activity"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-volt hover:underline"
          >
            Full activity log <ArrowRight className="size-3" aria-hidden />
          </Link>
        </section>

        <section className="card-raised rounded-xl p-5">
          <h2 className="mb-4 font-display font-semibold">Quick notes</h2>
          <ul className="list-disc space-y-2.5 pl-4 text-sm text-fg-muted">
            <li>
              Content marked <Badge variant="signal">draft</Badge> uses placeholder copy —
              search for it in each collection and replace with final wording.
            </li>
            <li>
              {unreadMessages} contact message{unreadMessages === 1 ? "" : "s"} in the{" "}
              <Link className="text-volt hover:underline" href="/admin/inbox">
                inbox
              </Link>
              .
            </li>
            <li>
              Sparkathon date, venue and registration link live under{" "}
              <Link className="text-volt hover:underline" href="/admin/sparkathon">
                Sparkathon → Settings
              </Link>
              .
            </li>
            <li>
              This panel uses one shared account — the activity log records every change,
              so keep the password within the core team and rotate it each tenure.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
