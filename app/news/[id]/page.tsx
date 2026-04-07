import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getNewsDetail } from "@/lib/news";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("ja-JP", {
      dateStyle: "medium",
      timeZone: "Asia/Tokyo",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const item = await getNewsDetail(id);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-8">
        <Link className="text-sm text-foreground/70 hover:text-accent" href="/news">
          ← お知らせ一覧
        </Link>
      </p>

      <article>
        <header className="border-b border-foreground/10 pb-8">
          <time
            className="text-sm tabular-nums text-foreground/55"
            dateTime={item.publishedAt}
          >
            {formatDate(item.publishedAt)}
          </time>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {item.title}
          </h1>
        </header>

        {item.eyecatch?.url ? (
          <div className="relative mt-8 aspect-[1200/630] max-h-80 w-full overflow-hidden rounded-2xl bg-foreground/5">
            <Image
              alt={item.title}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 48rem) 100vw, 48rem"
              src={item.eyecatch.url}
            />
          </div>
        ) : null}

        {item.content ? (
          <div
            className="news-body mt-10 max-w-none text-foreground/85 [&_a]:text-accent [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_img]:my-6 [&_img]:max-w-full [&_img]:rounded-2xl [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        ) : (
          <p className="mt-10 text-foreground/60">本文がありません。</p>
        )}
      </article>
    </main>
  );
}
