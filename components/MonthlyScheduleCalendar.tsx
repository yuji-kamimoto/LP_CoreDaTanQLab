import {
  SCHEDULE_EVENT_DEFS,
  getScheduleEventsForDay,
  type ScheduleEventKind,
} from "@/lib/schedule-events";
import {
  formatMonthDay,
  getWeekRowsForMonth,
  isInMonth,
} from "@/lib/schedule-weeks";

const WEEKDAYS = ["月", "火", "水", "木", "金", "土", "日"] as const;

type MonthlyScheduleCalendarProps = {
  year: number;
  monthIndex0: number;
  title?: string;
};

function EventPill({ kind }: { kind: ScheduleEventKind }) {
  const def = SCHEDULE_EVENT_DEFS[kind];
  const textColor =
    kind === "trial-young" ? "#1a1a1a" : "#ffffff";

  return (
    <div
      className="rounded-xl px-2 py-2 text-center text-[10px] font-semibold leading-snug shadow-sm sm:px-2.5 sm:text-[11px] sm:leading-snug"
      style={{ backgroundColor: def.bg, color: textColor }}
    >
      {def.label}
    </div>
  );
}

export function MonthlyScheduleCalendar({
  year,
  monthIndex0,
  title,
}: MonthlyScheduleCalendarProps) {
  const weeks = getWeekRowsForMonth(year, monthIndex0);
  const label =
    title ?? `${year}年${monthIndex0 + 1}月の授業スケジュール`;

  return (
    <div className="rounded-2xl border-2 border-accent/15 bg-surface p-5 shadow-sm md:p-8">
      <h3 className="font-heading text-lg font-semibold tracking-tight md:text-xl">
        {label}
      </h3>
      <p className="mt-2 text-sm text-muted">
        月曜始まりの週表示です。色分けはイベントの種類の例です（実際の日程はお問い合わせください）。
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-foreground/15">
        <div className="min-w-[720px]">
          <div
            className="grid grid-cols-7 border-b border-foreground/15 bg-[#E5E5E5]"
            role="row"
          >
            {WEEKDAYS.map((w) => (
              <div
                key={w}
                className="border-r border-foreground/15 py-3 text-center text-sm font-bold text-foreground last:border-r-0"
                role="columnheader"
              >
                {w}
              </div>
            ))}
          </div>

          {weeks.map((week) => (
            <div
              key={week[0].toISOString()}
              className="grid grid-cols-7 border-b border-foreground/15 last:border-b-0"
              role="row"
            >
              {week.map((d) => {
                const inMonth = isInMonth(d, year, monthIndex0);
                const events = getScheduleEventsForDay(d);

                return (
                  <div
                    key={d.toISOString()}
                    className="flex min-h-[7.5rem] flex-col border-r border-foreground/15 p-2 align-top last:border-r-0 sm:min-h-[8.5rem] sm:p-3"
                    role="gridcell"
                  >
                    <span
                      className={`text-xs font-bold tabular-nums sm:text-sm ${
                        inMonth ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {formatMonthDay(d)}
                    </span>
                    <div className="mt-2 flex flex-1 flex-col gap-1.5">
                      {events.map((e, i) => (
                        <EventPill key={`${d.toISOString()}-${i}`} kind={e.kind} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted sm:text-sm">
        {(Object.keys(SCHEDULE_EVENT_DEFS) as ScheduleEventKind[]).map(
          (kind) => {
            const def = SCHEDULE_EVENT_DEFS[kind];
            return (
              <li key={kind} className="flex items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-md sm:h-3.5 sm:w-3.5"
                  style={{ backgroundColor: def.bg }}
                  aria-hidden
                />
                <span className="text-foreground/85">{def.label}</span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
