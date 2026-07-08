import {
  colocatedFreeSchool,
  contact,
  footerInfo,
  siteAlternateNames,
  siteName,
  siteOgImage,
  siteTagline,
  siteUrl,
  social,
} from "@/lib/site-config";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** トップページ用: 組織情報 + サイト情報の JSON-LD をまとめて出力 */
export function HomeJsonLd() {
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: siteName,
    alternateName: [...siteAlternateNames],
    url: siteUrl,
    logo: `${siteUrl}/logo-coreda.jpg`,
    image: `${siteUrl}${siteOgImage.path}`,
    description: siteTagline,
    slogan: siteTagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "吾妻3丁目-11-5",
      addressLocality: "つくば市",
      addressRegion: "茨城県",
      postalCode: "305-0031",
      addressCountry: "JP",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "茨城県つくば市",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      social.instagramUrl,
      social.lineUrl,
      colocatedFreeSchool.websiteUrl,
      footerInfo.operatorWebsite,
    ].filter(Boolean),
    parentOrganization: {
      "@type": "Organization",
      name: footerInfo.operatorName,
      url: footerInfo.operatorWebsite,
      address: {
        "@type": "PostalAddress",
        streetAddress: "吾妻2-5-1 つくば市産業振興センター",
        addressLocality: "つくば市",
        addressRegion: "茨城県",
        postalCode: "305-0031",
        addressCountry: "JP",
      },
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteName,
    alternateName: [...siteAlternateNames],
    description: siteTagline,
    inLanguage: "ja-JP",
    publisher: { "@id": organizationId },
  };

  return <JsonLd data={[organization, website]} />;
}

/** パンくず用 JSON-LD */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

