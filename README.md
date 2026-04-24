# fluttergenius.com — Next.js rebuild

Next.js 15 (App Router) + TypeScript + Tailwind CSS rebuild of fluttergenius.com.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Routes

| Path       | Source                          |
| ---------- | ------------------------------- |
| `/`        | Home — hero, testimonials, services, portfolio preview, Flutter Colombo |
| `/gallery` | Portfolio with 5 project case studies |
| `/booking` | Hire Me (Upwork CTA)            |

## Stack

- Next.js 15 · App Router
- React 19
- TypeScript
- Tailwind CSS 3.4
- Google Fonts (Ovo display, Almarai body) via `next/font/google`

## Images

Out of the box, images are loaded from the original Squarespace CDN
(`images.squarespace-cdn.com`) using `next/image` with a remote pattern
configured in `next.config.ts`. This works immediately without any manual
download step.

### Switching to self-hosted images

If you want to serve images from `/public` instead (fully independent of the
Squarespace CDN):

1. Run the download script:

   ```bash
   npm run download-images
   ```

   This fetches every image into `public/images/`.

2. Open `src/lib/images.ts` and change:

   ```ts
   const USE_LOCAL = false;
   ```

   to:

   ```ts
   const USE_LOCAL = true;
   ```

3. Restart the dev server.

## Project layout

```
src/
  app/
    layout.tsx          — root layout, fonts, header/footer
    page.tsx            — home
    gallery/page.tsx    — portfolio
    booking/page.tsx    — hire me
    globals.css         — Tailwind + tokens + marquee animation
  components/
    SiteHeader.tsx      — sticky top nav
    SiteFooter.tsx      — footer with social links
    Section.tsx         — cream/navy tone wrapper
    Marquee.tsx         — "Let's create together" marquee
    clsx.ts             — tiny class joiner
  lib/
    images.ts           — image asset registry with remote/local toggle
scripts/
  download-images.sh    — fetches images into /public/images
```

## Design tokens

| Token | Value    | Notes             |
| ----- | -------- | ----------------- |
| cream | `#FFF6ED` | Page background |
| navy  | `#001D44` | Primary text / hero background |
| lilac | `#E8E1FD` | Headlines on navy, button outlines |

Fonts:

- **Ovo** — display serif (hero, large headings)
- **Almarai** — UI / body sans-serif

## External links preserved

- Upwork: <https://www.upwork.com/freelancers/fluttergenius>
- Flutter Colombo: <https://fluttercolombo.com>
- LinkedIn: <https://www.linkedin.com/in/fluttergenius/>
- X / Twitter: <https://x.com/avinathg>

## Deploy

Runs unchanged on Vercel, Netlify, Cloudflare Pages, or any Node host.
```bash
npm run build
npm start
```
