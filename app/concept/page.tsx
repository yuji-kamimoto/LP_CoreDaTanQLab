import type { Metadata } from "next";

import { SubpageShell } from "@/components/SubpageShell";
import { coreDaNamingJa, siteMetaDescription, siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `ラボについて | ${siteName}`,
  description: siteMetaDescription,
};

export default function ConceptPage() {
  return (
    <SubpageShell title="ラボについて">
      <p>{coreDaNamingJa}</p>
      <p>
        {`${siteName}では、この理念を毎回の授業に落とし込み、子ども自身が「知りたい」を見つけ、調べ、まとめ、伝える一連のプロセスを繰り返すことで、学びの自立を育てます。教科書の範囲にとどまらず、社会や自然とつながるテーマ設定を重視し、好奇心に機会を、熱意に応え、行動を積み重ねるサイクルを大切にします。`}
      </p>
      <p>
        保護者の皆さまには、月次の振り返り面談と簡潔なレポートで学びの変化を共有します。急がず、確かに積み上げるカリキュラムなので、長期的な視点でご覧ください。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        探究学習と学校勉強の両立
      </h2>
      <p>
        探究で培う読解力・論理的思考・表現力は、定期テストや記述問題にも直結します。必要に応じて学校課題のフォローや学習計画の相談にも応じます（別途プランのご案内となる場合があります）。
      </p>
      <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
        安全とウェルビーイング
      </h2>
      <p>
        フィールドワークや外部取材を行う際は、事前リスク評価と保護者同意、複数名での同行などを徹底します。オンライン利用においても情報リテラシー教育を組み込みます。
      </p>
    </SubpageShell>
  );
}
