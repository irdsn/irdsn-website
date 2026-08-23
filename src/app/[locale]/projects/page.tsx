import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies } from "@/content/case-studies";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/lib/metadata";
import { getProjectPath } from "@/lib/routes";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return createMetadata({
    locale,
    title: dictionary.projects.title,
    description: dictionary.projects.description,
    pathname: "/projects",
  });
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <main id="main-content">
      <section className="intro" aria-labelledby="projects-title">
        <h1 id="projects-title">{dictionary.projects.title}</h1>
        <p className="lede">{dictionary.projects.description}</p>
        <div className="actions">
          <Link className="button-link" href={`/${locale}`}>
            {dictionary.projects.back}
          </Link>
        </div>
      </section>
      <div className="featured-projects projects-list">
        {caseStudies.map((project) => (
          <article className="project-feature" key={project.id}>
            <Image
              alt={`${project.title[locale]} — ${locale === "es" ? "imagen de proyecto" : "project artwork"}`}
              className="project-image"
              height={220}
              src={project.image}
              width={220}
            />
            <div>
              <h2>{project.title[locale]}</h2>
              <p>{project.summary[locale]}</p>
              <ul className="tag-list" aria-label={dictionary.projects.technologies}>
                {project.technologies.slice(0, 5).map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <Link className="text-link" href={getProjectPath(locale, project.slug[locale])}>
                {dictionary.projects.view}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
