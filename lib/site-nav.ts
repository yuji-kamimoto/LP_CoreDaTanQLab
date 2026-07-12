/** ヘッダー右側パネル用のメニュー項目（タイトル＋サブタイトル） */
export type SiteMenuItem = {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
};

export function getSiteMenuItems(
  lineUrl: string,
  instagramUrl: string,
  trialFormUrl: string,
): SiteMenuItem[] {
  return [
    {
      title: "ラボについて",
      subtitle: "教室の理念と学びの考え方",
      href: "/concept",
    },
    {
      title: "コース",
      subtitle: "0→1・探究の2コース",
      href: "/courses",
    },
    {
      title: "料金とスケジュール",
      subtitle: "月謝・支払い・休講案内",
      href: "/pricing",
    },
    {
      title: "無料体験のお申し込み",
      subtitle: "授業を体験してみる",
      href: trialFormUrl,
      external: true,
    },
    {
      title: "お問い合わせ",
      subtitle: "見学・ご相談はこちら",
      href: "/contact",
    },
    {
      title: "公式LINE",
      subtitle: "最新のお知らせを配信",
      href: lineUrl,
      external: true,
    },
    {
      title: "Instagram",
      subtitle: "教室のリアルをシェア",
      href: instagramUrl,
      external: true,
    },
  ];
}
