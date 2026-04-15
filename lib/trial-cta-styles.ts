/** ホバーでわずかに拡大（ヘッダー・CTA 共通） */
const ctaHoverLift =
  "transition-[transform,filter] duration-200 hover:scale-[1.02] hover:brightness-[1.06] active:scale-[0.98]";

/** 無料体験授業の導線（ヘッダー・トップ #contact などで共通） */
export const trialCtaGradientClasses =
  `bg-gradient-to-r from-[#4f92f7] via-[#3b7aed] to-[#2563eb] text-white shadow-md ${ctaHoverLift}`;

/** お問い合わせ導線（オレンジグラデ・トップ #contact など） */
export const contactInquiryCtaClasses =
  `bg-gradient-to-r from-[#f07847] via-[#e4571f] to-[#d13d12] text-white shadow-md ${ctaHoverLift}`;
