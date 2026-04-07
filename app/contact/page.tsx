import type { Metadata } from "next";
import Link from "next/link";

import { SubpageShell } from "@/components/SubpageShell";
import { contact, siteName, social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `お問い合わせ・体験申込 | ${siteName}`,
  description: "お電話・メール・LINEでのお問い合わせ先です。",
};

export default function ContactPage() {
  return (
    <SubpageShell title="お問い合わせ・体験授業のお申し込み">
      <p>
        体験授業や見学のご希望は、お電話・メール・LINE
        のいずれかからお送りください。2営業日以内に担当者よりご連絡します。
      </p>
      <div className="rounded-2xl border border-foreground/10 bg-surface p-5 md:p-6">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-foreground">お電話</dt>
            <dd className="mt-1">
              <a
                href={`tel:${contact.phone.replace(/-/g, "")}`}
                className="tabular-nums text-accent hover:underline"
              >
                {contact.phone}
              </a>
              <span className="mt-1 block text-xs text-muted">
                平日 13:00—20:00／土曜 9:00—17:00
              </span>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">メール</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${contact.email}`}
                className="text-accent hover:underline"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">住所</dt>
            <dd className="mt-1 text-muted">{contact.address}</dd>
          </div>
        </dl>
      </div>
      <p className="text-sm">
        <Link
          href={`mailto:${contact.email}?subject=${encodeURIComponent("【探求舎】お問い合わせ")}`}
          className="font-semibold text-accent hover:underline"
        >
          メールアプリを開いて送信する
        </Link>
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        LINE・Instagram
      </h2>
      <p>
        日常のお知らせや空き状況は SNS でも発信しています（トップページの公式アカウント欄からアクセスできます）。
      </p>
      <ul className="flex flex-wrap gap-3 text-sm font-medium">
        <li>
          <Link
            href={social.lineUrl}
            className="text-line-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINE公式
          </Link>
        </li>
        <li>
          <Link
            href={social.instagramUrl}
            className="text-instagram-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </li>
      </ul>
    </SubpageShell>
  );
}
