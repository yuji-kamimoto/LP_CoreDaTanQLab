import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

/**
 * サーバー側（Route Handler / Server Component）から利用。
 * 環境変数が未設定のときは null（ビルド時の静的ページでも落とさない用途）。
 */
export function getMicroCMSClient() {
  if (!serviceDomain || !apiKey) return null;
  return createClient({ serviceDomain, apiKey });
}
