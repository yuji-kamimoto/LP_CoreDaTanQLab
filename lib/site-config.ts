/** 差し替え用のサイト固有情報（CMS 化する場合はここを読み替え） */
export const siteName = "CoreDa! 探究ラボ";

export const siteTagline =
  "【好奇心】を【行動】へ、それがいつか君の【核】になる";

/**
 * CoreDa! の由来（サイト説明の共通文脈）
 * Curiosity / Opportunity / Enthusiasm / Response / Do & Action → Core（核）
 */
export const coreDaNamingJa =
  "「CoreDa!」は、好奇心（Curiosity）に機会（Opportunity）を与え、熱意（Enthusiasm）に応え（Response）、行動（Do & Action）を重視することで、子どもたち一人ひとりの核（Core）を育てるという想いを込めた名前です。";

/** メタタグ・OG 用（siteTagline に由来を補足） */
export const siteMetaDescription = `${siteTagline} ${coreDaNamingJa}`;

/** Hero 中央のキラーフレーズのみ表示 */
export const heroPhrase =
  "これだっ！ってものを見つけよう！\nそして、とことん突き詰めよう！";

export const contact = {
  phone: "03-0000-0000",
  email: "contact@oneangle.jp",
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

/** 無料体験授業のお申し込み（Google フォーム） */
export const trialApplicationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdRHBFrQiGUg7jTBedF8BDabRq5f0N31OvyLt4zIw6J-1LAZw/viewform?usp=publish-editor";

export const footerInfo = {
  /** フッター「営業時間」表示用（平日・土日で改行） */
  businessHoursWeekday: "平日 15:30〜21:00",
  businessHoursWeekend: "土日 9:00〜12:00",
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
    "https://line.me/R/ti/p/@example",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
    "https://www.instagram.com/example",
};
