import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleJsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";

import { formatDate } from "@/lib/format-date";
import { getNewsDetail } from "@/lib/news";
import { siteName, siteUrl } from "@/lib/site-config";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

function stripHtml(input: string): string {
  return input
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = await getNewsDetail(id);
  if (!item) {
    return {
      title: "お知らせが見つかりません",
      robots: { index: false, follow: false },
    };
  }

  const description = item.content
    ? stripHtml(item.content).slice(0, 120)
    : `${siteName}からのお知らせ「${item.title}」`;
  const canonical = `/news/${item.id}`;
  const image = item.eyecatch?.url;

  return {
    title: item.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: item.title,
      description,
      url: canonical,
      publishedTime: item.publishedAt,
      modifiedTime: item.revisedAt || item.updatedAt,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const item = await getNewsDetail(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ArticleJsonLd
        url={`${siteUrl}/news/${item.id}`}
        headline={item.title}
        datePublished={item.publishedAt}
        dateModified={item.revisedAt || item.updatedAt}
        image={item.eyecatch?.url}
      />
      <SiteHeader />
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
    </div>
  );
}
