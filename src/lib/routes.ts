import type { Route } from "next";

import type { Locale } from "@/i18n/config";

export function getProjectPath(locale: Locale, slug: string): Route {
  return `/${locale}/projects/${slug}` as Route;
}
