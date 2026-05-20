import Link from "next/link";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { social } from "@/lib/site-config";

type SocialCardProps = {
  brandClass: {
    text: string;
    bg: string;
    border: string;
    outline: string;
  };
  icon: ReactNode;
  label: string;
  description: string;
  ctaText: string;
  href: string;
};

const ChevronRight = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

function SocialCard({
  brandClass,
  icon,
  label,
  description,
  ctaText,
  href,
}: SocialCardProps) {
  return (
    <div className="flex h-full min-h-[18rem] flex-col rounded-2xl bg-white p-8 shadow-md transition-transform duration-300 hover:-translate-y-0.5">
      <div className={`rounded-xl border-2 ${brandClass.border} px-4 py-4`}>
        <div className="flex items-center justify-center gap-3">
          {icon}
          <span
            className={`text-center text-lg font-black tracking-tight ${brandClass.text} md:text-xl`}
          >
            {label}
          </span>
        </div>
      </div>
      <p className="mt-6 text-center text-sm font-extrabold leading-relaxed text-foreground/85 md:text-base">
        {description}
      </p>
      <Link
        href={href}
        className={`mt-auto flex w-full items-center gap-2 rounded-full ${brandClass.bg} px-2 py-3.5 text-sm font-black tracking-wide text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${brandClass.outline} md:gap-3 md:py-4 md:text-base`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="h-10 w-10 shrink-0" aria-hidden />
        <span className="min-w-0 flex-1 text-center">{ctaText}</span>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
          aria-hidden
        >
          <ChevronRight className={`h-5 w-5 ${brandClass.text}`} />
        </span>
      </Link>
    </div>
  );
}

const lineIcon = (
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
);

const instagramIcon = (
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
);

export function HomeSnsSection() {
  return (
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
          <SocialCard
            brandClass={{
              text: "text-line-brand",
              bg: "bg-line-brand",
              border: "border-line-brand",
              outline: "focus-visible:outline-line-brand",
            }}
            icon={lineIcon}
            label="LINE公式アカウント"
            description="イベント情報やお知らせはこちらから！"
            ctaText="友だち追加はこちら"
            href={social.lineUrl}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <SocialCard
            brandClass={{
              text: "text-instagram-brand",
              bg: "bg-instagram-brand",
              border: "border-instagram-brand",
              outline: "focus-visible:outline-instagram-brand",
            }}
            icon={instagramIcon}
            label="Instagram"
            description="写真とリールで、教室の様子をお届けしています。"
            ctaText="Instagramを見る"
            href={social.instagramUrl}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
