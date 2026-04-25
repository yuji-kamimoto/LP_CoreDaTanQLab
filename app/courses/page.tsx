import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { siteName } from "@/lib/site-config";
import {
  courseRoutingHints,
  courses,
  courseTheme,
  inquiryGuidingPrinciples,
} from "@/lib/courses-data";

export const metadata: Metadata = {
  title: `コース | ${siteName}`,
  description: `${siteName}の3コース（0→1・スキル・探究）。好奇心に機会、熱意に応え、行動で核を育てます。`,
};

export default function CoursesDetailPage() {
  return (
    <SubpageShell title="コース">
      <p className="leading-relaxed text-muted">
        {`${siteName}では、お子さまの状態とご家庭のご希望に応じて「0→1」「スキル」「探究」の3コースをご用意しています。それぞれ回数・時間・ねらいが異なりますが、根底には CoreDa! の想い——好奇心に機会を、熱意に応え、行動で核をつくる——を共通に置いています。`}
      </p>

      <section className="scroll-mt-28 border-t border-foreground/10 pt-10">
        <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
          1. 対象
        </h2>
        <h3 className="mt-8 font-heading text-base font-semibold text-foreground md:text-lg">
          対象年齢
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border-2 border-foreground/10 bg-surface px-4 py-4 shadow-sm"
            >
              <p className="text-sm font-bold text-accent">{c.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {c.ageRange}
              </p>
            </div>
          ))}
        </div>
        <h3 className="mt-10 font-heading text-base font-semibold text-foreground md:text-lg">
          ターゲット層（目安）
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted md:text-base">
          {courseRoutingHints.map((hint) => (
            <li
              key={hint}
              className="rounded-xl border border-foreground/10 bg-surface-warm/80 px-4 py-3 dark:bg-surface-warm/20"
            >
              {hint}
            </li>
          ))}
        </ul>
      </section>

      <section className="scroll-mt-28 border-t border-foreground/10 pt-10">
        <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
          2. 提供価値
        </h2>
        <p className="mt-3 text-sm text-muted md:text-base">
          コースごとの訴求テーマと、子ども側に期待する変化のイメージです。
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {courses.map((c) => {
            const th = courseTheme[c.key];
            return (
              <article
                key={c.id}
                className="flex flex-col overflow-hidden rounded-2xl border-2 border-foreground/10 bg-surface shadow-sm"
              >
                <div className={`px-4 py-4 ${th.headerBg} ${th.headerText}`}>
                  <h3 className="font-heading text-lg font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm font-medium opacity-95">
                    {c.tagline}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-4 px-4 py-5">
                  <p className="text-sm font-semibold text-foreground">
                    {c.valueTheme}
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {c.childChanges.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-accent" aria-hidden>
                          →
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {courses.map((c) => {
        const th = courseTheme[c.key];
        return (
          <section
            key={c.id}
            id={c.id}
            className="scroll-mt-28 border-t border-foreground/10 pt-12"
          >
            <div
              className={`rounded-2xl px-5 py-6 md:px-8 md:py-8 ${th.headerBg} ${th.headerText}`}
            >
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                {c.name}
              </h2>
              <p className="mt-2 text-sm font-medium opacity-95 md:text-base">
                {c.tagline}
              </p>
            </div>

            <div className="mt-8 space-y-10">
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
                  月の「型」（何を、どう学ぶか）
                </h3>
                <p className="mt-3 text-sm text-muted md:text-base">
                  <span className="font-semibold text-foreground">
                    {c.monthlySessions}
                  </span>
                  ・
                  <span className="font-semibold tabular-nums text-foreground">
                    {c.monthlyPrice}
                  </span>
                  <span className="block pt-1">{c.themeNote}</span>
                </p>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted md:text-base">
                  {c.formatSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                {c.formatExtra?.length ? (
                  <ul className="mt-4 space-y-2 border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted">
                    {c.formatExtra.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div>
                <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
                  指導の思想
                </h3>
                <dl className="mt-4 space-y-6 text-sm leading-relaxed md:text-base">
                  <div>
                    <dt className={`font-bold ${th.dtStrong}`}>目的</dt>
                    <dd className="mt-2 text-muted">
                      {c.philosophy.purpose}
                    </dd>
                  </div>
                  <div>
                    <dt className={`font-bold ${th.dtStrong}`}>指導スタイル</dt>
                    <dd className="mt-2 text-muted">
                      {c.philosophy.style}
                    </dd>
                  </div>
                  <div>
                    <dt className={`font-bold ${th.dtStrong}`}>行動規範</dt>
                    <dd className="mt-2">
                      <ul className="list-disc space-y-2 pl-5 text-muted">
                        {c.philosophy.norms.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className={`font-bold ${th.dtStrong}`}>
                      保護者への共有
                    </dt>
                    <dd className="mt-2">
                      <ul className="list-disc space-y-2 pl-5 text-muted">
                        {c.philosophy.parents.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                {c.parentNote ? (
                  <p className="mt-4 rounded-xl bg-surface-warm px-4 py-3 text-sm text-muted dark:bg-surface-warm/15">
                    {c.parentNote}
                  </p>
                ) : null}
                {c.key === "inquiry" ? (
                  <div className="mt-8">
                    <h4 className="font-heading text-sm font-semibold text-foreground md:text-base">
                      指導方針（チーム運営のベストプラクティスを参考にした10条）
                    </h4>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted md:text-base">
                      {inquiryGuidingPrinciples.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}

      <p className="mt-12 text-xs text-muted md:text-sm">
        定員・時間割の確定版は開業時期に合わせてお知らせします。最新情報はニュースまたはお問い合わせでご確認ください。
      </p>
    </SubpageShell>
  );
}
