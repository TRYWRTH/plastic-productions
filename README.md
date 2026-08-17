# Plastic Productions

Marketing site for Plastic Productions, a Berlin art-and-performance
collective. Five routes (Home, About, Artists, For brands, Contact) plus a
newsletter footer and a one-shot full-screen intro animation on first visit
per session.

Built from the design handoff in `design_handoff_plastic_productions/` —
recreated pixel-faithfully in Next.js (App Router, static export) with the
design tokens converted into real CSS custom properties and component
classes (`src/app/globals.css`).

All body copy, artist names, event titles and stats are **placeholders** —
see `src/lib/content.ts`. Replace with real content before launch.

## Stack

- Next.js 16 (App Router), static export (`output: 'export'`)
- Plain CSS with custom properties — no CSS framework
- `next/font` self-hosts Archivo and IBM Plex Mono (Google Fonts)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `out/`.

## Known gaps (flagged in the design handoff)

- Contact form and newsletter form are not wired to a backend/provider yet.
- No real images — every visual is a striped placeholder slot.
- Press kit / Instagram footer links are placeholders (`#`).
