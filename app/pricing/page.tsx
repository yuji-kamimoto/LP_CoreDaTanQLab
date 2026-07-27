import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { courseTheme, showComingSoonUI, visibleCourses } from "@/lib/courses-data";
import { siteName, trialApplicationFormUrl } from "@/lib/site-config";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

export const metadata: Metadata = {
  title: "料金とスケジュール",
  description: `${siteName}の0→1・探究コースの月謝と支払い・休講・割引のご案内です。`,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `料金とスケジュール | ${siteName}`,
    description: `${siteName}の0→1・探究コースの月謝と支払い・休講・割引のご案内です。`,
    url: "/pricing",
    type: "website",
  },
};

const ADMISSION_FEE_AMOUNT = "11,000円（税込）";
const ADMISSION_FEE_DESCRIPTION =
  "初回のご入会時に一度だけお支払いいただく費用です。";

const policyBlocks: Array<{
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
}> = [
  {
    eyebrow: "PAYMENT",
    title: "支払い方法",
    description:
      "毎月の月謝は、口座振替またはクレジットカード決済を予定しています。",
  },
  {
    eyebrow: "CALENDAR",
    title: "休講・振替",
    description:
      "長期休暇に合わせた休講カレンダーを事前に公開します。欠席時の振替回数には上限を設ける場合があります。",
    bullets: [
      "詳細規定は入会時に書面でお渡しします",
      "やむを得ない理由による振替はご相談ください",
    ],
  },
  {
    eyebrow: "DISCOUNT",
    title: "割引のご案内",
    description:
      "兄弟で通塾される場合や複数コースを受講される場合は、別途割引をご案内する予定です。開業キャンペーンの有無によって変動します。",
    bullets: [
      "兄弟割（同時通塾のお子さまが対象）",
      "複数コース受講割（2コース以上の同時受講が対象）",
      "開業キャンペーン（時期限定）",
    ],
  },
  {
    eyebrow: "CUSTOM",
    title: "見積もり・個別相談",
    description:
      "複数コースの併用や短期集中など、個別のご要望には見積もりを作成します。まずは体験授業または面談で、お子さまの状況をお聞かせください。",
  },
];

const faqItems: Array<{ q: string; a: string }> = [
  {
    q: "入会金は返金されますか？",
    a: "入会金は教材費・初期設定費を含み、ご入会成立後の返金は原則行っておりません。詳細は入会時にご説明します。",
  },
  {
    q: "途中でコースを変更できますか？",
    a: "可能です。月単位で切替・併用のご相談を承ります。料金は切替月の翌月から新コース料金が適用されます。",
  },
  {
    q: "教材費は別途必要ですか？",
    a: "通常のレッスンで使う教材は月謝に含まれます。特別な実費（外部イベント参加費・遠征費など）が発生する場合は、事前にご相談・ご案内します。",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          className="border-b border-foreground/10 bg-surface-warm"
          aria-label="料金紹介の導入"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 lg:py-28">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.32em] text-accent md:text-sm">
                PRICING
              </p>
              <h1 className="mt-5 font-heading text-3xl font-black leading-[1.18] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
                料金とスケジュール
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {siteName}
                のコース料金、入会金、支払い方法、割引のご案内をまとめています。ご家庭の状況に合わせた通い方の見積もりも承りますので、お気軽にご相談ください。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 入会金 */}
        <section
          className="mx-auto max-w-5xl px-6 py-14 md:py-20"
          aria-labelledby="admission-fee"
        >
          <ScrollReveal>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
              ADMISSION
            </p>
            <h2
              id="admission-fee"
              className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
            >
              入会金
            </h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-foreground/10 bg-surface shadow-sm md:flex md:items-stretch">
              <div className="bg-accent px-6 py-5 text-white md:flex md:flex-col md:justify-center md:px-8 md:py-8">
                <p className="text-[0.65rem] font-bold tracking-[0.22em] opacity-90 md:text-xs">
                  初回のみ
                </p>
                <p className="mt-2 font-heading text-3xl font-black tabular-nums md:text-4xl">
                  {ADMISSION_FEE_AMOUNT}
                </p>
              </div>
              <div className="px-6 py-5 md:flex-1 md:px-8 md:py-8">
                <p className="text-sm leading-relaxed text-foreground md:text-base">
                  {ADMISSION_FEE_DESCRIPTION}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted md:text-sm">
                  教材費・初期設定費を含みます。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* コース別月謝 */}
        <section
          className="border-y border-foreground/10 bg-background py-14 md:py-20"
          aria-labelledby="course-pricing"
        >
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
                MONTHLY FEE
              </p>
              <h2
                id="course-pricing"
                className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
              >
                コース別・月謝
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                2コースとも月額制です。詳しいレッスン内容や育つ力は
                <Link
                  href="/courses"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  コース紹介
                </Link>
                のページをご覧ください。
              </p>
            </ScrollReveal>

            <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
              {visibleCourses.map((c, idx) => {
                const th = courseTheme[c.key];
                const comingSoonVisible = showComingSoonUI(c);
                return (
                  <ScrollReveal key={c.id} delay={idx * 0.05}>
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-sm">
                      <div className={`px-5 py-5 ${th.headerBg} ${th.headerText}`}>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[0.65rem] font-bold tracking-[0.22em] opacity-90 md:text-xs">
                            {c.ageRange}
                          </p>
                          {comingSoonVisible ? (
                            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[0.6rem] font-black tracking-[0.18em] md:text-[0.65rem]">
                              COMING SOON
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mt-2 font-heading text-xl font-black tracking-tight md:text-2xl">
                          {c.name}
                        </h3>
                        {comingSoonVisible ? (
                          <p className="mt-3 font-heading text-2xl font-black md:text-3xl">
                            準備中
                          </p>
                        ) : (
                          <>
                            <p className="mt-3 font-heading text-2xl font-black tabular-nums leading-none md:text-3xl">
                              {c.monthlyPrice}
                            </p>
                            <p className="mt-1 text-[0.65rem] tracking-[0.22em] opacity-85 md:text-xs">
                              {c.professionalPlan ? "BASIC MONTHLY" : "MONTHLY"}
                            </p>
                            {c.professionalPlan && (
                              <div className="mt-4 rounded-xl bg-white/15 px-4 py-3">
                                <p className="text-[0.6rem] font-black tracking-[0.2em] opacity-90 md:text-[0.65rem]">
                                  {c.professionalPlan.name}
                                </p>
                                <p className="mt-1 font-heading text-xl font-black tabular-nums leading-none md:text-2xl">
                                  {c.professionalPlan.price}
                                </p>
                                <p className="mt-0.5 text-[0.6rem] leading-snug opacity-80 md:text-[0.65rem]">
                                  {c.professionalPlan.note}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col gap-4 px-5 py-6">
                        <div>
                          <p
                            className={`text-[0.65rem] font-bold tracking-[0.22em] ${th.dtStrong} md:text-xs`}
                          >
                            授業時間／回数
                          </p>
                          <p className="mt-2 text-sm font-bold text-foreground md:text-base">
                            {c.monthlySessions}
                          </p>
                        </div>
                        <div>
                          <p
                            className={`text-[0.65rem] font-bold tracking-[0.22em] ${th.dtStrong} md:text-xs`}
                          >
                            テーマ
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                            {c.themeNote}
                          </p>
                        </div>
                        <div className="mt-auto pt-3">
                          {comingSoonVisible ? (
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-muted md:text-base">
                              準備中です
                            </span>
                          ) : (
                            <Link
                              href={`/courses#${c.id}`}
                              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent md:text-base"
                            >
                              このコースの内容を見る
                              <span aria-hidden>→</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted md:text-sm">
              ※ 表示金額はすべて税込です。授業内で使う標準教材費は月謝に含まれます。
              <br />
              ※ 入会金・体験料・特別教材費などは別途必要となる場合があります。詳細は個別にご案内します。
            </p>
          </div>
        </section>

        {/* ポリシー（支払い・休講・割引・見積もり） */}
        <section
          className="mx-auto max-w-5xl px-6 py-14 md:py-20"
          aria-labelledby="policy"
        >
          <ScrollReveal>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
              POLICY
            </p>
            <h2
              id="policy"
              className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
            >
              ご入会前にご確認ください
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {policyBlocks.map((block, idx) => (
              <ScrollReveal key={block.title} delay={idx * 0.04}>
                <article className="h-full rounded-2xl border border-foreground/10 bg-surface p-5 shadow-sm md:p-6">
                  <p className="text-[0.65rem] font-bold tracking-[0.22em] text-accent md:text-xs">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-black tracking-tight text-foreground md:text-xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {block.description}
                  </p>
                  {block.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground md:text-base">
                      {block.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span aria-hidden className="text-accent">
                            ・
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* スケジュール（画像差し替え運用：public/schedule.png を上書き） */}
        <section
          className="mx-auto max-w-5xl px-6 py-14 md:py-20"
          aria-labelledby="schedule"
        >
          <ScrollReveal>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
              SCHEDULE
            </p>
            <h2
              id="schedule"
              className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
            >
              スケジュール
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-foreground/10 bg-surface shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/schedule.png"
                  alt={`${siteName}の最新スケジュール`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 960px, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* FAQ */}
        <section
          className="border-t border-foreground/10 bg-surface-warm py-14 md:py-20"
          aria-labelledby="pricing-faq"
        >
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
                FAQ
              </p>
              <h2
                id="pricing-faq"
                className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
              >
                よくあるご質問
              </h2>
            </ScrollReveal>

            <dl className="mt-8 space-y-3">
              {faqItems.map((item, idx) => (
                <ScrollReveal key={item.q} delay={idx * 0.04}>
                  <details className="group rounded-2xl border border-foreground/10 bg-surface p-5 shadow-sm transition-colors hover:border-accent/25 md:p-6">
                    <summary className="flex cursor-pointer list-none items-start gap-3 text-left">
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white md:h-7 md:w-7 md:text-sm"
                      >
                        Q
                      </span>
                      <dt className="flex-1 text-sm font-bold leading-snug text-foreground md:text-base">
                        {item.q}
                      </dt>
                      <span
                        aria-hidden
                        className="mt-0.5 inline-block text-foreground/40 transition-transform duration-200 group-open:rotate-45"
                      >
                        ＋
                      </span>
                    </summary>
                    <dd className="mt-4 pl-9 text-sm leading-relaxed text-muted md:pl-10 md:text-base">
                      {item.a}
                    </dd>
                  </details>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </section>

        {/* クロージング CTA */}
        <section
          className="bg-background py-16 md:py-24"
          aria-labelledby="pricing-cta"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.28em] text-accent md:text-sm">
                JOIN US
              </p>
              <h2
                id="pricing-cta"
                className="mt-4 font-heading text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl"
              >
                ご家庭に合う通い方を、
                <br className="hidden md:block" />
                一緒に考えていきましょう。
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                授業の雰囲気や講師との相性は、実際に体験していただくのが一番です。お子さまの様子やご家庭のお考えを伺いながら、最適な通い方をご提案します。
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <Link
                  href={trialApplicationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[3.5rem] items-center justify-center rounded-full px-8 py-4 text-base font-black tracking-wide md:min-h-[4rem] md:px-10 md:text-lg ${trialCtaGradientClasses}`}
                >
                  無料体験に参加する
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex min-h-[3.5rem] items-center justify-center rounded-full px-8 py-4 text-base font-black tracking-wide md:min-h-[4rem] md:px-10 md:text-lg ${contactInquiryCtaClasses}`}
                >
                  まずは相談してみる
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
