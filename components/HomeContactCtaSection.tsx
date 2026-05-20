import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { trialApplicationFormUrl } from "@/lib/site-config";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

const MailIcon = () => (
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
);

export function HomeContactCtaSection() {
  return (
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
              <p>見学のご予約・授業料についても、こちらからご相談ください。</p>
            </div>
            <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-5 md:mt-12 md:max-w-xl md:gap-6 lg:max-w-2xl">
              <Link
                href="/contact"
                className={`inline-flex min-h-[4.25rem] w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black tracking-wide md:min-h-[4.5rem] md:gap-3 md:py-4 md:text-base ${contactInquiryCtaClasses}`}
              >
                <MailIcon />
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
  );
}
