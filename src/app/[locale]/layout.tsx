import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "@/app/styles/global.css";
import { SiteHeader } from "@/components/navigation/site-header";
import { siteConfig } from "@/config/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          {dictionary.accessibility.skipToContent}
        </a>
        <SiteHeader locale={locale} />
        {children}
      </body>
    </html>
  );
}
