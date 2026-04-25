"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

import { BrandLogoText } from "@/components/BrandLogoText";
import {
  siteName,
  siteTagline,
  social,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import { getMegaMenuBlocks, headerPrimaryNav } from "@/lib/site-nav";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

const menuBlocks = getMegaMenuBlocks(
  social.lineUrl,
  social.instagramUrl,
  trialApplicationFormUrl,
);

/** メニュー表示中のヘッダーとオーバーレイでトーンを揃える */
const MENU_DIM_LAYER_CLASS = "bg-black/30";

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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-foreground/10 transition-colors duration-200 ease-out ${
          open ? MENU_DIM_LAYER_CLASS : "bg-white"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 md:justify-start md:gap-4 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <Link
            href="/"
            aria-label={siteName}
            className="inline-flex min-w-0 shrink-0 items-center py-1"
          >
            <BrandLogoText className="max-w-[min(92vw,28rem)] text-left text-[clamp(1.05rem,3.4vw,1.65rem)] leading-[1.12] text-foreground sm:max-w-[32rem] sm:text-[clamp(1.1rem,2.8vw,1.45rem)] md:max-w-[36rem] md:text-[clamp(1.05rem,2.2vw,1.55rem)] lg:max-w-[40rem] lg:text-[clamp(1.15rem,2vw,1.75rem)]" />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-x-3 overflow-x-auto py-1 text-sm font-semibold text-foreground/85 [-ms-overflow-style:none] [scrollbar-width:none] md:flex lg:gap-x-4 lg:text-base [&::-webkit-scrollbar]:hidden"
            aria-label="サイト内の主要ページ"
          >
            {headerPrimaryNav.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 transition-colors hover:text-accent lg:px-2.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 transition-colors hover:text-accent lg:px-2.5"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:ml-0">
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
              className={`flex h-[2.4rem] w-[2.4rem] shrink-0 items-center justify-center rounded-full border-0 text-white max-md:[&>span]:scale-[0.85] md:hidden ${contactInquiryCtaClasses}`}
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
          className={`fixed inset-x-0 bottom-0 top-[5.75rem] z-[100] flex min-h-[calc(100dvh-5.75rem)] flex-col items-start overflow-y-auto px-4 pb-4 sm:top-[6.25rem] sm:min-h-[calc(100dvh-6.25rem)] sm:px-6 sm:pb-5 md:px-8 lg:px-10 xl:px-12 2xl:px-16 ${MENU_DIM_LAYER_CLASS}`}
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 min-h-full w-full cursor-default bg-transparent"
            aria-label="オーバーレイを閉じる"
            onClick={close}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="サイトメニュー"
            className="relative z-[101] mt-1 flex w-full max-h-[calc(100dvh-5.75rem-1.25rem)] flex-col overflow-y-auto rounded-2xl border border-foreground/10 bg-white shadow-2xl sm:mt-1.5 sm:max-h-[calc(100dvh-6.25rem-1.5rem)] md:flex-row"
          >
            {/* 左：ブランド */}
            <aside className="flex w-full flex-col items-center border-b border-foreground/10 bg-[#f5f0e8] px-6 py-10 text-center md:w-[min(34%,20rem)] md:border-b-0 md:border-r md:py-12">
              <BrandLogoText className="mx-auto block w-full max-w-[22rem] text-center text-[clamp(0.9rem,2.8vw,1.25rem)] leading-tight text-foreground sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[30rem]" />
              <p className="mt-4 max-w-[16rem] text-xs leading-relaxed text-muted md:mt-5 md:text-sm">
                {siteTagline}
              </p>
            </aside>

            {/* 右：ナビグリッド */}
            <div className="flex-1 bg-white px-5 py-12 md:px-10 md:py-14 md:pr-12">
              <nav
                className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                aria-label="サイト内の主要ページ"
              >
                {menuBlocks.map((block) => (
                  <div key={block.title}>
                    <p className="border-b border-dotted border-foreground/25 pb-1.5 text-xs font-bold tracking-wide text-foreground">
                      <span className="mr-1 text-[0.65em] text-accent" aria-hidden>
                        ▶
                      </span>
                      {block.title}
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm text-muted">
                      {block.links.map((item) => (
                        <li key={`${block.title}-${item.label}`}>
                          {item.external ? (
                            <a
                              href={item.href}
                              className="transition-colors hover:text-accent hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={close}
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className="transition-colors hover:text-accent hover:underline"
                              onClick={close}
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      ) : null}

    </>
  );
}
