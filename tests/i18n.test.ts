import { describe, expect, it } from "vitest";

import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProjectPath } from "@/lib/routes";
import { caseStudies } from "@/content/case-studies";

describe("internationalization configuration", () => {
  it("supports the required locales", () => {
    expect(locales).toEqual(["es", "en"]);
  });

  it("uses Spanish as the default locale", () => {
    expect(defaultLocale).toBe("es");
  });

  it("rejects unsupported locales", () => {
    expect(isLocale("fr")).toBe(false);
  });

  it.each(locales)("provides essential content for %s", (locale) => {
    const dictionary = getDictionary(locale);
    expect(dictionary.home.title).toBeTruthy();
    expect(dictionary.accessibility.skipToContent).toBeTruthy();
  });

  it.each(locales)("provides localized content for every case study in %s", (locale) => {
    for (const project of caseStudies) {
      expect(project.title[locale]).toBeTruthy();
      expect(project.summary[locale]).toBeTruthy();
      expect(project.slug[locale]).toBeTruthy();
    }
  });

  it("builds concrete App Router project URLs", () => {
    expect(getProjectPath("es", "sci-fetch")).toBe("/es/projects/sci-fetch");
    expect(getProjectPath("en", "sci-fetch")).toBe("/en/projects/sci-fetch");
  });
});
