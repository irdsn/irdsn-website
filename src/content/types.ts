import type { Locale } from "@/i18n/config";

export type LocalizedText = Readonly<Record<Locale, string>>;

export type DateRange = Readonly<{
  start: string;
  end?: string;
  current?: boolean;
}>;

export type LinkReference = Readonly<{
  label: LocalizedText;
  href: string;
  external?: boolean;
}>;

export type ExperienceRole = Readonly<{
  id: string;
  title: LocalizedText;
  period: DateRange;
  summary: LocalizedText;
  description?: Readonly<Record<Locale, ReadonlyArray<string>>>;
  responsibilities: ReadonlyArray<LocalizedText>;
}>;

export type ExperienceEntry = Readonly<{
  id: string;
  organization: string;
  website: string;
  logo: string;
  location: LocalizedText;
  period: DateRange;
  description: Readonly<Record<Locale, ReadonlyArray<string>>>;
  roles: ReadonlyArray<ExperienceRole>;
  technologies: ReadonlyArray<string>;
}>;

export type EducationEntry = Readonly<{
  id: string;
  qualification: LocalizedText;
  institution: string;
  period: DateRange;
}>;

export type CertificationEntry = Readonly<{
  id: string;
  name: LocalizedText;
  issuer: string;
  issued: string;
  credential?: LinkReference;
}>;

export type AchievementEntry = Readonly<{
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}>;

export type CaseStudy = Readonly<{
  id: string;
  featured: boolean;
  image: string;
  slug: Readonly<Record<Locale, string>>;
  title: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  context: LocalizedText;
  solution: LocalizedText;
  decisions: ReadonlyArray<LocalizedText>;
  implementation: LocalizedText;
  outcome?: LocalizedText;
  technologies: ReadonlyArray<string>;
  links: ReadonlyArray<LinkReference>;
}>;

export type RecommendationEntry = Readonly<{
  id: string;
  author: string;
  quote: LocalizedText;
  excerpt: boolean;
  sourceUrl: string;
}>;

export type SkillGroup = Readonly<{
  id: string;
  label: LocalizedText;
  items: ReadonlyArray<string>;
}>;

export type ContactEntry = Readonly<{
  id: string;
  label: LocalizedText;
  value: string;
  href: string;
  icon: string;
}>;

export type ProfessionalProfile = Readonly<{
  name: string;
  headline: LocalizedText;
  summary: Readonly<Record<Locale, ReadonlyArray<string>>>;
  experience: ReadonlyArray<ExperienceEntry>;
  education: ReadonlyArray<EducationEntry>;
  certifications: ReadonlyArray<CertificationEntry>;
  achievements: ReadonlyArray<AchievementEntry>;
  recommendations: ReadonlyArray<RecommendationEntry>;
  skillGroups: ReadonlyArray<SkillGroup>;
  contact: ReadonlyArray<ContactEntry>;
  caseStudies: ReadonlyArray<CaseStudy>;
}>;
