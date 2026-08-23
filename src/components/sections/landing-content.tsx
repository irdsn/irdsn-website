import Link from "next/link";
import Image from "next/image";

import { ExperienceDuration } from "@/components/experience/experience-duration";
import { NeuralIndex } from "@/components/navigation/neural-index";
import { TechnologyGraph } from "@/components/technology/technology-graph";
import { professionalProfile } from "@/content/profile";
import type { DateRange } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProjectPath } from "@/lib/routes";

function formatDate(value: string, locale: Locale) {
  if (!value.includes("-")) return value;
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    month: "short",
    year: "numeric",
  }).format(new Date(Date.UTC(year ?? 0, (month ?? 1) - 1, 1)));
}

function formatPeriod(period: DateRange, locale: Locale, currentLabel: string) {
  const start = formatDate(period.start, locale);
  const end = period.current ? currentLabel : period.end ? formatDate(period.end, locale) : "";
  return end ? `${start} — ${end}` : start;
}

export function LandingContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const profile = professionalProfile;
  const projectsHref = locale === "es" ? "/es/projects" : "/en/projects";
  const cvFile =
    locale === "es" ? "inigo-rodriguez-sanchez-cv-es.pdf" : "inigo-rodriguez-sanchez-cv-en.pdf";

  return (
    <>
      <section className="hero" aria-labelledby="page-title" id="profile">
        <div className="hero-copy">
          <p className="eyebrow">{dictionary.home.eyebrow}</p>
          <h1 id="page-title">{profile.name}</h1>
          <p className="hero-name">{profile.headline[locale]}</p>
          <p className="lede">{dictionary.home.description}</p>
          <div className="actions">
            <a className="button-link button-link--primary" href="#projects">
              {dictionary.home.projects}
            </a>
            <a className="button-link" href={`/documents/${cvFile}`} download>
              {dictionary.home.downloadCv}
            </a>
            <a className="button-link" href="#contact">
              {dictionary.home.contact}
            </a>
          </div>
        </div>
        <NeuralIndex locale={locale} />
      </section>

      <section className="landing-section profile-section" aria-labelledby="profile-title">
        <header className="section-heading">
          <p className="eyebrow">{dictionary.sections.profile}</p>
          <h2 id="profile-title">{dictionary.sections.profileTitle}</h2>
        </header>
        <div className="profile-summary">
          {profile.summary[locale].map((paragraph) => (
            <p className="section-lede" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="landing-section" id="expertise" aria-labelledby="expertise-title">
        <header className="section-heading">
          <p className="eyebrow">{dictionary.sections.expertise}</p>
          <h2 id="expertise-title">{dictionary.sections.expertiseTitle}</h2>
        </header>
        <TechnologyGraph locale={locale} />
      </section>

      <section className="landing-section" id="experience" aria-labelledby="experience-title">
        <header className="section-heading">
          <p className="eyebrow">{dictionary.sections.experience}</p>
          <h2 id="experience-title">{dictionary.sections.experienceTitle}</h2>
        </header>
        <div className="timeline">
          {profile.experience.map((experience) => (
            <article className="timeline-entry" key={experience.id}>
              <div className="timeline-meta">
                <div className="timeline-meta__date">
                  <p>{formatPeriod(experience.period, locale, dictionary.sections.current)}</p>
                  <p>{experience.location[locale]}</p>
                  <ExperienceDuration locale={locale} period={experience.period} />
                </div>
                <a
                  aria-label={`${experience.organization} — ${locale === "es" ? "sitio web" : "website"}`}
                  className="organization-logo"
                  href={experience.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt={`${locale === "es" ? "Logo de" : "Logo of"} ${experience.organization}`}
                    height={96}
                    src={experience.logo}
                    width={240}
                  />
                </a>
                <div className="organization-description">
                  {experience.description[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="timeline-content">
                <h3>{experience.organization}</h3>
                {experience.roles.map((role) => (
                  <div className="role" key={role.id}>
                    <p className="role-period">
                      {formatPeriod(role.period, locale, dictionary.sections.current)}
                    </p>
                    <h4>{role.title[locale]}</h4>
                    {"description" in role && role.description ? (
                      <div className="role-description">
                        {role.description[locale].map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <p>{role.summary[locale]}</p>
                    )}
                    {role.responsibilities.length > 0 && (
                      <details>
                        <summary>{dictionary.sections.responsibilities}</summary>
                        <ul>
                          {role.responsibilities.map((responsibility) => (
                            <li key={responsibility.en}>{responsibility[locale]}</li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>
                ))}
                <ul className="tag-list">
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section" id="projects" aria-labelledby="selected-projects-title">
        <header className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">{dictionary.sections.projects}</p>
            <h2 id="selected-projects-title">{dictionary.sections.projectsTitle}</h2>
          </div>
          <Link className="text-link" href={projectsHref}>
            {dictionary.sections.allProjects}
          </Link>
        </header>
        <div className="featured-projects">
          {profile.caseStudies
            .filter((project) => project.featured)
            .map((project) => (
              <article className="project-feature" key={project.id}>
                <Image
                  alt={`${project.title[locale]} — ${locale === "es" ? "imagen de proyecto" : "project artwork"}`}
                  className="project-image"
                  height={220}
                  src={project.image}
                  width={220}
                />
                <div>
                  <h3>{project.title[locale]}</h3>
                  <p>{project.summary[locale]}</p>
                  <ul className="tag-list">
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
      </section>

      <section className="landing-section credentials-grid" id="credentials">
        <div aria-labelledby="education-title">
          <header className="section-heading">
            <p className="eyebrow">{dictionary.sections.education}</p>
            <h2 id="education-title">{dictionary.sections.educationTitle}</h2>
          </header>
          <div className="compact-list">
            {profile.education.map((education) => (
              <article key={education.id}>
                <p className="item-date">
                  {formatPeriod(education.period, locale, dictionary.sections.current)}
                </p>
                <h3>{education.qualification[locale]}</h3>
                <p>{education.institution}</p>
              </article>
            ))}
          </div>
        </div>
        <div aria-labelledby="certifications-title">
          <header className="section-heading">
            <p className="eyebrow">{dictionary.sections.certifications}</p>
            <h2 id="certifications-title">{dictionary.sections.certificationsTitle}</h2>
          </header>
          <div className="compact-list">
            {profile.certifications.map((certification) => (
              <article key={certification.id}>
                <p className="item-date">{formatDate(certification.issued, locale)}</p>
                <h3>{certification.name[locale]}</h3>
                <p>{certification.issuer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section" id="achievements" aria-labelledby="achievements-title">
        <header className="section-heading">
          <p className="eyebrow">{dictionary.sections.achievements}</p>
          <h2 id="achievements-title">{dictionary.sections.achievementsTitle}</h2>
        </header>
        <div className="achievement-grid">
          {profile.achievements.map((achievement) => (
            <article key={achievement.id}>
              <h3>{achievement.title[locale]}</h3>
              <p>{achievement.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section recommendation" aria-labelledby="recommendation-title">
        <p className="eyebrow">{dictionary.recommendations.excerpt}</p>
        <h2 id="recommendation-title">{dictionary.recommendations.title}</h2>
        {profile.recommendations.map((recommendation) => (
          <figure key={recommendation.id}>
            <blockquote>“{recommendation.quote[locale]}”</blockquote>
            <figcaption>— {recommendation.author}</figcaption>
            <p className="translation-note">{dictionary.sections.recommendationTranslation}</p>
            <a
              className="text-link"
              href={recommendation.sourceUrl}
              rel="noreferrer"
              target="_blank"
            >
              {dictionary.recommendations.source}
            </a>
          </figure>
        ))}
      </section>

      <section
        className="landing-section contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <header className="section-heading">
          <p className="eyebrow">{dictionary.sections.contact}</p>
          <h2 id="contact-title">{dictionary.sections.contactTitle}</h2>
          <p className="section-lede">{dictionary.sections.contactDescription}</p>
        </header>
        <address className="contact-grid">
          {profile.contact.map((contact) => (
            <a href={contact.href} key={contact.id} rel="noreferrer">
              <span className="contact-icon" aria-hidden="true">
                <Image alt="" height={48} src={contact.icon} width={48} />
              </span>
              <span className="contact-copy">
                <span>{contact.label[locale]}</span>
                <strong>{contact.value}</strong>
              </span>
            </a>
          ))}
        </address>
      </section>
    </>
  );
}
