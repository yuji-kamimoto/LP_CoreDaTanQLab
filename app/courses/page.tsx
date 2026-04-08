import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `コース詳細 | ${siteName}`,
  description:
    "広げるコース・深めるコースの内容、典型的な学びの流れ、対象となるお子さまについて。",
};

export default function CoursesDetailPage() {
  return (
    <SubpageShell title="コース詳細">
      <p>
        探求舎では、お子さまの段階に応じて「広げるコース」と「深めるコース」の2つをご用意しています。以下にそれぞれのねらいと内容の概要をまとめています。
      </p>

      <section
        id="course-hirogeru"
        className="scroll-mt-28 border-t border-foreground/10 pt-10"
      >
        <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
          広げるコース
        </h2>
        <p className="mt-4">
          広げるコースは、まだ専門性を決めきれない段階のお子さまに向けたプログラムです。身近な疑問から社会課題まで、テーマのスケールを変えながら「見る・聞く・読む・書く」のサイクルを体験します。
        </p>
        <h3 className="mt-8 font-heading text-base font-semibold text-foreground md:text-lg">
          典型的な3ヶ月の流れ（例）
        </h3>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>気になる現象やニュースをもとに、問いを言語化する。</li>
          <li>図書館・インタビュー・簡単な実験など、情報源を複合的に使う。</li>
          <li>仲間に向けた発表と相互フィードバックで、伝え方を磨く。</li>
        </ol>
        <h3 className="mt-8 font-heading text-base font-semibold text-foreground md:text-lg">
          こんなお子さまにおすすめ
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>いろいろな分野に興味があり、一つに絞りきれない</li>
          <li>話すのは好きだが、文章にまとめるのがまだ苦手</li>
          <li>仲間と協力して何かを作り上げる経験を増やしたい</li>
        </ul>
        <p className="mt-6 text-xs md:text-sm">
          時間割・定員・年齢区分は開業時期に合わせて確定します。最新情報はトップページのニュースまたはお問い合わせでご確認ください。
        </p>
      </section>

      <section
        id="course-fukameru"
        className="scroll-mt-28 border-t border-foreground/10 pt-10"
      >
        <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
          深めるコース
        </h2>
        <p className="mt-4">
          深めるコースは、すでに関心のある分野や進路の方向性があるお子さま向けです。文献レビュー、データの読み取り、論旨の構成、引用の作法など、大学受験やコンテストにも通じる「学術的な型」を丁寧にインストールします。
        </p>
        <h3 className="mt-8 font-heading text-base font-semibold text-foreground md:text-lg">
          指導のスタイル
        </h3>
        <p className="mt-3">
          週次の個別ミーティングで、テーマ設定・調査計画・中間アウトプットを管理します。課題は都度添削し、次の一歩を具体的に提示します。オンラインでの資料共有と対面のディスカッションを組み合わせます。
        </p>
        <h3 className="mt-8 font-heading text-base font-semibold text-foreground md:text-lg">
          アウトプット例
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>小論文形式のレポート（2,000〜4,000字目安）</li>
          <li>ポスター発表用の要約と図表構成</li>
          <li>研究計画書のたたき台（課題設定・先行研究・方法）</li>
        </ul>
        <p className="mt-6 text-xs md:text-sm">
          受験スケジュールに合わせた個別プランのご相談も可能です。まずは体験授業で現状ヒアリングを行います。
        </p>
      </section>
    </SubpageShell>
  );
}
