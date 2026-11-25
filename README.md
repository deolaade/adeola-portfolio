# Adeola Adeyoyin — Portfolio

Next.js (App Router) version of the portfolio. It is a fully static site: every page is prerendered at build time.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build && npm start` runs the production build.

## Where things live

| What | Where |
| --- | --- |
| Page layout, `<head>`, link-preview tags | `app/layout.tsx` |
| Section order on the homepage | `app/page.tsx` |
| Homepage sections | `components/sections/` (Hero, Projects, About, Designs, Process, Tools, Experience) |
| Header, footer, bottom menu | `components/Header.tsx`, `Footer.tsx`, `BottomNav.tsx` |
| Case studies | `components/case-studies/` (Rezidant, Filmhouse, Pyyr, Lohli) |
| All styles and design tokens | `app/globals.css` (tokens are at the top of the design-system block) |
| Animations and interactions | `public/js/site.js` |
| Images, fonts, link-preview image | `public/images`, `public/fonts`, `public/og-image.jpg` |

To swap an image, replace the file in `public/images` and keep the same name.

## Deploy to Vercel

**Option A — GitHub (recommended, redeploys on every push)**
1. Push this folder to a new GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repository and click **Deploy**. No settings need changing.

**Option B — Vercel CLI**
```bash
npx vercel        # first run links the project; accept the defaults
npx vercel --prod
```

Link previews (WhatsApp, LinkedIn, X) use your Vercel production address automatically.
The site address is set by the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel (currently `https://adeolaadeyoyin.vercel.app`). If you add a custom domain, update it there and redeploy.
