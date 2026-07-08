import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  siteMetaDescription,
  siteName,
  trialApplicationFormUrl,
} from "@/lib/site-config";
import {
  contactInquiryCtaClasses,
  trialCtaGradientClasses,
} from "@/lib/trial-cta-styles";

export const metadata: Metadata = {
  title: "ラボについて",
  description: siteMetaDescription,
  alternates: { canonical: "/concept" },
  openGraph: {
    title: `ラボについて | ${siteName}`,
    description: siteMetaDescription,
    url: "/concept",
    type: "website",
  },
};

type Chapter = {
  no: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string[];
  pullQuote?: string;
};

const chapters: Chapter[] = [
  {
    no: "01",
    eyebrow: "STORY",
    title: "なぜ探究型のラボを作ろうと思ったのか",
    lead: "「やってみたい」を、行動に変えられる場所を。",
    body: [
      "私には、「誰もが“やってみたい”を行動に変えられる環境をつくりたい」という強い思いがあります。これまで研究、スポーツ、芸術など、多くのことに挑戦できる環境に恵まれてきました。しかし、教育の現場で多くの子どもたちと接する中で、その環境が決して当たり前ではないという現実に気づきました。",
      "「やってみたい」という思いは、どの子にも必ずあります。しかし、それを形にする場や、後押ししてくれる関係性がない――その“見えない差”が、子どもたちの未来を左右してしまっています。だからこそ私は、誰もが「やってみたい」を形にできる場所をつくりたいと考えました。",
      "自分の人生を「自分ごと」として捉え、目を輝かせながら将来を語れる子を育てたい。そのためには、単なる受験対策の場ではなく、感性を磨き、視野を広げる“心の教育”が必要です。多様な経験を通じて探究心を伸ばし、自分の問いに自信を持って答えられる――そんな環境を、このラボで実現していきます。",
    ],
    pullQuote:
      "「やってみたい」を後押しする関係性こそが、子どもの未来を変えていく。",
  },
  {
    no: "02",
    eyebrow: "ISSUE",
    title: "現代の子どもたちが置かれている状況",
    lead: "選択肢は増えた。けれど、一歩を踏み出すのは難しくなっている。",
    body: [
      "現代の子どもたちは膨大な情報に囲まれ、一見すると選択肢が増えたように見えます。しかしその実態は、情報が多すぎて何を選べばよいか分からず、さらに周囲の「失敗を避ける空気」や「挑戦を後押しする関係性の弱さ」によって、自ら一歩を踏み出すことが難しくなっています。",
      "そしてAIが急速に進化するこれからの時代、「正解を早く出すこと」の価値は相対的に下がっていきます。今、真に求められているのは、実際に手に触れて感じ、自ら試行錯誤する中で育まれる思考力や創造力です。",
      "今の子どもたちにとって大切なのは「失敗を恐れて動かない」のではなく、自ら求め、考え、行動できる力を育むこと。知識を効率よく詰め込むだけの教育では身につかない「自分で試し、失敗する経験」を積み重ねること。この経験を得る機会が少なくなってきていることが、最大の課題だと考えています。",
    ],
  },
  {
    no: "03",
    eyebrow: "WHAT",
    title: "探究型のラボとは何か",
    lead: "ここは「正解を教える場所」ではなく、自分なりの答えを探し続ける場所。",
    body: [
      "世の中に溢れるあらゆる事象をテーマに、「自分で問いを立て、調べ、考え、自分だけの答えを出す」。このサイクルを繰り返すことで、答えのない課題に立ち向かっていく力を養います。",
      "用意されたカリキュラムから選ぶことも、自分の中にある「やりたい！」を深く掘り下げることも自由です。自分の興味に触れ、小さな挑戦を積み重ね、試行錯誤を繰り返す。そのプロセスを通じて、子どもたちは自分自身の「好き」や「可能性」を自ら見つけ出していきます。",
    ],
    pullQuote: "問いを持ち、自分なりの答えを探し続ける力を育てる。",
  },
  {
    no: "04",
    eyebrow: "DIFFERENCE",
    title: "一般的な学びの場と、私たちの違い",
    lead: "結果ではなく「プロセス」に価値を置く。",
    body: [
      "従来型の学びの場は、点数を上げることや、用意された問いに対して「正解を早く正確に導き出すこと」を目的としています。知識を効率よく習得することが最優先される“結果”の教育です。",
      "それに対して私たちは、結果よりも“プロセス”に価値を置くラボです。日々の授業の中で、次の3つを大切にしています。",
    ],
  },
  {
    no: "05",
    eyebrow: "WHY",
    title: "なぜ、いま探究学習なのか",
    lead: "知識の量より「知識をどう使いこなすか」が問われる時代に。",
    body: [
      "これからの時代、知識の量そのものよりも「知識をどう使いこなすか」が問われるようになります。AIがあらゆる“正解”を提示できる一方で、新しい“問い”を立てる力は人間にしか持てないからです。",
      "だからこそ必要なのは、誰かに与えられた知識を暗記することではなく、自分で考え、動き、失敗し、そこから自ら気づきを得るプロセスです。効率よく正解を出す力よりも、自ら問いを作り、試行錯誤する“思考力”を伸ばすこと。その積み重ねこそが、これからの社会を生き抜くための真の力となります。",
      "探究学習を通じて、私たちは次の3つの力を育てます。",
    ],
  },
  {
    no: "06",
    eyebrow: "WHO",
    title: "どんな子に来てほしいか",
    lead: "特別な才能は、一切必要ありません。",
    body: [
      "「まだ何も見つかっていない」こと自体が可能性です。最初は自分の意見が持てなくても、すぐに答えが出せなくても大丈夫。このラボは、自分なりの答えを見つけるための“練習”をする場所です。",
      "一歩ずつ、あなたの“やってみたい”が動き出す瞬間を、私たちと一緒に探していきましょう。",
    ],
  },
  {
    no: "07",
    eyebrow: "GROWTH",
    title: "このラボで、こう成長してほしい",
    lead: "「自分の一歩を踏み出せる人」へ。",
    body: [
      "私たちが目指しているのは、子どもたちが「自分の一歩を踏み出せる人」になることです。自分で考え、動き、失敗し、そこから大切なことに気づく。この探究のプロセスを通して、「自分で選び、自分で決め、自分で進む力」を育ててほしいと考えています。",
      "挑戦する中で思ったようにいかないこともあるかもしれません。しかし、そこで諦めるのではなく、何度でも試行錯誤して課題に立ち向かう“前向きな心”を身につけてほしい。常に世の中の“ふしぎ”を捉える感性を磨き、「知りたい！」「やってみたい！」と、実際に行動するところまで好奇心で突き進んでいけるように、変わっていってほしい。",
      "自らの足で立ち、好奇心をエンジンに、未知の世界へ何度でも挑戦し続ける――そんな逞しい成長を、私たちは全力でサポートします。",
    ],
    pullQuote: "自らの足で立ち、好奇心をエンジンに、未知の世界へ挑戦し続ける。",
  },
  {
    no: "08",
    eyebrow: "PLACE",
    title: "どんな教室にしたいか",
    lead: "子どもと大人が、共に「育ち合う」場所へ。",
    body: [
      "この教室は、単なる“教える場所”ではなく、子どもと大人が共に“育ち合う場所”でありたいと考えています。",
      "変化の激しい社会だからこそ、私たちは子どもたちが失敗を恐れず、自分の発言や行動に自信を持って“挑戦そのもの”を楽しめる環境を大切にします。",
      "一人ひとりのちょっとした「なぜ？」や興味を深掘りし、芽生えた好奇心を原動力に、それぞれの歩幅で、のびのびと前に進んでいく。変化のスピードが異なる一人ひとりをつなぎ、支え合える――それが、私たちの目指す教室の姿です。",
    ],
  },
];

const pillars = [
  {
    eyebrow: "01 / FIND",
    title: "「正解」ではなく「問い」を見つける",
    body: "誰かが作った問題を解くのではなく、自ら問いを立て、深く考える練習を重ねます。",
  },
  {
    eyebrow: "02 / TRY",
    title: "「効率」ではなく「試行錯誤」",
    body: "多様な角度から物事を捉え、仮説と検証を繰り返しながら、自分なりの答えに近づいていきます。",
  },
  {
    eyebrow: "03 / LIVE",
    title: "「知識」を「経験」に変える",
    body: "興味を広げ、自ら行動し、実体験として積み重ねることで、一生モノの知恵を育みます。",
  },
];

const powers = [
  "物事のつながりを多角的に理解する力",
  "自分なりの確かな価値観",
  "社会で生き、社会を創る力",
];

const welcomedKids = [
  "何かに少しでも興味がある子",
  "自信はないけれど、挑戦してみたい子",
  "今はまだ、自分の「好き」が分からない子",
];

function ChapterNumber({ no }: { no: string }) {
  return (
    <div className="flex shrink-0 items-baseline gap-2">
      <span
        aria-hidden
        className="font-heading text-[3rem] font-black leading-none text-accent md:text-[4.25rem]"
      >
        {no}
      </span>
    </div>
  );
}

function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="mt-8 border-l-4 border-accent bg-surface-warm px-5 py-4 text-base font-bold leading-relaxed text-foreground md:px-7 md:py-5 md:text-lg">
      {children}
    </blockquote>
  );
}

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section
          className="relative overflow-hidden border-b border-foreground/10 bg-surface-warm"
          aria-label="ラボについての導入"
        >
          <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
            <Image
              src="/Lab_Preview_Image.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24 lg:py-28">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.32em] text-accent md:text-sm">
                ABOUT CoreDa! 探究ラボ
              </p>
              <h1 className="mt-5 font-heading text-3xl font-black leading-[1.18] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
                好奇心を、行動へ。
                <br className="hidden md:block" />
                それがいつか、君の核になる。
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                これは、{siteName}
                が「なぜこのラボをつくったのか」を、保護者のみなさまへ綴った手紙です。少し長いですが、私たちの想いをそのままお届けします。
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="space-y-20 md:space-y-28">
            {chapters.map((chapter) => (
              <ScrollReveal key={chapter.no}>
                <article className="relative">
                  <header className="flex flex-col gap-3 md:flex-row md:items-end md:gap-6">
                    <ChapterNumber no={chapter.no} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.7rem] font-bold tracking-[0.28em] text-accent md:text-xs">
                        {chapter.eyebrow}
                      </p>
                      <h2 className="mt-2 font-heading text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl lg:text-[2.25rem]">
                        {chapter.title}
                      </h2>
                    </div>
                  </header>

                  <p className="mt-6 text-base font-bold leading-relaxed text-foreground md:text-lg lg:text-xl">
                    {chapter.lead}
                  </p>

                  <div className="mt-5 space-y-4 text-sm leading-[1.95] text-muted md:text-base">
                    {chapter.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 16)}>{paragraph}</p>
                    ))}
                  </div>

                  {chapter.no === "04" ? (
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      {pillars.map((p) => (
                        <div
                          key={p.eyebrow}
                          className="rounded-2xl border-2 border-accent/20 bg-surface p-5 shadow-sm transition-colors hover:border-accent/60 md:p-6"
                        >
                          <p className="text-[0.65rem] font-bold tracking-[0.22em] text-accent md:text-xs">
                            {p.eyebrow}
                          </p>
                          <h3 className="mt-3 font-heading text-base font-bold leading-snug text-foreground md:text-lg">
                            {p.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted">
                            {p.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {chapter.no === "05" ? (
                    <ul className="mt-8 grid gap-3 md:grid-cols-3">
                      {powers.map((power, i) => (
                        <li
                          key={power}
                          className="flex items-start gap-3 rounded-2xl bg-surface px-5 py-4 shadow-sm md:flex-col md:items-start md:gap-2 md:p-5"
                        >
                          <span
                            aria-hidden
                            className="font-heading text-xl font-black text-accent md:text-2xl"
                          >
                            0{i + 1}
                          </span>
                          <span className="text-sm font-bold leading-snug text-foreground md:text-base">
                            {power}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {chapter.no === "06" ? (
                    <ul className="mt-8 space-y-3 rounded-2xl border border-accent/20 bg-surface p-5 md:p-6">
                      {welcomedKids.map((kid) => (
                        <li
                          key={kid}
                          className="flex items-start gap-3 text-sm leading-relaxed text-foreground md:text-base"
                        >
                          <span
                            aria-hidden
                            className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
                          />
                          <span>{kid}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {chapter.pullQuote ? (
                    <PullQuote>{chapter.pullQuote}</PullQuote>
                  ) : null}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section
          className="border-t-2 border-accent/15 bg-surface-warm py-16 md:py-24"
          aria-labelledby="concept-cta"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-[0.28em] text-accent md:text-sm">
                JOIN US
              </p>
              <h2
                id="concept-cta"
                className="mt-4 font-heading text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl"
              >
                まずは、お子さまの「やってみたい」を
                <br className="hidden md:block" />
                一緒に見つけにきてください。
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                授業の雰囲気や講師との相性は、実際に体験していただくのが一番です。お子さまの様子やご家庭のお考えを伺いながら、合う通い方をご提案します。
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <Link
                  href={trialApplicationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[3.5rem] items-center justify-center rounded-full px-8 py-4 text-base font-black tracking-wide md:min-h-[4rem] md:px-10 md:text-lg ${trialCtaGradientClasses}`}
                >
                  無料体験に参加する
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex min-h-[3.5rem] items-center justify-center rounded-full px-8 py-4 text-base font-black tracking-wide md:min-h-[4rem] md:px-10 md:text-lg ${contactInquiryCtaClasses}`}
                >
                  まずは相談してみる
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
