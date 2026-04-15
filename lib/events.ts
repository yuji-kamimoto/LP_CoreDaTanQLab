import { siteName } from "./site-config";

export type SiteEvent = {
  id: string;
  title: string;
  /** 表示用短い日付 */
  dateLabel: string;
  /** ISO 日付（並び替え・将来のフィルタ用） */
  date: string;
  place?: string;
};

/** 直近イベント（CMS 連携前のプレースホルダー） */
export const upcomingEvents: SiteEvent[] = [
  {
    id: "e1",
    title: "保護者説明会｜探求学習って何が変わる？",
    dateLabel: "4月12日（土）14:00—",
    date: "2026-04-12",
    place: "オンライン／会場併用",
  },
  {
    id: "e2",
    title: "体験授業ウィーク（広げる／深める 両コース）",
    dateLabel: "4月14日（月）〜18日（金）",
    date: "2026-04-14",
  },
  {
    id: "e3",
    title: "探究発表ミニフェス（保護者見学OK）",
    dateLabel: "4月26日（日）10:00—12:00",
    date: "2026-04-26",
    place: `${siteName} スタジオ`,
  },
  {
    id: "e4",
    title: "GW 特別プログラム｜フィールドワーク体験",
    dateLabel: "5月3日（日）・4日（月）",
    date: "2026-05-03",
  },
];
