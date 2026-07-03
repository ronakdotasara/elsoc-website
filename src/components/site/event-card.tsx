import Image from "next/image";
import { ArrowUpRight, Clock, MapPin, Repeat, Users } from "lucide-react";
import type { EventItem } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { humanize } from "@/lib/utils";

const statusVariant = {
  UPCOMING: "volt",
  ONGOING: "signal",
  COMPLETED: "default",
} as const;

export function EventCard({ event }: { event: EventItem }) {
  const dateText =
    event.recurrence === "WEEKLY" && event.dayOfWeek
      ? `Every ${humanize(event.dayOfWeek)}`
      : (event.dateLabel ?? "Date to be announced");

  return (
    <SpotlightCard as="article" className="flex h-full flex-col">
      <div className="relative aspect-[8/5] overflow-hidden border-b border-line">
        {event.coverImage ? (
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover/spot:scale-[1.04]"
          />
        ) : (
          <PlaceholderMedia label={event.title} className="absolute inset-0" />
        )}
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant="pulse">{event.category}</Badge>
          {event.recurrence === "WEEKLY" && (
            <Badge variant="signal">
              <Repeat className="size-3" aria-hidden /> Weekly
            </Badge>
          )}
        </div>
        <div className="absolute right-3 top-3">
          <Badge variant={statusVariant[event.status]}>{humanize(event.status)}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="mono-label text-volt">{dateText}</p>
        <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
          {event.title}
        </h3>

        <ul className="flex flex-col gap-1.5 text-xs text-fg-muted">
          {event.timeLabel && (
            <li className="flex items-center gap-2">
              <Clock className="size-3.5 text-fg-subtle" aria-hidden />
              {event.timeLabel}
            </li>
          )}
          <li className="flex items-center gap-2">
            <MapPin className="size-3.5 text-fg-subtle" aria-hidden />
            {event.location}
          </li>
          {event.participants && (
            <li className="flex items-center gap-2">
              <Users className="size-3.5 text-fg-subtle" aria-hidden />
              {event.participants}
            </li>
          )}
        </ul>

        <p className="line-clamp-3 text-sm leading-relaxed text-fg-muted">
          {event.description}
        </p>

        {event.highlights.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {event.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[0.65rem] text-fg-muted"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        {event.status !== "COMPLETED" && event.registrationLink && (
          <div className="pt-2">
            <Button asChild size="sm" variant="outline" className="w-full">
              <a
                href={event.registrationLink}
                target={event.registrationLink.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                Register Now
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </Button>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}
