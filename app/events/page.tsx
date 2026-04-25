import type { Metadata } from "next";

import { MonthlyScheduleCalendar } from "@/components/MonthlyScheduleCalendar";
import { SubpageShell } from "@/components/SubpageShell";
import { upcomingEvents } from "@/lib/events";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `イベント・スケジュール | ${siteName}`,
  description: `${siteName}のイベントと月間スケジュール例。学びの機会としてのご案内です。`,
};

export default function EventsPage() {
  const cal = new Date();
  const calYear = cal.getFullYear();
  const calMonth = cal.getMonth();

  return (
    <SubpageShell title="イベント情報とスケジュール">
      <p>
        イベントや説明会は、好奇心に新しい機会を与え、保護者の方のご不安にも応える場としてご用意する予定です。下記は開業準備中のご案内例です。日程・会場は確定次第、ニュースおよび
        LINE でお知らせします。見学や保護者説明会への参加をご希望の方は、お問い合わせページからご連絡ください。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        直近のイベント
      </h2>
      <ul className="space-y-4">
        {upcomingEvents.map((event) => (
          <li
            key={event.id}
            className="rounded-2xl border border-foreground/10 bg-surface p-4 md:p-5"
          >
            <p className="text-xs font-semibold tabular-nums text-accent">
              {event.dateLabel}
            </p>
            <p className="mt-1 font-medium text-foreground">{event.title}</p>
            {event.place ? (
              <p className="mt-2 text-sm text-muted">{event.place}</p>
            ) : null}
          </li>
        ))}
      </ul>
      <h2 className="font-heading pt-4 text-lg font-semibold text-foreground md:text-xl">
        今月の授業スケジュール（例）
      </h2>
      <MonthlyScheduleCalendar year={calYear} monthIndex0={calMonth} />
    </SubpageShell>
  );
}
