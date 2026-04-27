import Image from "next/image";

import { siteName } from "@/lib/site-config";

const LOGO_DESKTOP = "/logo-coreda.jpg";
const LOGO_PHONE = "/logo-coreda-phone.jpg";

type BrandLogoTextProps = {
  className?: string;
};

export function BrandLogoText({ className = "" }: BrandLogoTextProps) {
  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      <Image
        src={LOGO_PHONE}
        alt={siteName}
        width={1801}
        height={600}
        sizes="160px"
        className="h-8 w-auto object-contain md:hidden"
        priority
      />
      <Image
        src={LOGO_DESKTOP}
        alt={siteName}
        width={4591}
        height={600}
        sizes="(max-width: 1280px) 220px, 280px"
        className="hidden h-9 w-auto object-contain md:block lg:h-11"
        priority
      />
    </span>
  );
}
