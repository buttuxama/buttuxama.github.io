# Usama Bashir — Portfolio

Personal portfolio site for [Usama Bashir Butt](https://github.com/buttuxama), built with **Vite + React + TypeScript + Tailwind**, deployed to **GitHub Pages** at <https://buttuxama.github.io>.

The site is a single-page dark-themed layout with five sections — Hero, Experience, Skills, Projects, and Certifications — wired to live data (Projects fetches the public GitHub repos at build time; the rest is sourced from typed content files in `src/content/`).

## Tech stack

| Layer | Choice | Version | Why |
|---|---|---|---|
| Build tool | [Vite](https://vitejs.dev) | 5.x | Fast dev server, native ESM, simple `vite build` for static output |
| UI framework | [React](https://react.dev) | 18.3 | Standard, mature ecosystem |
| Language | [TypeScript](https://www.typescriptlang.org) | 5.6 | Type-safe content contracts (`GitHubRepo`, `ExperienceEntry`, etc.) so the build fails loudly if the GitHub API shape changes |
| Styling | [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first, custom palette in `tailwind.config.ts`, self-hosted fonts |
| Icons | [lucide-react](https://lucide.dev) | 0.469 | Clean, tree-shakable SVG icons |
| Fonts | [`@fontsource/ibm-plex-serif`](https://fontsource.org/fonts/ibm-plex-serif), [`@fontsource/inter`](https://fontsource.org/fonts/inter) | 5.x | Self-hosted, no Google Fonts CDN dependency, no CLS |
| Hosting | [GitHub Pages](https://pages.github.com) | — | Free static hosting, served from a `buttuxama.github.io` user site |
| CI/CD | [GitHub Actions](https://github.com/features/actions) | — | `actions/deploy-pages@v4` builds and deploys on every push to `main` |

No state management library, no CSS-in-JS, no router. Everything is in one bundle.

## Features

- **Single-page layout** with sticky translucent nav that highlights the active section as you scroll
- **Live GitHub Projects section**: build-time `fetch()` of `https://api.github.com/users/buttuxama/repos` writes `src/content/projects-source.json`, which the React component imports. Top 4 most recently updated public repos are rendered as clickable cards
- **Theme**: warm-dark canvas (`#191915`) with terracotta accent (`#cc785c`) — Anthropic-flavored palette, not pure black
- **Responsive** at 375px / 768px / 1024px breakpoints
- **Type-safe content** — every piece of resume content is a typed array in `src/content/*.ts`, no string concatenation or HTML strings
- **Auto-deploys** on push to `main` via GitHub Pages Actions

## Project structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions: build + deploy to Pages
├── public/                       # served at site root (no Vite processing)
│   ├── avatar.jpg                # profile photo, used in hero
│   ├── resume.pdf                # downloadable resume
│   ├── favicon.svg               # falcon favicon (terracotta on warm dark)
│   └── certs/                    # Hugging Face certificate webp images
├── scripts/
│   └── fetch-projects.mjs        # build-time GitHub API fetcher
├── src/
│   ├── components/               # one file per UI section
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   ├── Projects.tsx
│   │   ├── Section.tsx           # shared <section> primitive
│   │   └── Skills.tsx
│   ├── content/                  # typed resume/profile data
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── profile.ts            # name, tagline, links, contact
│   │   ├── projects-source.ts    # GitHubRepo type contract
│   │   ├── projects-source.json  # generated, gitignored
│   │   └── skills.ts
│   ├── lib/
│   │   ├── cn.ts                 # tiny className joiner
│   │   └── format-time.ts        # Intl.RelativeTimeFormat helper
│   ├── App.tsx                   # composes the sections
│   ├── index.css                 # Tailwind layers + font imports
│   └── main.tsx                  # React entry
├── index.html
├── package.json
├── tsconfig.json / .app.json / .node.json
├── tailwind.config.ts            # custom palette + dark-mode tokens
├── vite.config.ts                # base: '/' for user-site Pages
├── postcss.config.js
├── .gitignore
└── README.md
```

## Develop

```bash
npm install
npm run dev          # http://localhost:5173
```

Hot reload is on by default. Edit any file under `src/` and the page refreshes.

### Other commands

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | `prebuild` (fetches GitHub repos) → `tsc -b` (type-check) → `vite build` (bundle). Outputs `dist/`. |
| `npm run preview` | Serves `dist/` on `http://localhost:4173` for a production-output sanity check |

If `npm run dev` shows no projects under the `#projects` section, run `node scripts/fetch-projects.mjs` once to generate `src/content/projects-source.json` (the dev server itself does not call the GitHub API).

## Deploy

The repo is wired for **GitHub Pages via Actions**:

1. Create the repo `buttuxama/buttuxama.github.io` on github.com (Public; do **not** initialize with a README, `.gitignore`, or license — they're already here).
2. `git push -u origin main`.
3. Repo → **Settings → Pages → Source: GitHub Actions**.
4. The `Deploy` workflow runs, builds the site, and publishes to <https://buttuxama.github.io>. Subsequent pushes to `main` redeploy automatically.

The Actions workflow:

- Runs `npm ci`
- Runs `npm run build` (which `prebuild`s the GitHub fetch)
- Uploads `dist/` as a Pages artifact
- Deploys via `actions/deploy-pages@v4`

## Architecture notes

**Why build-time fetch instead of runtime fetch?** The site is fully static. Calling `https://api.github.com/users/buttuxama/repos` from the browser would (a) hit GitHub's anonymous rate limit of 60 requests/hour per IP, shared across all visitors, (b) show "Loading…" skeletons on first paint, and (c) be impossible to verify in `npm run preview` since `localhost` doesn't reach `api.github.com`. Doing it at build time means visitors see instant cards and the API is only hit on each `main` push.

**Why no React Router?** The page is a single document with anchor navigation. The nav links are `<a href="#experience">` etc., and `Section` uses `scroll-mt-20` so the fixed nav doesn't clip the heading.

**Why a custom palette instead of stock Tailwind colors?** Stock Tailwind doesn't have the warm-dark "Claude/Anthropic" feel (`#191915` is warm, not the cold `#000`). The palette is defined in `tailwind.config.ts` under `theme.extend.colors` and used as `bg-canvas`, `bg-surface`, `text-fg`, `text-accent`, etc.

**Why two fonts?** IBM Plex Serif for headings gives the page an editorial/considered tone (Anthropic marketing flavor). Inter for body matches the Claude.ai chat flavor. Both are self-hosted via `@fontsource` so the site has no Google Fonts dependency.

## Customise

- **Resume PDF**: replace `public/resume.pdf`. The "Download Resume" button downloads it.
- **Profile photo**: replace `public/avatar.jpg`. Shown in the hero.
- **Content**: edit the typed arrays in `src/content/*.ts`. The `projects-source.json` is regenerated by the build.
- **Theme palette**: edit `tailwind.config.ts` (`canvas`, `surface`, `accent`, …).
- **Section ordering**: reorder the components in `src/App.tsx`.

## License

No license file is included — all rights reserved by default. If you fork or adapt this for your own portfolio, please write your own resume content rather than reusing the arrays in `src/content/`.