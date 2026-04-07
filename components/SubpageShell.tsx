import Link from "next/link";
import type { ReactNode } from "react";

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
            className="font-heading min-w-0 truncate text-center text-sm font-bold text-foreground"
          >
            {siteName}
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
