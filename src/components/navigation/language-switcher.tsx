"use client";

import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const alternateLocale = locale === "es" ? "en" : "es";
  const targetPath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${alternateLocale}`);

  return (
    <a aria-label={label} href={targetPath || `/${alternateLocale}`} hrefLang={alternateLocale}>
      {alternateLocale.toUpperCase()}
    </a>
  );
}
