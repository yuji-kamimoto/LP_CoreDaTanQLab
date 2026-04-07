import Link from "next/link";

export default function NewsNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-xl font-semibold">お知らせが見つかりません</h1>
      <p className="mt-4 text-foreground/65">
        URL が間違っているか、公開が終了した可能性があります。
      </p>
      <p className="mt-8">
        <Link className="text-accent hover:underline" href="/news">
          お知らせ一覧へ
        </Link>
      </p>
    </main>
  );
}
