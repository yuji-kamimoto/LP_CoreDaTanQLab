import Link from "next/link";

import { EventsMarquee } from "@/components/EventsMarquee";
import { HeroSection } from "@/components/HeroSection";
import { MonthlyScheduleCalendar } from "@/components/MonthlyScheduleCalendar";
import { NewsMarquee } from "@/components/NewsMarquee";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDetailLink } from "@/components/SectionDetailLink";
import { SiteHeader } from "@/components/SiteHeader";
import { upcomingEvents } from "@/lib/events";
import { getNewsList } from "@/lib/news";
import {
  contact,
  footerInfo,
  heroPhrase,
  siteName,
  siteTagline,
  social,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import { trialCtaGradientClasses } from "@/lib/trial-cta-styles";

export const revalidate = 60;

function formatNewsDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("ja-JP", {
      dateStyle: "medium",
      timeZone: "Asia/Tokyo",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function Home() {
  const newsData = await getNewsList(12);
  const latestNews = newsData?.contents ?? [];
  const newsMarqueeItems = latestNews.map((item) => ({
    id: item.id,
    title: item.title,
    publishedAt: item.publishedAt,
    dateLabel: formatNewsDate(item.publishedAt),
  }));

  const cal = new Date();
  const calYear = cal.getFullYear();
  const calMonth = cal.getMonth();

  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* 1. Hero：キラーフレーズのみ（行分割アニメーション） */}
      <section
        className="relative flex min-h-[calc(100dvh-4.75rem)] flex-col items-center justify-center overflow-hidden px-6 py-12 md:min-h-[calc(100dvh-5rem)] md:py-16"
        aria-label="メインビジュアル"
      >
        <HeroSection phrase={heroPhrase} />
      </section>

      <p className="sr-only">{siteTagline}</p>

      {/* 2. 塾のコンセプト */}
      <section
        id="concept"
        className="border-t-2 border-accent/15 bg-surface-warm py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              私たちのコンセプト
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
              探求学習は、正解の暗記ではなく「どう考え、どう調べ、どう表現するか」を鍛えます。好奇心を燃料に、学びが自分ごとになる体験を大切にしています。
            </p>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
            <ScrollReveal delay={0.06}>
              <article className="h-full rounded-2xl border border-foreground/10 border-l-4 border-l-accent bg-surface p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  私たちの想い
                </p>
                <h3 className="font-heading mt-3 text-lg font-semibold md:text-xl">
                  親御さんと同じ目線で、長い学びを設計する
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  成績表の一列だけで子どもを測りません。得意を伸ばし、苦手には「なぜつまずくか」から伴走します。安心して預けられるコミュニケーションを何より重視します。
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <article className="h-full rounded-2xl border border-foreground/10 border-l-4 border-l-accent bg-surface p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  対象
                </p>
                <h3 className="font-heading mt-3 text-lg font-semibold md:text-xl">
                  小学高学年〜高校生
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  「もっと知りたい」が止まらない子から、「勉強が好きになれない」子まで。入塾時の状態より、学び方と自己肯定感が前に進むことをゴールにします。
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <article className="h-full rounded-2xl border border-foreground/10 border-l-4 border-l-accent bg-surface p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  育てたい人間像
                </p>
                <h3 className="font-heading mt-3 text-lg font-semibold md:text-xl">
                  自分で課題を立て、仲間と学べる人
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  発表・振り返り・フィードバックを繰り返し、思考を言語化できる力と、他者の考えを尊重する姿勢を育みます。受験や資格にもつながる「根っこの力」です。
                </p>
              </article>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.22}>
            <div className="mt-12 flex flex-wrap gap-4">
              <SectionDetailLink href="/concept">
                コンセプトの詳細を見る
              </SectionDetailLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3a. 広げるコース */}
      <section
        id="course-hirogeru"
        className="mx-auto max-w-6xl px-6 py-24 md:py-32"
      >
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            広げるコース
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
            世界・社会・自然への興味を広げ、複数の教科を横断してテーマ探究します。観察、インタビュー、資料読解、簡単なレポート作成までを一つのプロジェクトとして体験できます。
          </p>
        </ScrollReveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "週1〜2回の探究スタジオ＋振り返り面談",
            "少人数（最大8名）で声を出しやすい環境",
            "発表会・ギャラリーウォークで成果を共有",
            "保護者向けレポートで学びの可視化",
          ].map((text, i) => (
            <ScrollReveal key={text} delay={i * 0.05}>
              <li className="rounded-2xl border-2 border-foreground/8 bg-surface px-5 py-4 text-sm leading-relaxed shadow-sm transition-all duration-300 hover:border-accent/35 hover:shadow-md">
                {text}
              </li>
            </ScrollReveal>
          ))}
        </ul>
        <ScrollReveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-4">
            <SectionDetailLink href="/courses#course-hirogeru">
              広げるコースの詳細を見る
            </SectionDetailLink>
          </div>
        </ScrollReveal>
      </section>

      {/* 3b. 深めるコース */}
      <section
        id="course-fukameru"
        className="border-t-2 border-accent/15 bg-surface-warm py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              深めるコース
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
              得意分野や進路関心を起点に、調査計画から仮説検証、まとめまでを深掘りします。論理の組み立て・根拠の評価・文章表現を、高校・大学で必要なレベルまで引き上げます。
            </p>
          </ScrollReveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "個別ミーティングでテーマと進捗を週次管理",
              "論述・小論・研究計画の型を反復練習",
              "図書とオンライン文献のリテラシー指導",
              "希望に応じたコンテスト・課外発表の伴走",
            ].map((text, i) => (
              <ScrollReveal key={text} delay={i * 0.05}>
                <li className="rounded-2xl border-2 border-foreground/8 bg-surface px-5 py-4 text-sm leading-relaxed shadow-sm transition-all duration-300 hover:border-accent/35 hover:shadow-md">
                  {text}
                </li>
            </ScrollReveal>
          ))}
          </ul>
          <ScrollReveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <SectionDetailLink href="/courses#course-fukameru">
                深めるコースの詳細を見る
              </SectionDetailLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. ニュース（横スクロール） */}
      <section
        id="news"
        className="border-t-2 border-accent/15 bg-background py-20 md:py-28"
      >
        <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-end justify-between gap-6 px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              ニュース
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              お知らせが横に流れます（ホバーで一時停止）。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <SectionDetailLink href="/news">
              お知らせ一覧・詳細を見る
            </SectionDetailLink>
          </ScrollReveal>
        </div>
        <NewsMarquee items={newsMarqueeItems} />
      </section>

      {/* 5. イベント & カレンダー */}
      <section
        id="events"
        className="border-t-2 border-accent/15 bg-surface py-20 md:py-28"
      >
        <div className="mx-auto mb-10 max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              イベント情報
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              直近のご案内です。詳細はお問い合わせください。
            </p>
          </ScrollReveal>
        </div>
        <EventsMarquee events={upcomingEvents} />
        <div className="mx-auto mt-14 max-w-6xl px-6">
          <ScrollReveal>
            <MonthlyScheduleCalendar year={calYear} monthIndex0={calMonth} />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="mt-10 flex flex-wrap gap-4">
              <SectionDetailLink href="/events">
                イベント・スケジュールの詳細を見る
              </SectionDetailLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. 料金 */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl bg-surface-warm px-6 py-24 md:py-32"
      >
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            料金について
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            税込表示の例です。兄弟割引・年間一括などはお問い合わせ時にご案内します。
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="mt-10 overflow-x-auto rounded-2xl border-2 border-accent/20 bg-surface shadow-md">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">コース別料金表</caption>
              <thead>
                <tr className="border-b border-white/15 bg-accent text-white">
                  <th
                    scope="col"
                    className="px-4 py-5 font-heading text-xs font-bold uppercase tracking-widest text-white md:px-6"
                  >
                    項目
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-5 font-heading text-xs font-bold uppercase tracking-widest text-white md:px-6"
                  >
                    広げるコース
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-5 font-heading text-xs font-bold uppercase tracking-widest text-white md:px-6"
                  >
                    深めるコース
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground/90">
                <tr className="border-b border-foreground/10">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-foreground md:px-6"
                  >
                    入会金（初回のみ）
                  </th>
                  <td className="px-4 py-4 tabular-nums md:px-6">22,000円</td>
                  <td className="px-4 py-4 tabular-nums md:px-6">22,000円</td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-foreground md:px-6"
                  >
                    月額（標準プラン）
                  </th>
                  <td className="px-4 py-4 tabular-nums md:px-6">
                    18,700円
                    <span className="mt-1 block text-xs font-normal text-muted">
                      週1コマ＋振り返り
                    </span>
                  </td>
                  <td className="px-4 py-4 tabular-nums md:px-6">
                    28,600円
                    <span className="mt-1 block text-xs font-normal text-muted">
                      週1個別＋課題添削
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-foreground/10">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-foreground md:px-6"
                  >
                    体験授業
                  </th>
                  <td className="px-4 py-4 tabular-nums md:px-6">3,300円</td>
                  <td className="px-4 py-4 tabular-nums md:px-6">3,300円</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-foreground md:px-6"
                  >
                    教材・プロジェクト費
                  </th>
                  <td className="px-4 py-4 text-muted md:px-6">
                    実費（年2回目安でご案内）
                  </td>
                  <td className="px-4 py-4 text-muted md:px-6">
                    実費（使用資料に応じて）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <div className="mt-10 flex flex-wrap gap-4">
            <SectionDetailLink href="/pricing">
              料金・割引の詳細を見る
            </SectionDetailLink>
          </div>
        </ScrollReveal>
      </section>

      {/* 7. アクセス */}
      <section
        id="access"
        className="border-t-2 border-accent/15 bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              アクセス
            </h2>
            <p className="mt-4 max-w-xl text-muted">{contact.address}</p>
            <p className="mt-2 text-sm text-muted">
              最寄り駅から徒歩8分。バス停「〇〇」前下車すぐ（開業に合わせて更新してください）。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border-2 border-accent/25 bg-surface shadow-lg shadow-accent/5">
              <iframe
                title="Google 地図"
                src={contact.mapsEmbedUrl}
                className="aspect-[16/10] min-h-[280px] w-full border-0 md:aspect-[21/9] md:min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="mt-10 flex flex-wrap gap-4">
              <SectionDetailLink href="/access">
                アクセスの詳細を見る
              </SectionDetailLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. SNS */}
      <section
        id="sns"
        className="mx-auto max-w-6xl bg-surface-warm px-6 py-24 md:py-32"
      >
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            公式アカウント
          </h2>
          <p className="mt-4 max-w-2xl text-muted md:text-lg">
            日常の学びの様子やイベント速報をお届けしています。
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={0.06}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-line-brand p-8 text-white shadow-md transition-transform duration-300 hover:-translate-y-0.5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/90">
                  LINE
                </p>
                <h3 className="font-heading mt-3 text-xl font-semibold md:text-2xl">
                  友だち追加で、体験空き状況をいち早くお知らせ
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90">
                  質問や日程調整もトークで気軽にどうぞ。自動応答と担当が連携して返信します。
                </p>
              </div>
              <Link
                href={social.lineUrl}
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold tracking-wide text-line-brand transition-transform hover:scale-[1.02]"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINE公式を開く
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-instagram-brand bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-instagram-brand">
                  Instagram
                </p>
                <h3 className="font-heading mt-3 text-xl font-semibold md:text-2xl">
                  写真とリールで、「探究の空気感」を共有
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  プロジェクトの過程や教室の雰囲気がわかるコンテンツを中心に更新しています。
                </p>
              </div>
              <Link
                href={social.instagramUrl}
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-instagram-brand px-6 py-3 text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.02]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagramを見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. お問い合わせ */}
      <section
        id="contact"
        className="border-t border-foreground/10 border-b bg-background py-20 md:py-28"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="contact-heading"
                className="font-heading text-3xl font-bold tracking-tight text-[#1a2744] md:text-4xl"
              >
                お問い合わせ
              </h2>
              <div className="mx-auto mt-6 max-w-xl space-y-2 text-sm leading-relaxed text-muted md:text-base">
                <p>お気軽にお問い合わせください。</p>
                <p>
                  見学のご予約・授業料については、こちらからご相談ください。
                </p>
              </div>
              <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-5">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f07847] via-[#e4571f] to-[#d13d12] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-md transition-[filter] hover:brightness-[1.06]"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  お問い合わせ（無料）
                </Link>
                <Link
                  href={trialApplicationFormUrl}
                  className={`inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold tracking-wide ${trialCtaGradientClasses}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  無料体験授業のお申し込み
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t-2 border-accent/25 bg-footer-ink py-14 text-sm text-footer-fg/90 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-heading text-xl font-bold text-footer-fg">
              {siteName}
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-footer-fg/75">
              {siteTagline}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-footer-fg/60">
              お子さまの学びだけでなく、親御さんが安心して相談できる場であることを大切にしています。
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.18em] text-footer-fg/70">
              教室情報
            </h2>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="text-footer-fg/55">教室所在地</dt>
                <dd className="mt-1 text-footer-fg">{contact.address}</dd>
              </div>
              <div>
                <dt className="text-footer-fg/55">営業時間</dt>
                <dd className="mt-1 text-footer-fg">
                  {footerInfo.businessHours}
                </dd>
              </div>
              <div>
                <dt className="text-footer-fg/55">連絡先</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-footer-fg hover:text-white"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-footer-fg/15 pt-8 md:border-t-0 md:border-l md:pl-8">
            <h2 className="text-xs font-bold tracking-[0.18em] text-footer-fg/70">
              運営会社
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p className="font-medium text-footer-fg">{footerInfo.operatorName}</p>
              <p className="text-footer-fg/75">{footerInfo.operatorAddress}</p>
              <Link
                href={footerInfo.operatorWebsite}
                className="inline-flex items-center rounded-full border border-footer-fg/20 px-4 py-2 text-sm font-semibold text-footer-fg transition-colors hover:border-accent hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                会社HPを見る
              </Link>
              <div className="pt-2">
                <Link
                  href="https://oneangle.jp/contact.html"
                  className="inline-flex items-center rounded-full border border-footer-fg/20 px-4 py-2 text-sm font-semibold text-footer-fg transition-colors hover:border-accent hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  会社へのお問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-footer-fg/10 px-6 pt-5 text-xs text-footer-fg/55 md:mt-12">
          <p>
            © {new Date().getFullYear()} {siteName} / Operated by{" "}
            {footerInfo.operatorName}
          </p>
          <p className="mt-2">
            教室所在地と運営会社所在地は異なります。ご来訪前に最新のご案内をご確認ください。
          </p>
        </div>
      </footer>
    </main>
  );
}
