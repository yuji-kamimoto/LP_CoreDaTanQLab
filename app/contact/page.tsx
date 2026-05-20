import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogoText } from "@/components/BrandLogoText";
import { ContactForm } from "@/components/ContactForm";
import { siteName, trialApplicationFormUrl } from "@/lib/site-config";
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
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/40 via-background to-[#f2ebe4]/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-[min(70vw,28rem)] w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl"
        aria-hidden
      />

      <header className="relative z-10 border-b-2 border-accent/20 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <Link
            href="/"
            className="shrink-0 text-xs font-bold tracking-wide text-accent hover:underline sm:text-sm"
          >
            ← トップへ
          </Link>
          <Link
            href="/"
            aria-label={siteName}
            className="flex min-w-0 shrink justify-center py-0.5"
          >
            <BrandLogoText className="max-w-[min(78vw,16rem)] text-center text-[clamp(0.75rem,2.6vw,1.1rem)] leading-tight text-foreground sm:max-w-[19rem] md:max-w-[22rem]" />
          </Link>
          <Link
            href={trialApplicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 rounded-full px-3 py-2 text-center text-[0.65rem] font-bold leading-snug tracking-wide sm:px-5 sm:py-2.5 sm:text-xs md:text-sm ${trialCtaGradientClasses}`}
          >
            無料体験に参加！
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-lg px-6 py-10 md:py-16">
        <h1 className="font-heading text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          お問い合わせ
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted">
          ご質問や見学のご希望など、フォームよりお送りください。お子さまの好奇心や熱意、ご家庭のご希望に丁寧に応えられるよう、2営業日以内にご返信いたします。
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
