import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { colocatedFreeSchool, contact, siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `アクセス | ${siteName}`,
  description: `${siteName}は TSUKUBA 学びの杜学園と同一施設です。行き方・駐車場など。`,
};

export default function AccessPage() {
  return (
    <SubpageShell title="アクセス（詳細）">
      <p className="text-foreground">{contact.address}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
        {siteName}は、
        <a
          href={colocatedFreeSchool.websiteUrl}
          className="font-semibold text-accent underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {colocatedFreeSchool.name}
        </a>
        と
        <strong className="font-medium text-foreground">
          同一の施設・同じ住所
        </strong>
        で活動しています。学びの杜学園の公式サイトに記載の所在地と同じ場所です。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        交通手段
      </h2>
      <p>
        最寄り駅から徒歩8分。バスをご利用の場合は「〇〇」バス停下車すぐです（路線名は開業情報で更新予定）。雨の日でも移動しやすいルートをパンフレットに掲載します。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        自転車・お車でお越しの場合
      </h2>
      <p>
        敷地内に駐輪スペースがあります。お車の場合は契約駐車場の割引がある場合がありますので、受付でお声がけください。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        地図
      </h2>
            <div className="overflow-hidden rounded-2xl border-2 border-accent/25 bg-surface shadow-lg shadow-accent/5">
        <iframe
          title="Google 地図"
          src={contact.mapsEmbedUrl}
          className="aspect-[16/10] min-h-[260px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </SubpageShell>
  );
}
