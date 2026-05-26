import Link from "next/link";

import { InstagramFeed } from "@/components/InstagramFeed";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  SocialCard,
  instagramBrandClass,
  instagramIcon,
  lineBrandClass,
  lineIcon,
} from "@/components/SocialCard";
import { getInstagramMedia } from "@/lib/instagram";
import { social } from "@/lib/site-config";

export async function HomeSnsSection() {
  const instagramItems = (await getInstagramMedia(8)) ?? [];

  return (
    <section
      id="sns"
      className="mx-auto max-w-6xl bg-surface-warm px-6 py-24 md:py-32"
    >
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
            公式アカウント
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted md:text-lg">
            日常の学びの様子やイベント速報をお届けしています。
          </p>
        </div>
      </ScrollReveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <ScrollReveal delay={0.06}>
          <SocialCard
            brandClass={lineBrandClass}
            icon={lineIcon}
            label="LINE公式アカウント"
            description="イベント情報やお知らせはこちらから！"
            ctaText="友だち追加はこちら"
            href={social.lineUrl}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <SocialCard
            brandClass={instagramBrandClass}
            icon={instagramIcon}
            label="Instagram"
            description="写真とリールで、教室の様子をお届けしています。"
            ctaText="Instagramを見る"
            href={social.instagramUrl}
          />
        </ScrollReveal>
      </div>

      {instagramItems.length > 0 ? (
        <div className="mt-16 md:mt-20">
          <ScrollReveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl font-black tracking-tight text-foreground md:text-3xl">
                  Instagramの最新投稿
                </h3>
                <p className="mt-2 text-sm text-muted md:text-base">
                  教室の日常を 1 日 1 回更新でお届けします。
                </p>
              </div>
              <Link
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-instagram-brand hover:underline md:text-base"
              >
                プロフィールを見る →
              </Link>
            </div>
          </ScrollReveal>
          <InstagramFeed items={instagramItems} />
        </div>
      ) : null}
    </section>
  );
}
