# Rajat Gang — Portfolio

Personal portfolio site. React 19 + TypeScript + Vite, Framer Motion for animation, no backend needed.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Edit content

All copy lives in [`src/data.ts`](src/data.ts): profile links, stats, experience, projects, skills, education.
The resume PDF is [`public/Rajat-Gang-Resume.pdf`](public/Rajat-Gang-Resume.pdf); replace it to update the download.

## Deploy (free)

### GitHub Pages (automatic)

1. Create a repo on GitHub, e.g. `RajatGang07/portfolio`.
2. Push this folder to its `main` branch.
3. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
   Site URL: `https://rajatgang07.github.io/portfolio/`

`vite.config.ts` uses `base: './'`, so the build works at any sub-path without changes.

### Vercel or Netlify

Import the repo. Framework preset: Vite. Build command `npm run build`, output directory `dist`.
