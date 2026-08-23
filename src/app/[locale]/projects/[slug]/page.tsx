import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies } from "@/content/case-studies";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

function getCaseStudy(locale: Locale, slug: string) {
  return caseStudies.find((project) => project.slug[locale] === slug);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudies.map((project) => ({ locale, slug: project.slug[locale] })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getCaseStudy(locale, slug);
  if (!project) return {};

  return createMetadata({
    locale,
    title: project.title[locale],
    description: project.summary[locale],
    pathname: `/projects/${project.slug[locale]}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getCaseStudy(locale, slug);
  if (!project) notFound();
  const dictionary = getDictionary(locale);

  return (
    <main id="main-content">
      <article className="case-study">
        {project.featured && <p className="eyebrow">{dictionary.projects.featured}</p>}
        <Image
          alt=""
          className="case-study-image"
          height={640}
          priority
          src={project.image}
          width={640}
        />
        <h1>{project.title[locale]}</h1>
        <p className="lede">{project.summary[locale]}</p>

        <section>
          <h2>{dictionary.projects.problem}</h2>
          <p>{project.problem[locale]}</p>
        </section>
        <section>
          <h2>{dictionary.projects.context}</h2>
          <p>{project.context[locale]}</p>
        </section>
        <section>
          <h2>{dictionary.projects.solution}</h2>
          <p>{project.solution[locale]}</p>
        </section>
        <section>
          <h2>{dictionary.projects.decisions}</h2>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision.en}>{decision[locale]}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{dictionary.projects.implementation}</h2>
          <p>{project.implementation[locale]}</p>
        </section>
        {"outcome" in project && project.outcome && (
          <section>
            <h2>{dictionary.projects.outcome}</h2>
            <p>{project.outcome[locale]}</p>
          </section>
        )}
        <section>
          <h2>{dictionary.projects.technologies}</h2>
          <ul className="tag-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
        <div className="actions">
          {project.links.map((link) => (
            <a
              className="button-link"
              href={link.href}
              key={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label[locale]}
            </a>
          ))}
          <Link className="button-link" href={`/${locale}/projects`}>
            {dictionary.projects.back}
          </Link>
        </div>
      </article>
    </main>
  );
}
