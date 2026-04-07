"use client";

import Link from "next/link";

import { MarqueeRow } from "@/components/MarqueeRow";

export type NewsMarqueeItem = {
  id: string;
  title: string;
  publishedAt: string;
  dateLabel: string;
};

function Card({ item }: { item: NewsMarqueeItem }) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="flex w-72 shrink-0 flex-col justify-between rounded-2xl border-2 border-foreground/10 bg-surface px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md sm:w-80"
    >
      <span className="text-xs tabular-nums text-muted">{item.dateLabel}</span>
      <span className="mt-2 line-clamp-2 text-sm font-medium leading-snug">
        {item.title}
      </span>
      <span className="mt-3 text-xs font-medium text-accent">記事を読む →</span>
    </Link>
  );
}

export function NewsMarquee({ items }: { items: NewsMarqueeItem[] }) {
  if (items.length === 0) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="rounded-2xl border-2 border-dashed border-accent/25 bg-surface px-6 py-10 text-center text-sm text-muted">
          お知らせは準備中です。microCMS を接続するとここに流れます。
        </p>
      </div>
    );
  }

  const duration = Math.min(70, Math.max(32, items.length * 14));

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <MarqueeRow
        className="rounded-2xl"
        durationSec={duration}
        slotA={items.map((item) => (
          <Card key={`a-${item.id}`} item={item} />
        ))}
        slotB={items.map((item) => (
          <Card key={`b-${item.id}`} item={item} />
        ))}
      />
    </div>
  );
}
