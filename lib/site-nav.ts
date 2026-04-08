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
      title: "コンセプト",
      links: [{ label: "コンセプト詳細", href: "/concept" }],
    },
    {
      title: "コース",
      links: [
        { label: "広げる（詳細）", href: "/courses#course-hirogeru" },
        { label: "深める（詳細）", href: "/courses#course-fukameru" },
      ],
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
