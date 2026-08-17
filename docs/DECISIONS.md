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

## Open decisions after launch

- Whether LinkedIn and GitHub profile copy will be updated in a later release.
- Whether Guided by Scent will expose a live URL once its configured domain resolves.
- Analytics choice: none, privacy-friendly, or an explicitly consented solution.

## 2026-08-16 — Search indexing foundation

- The canonical homepage is explicitly discoverable through `/robots.txt` and `/sitemap.xml`.
- The page exposes `ProfilePage`, `Person`, and `WebSite` structured data linking Andriy's approved name, role, Ottawa location, portrait, LinkedIn, and GitHub identity.
- Search metadata uses the public name, `QA Automation Engineer`, Ottawa, and the confirmed quality-engineering scope in natural language.
- The obsolete `/assets/resume.pdf` search result permanently redirects to the canonical homepage.
- The current downloadable resume remains available to visitors but sends `X-Robots-Tag: noindex, noarchive` so it does not compete with the homepage in search results.

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

## 2026-08-15 — Phase 6 quality engineering

- Playwright with Chromium is the reproducible browser gate; the in-app browser remains useful for creative visual inspection but does not replace the committed suite.
- axe-core runs inside the browser suite and blocks serious or critical automated accessibility findings.
- A small repository-owned build checker is preferred over an opaque link-checking dependency because it can enforce local anchors, generated assets, unsafe schemes, and transfer budgets together.
- Hosted Web Vitals are Preview gates rather than locally claimed results.

## 2026-08-15 — Resume and social-preview assets

- The downloadable resume is a synchronized one-page companion to the narrative site, not a copy of it.
- It uses `QA Automation Engineer`, `amoiseyenko@ukr.net`, and the current public case hierarchy while retaining verified education, Reliability Status, languages, dates, and phone number from the source resume.
- The editable DOCX is retained in `documents/`; the visually verified PDF is the only public download.
- The social card uses the same Golden Precision hierarchy as the site and is supplied as a 1200 × 630 PNG with an SVG source.

## 2026-08-15 — Netlify production release

- Andriy explicitly authorized publishing the verified rebuild through the existing production pipeline instead of waiting for a separate Preview.
- The canonical GitHub repository name remains `AndrewMois/AnMo`; `simplefolio` is treated only as a stale historical label in Netlify metadata.
- Static Astro output needs no Netlify adapter. Repository-owned `netlify.toml` and `.node-version` define Node 22.12, `npm run build`, and `dist` so the build is reproducible outside old dashboard defaults.
- The first production attempt failed under the inherited Netlify environment and left the old release intact. Commit `b0121e0` corrected the build configuration and reached `ready` before hosted verification began.
- No analytics are included in the launch release. Adding analytics remains a separate privacy decision.

## 2026-08-15 — Post-launch polish direction

- The first revision round is analysis-only until Andriy approves a shorter copy architecture and a new hero direction.
- The site should shift from institutional `quiet authority` toward human authority: direct, factual, alive, occasionally witty, and still precise.
- Andriy's portrait moves into the hero to establish immediate personal connection; the original source remains untouched.
- The practical capability range moves near the top of the page and receives a plain-English title.
- Repeated `Context / Response / Demonstrates` case structures will be shortened and visually differentiated rather than merely restyled.
- Public product calls to action use live sites, never `View source`: Young Mystic at `https://young-mystic.com`, Guided by Scent at `https://anna-home-five.vercel.app`, and Alex Healing at `https://alexhealing.com`.
- GitHub remains a profile-level footer link, not the primary proof for finished products.
- The inspection spine remains. Gold/cobalt energy, grain, light, or wave treatments may be explored with restraint; generic glitter and luxury clichés remain excluded.

## 2026-08-16 — Human-first candidate

- The selected candidate hero says `I know where systems break. I build them too.` and uses `Yes, I tested this site.` as its easter egg.
- The supplied portrait moves into an irregular hero crop without modifying the source or generating a replacement identity.
- BluWave AI uses an original forecast/energy trace instead of an employer logo; CRA uses a restrained Canadian identifier without imitating a government page.
- The separate methodology section is removed. Professional evidence is limited to three proof points per case, and the practical stack is placed immediately after the hero.

## 2026-08-16 — Section rhythm polish

- The portrait keeps its irregular crop, but stray line ornaments are replaced by one soft cobalt-to-gold halo behind the photograph.
- Double gradient rules separate practical tools, professional work, owned products, and the personal close.
- Young Mystic links directly to `https://app.young-mystic.com/login`.
- Published copy avoids em dashes and uses natural sentence structure instead.
- Product CTAs are live-only. GitHub remains available only at the profile level in the footer.
- This candidate was implemented and tested without a manual visual pass at Andriy's request. It is not approved for production until he reviews it.
