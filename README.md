# AnMo

The professional digital home of Andriy Moiseyenko, QA Automation Engineer.

The licensed Simplefolio template and its outdated content were removed before the new build so the portfolio could be designed and implemented from first principles. The current site is a custom Astro narrative with its own content model, art direction, motion, quality gates, and synchronized resume.

## Canonical project documents

Read these before implementation:

1. `AGENTS.md`
2. `docs/VISION.md`
3. `docs/DESIGN_STRATEGY.md`
4. `docs/CONTENT_STRATEGY.md`
5. `docs/DECISIONS.md`
6. `docs/POLISH_BRIEF.md`
7. `docs/IMPLEMENTATION_PLAN.md`

## Current state

- The site is live at [anmo.dev](https://anmo.dev) from the canonical [`AndrewMois/AnMo`](https://github.com/AndrewMois/AnMo) repository.
- The public role is `QA Automation Engineer`.
- Astro 7, TypeScript, static output, formatting, type checks, unit tests, link checks, and Playwright coverage are configured.
- The generated page contains complete semantic static HTML with one small progressive-enhancement script.
- The original portrait is preserved under `references/`; responsive public derivatives are generated separately.
- Netlify production settings are committed in `netlify.toml`, including the required Node version and `dist` publish directory.

## Local verification

```bash
npm install
npm run lint
npm test
npm run build
npm run test:links
npm run test:e2e
npm run quality
PLAYWRIGHT_BASE_URL=https://anmo.dev npm run test:e2e
```

`npm run test:e2e` requires the Playwright Chromium runtime. Install it once with `npx playwright install chromium` on a new machine; CI installs it automatically.

The enforced performance and accessibility thresholds are recorded in [`docs/QUALITY_BUDGETS.md`](docs/QUALITY_BUDGETS.md).
