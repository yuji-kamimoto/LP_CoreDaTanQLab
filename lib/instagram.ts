import { unstable_cache } from "next/cache";

/** Instagram Graph API（Instagram Basic Display 後継）で取得するメディア */
export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
};

type InstagramApiResponse = {
  data?: InstagramMedia[];
  error?: { message: string; type?: string; code?: number };
};

async function fetchInstagramMedia(
  limit: number,
): Promise<InstagramMedia[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  if (!token) return null;

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
  ].join(",");

  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${encodeURIComponent(
    token,
  )}`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const json = (await res.json()) as InstagramApiResponse;
    if (json.error) return null;
    return json.data ?? [];
  } catch {
    return null;
  }
}

/**
 * 最新の Instagram 投稿一覧を取得。
 * 1 日 1 回（86,400 秒）の ISR キャッシュ。
 * 環境変数 `INSTAGRAM_ACCESS_TOKEN` 未設定時は null。
 */
export function getInstagramMedia(limit = 6) {
  return unstable_cache(
    () => fetchInstagramMedia(limit),
    ["instagram-media", String(limit)],
    { revalidate: 86400, tags: ["instagram"] },
  )();
}
