/** 差し替え用のサイト固有情報（CMS 化する場合はここを読み替え） */
export const siteName = "CoreDa! 探求ラボ";

export const siteTagline =
  "「わかる」より先に、「わかりたい」が育つ教室。";

/** Hero 中央のキラーフレーズのみ表示 */
export const heroPhrase =
  "問いを持ち続けられる子に、\n未来は開ける。";

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

/** 無料体験授業のお申し込み（Google フォーム） */
export const trialApplicationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdRHBFrQiGUg7jTBedF8BDabRq5f0N31OvyLt4zIw6J-1LAZw/viewform?usp=publish-editor";

export const footerInfo = {
  /** フッター「営業時間」表示用（平日・土日で改行） */
  businessHoursWeekday: "平日 15:30〜21:00",
  businessHoursWeekend: "土日 9:00〜12:00",
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
