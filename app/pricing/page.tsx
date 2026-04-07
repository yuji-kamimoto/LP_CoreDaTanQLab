import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `料金・割引 | ${siteName}`,
  description: "料金体系と割引・支払い方法の詳細です。",
};

export default function PricingPage() {
  return (
    <SubpageShell title="料金について（詳細）">
      <p>
        トップページに掲載の料金は税込の標準例です。兄弟で通塾される場合や年間一括お支払いの場合は、別途割引をご案内する予定です（開業キャンペーンの有無により変動します）。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
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
