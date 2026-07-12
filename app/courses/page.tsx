import type { Metadata } from "next";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  courseRoutingHints,
  courses,
  courseTheme,
  getVisibleCourseRoutingHints,
  showComingSoonUI,
  visibleCourses,
} from "@/lib/courses-data";
import { siteName, trialApplicationFormUrl } from "@/lib/site-config";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

export const metadata: Metadata = {
  title: "コース",
  description: `${siteName}の2コース（0→1・探究）。好奇心に機会、熱意に応え、行動で核を育てます。`,
  alternates: { canonical: "/courses" },
  openGraph: {
    title: `コース | ${siteName}`,
    description: `${siteName}の2コース（0→1・探究）。好奇心に機会、熱意に応え、行動で核を育てます。`,
    url: "/courses",
    type: "website",
  },
};

const courseIdByKey = Object.fromEntries(
  courses.map((c) => [c.key, c.id]),
) as Record<(typeof courses)[number]["key"], string>;

function CourseRoutingCard({
  hint,
  index,
}: {
  hint: (typeof courseRoutingHints)[number];
  index: number;
}) {
  return (
    <li className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-surface p-5 shadow-sm transition-all duration-200 hover:border-accent/25 hover:shadow-md md:p-6">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-1 -top-2 font-heading text-[4.5rem] font-black leading-none text-foreground/[0.04] md:text-[5rem]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <p className="relative text-base font-bold leading-snug text-foreground md:text-lg">
        {hint.profile}
      </p>

      <div className="relative mt-5 flex flex-1 flex-col justify-end gap-3 border-t border-dashed border-foreground/10 pt-4">
        <p className="text-[0.65rem] font-bold tracking-[0.22em] text-muted md:text-xs">
          おすすめコース
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {hint.recommendations.map((rec, i) => {
            const th = courseTheme[rec.key];
            return (
              <span key={rec.key} className="inline-flex items-center gap-2">
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="text-xs font-bold text-muted/50"
                  >
                    or
                  </span>
                ) : null}
                <Link
                  href={`#${courseIdByKey[rec.key]}`}
                  className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold transition-opacity hover:opacity-85 md:text-sm ${th.badge}`}
                >
                  {rec.label}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default function CoursesDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          className="border-b border-foreground/10 bg-surface-warm"
          aria-label="コース紹介の導入"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 lg:py-28">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.32em] text-accent md:text-sm">
                COURSES
              </p>
              <h1 className="mt-5 font-heading text-3xl font-black leading-[1.18] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
                2つのコースで、
                <br className="hidden md:block" />
                お子さまの「好き」を育てます。
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {siteName}
                では、お子さまの状態とご家庭のご希望に合わせて「0→1」「探究」の
                2コースをご用意しています。回数・時間・ねらいは異なりますが、根底にはどのコースも
                「好奇心に機会を、熱意に応え、行動で核をつくる」という共通の想いを置いています。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* コース選びのナビ */}
        <section
          className="mx-auto max-w-5xl px-6 py-14 md:py-20"
          aria-labelledby="course-routing"
        >
          <ScrollReveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
                  HOW TO CHOOSE
                </p>
                <h2
                  id="course-routing"
                  className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
                >
                  どのコースが合いそう？
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted md:max-w-md md:text-base">
                迷ったら、当てはまるタイプからご覧ください。複数を組み合わせることもできます。
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {getVisibleCourseRoutingHints().map((hint, index) => (
                <CourseRoutingCard key={hint.id} hint={hint} index={index} />
              ))}
            </ul>
          </ScrollReveal>
        </section>

        {/* 3コース比較サマリー */}
        <section
          className="border-y border-foreground/10 bg-background py-14 md:py-20"
          aria-labelledby="course-summary"
        >
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
                AT A GLANCE
              </p>
              <h2
                id="course-summary"
                className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
              >
                2つのコース、ひと目で比較。
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
              {visibleCourses.map((c, idx) => {
                const th = courseTheme[c.key];
                const comingSoonVisible = showComingSoonUI(c);
                return (
                  <ScrollReveal key={c.id} delay={idx * 0.05}>
                    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-sm">
                      <div
                        className={`flex h-full flex-col ${
                          c.comingSoon && comingSoonVisible ? "grayscale" : ""
                        }`}
                      >
                      <div
                        className={`px-5 py-5 ${th.headerBg} ${th.headerText}`}
                      >
                        <p className="text-[0.65rem] font-bold tracking-[0.22em] opacity-90 md:text-xs">
                          {c.ageRange}
                        </p>
                        <h3 className="mt-2 font-heading text-xl font-black tracking-tight md:text-2xl">
                          {c.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium leading-snug opacity-95">
                          {c.tagline}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col gap-5 px-5 py-6">
                        <div>
                          <p
                            className={`text-[0.65rem] font-bold tracking-[0.22em] ${th.dtStrong} md:text-xs`}
                          >
                            提供価値
                          </p>
                          <p className="mt-2 text-sm font-bold leading-snug text-foreground md:text-base">
                            {c.valueTheme}
                          </p>
                        </div>
                        <div>
                          <p
                            className={`text-[0.65rem] font-bold tracking-[0.22em] ${th.dtStrong} md:text-xs`}
                          >
                            授業時間／回数
                          </p>
                          <p className="mt-2 text-sm text-foreground md:text-base">
                            {c.monthlySessions}
                          </p>
                          <p className="mt-1 text-xs text-muted md:text-sm">
                            {c.themeNote}
                          </p>
                        </div>
                        <div>
                          <p
                            className={`text-[0.65rem] font-bold tracking-[0.22em] ${th.dtStrong} md:text-xs`}
                          >
                            子どもに起こる変化
                          </p>
                          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted md:text-base">
                            {c.childChanges.map((line) => (
                              <li key={line} className="flex gap-2">
                                <span aria-hidden className={th.dtStrong}>
                                  →
                                </span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-2">
                          {comingSoonVisible ? (
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-muted md:text-base">
                              準備中です
                            </span>
                          ) : (
                            <Link
                              href={`#${c.id}`}
                              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent md:text-base"
                            >
                              このコースの詳細を見る
                              <span aria-hidden>↓</span>
                            </Link>
                          )}
                        </div>
                      </div>
                      </div>

                      {comingSoonVisible ? (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-neutral-900/70 px-4 text-center backdrop-blur-[2px]">
                          <span className="font-heading text-3xl font-black uppercase tracking-[0.1em] text-white drop-shadow-lg md:text-4xl">
                            Coming Soon
                          </span>
                          <span className="text-xs font-bold tracking-wide text-white/85 md:text-sm">
                            準備中です
                          </span>
                        </div>
                      ) : null}
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted md:text-sm">
              ※ 料金・割引・支払い方法は
              <Link
                href="/pricing"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                料金とスケジュール
              </Link>
              のページにまとめています。
            </p>
          </div>
        </section>

        {/* 各コース詳細 */}
        {visibleCourses.map((c, idx) => {
          const th = courseTheme[c.key];
          const comingSoonVisible = showComingSoonUI(c);

          return (
            <section
              key={c.id}
              id={c.id}
              aria-labelledby={`${c.id}-title`}
              className={`scroll-mt-24 border-b border-foreground/10 py-16 md:py-24 ${
                idx % 2 === 0 ? "bg-background" : "bg-surface-warm"
              }`}
            >
              <div className="mx-auto max-w-5xl px-6">
                <ScrollReveal>
                  {/* コースヘッダー */}
                  <div
                    className={`overflow-hidden rounded-3xl ${th.headerBg} ${th.headerText} px-6 py-8 md:px-10 md:py-10`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[0.65rem] font-bold tracking-[0.28em] opacity-90 md:text-xs">
                        COURSE 0{idx + 1} / {c.ageRange}
                      </p>
                      {comingSoonVisible ? (
                        <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[0.6rem] font-black tracking-[0.18em] md:text-[0.65rem]">
                          COMING SOON
                        </span>
                      ) : null}
                    </div>
                    <h2
                      id={`${c.id}-title`}
                      className="mt-3 font-heading text-2xl font-black tracking-tight md:text-4xl"
                    >
                      {c.name}
                    </h2>
                    <p className="mt-3 text-base font-bold leading-snug opacity-95 md:text-lg">
                      {c.tagline}
                    </p>
                    <p className="mt-4 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium md:text-base">
                      {c.valueTheme}
                    </p>
                  </div>
                </ScrollReveal>

                <div className="mt-10 space-y-12">
                  {comingSoonVisible ? (
                    <ScrollReveal>
                      <div className="rounded-3xl border-2 border-dashed border-foreground/15 bg-surface px-6 py-12 text-center md:px-10 md:py-16">
                        <p
                          className={`text-[0.7rem] font-bold tracking-[0.28em] ${th.dtStrong} md:text-xs`}
                        >
                          COMING SOON
                        </p>
                        <h3 className="mt-3 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl">
                          ただいま準備中です
                        </h3>
                        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                          {c.name}
                          は現在準備を進めています。開講時期や詳しい内容が決まり次第、こちらのページでお知らせします。先行してご相談されたい方は、お気軽にお問い合わせください。
                        </p>
                        <div className="mt-8 flex justify-center">
                          <Link
                            href="/contact"
                            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border-2 border-foreground/15 px-7 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent md:text-base"
                          >
                            このコースについて問い合わせる
                          </Link>
                        </div>
                      </div>
                    </ScrollReveal>
                  ) : (
                    /* このコースで育つ3つの変化 */
                    <ScrollReveal>
                      <div>
                        <p
                          className={`text-[0.7rem] font-bold tracking-[0.28em] ${th.dtStrong} md:text-xs`}
                        >
                          CHANGES
                        </p>
                        <h3 className="mt-2 font-heading text-xl font-black tracking-tight text-foreground md:text-2xl">
                          このコースで育つ、子どもの変化
                        </h3>
                        <ul className="mt-5 grid gap-3 md:grid-cols-3">
                          {c.childChanges.map((line, i) => (
                            <li
                              key={line}
                              className="rounded-2xl border-2 border-foreground/10 bg-surface px-5 py-5 shadow-sm"
                            >
                              <span
                                aria-hidden
                                className={`font-heading text-xl font-black ${th.dtStrong} md:text-2xl`}
                              >
                                0{i + 1}
                              </span>
                              <p className="mt-3 text-sm font-bold leading-snug text-foreground md:text-base">
                                {line}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* クロージング CTA */}
        <section
          className="bg-surface-warm py-16 md:py-24"
          aria-labelledby="courses-cta"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.28em] text-accent md:text-sm">
                JOIN US
              </p>
              <h2
                id="courses-cta"
                className="mt-4 font-heading text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl"
              >
                どのコースが合うかは、
                <br className="hidden md:block" />
                一緒に決めていきましょう。
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                授業の雰囲気や講師との相性は、実際に体験していただくのが一番です。お子さまの様子やご家庭のお考えを伺いながら、合う通い方をご提案します。
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
              <p className="mt-8 text-xs leading-relaxed text-muted md:text-sm">
                ※ 定員・時間割の確定版は開業時期に合わせてお知らせします。最新情報はお問い合わせでご確認ください。
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
