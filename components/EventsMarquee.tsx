"use client";

import type { SiteEvent } from "@/lib/events";

import { MarqueeRow } from "@/components/MarqueeRow";

function EventCard({ event }: { event: SiteEvent }) {
  return (
    <article className="flex w-[22rem] shrink-0 flex-col justify-between rounded-2xl border-2 border-foreground/10 bg-surface px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-md sm:w-96">
      <p className="text-xs font-medium tabular-nums text-accent">
        {event.dateLabel}
      </p>
      <h3 className="mt-2 text-sm font-semibold leading-snug">{event.title}</h3>
      {event.place ? (
        <p className="mt-2 text-xs text-muted">{event.place}</p>
      ) : null}
    </article>
  );
}

export function EventsMarquee({ events }: { events: SiteEvent[] }) {
  if (events.length === 0) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="rounded-2xl border-2 border-dashed border-accent/25 bg-surface px-6 py-10 text-center text-sm text-muted">
          現在ご案内中のイベントはありません。
        </p>
      </div>
    );
  }

  const duration = Math.min(65, Math.max(30, events.length * 16));

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <MarqueeRow
        className="rounded-2xl"
        durationSec={duration}
        slotA={events.map((event) => (
          <EventCard key={`ea-${event.id}`} event={event} />
        ))}
        slotB={events.map((event) => (
          <EventCard key={`eb-${event.id}`} event={event} />
        ))}
      />
    </div>
  );
}
