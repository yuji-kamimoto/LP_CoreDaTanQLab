import Image from "next/image";
import Link from "next/link";

import { HeroSection } from "@/components/HeroSection";
import { HomeContactCtaSection } from "@/components/HomeContactCtaSection";
import { HomeCourseSection } from "@/components/HomeCourseSection";
import { HomeSnsSection } from "@/components/HomeSnsSection";
import { HomeJsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDetailLink } from "@/components/SectionDetailLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { courses } from "@/lib/courses-data";
import {
  colocatedFreeSchool,
  contact,
  coreDaNamingJa,
  heroPhrase,
  siteName,
  siteTagline,
} from "@/lib/site-config";

export const revalidate = 86400;

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HomeJsonLd />
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
              <SectionDetailLink href="/courses">
                コースの詳細ページを見る
              </SectionDetailLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. アクセス */}
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
              <p className="mx-auto mt-4 max-w-xl text-muted">
                {contact.address}
              </p>
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
        </div>
      </section>

      {/* 5. SNS */}
      <HomeSnsSection />

      {/* 6. お問い合わせ */}
      <HomeContactCtaSection />

      <SiteFooter />
    </main>
  );
}
