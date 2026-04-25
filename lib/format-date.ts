export function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("ja-JP", {
      dateStyle: "medium",
      timeZone: "Asia/Tokyo",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
