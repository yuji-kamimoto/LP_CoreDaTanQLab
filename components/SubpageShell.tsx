import type { ReactNode } from "react";

import { SiteHeader } from "@/components/SiteHeader";

type SubpageShellProps = {
  title: string;
  children: ReactNode;
};

export function SubpageShell({ title, children }: SubpageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
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
