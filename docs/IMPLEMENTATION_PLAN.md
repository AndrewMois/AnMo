# Implementation plan

This plan begins after the documentation-and-cleanup commit. Work should proceed in small reviewable stages. Do not deploy to production or change `anmo.dev` until the Preview gate is approved.

## Phase 1 — Astro foundation

**Status: complete on 2026-08-15 (`c6c3201` plus the following quality-gate commit).**

- Initialize a current Astro project with TypeScript and static output.
- Establish formatting, linting, type checks, and a minimal test structure.
- Add semantic page shell, metadata system, local content model, and design-token foundation.
- Keep dependencies deliberately small; do not add a UI kit or template.

**Gate:** clean install, checks and production build pass; generated page works without client JavaScript.

Verified at completion:

- `npm run lint` passes with no Astro diagnostics;
- foundation unit tests pass;
- static production build passes;
- built page contains no client scripts;
- local browser QA passes at 1440, 390, and 360 CSS pixels with no page-level overflow;
- semantic `header`, `nav`, `main`, labelled sections, footer, skip link, and visible keyboard focus are present.

## Phase 2 — Content architecture

**Status: complete on 2026-08-15 (`2cdbd5a` plus the following page-composition commit).**

- Convert approved facts into typed project and experience data.
- Draft the English page copy in full.
- Resolve confidentiality-safe wording for BluWave AI and CRA.
- Define the final three-level content hierarchy: primary professional cases, primary product case, supporting builds.
- Prepare a synchronized downloadable resume or pause its public link until the file is approved.

**Gate:** every public claim maps to an approved source; no placeholders or invented metrics remain.

Verified at completion:

- approved professional and product claims are centralized in a typed content model with regression tests;
- the three-level case hierarchy is rendered as semantic static HTML;
- excluded legacy projects and the `Senior` public title have automated guardrails;
- the synchronized one-page resume is explicitly deferred until its own document-production phase and no stale PDF is linked;
- formatting, Astro diagnostics, unit tests, and the production build pass;
- local browser QA passes at desktop and 390 CSS pixels with no page-level overflow and zero client scripts.

## Phase 3 — Visual system prototypes

- Prototype Golden Precision tokens, type scale, grid, surfaces, focus states, and the inspection spine.
- Produce one desktop hero, one mobile hero, one professional case-study chapter, and one photographic episode before building the full page.
- Evaluate the portrait crop and tonal treatment while preserving the source.
- Check that gold reads as precision rather than luxury cliché and cobalt remains a rare charge.

**Gate:** the selected prototype feels distinctly personal and does not resemble a template or employer website.

## Phase 4 — Page composition

- Build navigation, hero, proof field, quality approach, case studies, developer perspective, personal close, and contact.
- Implement responsive art direction rather than shrinking desktop layouts.
- Add meaningful project imagery or custom diagrams only where they strengthen evidence.
- Optimize all responsive images and social-preview assets.

**Gate:** complete content is readable, coherent, and visually strong at 360, 390/430, 768, and desktop widths before motion is added.

## Phase 5 — Motion and interaction

- Implement the hero resolution and inspection-spine behavior with minimal JavaScript.
- Add controlled case-study reveals and precise hover/focus/active states.
- Implement a complete reduced-motion mode with no missing or hidden content.
- Test touch behavior and prevent geometry-changing hover effects.

**Gate:** motion communicates system investigation, stays smooth on a mid-range mobile viewport, and never blocks navigation or reading.

## Phase 6 — Quality engineering

- Add Playwright coverage for primary navigation, project links, resume/contact paths, keyboard behavior, mobile overflow, and reduced motion.
- Add automated link checking and accessibility scanning.
- Establish budgets for JavaScript, image weight, LCP/CLS/INP, and total page transfer.
- Verify semantic landmarks, heading order, alt text, focus visibility, color contrast, and no-JavaScript reading.

**Gate:** checks, production build, browser tests, and accessibility review pass with no known critical issue.

## Phase 7 — Preview

- Configure the selected host and create a non-production Preview.
- Verify metadata, social cards, favicon, canonical URL behavior, downloadable resume, and every external link.
- Perform desktop and mobile browser QA on the real Preview, separate from local checks.
- Share the Preview for Andriy's creative and content approval.

**Gate:** explicit approval of the real Preview. A successful build or push is not deployment verification.

## Phase 8 — Production transition

- Confirm rollback path to the archived template version.
- Switch `anmo.dev` only after approval.
- Verify HTTPS, redirects, canonical domain, analytics/privacy choice, production links, and contact behavior.
- Update GitHub and LinkedIn positioning where approved so the professional identity is consistent.

**Gate:** production is opened and verified independently on desktop and mobile; the old site remains recoverable from the archive tag.
