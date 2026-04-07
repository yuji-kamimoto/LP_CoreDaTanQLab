import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `広げるコース | ${siteName}`,
  description: "興味の幅を広げる探求学習コースの詳細です。",
};

export default function HirogeruCoursePage() {
  return (
    <SubpageShell title="広げるコース">
      <p>
        広げるコースは、まだ専門性を決めきれない段階のお子さまに向けたプログラムです。身近な疑問から社会課題まで、テーマのスケールを変えながら「見る・聞く・読む・書く」のサイクルを体験します。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        典型的な3ヶ月の流れ（例）
      </h2>
      <ol className="list-decimal space-y-3 pl-5">
        <li>気になる現象やニュースをもとに、問いを言語化する。</li>
        <li>図書館・インタビュー・簡単な実験など、情報源を複合的に使う。</li>
        <li>仲間に向けた発表と相互フィードバックで、伝え方を磨く。</li>
      </ol>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        こんなお子さまにおすすめ
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>いろいろな分野に興味があり、一つに絞りきれない</li>
        <li>話すのは好きだが、文章にまとめるのがまだ苦手</li>
        <li>仲間と協力して何かを作り上げる経験を増やしたい</li>
      </ul>
      <p className="text-xs md:text-sm">
        時間割・定員・年齢区分は開業時期に合わせて確定します。最新情報はトップページのニュースまたはお問い合わせでご確認ください。
      </p>
    </SubpageShell>
  );
}
