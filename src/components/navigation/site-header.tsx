import Link from "next/link";

import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const homeHref = locale === "es" ? "/es" : "/en";
  const projectsHref = locale === "es" ? "/es/projects" : "/en/projects";

  return (
    <header className="site-header">
      <Link className="brand" href={homeHref}>
        Íñigo Rodríguez Sánchez
      </Link>
      <nav aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}>
        <a href={`${homeHref}#experience`}>{dictionary.navigation.experience}</a>
        <Link href={projectsHref}>{dictionary.home.projects}</Link>
        <a href={`${homeHref}#contact`}>{dictionary.navigation.contact}</a>
        <LanguageSwitcher locale={locale} label={dictionary.accessibility.language} />
        <ThemeToggle label={dictionary.accessibility.theme} />
      </nav>
    </header>
  );
}
