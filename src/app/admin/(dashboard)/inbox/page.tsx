"use client";

import { useQuery } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/admin/entity-manager";
import { formatDate } from "@/lib/utils";

interface InboxData {
  messages: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    createdAt: string;
  }[];
  subscribers: { id: string; email: string; createdAt: string }[];
}

export default function AdminInboxPage() {
  const query = useQuery<InboxData>({
    queryKey: ["/api/admin/messages"],
    queryFn: async () => {
      const res = await fetch("/api/admin/messages");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inbox"
        description="Messages from the contact form and newsletter sign-ups."
      />

      {query.isLoading ? (
        <Skeleton className="h-72 w-full" />
      ) : query.isError || !query.data ? (
        <p className="rounded-xl border border-danger/40 bg-danger/10 p-6 text-sm">
          Could not load the inbox — is the database running?
        </p>
      ) : (
        <Tabs defaultValue="messages">
          <TabsList aria-label="Inbox sections">
            <TabsTrigger value="messages">
              Messages
              <span className="rounded-full bg-bg/30 px-2 py-0.5 font-mono text-[0.65rem]">
                {query.data.messages.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="subscribers">
              Subscribers
              <span className="rounded-full bg-bg/30 px-2 py-0.5 font-mono text-[0.65rem]">
                {query.data.subscribers.length}
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            {query.data.messages.length === 0 ? (
              <p className="rounded-xl border border-dashed border-line-strong bg-surface p-10 text-center text-sm text-fg-subtle">
                No messages yet.
              </p>
            ) : (
              <ul className="space-y-3">
                {query.data.messages.map((m) => (
                  <li key={m.id} className="card-raised rounded-xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display font-semibold">{m.subject}</p>
                      <span className="font-mono text-[0.65rem] text-fg-subtle">
                        {formatDate(m.createdAt, {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="mt-2 whitespace-pre-wrap text-sm text-fg-muted">
                      {m.message}
                    </p>
                    <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-fg-subtle">
                      <Badge>{m.name}</Badge>
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 text-volt hover:underline">
                        <Mail className="size-3" aria-hidden />
                        {m.email}
                      </a>
                      {m.phone && <span>{m.phone}</span>}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>

          <TabsContent value="subscribers">
            {query.data.subscribers.length === 0 ? (
              <p className="rounded-xl border border-dashed border-line-strong bg-surface p-10 text-center text-sm text-fg-subtle">
                No subscribers yet.
              </p>
            ) : (
              <div className="card-raised overflow-hidden rounded-xl">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line bg-surface text-left text-fg-muted">
                      <th className="px-4 py-2.5 font-medium">Email</th>
                      <th className="px-4 py-2.5 font-medium">Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {query.data.subscribers.map((s) => (
                      <tr key={s.id} className="border-b border-line/60 last:border-0">
                        <td className="px-4 py-2.5">{s.email}</td>
                        <td className="px-4 py-2.5 font-mono text-xs text-fg-subtle">
                          {formatDate(s.createdAt, { day: "numeric", month: "short", year: "numeric" })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
