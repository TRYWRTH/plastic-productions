# Plastic Productions

Website for Plastic Productions — the independent arts and performance scene,
made accessible to brands. Berlin and Stockholm.

Routes: `/` (home, told as a story in scenes), `/about`, `/contact`.

## Stack

- Next.js 16 (App Router), static export (`output: 'export'`) to `out/`
- Plain CSS with custom properties (`src/app/globals.css`), no framework
- Inter Tight via `next/font/google`
- Scroll reveals are CSS-only (`animation-timeline: view()`), with a
  reduced-motion fallback

## Content you still need to fill in

- **Images:** put files in `public/images/` and set `src` for each slot in
  `src/lib/images.ts`. Slots without a `src` show a coloured placeholder.
- **Email addresses:** `src/lib/site.ts` holds placeholder addresses
  (`REPLACE-…@yourdomain`). The contact form has no backend; it opens the
  visitor's email app with a prefilled `mailto:` message.
- Imprint and Privacy links in the footer point to `#`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
