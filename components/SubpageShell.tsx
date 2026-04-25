import Link from "next/link";
import type { ReactNode } from "react";

import { BrandLogoText } from "@/components/BrandLogoText";
import { siteName } from "@/lib/site-config";

type SubpageShellProps = {
  title: string;
  children: ReactNode;
};

export function SubpageShell({ title, children }: SubpageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-2 border-accent/20 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="shrink-0 text-sm font-bold tracking-wide text-accent hover:underline"
          >
            ← トップへ
          </Link>
          <Link
            href="/"
            aria-label={siteName}
            className="flex min-w-0 shrink justify-center py-0.5"
          >
            <BrandLogoText className="max-w-[min(90vw,19rem)] text-center text-[clamp(0.8rem,2.8vw,1.2rem)] leading-tight text-foreground sm:max-w-[22rem] md:max-w-[26rem]" />
          </Link>
          <span className="w-16 shrink-0 sm:w-20" aria-hidden />
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
          {children}
        </div>
      </main>
    </div>
  );
}
