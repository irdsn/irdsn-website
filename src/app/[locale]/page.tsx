import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LandingContent } from "@/components/sections/landing-content";
import { professionalProfile } from "@/content/profile";
import { createMetadata } from "@/lib/metadata";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return createMetadata({
    locale,
    title: `${professionalProfile.name} | ${professionalProfile.headline[locale]}`,
    description: dictionary.home.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main id="main-content">
      <LandingContent locale={locale} />
    </main>
  );
}
