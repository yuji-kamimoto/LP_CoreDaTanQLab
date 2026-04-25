"use client";

import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";

export type NewsCardItem = {
  id: string;
  title: string;
  dateLabel: string;
  eyecatchUrl?: string;
};

function NewsCard({ item, index }: { item: NewsCardItem; index: number }) {
  return (
    <ScrollReveal delay={index * 0.06}>
      <Link
        href={`/news/${item.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-foreground/8 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-warm">
          {item.eyecatchUrl ? (
            <Image
              src={item.eyecatchUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-3xl opacity-20" aria-hidden>
                📰
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col px-4 py-4 md:px-5">
          <span className="text-xs tabular-nums text-muted">
            {item.dateLabel}
          </span>
          <span className="mt-2 line-clamp-3 flex-1 text-sm font-medium leading-snug text-foreground group-hover:text-accent md:text-base">
            {item.title}
          </span>
          <span className="mt-4 text-xs font-semibold text-accent">
            記事を読む →
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function NewsCardGrid({ items }: { items: NewsCardItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-accent/25 bg-surface px-6 py-14 text-center text-sm text-muted">
        お知らせは準備中です。microCMS を接続するとここに表示されます。
      </div>
    );
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, i) => (
        <li key={item.id}>
          <NewsCard item={item} index={i} />
        </li>
      ))}
    </ul>
  );
}
