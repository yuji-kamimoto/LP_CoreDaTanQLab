import type { MetadataRoute } from "next";

import { getNewsList } from "@/lib/news";
import { siteUrl } from "@/lib/site-config";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/concept", priority: 0.8, changeFrequency: "monthly" },
  { path: "/courses", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.6, changeFrequency: "weekly" },
  { path: "/news", priority: 0.7, changeFrequency: "daily" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let newsEntries: MetadataRoute.Sitemap = [];
  try {
    const data = await getNewsList(100);
    if (data?.contents?.length) {
      newsEntries = data.contents.map((item) => ({
        url: `${siteUrl}/news/${item.id}`,
        lastModified: new Date(item.revisedAt || item.updatedAt || item.publishedAt || now),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }));
    }
  } catch {
  }

  return [...staticEntries, ...newsEntries];
}
