import Link from "next/link";

import { getNewsList } from "@/lib/news";

export const revalidate = 60;

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

export default async function NewsIndexPage() {
  const data = await getNewsList(50);

  if (!data) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">お知らせ</h1>
        <p className="mt-4 text-foreground/70">
          microCMS の接続情報（<code className="rounded-lg bg-foreground/10 px-1.5 py-0.5 text-sm">MICROCMS_SERVICE_DOMAIN</code>{" "}
          と{" "}
          <code className="rounded-lg bg-foreground/10 px-1.5 py-0.5 text-sm">MICROCMS_API_KEY</code>
          ）を <code className="rounded-lg bg-foreground/10 px-1.5 py-0.5 text-sm">.env.local</code>{" "}
          に設定してください。
        </p>
        <p className="mt-2 text-sm text-foreground/60">
          エンドポイントIDが <code className="rounded-lg bg-foreground/10 px-1 py-0.5">news</code>{" "}
          でない場合は <code className="rounded-lg bg-foreground/10 px-1 py-0.5">MICROCMS_NEWS_ENDPOINT</code>{" "}
          を設定してください。
        </p>
        <p className="mt-8">
          <Link className="text-accent hover:underline" href="/">
            トップへ戻る
          </Link>
        </p>
      </main>
    );
  }

  const { contents } = data;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          お知らせ
        </h1>
        <Link className="text-sm text-foreground/70 hover:text-accent" href="/">
          トップへ戻る
        </Link>
      </div>

      {contents.length === 0 ? (
        <p className="text-foreground/65">お知らせはまだありません。</p>
      ) : (
        <ul className="divide-y divide-foreground/10 border-t border-foreground/10">
          {contents.map((item) => (
            <li key={item.id}>
              <Link
                className="flex flex-col gap-1 py-5 transition-colors hover:text-accent md:flex-row md:items-baseline md:gap-6"
                href={`/news/${item.id}`}
              >
                <time
                  className="shrink-0 text-sm tabular-nums text-foreground/55"
                  dateTime={item.publishedAt}
                >
                  {formatDate(item.publishedAt)}
                </time>
                <span className="font-medium">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
