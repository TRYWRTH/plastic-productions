# Plastic Productions

Marketing site for Plastic Productions, a Berlin art-and-performance
collective. Five routes (Home, About, Artists, For brands, Contact) plus a
newsletter footer and a one-shot full-screen intro animation on first visit
per session.

Built from the design handoff in `design_handoff_plastic_productions/` —
recreated pixel-faithfully in Next.js (App Router) with the design tokens
converted into real CSS custom properties and component classes
(`src/app/globals.css`).

All body copy, artist names, event titles and stats are **placeholders** —
see `src/lib/content.ts`. Replace with real content before launch.

## Stack

- Next.js 16 (App Router), deployed as a regular server app (not a static
  export — the team portal below needs a server to check a password before
  ever sending the page)
- Plain CSS with custom properties — no CSS framework
- `next/font` self-hosts Archivo and IBM Plex Mono (Google Fonts)

## Develop

```bash
npm install
cp .env.example .env.local   # set TEAM_PORTAL_PASSWORD and TEAM_PORTAL_SECRET
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Team portal (`/team`)

Password-gated internal page for plans, file links, an updates log and
upcoming meetings — not linked from the public site and excluded from
search indexing (`robots.txt`).

- Protection is real, not cosmetic: `src/middleware.ts` blocks every
  `/team/*` request server-side unless it carries a valid signed session
  cookie, so the page content is never sent to a browser that hasn't
  authenticated. A client-side-only password screen wouldn't do this on a
  statically exported site, which is why this app now runs as a server app.
- Login: `/team/login` posts the password to `src/app/api/team/login/route.ts`,
  which checks it with a constant-time comparison, rate-limits repeated
  guesses, and sets an `httpOnly`, signed, expiring session cookie
  (`src/lib/team-auth.ts`). Log out clears the cookie.
- Required env vars (set locally in `.env.local`, and on the Vercel project
  for deployment — see `.env.example`):
  - `TEAM_PORTAL_PASSWORD` — the shared password.
  - `TEAM_PORTAL_SECRET` — random signing key, e.g. `openssl rand -hex 32`.
- Content lives in `src/lib/team-content.ts` (plans, file links, updates,
  meetings) — edit that file directly to keep it current; it's placeholder
  data to start.
- For stronger protection than a shared password (per-person accounts,
  audit trail), swap the password check in the login route for a real auth
  provider later — the middleware/cookie plumbing around it stays the same.

## Known gaps (flagged in the design handoff)

- Contact form and newsletter form are not wired to a backend/provider yet.
- No real images — every visual is a striped placeholder slot.
- Press kit / Instagram footer links are placeholders (`#`).
