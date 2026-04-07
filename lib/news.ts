import { unstable_cache } from "next/cache";

import { getMicroCMSClient } from "./microcms";

/** microCMS 管理画面で作成した「ニュース」APIのエンドポイントID */
const newsEndpoint = process.env.MICROCMS_NEWS_ENDPOINT ?? "news";

export type NewsEyecatch = {
  url: string;
  width: number;
  height: number;
};

/** 代表的なフィールド。管理画面のフィールドIDと揃えて拡張してください */
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  /** リッチエディタ等（フィールドIDが `content` の場合） */
  content?: string;
  eyecatch?: NewsEyecatch;
};

async function fetchNewsList(limit = 20) {
  const client = getMicroCMSClient();
  if (!client) return null;
  try {
    return await client.getList<News>({
      endpoint: newsEndpoint,
      queries: { limit, orders: "-publishedAt" },
    });
  } catch {
    return null;
  }
}

async function fetchNewsDetail(contentId: string) {
  const client = getMicroCMSClient();
  if (!client) return null;
  try {
    return await client.getListDetail<News>({
      endpoint: newsEndpoint,
      contentId,
    });
  } catch {
    return null;
  }
}

/** 一覧（ISR: 60秒ごとに再取得。Webhook で on-demand 再検証も可能） */
export function getNewsList(limit = 20) {
  return unstable_cache(
    () => fetchNewsList(limit),
    ["microcms-news-list", String(limit)],
    { revalidate: 60, tags: ["microcms-news"] }
  )();
}

/** 詳細 */
export function getNewsDetail(contentId: string) {
  return unstable_cache(
    () => fetchNewsDetail(contentId),
    ["microcms-news-detail", contentId],
    { revalidate: 60, tags: ["microcms-news", `microcms-news-${contentId}`] }
  )();
}
