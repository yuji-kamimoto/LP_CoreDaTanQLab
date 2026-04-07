import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `深めるコース | ${siteName}`,
  description: "専門性を深める探求学習コースの詳細です。",
};

export default function FukameruCoursePage() {
  return (
    <SubpageShell title="深めるコース">
      <p>
        深めるコースは、すでに関心のある分野や進路の方向性があるお子さま向けです。文献レビュー、データの読み取り、論旨の構成、引用の作法など、大学受験やコンテストにも通じる「学術的な型」を丁寧にインストールします。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        指導のスタイル
      </h2>
      <p>
        週次の個別ミーティングで、テーマ設定・調査計画・中間アウトプットを管理します。課題は都度添削し、次の一歩を具体的に提示します。オンラインでの資料共有と対面のディスカッションを組み合わせます。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        アウトプット例
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>小論文形式のレポート（2,000〜4,000字目安）</li>
        <li>ポスター発表用の要約と図表構成</li>
        <li>研究計画書のたたき台（課題設定・先行研究・方法）</li>
      </ul>
      <p className="text-xs md:text-sm">
        受験スケジュールに合わせた個別プランのご相談も可能です。まずは体験授業で現状ヒアリングを行います。
      </p>
    </SubpageShell>
  );
}
