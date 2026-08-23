# Content Architecture

## Product objective

The website presents an AI and data engineering profile to recruiters, hiring managers,
engineering leaders, potential clients, and collaborators. It supports both rapid scanning and
deeper technical evaluation without reproducing the CV as a web page.

Spanish is the default language. English provides an equivalent experience through explicit,
indexable URLs and an accessible language switcher.

## Information architecture

### Home page

The localized home page provides the complete high-level professional narrative:

1. **Introduction** — identity, current positioning, concise value proposition, and one primary
   call to action.
2. **Professional focus** — a small set of evidence-based capability areas rather than an
   exhaustive technology cloud.
3. **Selected work** — verified projects or case studies with links to dedicated pages.
4. **Experience** — reverse-chronological career progression, emphasizing responsibilities and
   impact supported by the source material.
5. **Background** — education, certifications, and selected achievements.
6. **Contact** — direct professional channels and localized CV download.

Skills remain contextual to experience and projects. A compact skills index may support scanning,
but it does not replace evidence of applied work.

### Case studies

Each selected case study receives a dedicated localized page with the following model:

```text
Problem
  -> Context and constraints
  -> Proposed solution
  -> Architecture and technical decisions
  -> Relevant implementation
  -> Verified outcome
```

An outcome is optional when no supported metric or result is available. Technologies alone are
not sufficient to qualify a project as a case study.

### Supporting routes

- `/es` — canonical Spanish home page and default destination.
- `/en` — canonical English home page.
- `/es/projects` and `/en/projects` — localized project indexes in the current routing baseline.
- Dedicated case-study routes will use a stable content identifier and localized slugs.
- Localized not-found experiences return visitors to the corresponding home page.

## Content model

Professional content is independent from UI components and uses stable identifiers across
languages. The TypeScript contracts live in `src/content/types.ts` and cover:

- professional profile;
- experience entries with multiple roles;
- education;
- certifications;
- achievements;
- skills;
- case studies;
- localized links and text.

Dates use machine-readable values independently from their localized display format. Technology
names remain language-neutral unless an official localized form exists.

## Source policy

- The Spanish CV is authoritative for Spanish copy.
- The English CV is authoritative for English copy.
- DOCX files are internal sources and are never published.
- Approved PDFs are public downloads and are copied without content changes.
- GitHub repositories may extend project evidence only after explicit analysis or authorization.
- LinkedIn recommendations require real, attributable source material.
- Unsupported metrics, outcomes, responsibilities, technologies, and testimonials are prohibited.

## Source-backed content inventory

The available CVs support the following content groups:

- a professional summary focused on artificial intelligence and data engineering;
- professional experience at Base 100, Kyra Group / AKAIO, FI Group, and British Telecom Spain;
- role progression within Kyra Group / AKAIO;
- higher education in telecommunications engineering and artificial intelligence;
- Neo4j and English-language certifications;
- academic and internal innovation achievements;
- contact details and professional profiles;
- a broad technical stack spanning AI, data, backend, databases, infrastructure, and automation.

This inventory supports the home-page narrative. Repository-level analysis provides additional
evidence for four project pages:

- SciFetch and AISudokuSolver are featured case studies because they demonstrate complete,
  documented pipelines with tests and multiple architectural layers.
- NeuroGoalkeeper provides academic and machine-learning evidence, supported by its official UPM
  publication.
- MongoDataOps is presented as a supporting engineering project. It demonstrates reusable data
  operations, but no unverified performance or outcome claims are made.

## Editorial decisions required before publication

The following items require explicit review instead of silent normalization:

1. Confirm which contact details may be publicly displayed beyond the existing CV downloads.
2. Confirm whether client names from the FI Group experience may appear on the public website.
3. Confirm whether the current employer description and current-role responsibilities remain
   approved for publication.
4. Provide the original text directly if the complete LinkedIn recommendation should replace the
   attributed public excerpt currently used.
5. Decide whether the Stephen Hawking quotation contributes to the web narrative; it is not
   considered core professional evidence and is excluded by default.

Minor spacing, capitalization, and language-mixing defects in the source documents must be
corrected editorially without changing their professional meaning. Any substantive discrepancy
between language versions must be resolved before the affected content is published.

## Content implementation sequence

1. Approve the information architecture and publication decisions above.
2. Populate the typed profile with source-backed Spanish and English content.
3. Define the final navigation and localized route mappings.
4. Implement the visual system and remaining page sections against the approved content model.
5. Validate accessibility, responsive behavior, metadata, structured data, and performance.
