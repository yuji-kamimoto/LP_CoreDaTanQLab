import Image from "next/image";
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
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

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

      {/* 2. コンセプト */}
      <section id="concept" className="bg-accent py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
            <ScrollReveal>
              <div className="text-white">
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                  コンセプト
                </h2>
                <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
                  {siteTagline}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-[1.9] text-white/90 md:text-base">
                  <p>
                    探求学習は、正解の暗記ではなく「どう考え、どう調べ、どう表現するか」を鍛えます。好奇心を燃料に、学びが自分ごとになる体験を大切にしています。
                  </p>
                  <p>
                    成績表の一列だけで子どもを測りません。得意を伸ばし、苦手には「なぜつまずくか」から伴走します。小学高学年から高校生まで、入塾時の状態より学び方と自己肯定感が前に進むことを目指します。発表・振り返り・フィードバックを重ね、自分で課題を立て、仲間と学べる力を育みます。
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl ring-2 ring-white/20">
                <Image
                  src="/concept-section.jpg"
                  alt={`${siteName}の学びのイメージ`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  priority={false}
                />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14}>
            <div className="mt-10 flex justify-center lg:mt-14">
              <Link
                href="/concept"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-white/15"
              >
                コンセプトの詳細を見る
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Link>
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
        className="bg-[#eef6fc] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            料金について
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            税込表示の例です。兄弟割引・年間一括などはお問い合わせ時にご案内します。
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <article
              className="overflow-hidden rounded-2xl bg-white shadow-md"
              aria-labelledby="pricing-card-hirogeru-title"
            >
              <h3
                id="pricing-card-hirogeru-title"
                className="bg-accent px-4 py-4 text-center font-heading text-base font-bold text-white md:py-4 md:text-lg"
              >
                広げるコース
              </h3>
              <dl className="divide-y divide-dashed divide-accent/30 px-5 py-1 text-sm md:text-base">
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-accent">
                    入会金（初回のみ）
                  </dt>
                  <dd className="text-left tabular-nums text-foreground">
                    22,000円（税込）
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-accent">
                    月額（標準プラン）
                  </dt>
                  <dd className="text-left tabular-nums text-foreground">
                    18,700円（税込）
                    <span className="mt-1 block text-xs font-normal text-muted">
                      週1コマ＋振り返り
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-accent">
                    体験授業
                  </dt>
                  <dd className="text-left tabular-nums text-foreground">
                    3,300円（税込）
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-accent">
                    教材・プロジェクト費
                  </dt>
                  <dd className="text-left text-sm text-muted md:text-base">
                    実費（年2回目安でご案内）
                  </dd>
                </div>
              </dl>
            </article>

            <article
              className="overflow-hidden rounded-2xl bg-white shadow-md"
              aria-labelledby="pricing-card-fukameru-title"
            >
              <h3
                id="pricing-card-fukameru-title"
                className="bg-[#2563eb] px-4 py-4 text-center font-heading text-base font-bold text-white md:py-4 md:text-lg"
              >
                深めるコース
              </h3>
              <dl className="divide-y divide-dashed divide-[#2563eb]/35 px-5 py-1 text-sm md:text-base">
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-[#1d4ed8]">
                    入会金（初回のみ）
                  </dt>
                  <dd className="text-left tabular-nums text-foreground">
                    22,000円（税込）
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-[#1d4ed8]">
                    月額（標準プラン）
                  </dt>
                  <dd className="text-left tabular-nums text-foreground">
                    28,600円（税込）
                    <span className="mt-1 block text-xs font-normal text-muted">
                      週1個別＋課題添削
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-[#1d4ed8]">
                    体験授業
                  </dt>
                  <dd className="text-left tabular-nums text-foreground">
                    3,300円（税込）
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                  <dt className="text-right font-bold text-[#1d4ed8]">
                    教材・プロジェクト費
                  </dt>
                  <dd className="text-left text-sm text-muted md:text-base">
                    実費（使用資料に応じて）
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <div className="mt-10 flex flex-wrap gap-4">
            <SectionDetailLink href="/pricing">
              料金・割引の詳細を見る
            </SectionDetailLink>
          </div>
        </ScrollReveal>
        </div>
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
            <div className="flex h-full min-h-[18rem] flex-col rounded-2xl bg-white p-8 shadow-md transition-transform duration-300 hover:-translate-y-0.5">
              <div className="rounded-xl border-2 border-line-brand px-4 py-4">
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="h-7 w-7 shrink-0 text-line-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="6" y="2" width="12" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <span className="text-center text-lg font-black tracking-tight text-line-brand md:text-xl">
                    LINE公式アカウント
                  </span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-extrabold leading-relaxed text-foreground/85 md:text-base">
                イベント情報やお知らせはこちらから！
              </p>
              <Link
                href={social.lineUrl}
                className="mt-auto flex w-full items-center gap-2 rounded-full bg-line-brand px-2 py-3.5 text-sm font-black tracking-wide text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-brand md:gap-3 md:py-4 md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="h-10 w-10 shrink-0" aria-hidden />
                <span className="min-w-0 flex-1 text-center">
                  友だち追加はこちら
                </span>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5 text-line-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex h-full min-h-[18rem] flex-col rounded-2xl bg-white p-8 shadow-md transition-transform duration-300 hover:-translate-y-0.5">
              <div className="rounded-xl border-2 border-instagram-brand px-4 py-4">
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="h-7 w-7 shrink-0 text-instagram-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="text-center text-lg font-black tracking-tight text-instagram-brand md:text-xl">
                    Instagram
                  </span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-extrabold leading-relaxed text-foreground/85 md:text-base">
                写真とリールで、教室の様子をお届けしています。
              </p>
              <Link
                href={social.instagramUrl}
                className="mt-auto flex w-full items-center gap-2 rounded-full bg-instagram-brand px-2 py-3.5 text-sm font-black tracking-wide text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-instagram-brand md:gap-3 md:py-4 md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="h-10 w-10 shrink-0" aria-hidden />
                <span className="min-w-0 flex-1 text-center">
                  Instagramを見る
                </span>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5 text-instagram-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
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
              <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-5 md:mt-12 md:max-w-xl md:gap-6 lg:max-w-2xl">
                <Link
                  href="/contact"
                  className={`inline-flex min-h-[4.25rem] w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black tracking-wide md:min-h-[4.5rem] md:gap-3 md:py-4 md:text-base ${contactInquiryCtaClasses}`}
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
                  className={`inline-flex min-h-[4.25rem] w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-black tracking-wide md:min-h-[4.5rem] md:py-4 md:text-base ${trialCtaGradientClasses}`}
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
            <p className="font-brand text-xl text-footer-fg">
              {siteName}
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-footer-fg/75">
              {siteTagline}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-footer-fg/60">
              お子さまの学びだけでなく、親御さんが安心して相談できる場であることを大切にしています。
            </p>
          </div>

          <div className="md:pt-8">
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
                  {footerInfo.businessHoursWeekday}
                  <br />
                  {footerInfo.businessHoursWeekend}
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
