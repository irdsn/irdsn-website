import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  pathname?: string;
};

export function createMetadata({
  locale,
  title,
  description,
  pathname = "",
}: MetadataInput): Metadata {
  const localizedPath = `/${locale}${pathname}`;
  const alternateLocale = locale === "es" ? "en" : "es";
  const alternatePath = `/${alternateLocale}${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        es: locale === "es" ? localizedPath : alternatePath,
        en: locale === "en" ? localizedPath : alternatePath,
        "x-default": `/es${pathname}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: localizedPath,
      title,
      description,
      siteName: siteConfig.name,
    },
  };
}
