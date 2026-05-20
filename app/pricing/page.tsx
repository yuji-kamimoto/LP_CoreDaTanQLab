import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { courses, courseTheme } from "@/lib/courses-data";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "料金・割引",
  description: `${siteName}の0→1・スキル・探究コースの月謝と支払い・振替の案内です。`,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `料金・割引 | ${siteName}`,
    description: `${siteName}の0→1・スキル・探究コースの月謝と支払い・振替の案内です。`,
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <SubpageShell title="料金について（詳細）">
      <p>
        トップページの料金は各コースの月謝の目安です。兄弟で通塾される場合や年間一括お支払いの場合は、別途割引をご案内する予定です（開業キャンペーンの有無により変動します）。
      </p>

      <h2 className="mt-10 font-heading text-lg font-semibold text-foreground md:text-xl">
        コース別・月謝
      </h2>
      <div className="mt-4 space-y-6">
        {courses.map((c) => {
          const th = courseTheme[c.key];
          return (
            <div
              key={c.id}
              className="overflow-hidden rounded-2xl border-2 border-foreground/10 bg-surface shadow-sm"
            >
              <h3
                className={`px-4 py-3 font-heading text-base font-bold md:text-lg ${th.headerBg} ${th.headerText}`}
              >
                {c.name}
              </h3>
              <dl className="grid gap-3 px-4 py-4 text-sm md:grid-cols-2 md:text-base">
                <div>
                  <dt className={`font-bold ${th.dtStrong}`}>月謝</dt>
                  <dd className="mt-1 tabular-nums text-foreground">
                    {c.monthlyPrice}
                  </dd>
                </div>
                <div>
                  <dt className={`font-bold ${th.dtStrong}`}>レッスン</dt>
                  <dd className="mt-1 text-foreground">{c.monthlySessions}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className={`font-bold ${th.dtStrong}`}>備考</dt>
                  <dd className="mt-1 text-muted">{c.themeNote}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-muted">
        入会金・体験料・教材実費などは開業準備が整い次第、個別にご案内します。
      </p>

      <h2 className="mt-10 font-heading text-lg font-semibold text-foreground md:text-xl">
        支払い方法
      </h2>
      <p>
        口座振替またはクレジットカード決済を予定しています。体験授業は当日現金または決済リンクでのお支払いに対応します。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        休講・振替
      </h2>
      <p>
        長期休暇に合わせた休講カレンダーを事前に公開します。欠席時の振替回数には上限を設ける場合があります。詳細規定は入会時にご説明し、書面でお渡しします。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        見積もり・個別相談
      </h2>
      <p>
        複数コースの併用や短期集中など、個別のご要望には見積もりを作成します。まずは体験授業または面談でお子さまの状況をお聞かせください。
      </p>
    </SubpageShell>
  );
}
