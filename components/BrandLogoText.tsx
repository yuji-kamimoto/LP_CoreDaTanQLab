import { siteName } from "@/lib/site-config";

type BrandLogoTextProps = {
  /** 色・サイズ・折り返しなど（例: `text-foreground text-2xl`） */
  className?: string;
};

/** 塾名を VDL ロゴJrブラック系（`.font-brand`）で表示 */
export function BrandLogoText({ className = "" }: BrandLogoTextProps) {
  return (
    <span className={`font-brand ${className}`.trim()}>{siteName}</span>
  );
}
