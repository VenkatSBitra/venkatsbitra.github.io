# personal-website

Venkat Suprabath Bitra's personal/academic website. Built with [Astro](https://astro.build) — static output, no UI framework, no CSS framework, hand-written components and styles.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
```

## Content

All content (education, experience, projects, publications, mentorship, skills, coursework, achievements, certifications) lives as data in `src/data/*.json`, validated by the schemas in `src/content.config.ts`. To update the site's content, edit the relevant JSON file — no need to touch markup.

## CV

`CV/main.tex` is the source of truth for the downloadable CV. To regenerate `public/CV.pdf` after editing the CV:

```sh
npm run build:cv
```

This requires a local LaTeX distribution (`pdflatex`). The compiled PDF is committed to the repo like any other static asset — it isn't rebuilt in CI.

## Build & deploy

```sh
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

Deployed via [Cloudflare Pages](https://pages.cloudflare.com/), connected to this repo (framework preset: Astro, build command `npm run build`, output directory `dist`). Every push to `main` auto-deploys; branches/PRs get preview URLs.
