import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/projects"];

  const corePages = paths.flatMap((path) =>
    (["es", "en"] as const).map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      changeFrequency: path ? ("monthly" as const) : ("weekly" as const),
      priority: path ? 0.8 : 1,
      alternates: {
        languages: {
          es: `${siteConfig.url}/es${path}`,
          en: `${siteConfig.url}/en${path}`,
          "x-default": `${siteConfig.url}/es${path}`,
        },
      },
    })),
  );

  const projectPages = caseStudies.flatMap((project) =>
    (["es", "en"] as const).map((locale) => ({
      url: `${siteConfig.url}/${locale}/projects/${project.slug[locale]}`,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.8 : 0.7,
      alternates: {
        languages: {
          es: `${siteConfig.url}/es/projects/${project.slug.es}`,
          en: `${siteConfig.url}/en/projects/${project.slug.en}`,
          "x-default": `${siteConfig.url}/es/projects/${project.slug.es}`,
        },
      },
    })),
  );

  return [...corePages, ...projectPages];
}
