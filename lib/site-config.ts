/** 差し替え用のサイト固有情報（CMS 化する場合はここを読み替え） */
export const siteName = "CoreDa! 探究ラボ";

/** 検索結果での表記ゆれ対策（CoreDa!／コアダ／コーレダ等） */
export const siteAlternateNames = [
  "CoreDa!探究ラボ",
  "コアダ探究ラボ",
  "コーレダ探究ラボ",
  "つくば 探究ラボ",
  "つくば 探究学習",
  "CoreDa",
] as const;

/** 本番公開URL（末尾スラッシュなし）。環境変数で上書き可能 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://school.oneangle.jp"
).replace(/\/$/, "");

/**
 * OGP 用デフォルト画像（public/ 配下に配置）
 * 専用の 1200x630 画像 `/og-image.png` を用意できればベスト。
 * 用意できるまでは既存のラボ紹介画像をフォールバックとして利用する。
 */
export const siteOgImage = {
  path: "/Lab_Preview_Image.jpeg",
  width: 1200,
  height: 630,
  alt: "CoreDa! 探究ラボ — 好奇心を行動へ、君の核を育てる探究学習教室",
} as const;

/** SEO 用キーワード（meta keywords は Google 非対応だが Bing 他のため保持） */
export const siteKeywords = [
  "CoreDa!",
  "CoreDa! 探究ラボ",
  "コアダ",
  "コーレダ",
  "探究ラボ",
  "探究学習",
  "つくば 塾",
  "つくば 探究学習",
  "つくば 学習塾",
  "茨城 探究",
  "つくば市 吾妻 塾",
  "プログラミング教室",
  "小学生 中学生 高校生",
  "TSUKUBA 学びの杜学園",
  "OneAngle",
] as const;

export const siteTagline =
  "【好奇心】を【行動】へ、それが君の【核】になる";

/**
 * CoreDa! の由来（サイト説明の共通文脈）
 * Curiosity / Opportunity / Enthusiasm / Response / Do & Action → Core（核）
 */
export const coreDaNamingJa =
  "「CoreDa!」は、好奇心（Curiosity）に機会（Opportunity）を与え、熱意（Enthusiasm）に応え（Response）、行動（Do & Action）を重視することで、子どもたち一人ひとりの核（Core）を育てるという想いを込めた名前です。";

/** メタタグ・OG 用（siteTagline に由来を補足） */
export const siteMetaDescription = `${siteTagline} ${coreDaNamingJa}`;

/** Hero 中央のキラーフレーズのみ表示 */
export const heroPhrase = "好き✖️できる で突き抜けろ！";

export const contact = {
  /** 表示用 */
  address: "〒305-0031 茨城県つくば市吾妻3丁目-11-5",
  /** Google マップの埋め込み用 URL（共有 → 地図を埋め込む で取得したものを推奨） */
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim() ||
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("茨城県つくば市吾妻3丁目11番5号") +
    "&hl=ja&z=16&output=embed",
};

/** 同一施設で活動している「学びの杜学園」（住所・アクセスの案内用） */
export const colocatedFreeSchool = {
  name: "TSUKUBA 学びの杜学園",
  websiteUrl: "https://manabinomori-gakuen.com/",
} as const;

/** 無料体験授業・イベントのお申し込み案内（Google Sites） */
export const trialApplicationFormUrl =
  "https://sites.google.com/view/school-coreda-event/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E7%94%B3%E3%81%97%E8%BE%BC%E3%81%BF?authuser=0";

export const footerInfo = {
  /** フッター「営業時間」表示用（平日・土日で改行） */
  businessHoursWeekday: "平日 15:30〜21:00",
  businessHoursWeekend: "土日 10:00〜18:00",
  /** 目安時間の補足（生徒の有無による調整） */
  businessHoursNote:
    "※ 生徒の在籍状況（お預かりの有無など）に応じて、開室・営業時間を前後させたり短縮したりする場合があります。",
  operatorName: "株式会社OneAngle",
  operatorAddress:
    "〒305-0031 茨城県つくば市吾妻2-5-1 つくば市産業振興センター",
  operatorWebsite: "https://oneangle.jp/index.html",
};

export const social = {
  lineUrl:
    process.env.NEXT_PUBLIC_LINE_URL?.trim() ||
    "https://line.me/R/ti/p/@435ucrbe",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
    "https://www.instagram.com/coreda_tanqlab/",
};
