# Implementation plan

This plan began after the documentation-and-cleanup commit. Work proceeded in small reviewable stages. Andriy's explicit production authorization on 2026-08-15 superseded the planned non-production Preview gate.

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

**Status: complete on 2026-08-15 (integrated prototype commit follows Phase 2).**

- Prototype Golden Precision tokens, type scale, grid, surfaces, focus states, and the inspection spine.
- Produce one desktop hero, one mobile hero, one professional case-study chapter, and one photographic episode before building the full page.
- Evaluate the portrait crop and tonal treatment while preserving the source.
- Check that gold reads as precision rather than luxury cliché and cobalt remains a rare charge.

**Gate:** the selected prototype feels distinctly personal and does not resemble a template or employer website.

Verified at completion:

- Golden Precision is expressed through warm ivory, deep ink, restrained gold, steel blue, and one rare cobalt signal rather than decorative luxury motifs;
- desktop and mobile hero compositions, the dark professional-case episode, responsive information structures, and the photographic pause are implemented in real page context;
- the supplied portrait remains photographically authentic; a generative tonal experiment was rejected, and responsive AVIF/WebP/JPEG derivatives were made from the untouched source instead;
- desktop and 390-pixel mobile browser inspection confirms the selected portrait crops, readable overlays, responsive source selection, and no horizontal overflow;
- the prototype remains static and respects reduced-motion preferences before any motion layer is added.

## Phase 4 — Page composition

**Status: complete on 2026-08-15 (composition and link-validation commits follow Phase 3).**

- Build navigation, hero, proof field, quality approach, case studies, developer perspective, personal close, and contact.
- Implement responsive art direction rather than shrinking desktop layouts.
- Add meaningful project imagery or custom diagrams only where they strengthen evidence.
- Optimize all responsive images and social-preview assets.

**Gate:** complete content is readable, coherent, and visually strong at 360, 390/430, 768, and desktop widths before motion is added.

Verified at completion:

- navigation, hero, proof field, approach, three deep case studies, developer perspective, supporting builds, working range, portrait, about, and contact form one semantic page narrative;
- the desktop layout is recomposed into single-column sequences on mobile instead of being uniformly scaled down;
- portrait sources are responsive, explicitly sized, lazy-loaded, and available as AVIF, WebP, and JPEG;
- project links are restricted to confirmed HTTPS destinations; the retired Young Mystic demo and unresolved Guided by Scent domain are intentionally not published;
- local browser checks pass at 360, 390, 430, 768, and 1280 CSS pixels with no page-level overflow, all internal anchors resolved, and all external links protected with `noreferrer`;
- the complete page still ships zero client scripts.

## Phase 5 — Motion and interaction

**Status: complete on 2026-08-15 (motion-layer commit follows Phase 4).**

- Implement the hero resolution and inspection-spine behavior with minimal JavaScript.
- Add controlled case-study reveals and precise hover/focus/active states.
- Implement a complete reduced-motion mode with no missing or hidden content.
- Test touch behavior and prevent geometry-changing hover effects.

**Gate:** motion communicates system investigation, stays smooth on a mid-range mobile viewport, and never blocks navigation or reading.

Verified at completion:

- one dependency-free inline script progressively enhances the static document with intersection-based reveals and a requestAnimationFrame-throttled inspection-spine signal;
- the spine records reading progress on larger screens and is removed from the mobile composition;
- reveal transitions use only opacity and transform, unobserve settled elements, and do not change layout geometry;
- all content remains present in the generated HTML and visible when JavaScript is unavailable;
- the complete reduced-motion stylesheet removes smooth scrolling and effectively disables transitions and animations;
- local browser QA confirms reveal activation, progress updates, complete mobile hero visibility, no overflow, and stable navigation at 390 and desktop widths.

## Phase 6 — Quality engineering

**Status: complete on 2026-08-15 (quality-gate and CI commit follows Phase 5).**

- Add Playwright coverage for primary navigation, project links, resume/contact paths, keyboard behavior, mobile overflow, and reduced motion.
- Add automated link checking and accessibility scanning.
- Establish budgets for JavaScript, image weight, LCP/CLS/INP, and total page transfer.
- Verify semantic landmarks, heading order, alt text, focus visibility, color contrast, and no-JavaScript reading.

**Gate:** checks, production build, browser tests, and accessibility review pass with no known critical issue.

Verified at completion:

- Playwright covers the complete narrative, navigation targets, contact and project paths, 360/390/430/768 overflow, reduced motion, and no-JavaScript reading;
- axe-core reports no serious or critical automated accessibility violations;
- the build checker validates internal anchors, built image sources, unsafe schemes, HTML size, image weight, client-script count, and JavaScript size;
- documented hosted targets are LCP `≤ 2.5 s`, CLS `≤ 0.10`, and INP `≤ 200 ms`;
- all nine Chromium scenarios, eight unit tests, formatting, Astro diagnostics, build checks, and the production build pass;
- GitHub Actions now reproduces the complete quality gate on the rebuild branch, pull requests, and `master`.

## Phase 7 — Preview

**Status: superseded on 2026-08-15 by explicit authorization to publish through the existing Netlify production pipeline.**

- Configure the selected host and create a non-production Preview.
- Verify metadata, social cards, favicon, canonical URL behavior, downloadable resume, and every external link.
- Perform desktop and mobile browser QA on the real Preview, separate from local checks.
- Share the Preview for Andriy's creative and content approval.

**Gate:** explicit approval of the real Preview. A successful build or push is not deployment verification.

No separate Preview was created. Local quality gates passed before the production push, and the resulting hosted deployment was then verified independently.

## Phase 8 — Production transition

**Status: technical release complete on 2026-08-15 (`b0121e0` configures and successfully publishes the Netlify build); Andriy's visual review is the next feedback stage.**

- Confirm rollback path to the archived template version.
- Switch `anmo.dev` only after approval.
- Verify HTTPS, redirects, canonical domain, analytics/privacy choice, production links, and contact behavior.
- Update GitHub and LinkedIn positioning where approved so the professional identity is consistent.

**Gate:** production is opened and verified independently on desktop and mobile; the old site remains recoverable from the archive tag.

Verified at completion:

- the canonical GitHub repository remains `AndrewMois/AnMo`; the legacy `simplefolio` name survives only in historical Netlify integration metadata;
- Netlify builds `master` with Node 22.12, `npm run build`, and the `dist` publish directory declared in the repository;
- `https://anmo.dev` serves the new Astro document over HTTPS with the expected canonical URL, social card, favicon, and downloadable PDF resume;
- the hosted browser suite passes the same nine Chromium scenarios used locally, including mobile overflow, reduced motion, no-JavaScript reading, navigation, contact paths, and automated accessibility checks;
- Andriy will perform the creative visual review on the live site and provide a separate correction list;
- the old template remains recoverable through the `archive/pre-astro-template` tag.
