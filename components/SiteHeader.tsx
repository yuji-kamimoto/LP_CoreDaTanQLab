"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

import { BrandLogoText } from "@/components/BrandLogoText";
import {
  siteName,
  social,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import { getSiteMenuItems } from "@/lib/site-nav";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

const menuItems = getSiteMenuItems(
  social.lineUrl,
  social.instagramUrl,
  trialApplicationFormUrl,
);

const MENU_DIM_LAYER_CLASS = "bg-black/45 backdrop-blur-sm";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      className="flex h-[22px] w-[26px] flex-col justify-center gap-[5px] text-current"
      aria-hidden
    >
      <span
        className={`block h-[3px] w-full origin-center rounded-full bg-current transition-transform duration-200 ${
          open ? "translate-y-[8px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[3px] w-full rounded-full bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-[3px] w-full origin-center rounded-full bg-current transition-transform duration-200 ${
          open ? "-translate-y-[8px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-white">
        <div className="flex w-full items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 md:gap-4 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <Link
            href="/"
            aria-label={siteName}
            className="inline-flex min-w-0 shrink-0 items-center py-1"
          >
            <BrandLogoText className="max-w-[min(92vw,28rem)] text-left text-[clamp(1.05rem,3.4vw,1.65rem)] leading-[1.12] text-foreground sm:max-w-[32rem] sm:text-[clamp(1.1rem,2.8vw,1.45rem)] md:max-w-[36rem] md:text-[clamp(1.05rem,2.2vw,1.55rem)] lg:max-w-[40rem] lg:text-[clamp(1.15rem,2vw,1.75rem)]" />
          </Link>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href={trialApplicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-[2.4rem] max-w-[min(46vw,9.75rem)] shrink-0 items-center justify-center rounded-full px-2 text-center text-[0.5rem] font-bold leading-tight tracking-wide md:h-12 md:max-w-none md:px-6 md:text-sm ${trialCtaGradientClasses}`}
            >
              無料体験に参加！
            </Link>
            <button
              type="button"
              className={`flex h-[2.4rem] w-[2.4rem] shrink-0 items-center justify-center rounded-full border-0 text-white max-md:[&>span]:scale-[0.85] md:h-12 md:w-12 ${contactInquiryCtaClasses}`}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          className={`fixed inset-x-0 bottom-0 top-[3.65rem] z-40 flex justify-end overflow-hidden md:top-[4.25rem] ${MENU_DIM_LAYER_CLASS}`}
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 size-full cursor-default bg-transparent"
            aria-label="オーバーレイを閉じる"
            onClick={close}
          />
          <nav
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="サイトメニュー"
            className="relative z-[1] ml-auto flex h-full w-full max-w-3xl flex-col items-stretch gap-7 overflow-y-auto px-6 py-10 text-right text-white md:gap-9 md:px-16 md:py-14 lg:px-20 lg:py-16"
          >
            {menuItems.map((item) => {
              const titleClass =
                "block font-heading text-2xl font-black leading-[1.1] tracking-tight md:text-3xl lg:text-4xl";
              const subtitleClass =
                "mt-1.5 block text-[0.7rem] font-medium leading-snug text-white/80 md:text-xs lg:text-sm";

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity duration-200 hover:opacity-80"
                    onClick={close}
                  >
                    <span className={titleClass}>{item.title}</span>
                    <span className={subtitleClass}>{item.subtitle}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition-opacity duration-200 hover:opacity-80"
                  onClick={close}
                >
                  <span className={titleClass}>{item.title}</span>
                  <span className={subtitleClass}>{item.subtitle}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}
