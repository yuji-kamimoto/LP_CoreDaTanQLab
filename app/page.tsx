import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">塾名（仮）</span>
          <nav className="flex gap-6 text-sm text-foreground/80">
            <Link className="hover:text-accent transition-colors" href="#courses">
              コース
            </Link>
            <Link className="hover:text-accent transition-colors" href="#access">
              アクセス
            </Link>
            <Link className="hover:text-accent transition-colors" href="#contact">
              お問い合わせ
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-accent text-sm font-medium tracking-wide">
            学び続ける力を、ここから
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            一人ひとりに合わせた指導で、確かな学力と自信を。
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="max-w-xl text-lg text-foreground/75">
            定期テスト対策から受験指導まで。経験豊富な講師陣が、目標達成まで伴走します。
          </p>
        </ScrollReveal>
      </section>

      <section
        id="courses"
        className="mx-auto max-w-5xl space-y-10 px-6 py-20 md:py-28"
      >
        <ScrollReveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            コース
          </h2>
          <p className="mt-2 max-w-2xl text-foreground/70">
            microCMS でコース一覧を管理する想定のプレースホルダーです。
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {["小学生", "中学生", "高校生"].map((label, i) => (
            <ScrollReveal key={label} delay={i * 0.06}>
              <article className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-medium">{label}コース</h3>
                <p className="mt-2 text-sm text-foreground/65">
                  カリキュラム・料金は CMS から取得して表示します。
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="access"
        className="border-t border-foreground/10 bg-foreground/[0.03] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              アクセス
            </h2>
            <p className="mt-4 max-w-xl text-foreground/70">
              住所・地図・最寄り駅は microCMS または固定コンテンツで管理できます。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            お問い合わせ
          </h2>
          <p className="mt-4 text-foreground/70">
            体験授業のお申し込みは、フォームまたはお電話で承ります（実装予定）。
          </p>
        </ScrollReveal>
      </section>

      <footer className="border-t border-foreground/10 py-10 text-center text-sm text-foreground/55">
        © {new Date().getFullYear()} 塾名（仮）
      </footer>
    </main>
  );
}
