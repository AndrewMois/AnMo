# Decision record

## 2026-08-15 — Rebuild foundation

- The Simplefolio template and all legacy portfolio content have no retained product value.
- The new site will be written from scratch rather than incrementally restyled.
- Framework: Astro with TypeScript and static output.
- Public title: `QA Automation Engineer`.
- Public email: `amoiseyenko@ukr.net`.
- Creative direction: Golden Precision with cream/ivory, graphite, disciplined gold, and rare cobalt accents.
- The site must feel personal and creatively authored, not like an employer, SaaS company, static portfolio template, or aggressive sales page.
- Central metaphor: seeing the system beneath the surface.
- BluWave AI and Canada Revenue Agency may be named publicly.
- BluWave AI testing range may be described, including UI/mobile, API, SOAP/XML, Postman/Newman, Bruno, k6/Locust, Appium, CI/CD, and AI/ML validation.
- Young Mystic, Guided by Scent, and Alex Healing may be linked publicly.
- Young Mystic may state `200+ users`.
- The supplied portrait is approved for use and may receive a derived crop, color treatment, or compositional integration. The original must remain unchanged.
- Journal, OpinioNet, SmartFace, GameTro, SoulYoga, Magic Bookstore, RoboFriends, Anime Museum, and other student-era projects are excluded.
- No deployment or domain change occurs during the documentation and cleanup stage.
- The existing public `master` remains intact while the rebuild is prepared on `codex/astro-rebuild`.

## Open decisions before launch

- Final synchronized downloadable resume.
- Final LinkedIn URL and whether GitHub profile copy will be updated in the same release.
- Final production URLs and screenshot permissions for Guided by Scent and Alex Healing.
- Analytics choice: none, privacy-friendly, or an explicitly consented solution.
- Final typography after visual prototypes and performance comparison.

## 2026-08-15 — Phase 1 foundation

- Astro 7.2 and TypeScript 6 are pinned through the manifest and lockfile.
- The site uses Astro's static output with no deployment adapter.
- The initial semantic shell is intentionally server-rendered to plain HTML with zero client scripts.
- Astro telemetry is disabled in project commands for reproducible local and CI runs.
- Prettier with the official Astro plugin, `astro check`, and Vitest form the initial quality toolchain.
- The canonical site URL is `https://anmo.dev`; production remains unchanged until the Preview gate.
- A short synchronized downloadable resume will be created later because it serves forwarding, offline review, and recruiter workflows that the narrative site does not replace.

## 2026-08-15 — Phase 2 content architecture

- The full English narrative lives in typed local data rather than page-level fragments or a CMS.
- Primary evidence hierarchy: BluWave AI and Canada Revenue Agency as professional cases, Young Mystic as the primary product-ownership case, and Guided by Scent plus Alex Healing as quieter supporting builds.
- Technology names appear after the engineering responsibility and problem are established; the page does not use badges, logos, proficiency meters, or a keyword wall.
- No confidential outcome metrics, defect counts, coverage percentages, or unconfirmed technologies are published.
- The rendered content remains static HTML with zero client scripts.

## 2026-08-15 — Phase 3 visual prototype

- The visual prototype is implemented inside the real page rather than maintained as a disposable mockup.
- The hero uses typography, proportion, negative space, a coordinate detail, and a single cobalt signal; it does not use a dashboard illustration or technology collage.
- BluWave AI opens the case-study sequence as a deep-ink spatial episode; the remaining cases use warm material shifts to create rhythm without repeating card components.
- The portrait is used as a wide photographic pause with responsive art direction. Generative identity alteration is not accepted for the published asset.
- Public derivatives are produced from `references/portrait-source.JPG` and the original remains unchanged.

## 2026-08-15 — Phase 4 page composition

- Young Mystic and Guided by Scent link to their confirmed GitHub repositories for now. The former demo URL returns a deployment-not-found response and the latter configured domain does not currently resolve, so neither is exposed as a live link.
- Alex Healing links to both the verified live site and its GitHub repository.
- LinkedIn and GitHub are restored as restrained professional-profile links in the contact close; Facebook remains excluded.
- Professional employers are described as evidence chapters without promotional outbound employer links.

## 2026-08-15 — Phase 5 motion and interaction

- Motion is progressive enhancement over complete static HTML, implemented without an animation dependency.
- The inspection spine communicates document progress on larger screens; hiding it on mobile is an art-direction decision rather than a missing feature.
- Section reveals run once and then disconnect, using transform and opacity only.
- Reduced-motion preference wins over every decorative transition, including smooth anchor scrolling.
