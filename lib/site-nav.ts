import { courses } from "./courses-data";

/** デスクトップヘッダー用（ハンバーガー非表示時） */
export const headerPrimaryNav: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "ラボについて", href: "/concept" },
  { label: "コース", href: "/courses" },
  { label: "ニュース/イベント", href: "/news" },
  { label: "料金とスケジュール", href: "/pricing" },
];

/** ハンバーガーメニュー用 */
export type MegaMenuBlock = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

export function getMegaMenuBlocks(
  lineUrl: string,
  instagramUrl: string,
  trialFormUrl: string,
): MegaMenuBlock[] {
  return [
    {
      title: "ラボについて",
      links: [{ label: "詳細を見る", href: "/concept" }],
    },
    {
      title: "コース",
      links: courses.map((c) => ({
        label: c.navLabel,
        href: `/courses#${c.id}`,
      })),
    },
    {
      title: "ニュース",
      links: [{ label: "一覧", href: "/news" }],
    },
    {
      title: "イベント",
      links: [{ label: "詳細", href: "/events" }],
    },
    {
      title: "料金",
      links: [{ label: "詳細", href: "/pricing" }],
    },
    {
      title: "アクセス",
      links: [{ label: "詳細", href: "/access" }],
    },
    {
      title: "公式アカウント",
      links: [
        { label: "LINE", href: lineUrl, external: true },
        { label: "Instagram", href: instagramUrl, external: true },
      ],
    },
    {
      title: "お問い合わせ",
      links: [
        { label: "お問い合わせフォーム", href: "/contact" },
        {
          label: "無料体験授業のお申し込み",
          href: trialFormUrl,
          external: true,
        },
      ],
    },
  ];
}
