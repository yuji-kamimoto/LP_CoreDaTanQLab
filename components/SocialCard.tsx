import Link from "next/link";
import type { ReactNode } from "react";

type SocialBrandClass = {
  text: string;
  bg: string;
  border: string;
  outline: string;
};

type SocialCardProps = {
  brandClass: SocialBrandClass;
  icon: ReactNode;
  label: string;
  description: string;
  ctaText: string;
  href: string;
  /** サイドバー等の狭いレイアウト向けにコンパクトにする */
  compact?: boolean;
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

export function SocialCard({
  brandClass,
  icon,
  label,
  description,
  ctaText,
  href,
  compact = false,
}: SocialCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-0.5 ${
        compact ? "min-h-0 p-6" : "min-h-[18rem] p-8"
      }`}
    >
      <div className={`rounded-xl border-2 ${brandClass.border} px-4 py-4`}>
        <div className="flex items-center justify-center gap-3">
          {icon}
          <span
            className={`text-center font-black tracking-tight ${brandClass.text} ${
              compact ? "text-base md:text-lg" : "text-lg md:text-xl"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
      <p
        className={`text-center font-extrabold leading-relaxed text-foreground/85 ${
          compact ? "mt-4 text-sm" : "mt-6 text-sm md:text-base"
        }`}
      >
        {description}
      </p>
      <Link
        href={href}
        className={`mt-auto flex w-full items-center gap-2 rounded-full ${brandClass.bg} px-2 py-3.5 text-sm font-black tracking-wide text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${brandClass.outline} ${
          compact ? "mt-5" : "md:gap-3 md:py-4 md:text-base"
        }`}
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

export const lineBrandClass: SocialBrandClass = {
  text: "text-line-brand",
  bg: "bg-line-brand",
  border: "border-line-brand",
  outline: "focus-visible:outline-line-brand",
};

export const instagramBrandClass: SocialBrandClass = {
  text: "text-instagram-brand",
  bg: "bg-instagram-brand",
  border: "border-instagram-brand",
  outline: "focus-visible:outline-instagram-brand",
};

export const lineIcon = (
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

export const instagramIcon = (
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
