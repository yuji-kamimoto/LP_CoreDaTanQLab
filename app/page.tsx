import Image from "next/image";
import Link from "next/link";

import { HeroSection } from "@/components/HeroSection";
import { BrandLogoText } from "@/components/BrandLogoText";
import { HomeCourseSection } from "@/components/HomeCourseSection";
import { NewsCardGrid } from "@/components/NewsCardGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDetailLink } from "@/components/SectionDetailLink";
import { SiteHeader } from "@/components/SiteHeader";
import { getNewsList } from "@/lib/news";
import {
  colocatedFreeSchool,
  contact,
  coreDaNamingJa,
  footerInfo,
  heroPhrase,
  siteName,
  siteTagline,
  social,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import { courses, courseTheme } from "@/lib/courses-data";
import { formatDate } from "@/lib/format-date";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

export const revalidate = 60;

export default async function Home() {
  const newsData = await getNewsList(12);
  const latestNews = newsData?.contents ?? [];
  const newsCardItems = latestNews.map((item) => ({
    id: item.id,
    title: item.title,
    dateLabel: formatDate(item.publishedAt),
    eyecatchUrl: item.eyecatch?.url,
  }));

  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* 1. Hero：キラーフレーズ（PC のみ背景イラスト） */}
      <section
        className="relative flex min-h-[calc(100dvh-4.75rem)] flex-col items-center justify-center overflow-hidden px-6 py-12 md:min-h-[calc(100dvh-5rem)] md:py-16"
        aria-label="メインビジュアル"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          aria-hidden
        >
          <Image
            src="/hero-main-visual-desktop.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-[1] w-full">
          <HeroSection phrase={heroPhrase} />
        </div>
      </section>

      <p className="sr-only">{siteTagline}</p>

      {/* 2. ラボについて */}
      <section id="concept" className="bg-accent py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
            <ScrollReveal>
              <div className="text-white">
                <h2 className="text-center font-heading text-3xl font-black leading-tight tracking-tight md:text-4xl lg:text-left lg:text-[2.5rem] lg:leading-[1.15]">
                  ラボについて
                </h2>
                <p className="mt-6 text-center text-lg font-semibold leading-relaxed text-white md:text-xl lg:text-left">
                  {siteTagline}
                </p>
                <div className="mt-6 text-sm leading-[1.9] text-white/90 md:text-base">
                  <p>
                    {coreDaNamingJa}
                    探究ラボでは、この想いのもと、正解の丸暗記ではなく「どう考え、どう調べ、どう表現するか」を重ねる探究学習を中心にしています。授業の中で好奇心が動き出す機会を何度も設計し、子どもたちの熱意に言葉と時間で応え、小さな行動の積み重ねが、やがて自分の軸――「核」になるように伴走します。
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl ring-2 ring-white/20">
                <Image
                  src="/Lab_Preview_Image.jpg"
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
                className="inline-flex min-h-[4.5rem] items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-bold tracking-wide text-white shadow-md shadow-black/10 transition-all duration-200 ease-out hover:scale-[1.03] hover:border-white hover:bg-white hover:text-accent hover:shadow-xl hover:shadow-black/25 active:scale-[0.98] md:px-10 md:text-lg"
              >
                ラボについての詳細を見る
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. コース紹介 */}
      <section
        id="courses"
        className="border-t-2 border-accent/15 bg-surface py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                コースの紹介
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                コースは「0→1」「スキル」「探究」の3つ。子どもたちの状況に合わせてお選びいただけます。
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 space-y-8">
            <HomeCourseSection
              course={courses[0]}
              imageSrc="/0-1_Course_Image.jpg"
              imagePosition="right"
            />
            <HomeCourseSection
              course={courses[1]}
              imageSrc="/Skill_Course_Image.jpg"
              imagePosition="left"
            />
            <HomeCourseSection
              course={courses[2]}
              imageSrc="/TanQ_Course_Image.jpg"
              imagePosition="right"
            />
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <SectionDetailLink href="/courses">コースの詳細ページを見る</SectionDetailLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. ニュース */}
      <section
        id="news"
        className="border-t-2 border-accent/15 bg-background py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
                最新のニュース
              </h2>
              <p className="mt-3 text-sm text-muted md:text-base">
                教室からの最新情報をお届けします。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <SectionDetailLink href="/news">
                お知らせ一覧を見る
              </SectionDetailLink>
            </ScrollReveal>
          </div>
          <NewsCardGrid items={newsCardItems} />
        </div>
      </section>

      {/* 5. 料金 */}
      <section
        id="pricing"
        className="bg-[#eef6fc] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
              料金について
            </h2>
            <div className="mt-6 grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="w-fit max-w-full justify-self-center overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-md dark:border-foreground/20 dark:bg-surface lg:col-span-3">
                <dl
                  className={`divide-y divide-dashed ${courseTheme.zeroOne.divideClass} w-max max-w-full px-5 py-1 text-sm md:text-base`}
                >
                  <div className="py-6">
                    <div className="flex max-w-full flex-row flex-wrap items-center gap-x-2 md:gap-x-3">
                      <dt
                        className={`shrink-0 font-bold ${courseTheme.zeroOne.dtStrong}`}
                      >
                        入会金
                      </dt>
                      <dd className="flex min-w-0 flex-row flex-nowrap items-baseline gap-x-2 text-sm leading-relaxed md:gap-x-3 md:text-base">
                        <span className="tabular-nums font-medium text-foreground md:text-lg">
                          11,000円（税込）
                        </span>
                        <span className="text-muted">
                          初回のご入会時に一度だけお支払いいただく費用です。
                        </span>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {courses.map((c) => {
              const th = courseTheme[c.key];
              return (
                <article
                  key={c.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-surface"
                  aria-labelledby={`pricing-${c.id}`}
                >
                  <h3
                    id={`pricing-${c.id}`}
                    className={`${th.headerBg} ${th.headerText} px-4 py-4 text-center font-heading text-xl font-bold md:py-4 md:text-2xl`}
                  >
                    {c.name}
                  </h3>
                  <dl
                    className={`divide-y divide-dashed ${th.divideClass} px-5 py-1 text-sm md:text-base`}
                  >
                    <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                      <dt className={`text-center font-bold ${th.dtStrong}`}>
                        月謝
                      </dt>
                      <dd className="text-left tabular-nums text-foreground">
                        {c.monthlyPrice}
                      </dd>
                    </div>
                    <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                      <dt className={`text-center font-bold ${th.dtStrong}`}>
                        レッスン
                      </dt>
                      <dd className="text-left text-foreground">
                        {c.monthlySessions}
                      </dd>
                    </div>
                    <div className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]">
                      <dt className={`text-center font-bold ${th.dtStrong}`}>
                        備考
                      </dt>
                      <dd className="text-left text-sm text-muted md:text-base">
                        {c.themeNote}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            <div className="text-center">
            <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
              アクセス
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{contact.address}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {siteName}は、
              <a
                href={colocatedFreeSchool.websiteUrl}
                className="font-semibold text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {colocatedFreeSchool.name}
              </a>
              と
              <strong className="font-medium text-foreground">
                同一の施設で開講しています。
              </strong>
            </p>
            </div>
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
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
          <div className="text-center">
            <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
              公式アカウント
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted md:text-lg">
              日常の学びの様子やイベント速報をお届けしています。
            </p>
          </div>
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
                className="font-heading text-3xl font-black tracking-tight text-[#1a2744] md:text-4xl"
              >
                お問い合わせ
              </h2>
              <div className="mx-auto mt-6 max-w-xl space-y-2 text-sm leading-relaxed text-muted md:text-base">
                <p>
                  学びのご相談・体験のお申し込みは、お気軽にどうぞ。教室では、子どもの好奇心と行動を大切にし、保護者の方のご不安やご希望にも丁寧に応える場づくりを心がけています。
                </p>
                <p>
                  見学のご予約・授業料についても、こちらからご相談ください。
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
            <div className="max-w-2xl">
              <BrandLogoText className="block text-left text-xl leading-tight text-footer-fg sm:text-2xl md:text-3xl lg:text-[1.85rem]" />
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-footer-fg/75">
              {siteTagline}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-footer-fg/60">
              名前に込めた想いに沿うよう、学びの機会と応答を大切にしつつ、親御さんが安心して相談できる場であることも重ねています。
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
                  <span className="mt-2 block text-xs leading-relaxed text-footer-fg/70">
                    {footerInfo.businessHoursNote}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-footer-fg/55">連絡先</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-footer-fg hover:text-accent"
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
                className="inline-flex items-center rounded-full border border-footer-fg/20 px-4 py-2 text-sm font-semibold text-footer-fg transition-colors hover:border-accent hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                会社HPを見る
              </Link>
              <div className="pt-2">
                <Link
                  href="https://oneangle.jp/contact.html"
                  className="inline-flex items-center rounded-full border border-footer-fg/20 px-4 py-2 text-sm font-semibold text-footer-fg transition-colors hover:border-accent hover:text-accent"
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
