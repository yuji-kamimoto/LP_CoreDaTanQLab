import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import {
  contact,
  footerInfo,
  siteName,
  social,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import { trialCtaGradientClasses } from "@/lib/trial-cta-styles";

export const metadata: Metadata = {
  title: `お問い合わせ | ${siteName}`,
  description:
    "メールフォームからお問い合わせいただけます。見学・授業料などもこちらからどうぞ。",
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
            className="font-brand min-w-0 max-w-[min(100%,11rem)] truncate text-center text-[0.65rem] leading-tight tracking-tight text-foreground sm:max-w-[13rem] sm:text-xs"
          >
            {siteName}
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
          ご質問や見学のご希望など、フォームよりお送りください。2営業日以内にご返信いたします。
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>

        <div className="mt-12 rounded-2xl border border-foreground/10 bg-surface/90 px-5 py-5 text-sm backdrop-blur-sm md:px-6">
          <p className="font-semibold text-foreground">その他の連絡先</p>
          <dl className="mt-4 space-y-3 text-muted">
            <div>
              <dt className="font-medium text-foreground">お電話</dt>
              <dd className="mt-0.5">
                <a
                  href={`tel:${contact.phone.replace(/-/g, "")}`}
                  className="tabular-nums text-accent hover:underline"
                >
                  {contact.phone}
                </a>
                <span className="mt-1 block text-xs leading-relaxed">
                  {footerInfo.businessHoursWeekday}
                  <br />
                  {footerInfo.businessHoursWeekend}
                </span>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">メール（直接）</dt>
              <dd className="mt-0.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent hover:underline"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
          </dl>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <li>
              <Link
                href={social.lineUrl}
                className="text-line-brand hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINE公式
              </Link>
            </li>
            <li>
              <Link
                href={social.instagramUrl}
                className="text-instagram-brand hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
