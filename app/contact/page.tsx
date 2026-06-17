import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  SocialCard,
  instagramBrandClass,
  instagramIcon,
  lineBrandClass,
  lineIcon,
} from "@/components/SocialCard";
import {
  siteName,
  social,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import { trialCtaGradientClasses } from "@/lib/trial-cta-styles";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteName}へのお問い合わせ。見学・体験・授業料のご相談はメールフォームから。`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `お問い合わせ | ${siteName}`,
    description: `${siteName}へのお問い合わせ。見学・体験・授業料のご相談はメールフォームから。`,
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          className="border-b border-foreground/10 bg-surface-warm"
          aria-label="お問い合わせの導入"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 lg:py-28">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.32em] text-accent md:text-sm">
                CONTACT
              </p>
              <h1 className="mt-5 font-heading text-3xl font-black leading-[1.18] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
                お問い合わせ
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                ご質問・見学・授業料のご相談など、どのような内容でもお気軽にお送りください。お子さまの好奇心や熱意、ご家庭のご希望に丁寧に応えられるよう、2営業日以内にご返信いたします。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* フォーム + 補足情報 */}
        <section
          className="border-t border-foreground/10 bg-background py-14 md:py-20"
          aria-labelledby="contact-form"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <ScrollReveal>
              <div>
                <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
                  FORM
                </p>
                <h2
                  id="contact-form"
                  className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl"
                >
                  フォームから送信
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  下記フォームに必要事項をご入力のうえ送信ください。
                </p>

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <aside className="flex h-full flex-col gap-6">
                <div className="rounded-2xl bg-white p-6 shadow-md md:p-7">
                  <p className="text-center font-heading text-lg font-black tracking-tight text-foreground md:text-xl">
                    まずは無料体験から
                  </p>
                  <p className="mt-3 text-center text-sm leading-relaxed text-muted md:text-base">
                    授業の雰囲気や講師との相性を、実際にご確認いただけます。
                  </p>
                  <Link
                    href={trialApplicationFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex min-h-[3.75rem] w-full items-center justify-center rounded-full px-4 py-3 text-sm font-black tracking-wide md:min-h-[4rem] md:text-base ${trialCtaGradientClasses}`}
                  >
                    無料体験授業のお申し込み
                  </Link>
                </div>

                <SocialCard
                  brandClass={lineBrandClass}
                  icon={lineIcon}
                  label="LINE公式アカウント"
                  description="イベント情報やお知らせはこちらから！"
                  ctaText="友だち追加はこちら"
                  href={social.lineUrl}
                  compact
                />

                <SocialCard
                  brandClass={instagramBrandClass}
                  icon={instagramIcon}
                  label="Instagram"
                  description="写真とリールで、教室の様子をお届けしています。"
                  ctaText="Instagramを見る"
                  href={social.instagramUrl}
                  compact
                />
              </aside>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
