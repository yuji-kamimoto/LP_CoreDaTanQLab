import Link from "next/link";

import { BrandLogoText } from "@/components/BrandLogoText";
import {
  contact,
  footerInfo,
  siteName,
  siteTagline,
} from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-accent/25 bg-footer-ink py-14 text-sm text-footer-fg/90 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
        <div>
          <div className="max-w-2xl">
            <BrandLogoText className="block text-left text-xl leading-tight text-footer-fg sm:text-2xl md:text-3xl lg:text-[1.85rem]" />
          </div>
          <p className="mt-4 max-w-md leading-relaxed text-footer-fg/75">
            {siteTagline}
          </p>
          <p className="mt-5 text-xs leading-relaxed text-footer-fg/60">
            名前に込めた想いに沿うよう、学びの機会と応答を大切にしつつ、親御さんが安心して相談できる場であることも重ねています。
          </p>
        </div>

        <div className="md:pt-8">
          <h2 className="text-xs font-bold tracking-[0.18em] text-footer-fg/70">
            教室情報
          </h2>
          <dl className="mt-4 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="text-footer-fg/55">教室所在地</dt>
              <dd className="mt-1 text-footer-fg">{contact.address}</dd>
            </div>
            <div>
              <dt className="text-footer-fg/55">営業時間</dt>
              <dd className="mt-1 text-footer-fg">
                {footerInfo.businessHoursWeekday}
                <br />
                {footerInfo.businessHoursWeekend}
                <span className="mt-2 block text-xs leading-relaxed text-footer-fg/70">
                  {footerInfo.businessHoursNote}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-t border-footer-fg/15 pt-8 md:border-t-0 md:border-l md:pl-8">
          <h2 className="text-xs font-bold tracking-[0.18em] text-footer-fg/70">
            運営会社
          </h2>
          <div className="mt-4 space-y-3 leading-relaxed">
            <p className="font-medium text-footer-fg">
              {footerInfo.operatorName}
            </p>
            <p className="text-footer-fg/75">{footerInfo.operatorAddress}</p>
            <Link
              href={footerInfo.operatorWebsite}
              className="inline-flex items-center rounded-full border border-footer-fg/20 px-4 py-2 text-sm font-semibold text-footer-fg transition-colors hover:border-accent hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              会社HPを見る
            </Link>
            <div className="pt-2">
              <Link
                href="https://oneangle.jp/contact.html"
                className="inline-flex items-center rounded-full border border-footer-fg/20 px-4 py-2 text-sm font-semibold text-footer-fg transition-colors hover:border-accent hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                会社へのお問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-footer-fg/10 px-6 pt-5 text-xs text-footer-fg/55 md:mt-12">
        <p>
          © {new Date().getFullYear()} {siteName} / Operated by{" "}
          {footerInfo.operatorName}
        </p>
        <p className="mt-2">
          教室所在地と運営会社所在地は異なります。ご来訪前に最新のご案内をご確認ください。
        </p>
      </div>
    </footer>
  );
}
