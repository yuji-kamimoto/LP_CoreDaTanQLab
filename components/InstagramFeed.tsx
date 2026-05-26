import Image from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";
import type { InstagramMedia } from "@/lib/instagram";

const CAPTION_MAX = 70;

function truncateCaption(caption: string | undefined) {
  if (!caption) return "";
  const single = caption.replace(/\s+/g, " ").trim();
  if (single.length <= CAPTION_MAX) return single;
  return `${single.slice(0, CAPTION_MAX)}…`;
}

function formatTimestamp(timestamp: string) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getImageSource(item: InstagramMedia) {
  if (item.media_type === "VIDEO") {
    return item.thumbnail_url ?? item.media_url;
  }
  return item.media_url;
}

function MediaTypeBadge({ type }: { type: InstagramMedia["media_type"] }) {
  if (type === "IMAGE") return null;
  const label = type === "VIDEO" ? "VIDEO" : "ALBUM";
  return (
    <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white">
      {label}
    </span>
  );
}

function InstagramCard({
  item,
  index,
}: {
  item: InstagramMedia;
  index: number;
}) {
  const caption = truncateCaption(item.caption);
  const dateLabel = formatTimestamp(item.timestamp);
  const imageSrc = getImageSource(item);

  return (
    <ScrollReveal delay={index * 0.05}>
      <a
        href={item.permalink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram の投稿を開く${caption ? `：${caption}` : ""}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-foreground/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-instagram-brand/50 hover:shadow-lg"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-surface-warm">
          <Image
            src={imageSrc}
            alt={caption || "Instagram の投稿"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            unoptimized
          />
          <MediaTypeBadge type={item.media_type} />
        </div>
        <div className="flex flex-1 flex-col px-4 py-4">
          {dateLabel ? (
            <span className="text-xs tabular-nums text-muted">{dateLabel}</span>
          ) : null}
          {caption ? (
            <span className="mt-2 line-clamp-3 flex-1 text-sm leading-snug text-foreground">
              {caption}
            </span>
          ) : (
            <span className="mt-2 flex-1 text-sm text-muted">
              Instagram で見る
            </span>
          )}
          <span className="mt-3 text-xs font-semibold text-instagram-brand">
            Instagram で見る →
          </span>
        </div>
      </a>
    </ScrollReveal>
  );
}

export function InstagramFeed({ items }: { items: InstagramMedia[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, i) => (
        <li key={item.id}>
          <InstagramCard item={item} index={i} />
        </li>
      ))}
    </ul>
  );
}
