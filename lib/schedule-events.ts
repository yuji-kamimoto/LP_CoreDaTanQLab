/**
 * 週次カレンダー用のイベント種別（表示デザインの例示・差し替え前提）
 */
export type ScheduleEventKind =
  | "spring-school"
  | "trial-elem"
  | "trial-young"
  | "trial-jh-hs"
  | "trial-special";

export type ScheduleEventDef = {
  kind: ScheduleEventKind;
  label: string;
  /** 背景色（画像準拠） */
  bg: string;
};

export const SCHEDULE_EVENT_DEFS: Record<ScheduleEventKind, ScheduleEventDef> = {
  "spring-school": {
    kind: "spring-school",
    label: "探求スプリングスクール",
    bg: "#2ECC71",
  },
  "trial-elem": {
    kind: "trial-elem",
    label: "通常授業体験 (小1〜小6)",
    bg: "#F39C12",
  },
  "trial-young": {
    kind: "trial-young",
    label: "通常授業体験 (年中〜小1)",
    bg: "#F1C40F",
  },
  "trial-jh-hs": {
    kind: "trial-jh-hs",
    label: "通常授業体験 (中1〜高3)",
    bg: "#E74C3C",
  },
  "trial-special": {
    kind: "trial-special",
    label: "特別授業体験",
    bg: "#1A1A1A",
  },
};

type DayEvents = { kind: ScheduleEventKind }[];

/** YYYY-MM-DD（ローカル日付） */
function isoLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * 画像と同じ並びのサンプル（毎年 3/30〜4/12 付近）。年を問わず MM-DD で一致。
 * 特定日だけ上書きしたい場合は SAMPLE_BY_ISO に YYYY-MM-DD を追加。
 */
const SAMPLE_BY_MONTH_DAY: Record<string, DayEvents> = {
  "03-30": [{ kind: "spring-school" }],
  "03-31": [{ kind: "spring-school" }, { kind: "trial-elem" }],
  "04-01": [
    { kind: "spring-school" },
    { kind: "trial-young" },
    { kind: "trial-elem" },
    { kind: "trial-jh-hs" },
  ],
  "04-02": [{ kind: "trial-elem" }],
  "04-03": [{ kind: "trial-elem" }],
  "04-04": [{ kind: "trial-young" }, { kind: "trial-elem" }],
  "04-12": [{ kind: "trial-special" }],
};

const SAMPLE_BY_ISO: Record<string, DayEvents> = {};

function monthDayKey(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${m}-${day}`;
}

export function getScheduleEventsForDay(d: Date): DayEvents {
  const iso = isoLocal(d);
  if (SAMPLE_BY_ISO[iso]) return SAMPLE_BY_ISO[iso];
  return SAMPLE_BY_MONTH_DAY[monthDayKey(d)] ?? [];
}
