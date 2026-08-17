# Handoff: Plastic Productions — collective website

## Overview
Marketing site for **Plastic Productions**, a Berlin art-and-performance collective. Two audiences, weighted evenly: the community that attends the nights, and brands/agencies who want to hire the collective's artists for their own events. Five views (Home, About/manifesto, Artists roster, For brands, Contact) plus a newsletter block in the global footer, and a one-shot full-screen intro animation on first visit of a session.

All body copy, artist names, event titles and statistics in the prototype are **placeholders** — they read plausibly but must be replaced with real content before launch.

## About the Design Files
The file in this bundle (\`Plastic Productions.dc.html\`) is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. It uses a small in-house streaming-component runtime (\`support.js\`, template + logic class), which is *not* something to port.

The task is to **recreate this design in the target codebase's environment** (Next.js/React, Astro, Vue, plain HTML+CSS — whatever the project uses) following that codebase's established patterns. If no codebase exists yet, this is a content-light marketing site: a static generator (Astro or Next.js static export) with real CSS files is the appropriate choice. Do not carry over the prototype's inline-style-everywhere approach — that is an artifact of the prototyping tool. Convert the values below into real CSS (custom properties + component classes or your styling library).

## Fidelity
**High fidelity.** Colors, typography, spacing, layout and animation timings are final and intentional. Recreate pixel-faithfully. The only deliberately unfinished parts are: image slots (striped placeholders), copy, and form wiring.

---

## Design Tokens

### Color
| Token | Value | Use |
| --- | --- | --- |
| \`--paper\` | \`#f2f1ed\` | page background |
| \`--ink\` | \`#131313\` | text, all 1px rules, inverted section backgrounds |
| \`--ink-soft\` | \`#3a3835\` | body paragraphs on paper |
| \`--ink-mute\` | \`#7a7670\` | mono labels, meta, placeholder text |
| \`--accent\` | \`#e26a2c\` | marquee bg, mono eyebrows, numbers, CTA fills |
| on-dark text | \`#f2f1ed\` | text on \`--ink\` |
| on-dark body | \`rgba(242,241,237,.68)\` | paragraphs on \`--ink\` |
| hairline on paper | \`rgba(19,19,19,.2)\` | list row dividers |
| hover tint | \`rgba(226,106,44,.08)\` | event-row hover |

Accent is themeable — it is applied through one custom property (\`--pp-a\`) on the root wrapper. Alternates offered in the prototype: `#d64520` (red), `#a8ff1f` (toxic green), `#5a4bd6` (violet). On toxic green, keep text `--ink` — never white.

### Typography
Two families, both Google Fonts:
- **Archivo** — 400 / 500 / 800 / 900. All display and body text.
- **IBM Plex Mono** — 400 / 500. All labels, meta, nav, buttons, form fields.

| Role | Spec |
| --- | --- |
| Page H1 | Archivo 900, \`clamp(40px, 8vw, 130px)\`, line-height .86–.88, letter-spacing -.045em, UPPERCASE |
| Section H2 | Archivo 800, \`clamp(30px, 3.6vw, 46px)\`, line-height 1, letter-spacing -.035em, UPPERCASE |
| Card / row title | Archivo 800, 17–28px, line-height 1–1.2, letter-spacing -.02/-.03em, UPPERCASE |
| Lead paragraph | Archivo 400, \`clamp(18px,1.6vw,22px)\`/1.55 |
| Body | Archivo 400, 15–17px / 1.5–1.6, max-width 36–46ch, \`text-wrap: pretty\` |
| Mono label ("eyebrow") | IBM Plex Mono 500, 11px, letter-spacing .14em, UPPERCASE |
| Mono meta / footer | IBM Plex Mono 500, 10–12px, letter-spacing .10–.12em, UPPERCASE, line-height 2 |
| Marquee | Archivo 800, 20px, letter-spacing -.02em, UPPERCASE |

Headlines are set with explicit \`<br>\` breaks in the prototype — the line breaks are part of the composition; keep them at desktop, let them collapse on narrow screens.

### Spacing & structure
- Horizontal page gutter: \`5vw\` everywhere (header, sections, footer).
- Vertical section padding: \`clamp(32px,4vw,56px)\`; hero sections \`clamp(48px,7vw,88px)\` top.
- **Every section is separated by a \`1px solid #131313\` rule** — full-bleed, no gaps. Two-column sections also carry a 1px vertical rule between columns. This grid of hairlines is the defining structural motif; do not replace it with shadows, cards or radii.
- **Border radius: 0 everywhere. No shadows anywhere.** Depth comes only from the ink/paper inversion.
- Multi-column sections use \`repeat(auto-fit, minmax(<min>, 1fr))\` so they collapse without media queries: 360px (two-door), 340px (about/contact), 300px (case images), 260px (services/principles), 230px (roster), 220px (steps/featured).

### Buttons
No fills by default: \`1px solid #131313\`, padding \`11–16px / 18–26px\`, IBM Plex Mono 500 11px, letter-spacing .12–.14em, UPPERCASE, label ends with \` →\`. Hover inverts to \`background:#131313; color:#f2f1ed\` (and the mirror on dark sections). Primary CTAs use a solid \`--ink\` or \`--accent\` fill.

---

## Screens / Views

### 0. Intro animation (first visit per session)
**Purpose:** state the collective's position in four beats before the site appears.

Full-viewport fixed overlay, \`z-index 90\`, background **\`--accent\` (#e26a2c)**, text \`--ink\`. Centered in it, four texts occupy the *same* box (absolutely stacked, flex-centered) and appear strictly one at a time:

| # | Text | Font | Starts | Visible |
| --- | --- | --- | --- | --- |
| 1 | NO STAGE | Archivo 900 \`clamp(48px,11vw,150px)\`, ls -.05em | 0.00s | 0.6s |
| 2 | NO GATE | same | 0.62s | 0.6s |
| 3 | NO FILTER | same | 1.24s | 0.6s |
| 4 | PLASTIC PRODUCTIONS | Archivo 900 \`clamp(34px,7.6vw,104px)\`, color \`#f2f1ed\` | 1.86s | 1.2s |

Word switching is a hard cut (\`steps(1,end)\`), never a fade. Corners carry mono 11px labels: bottom-left "BERLIN", bottom-right "EST. 2023 — SKIP".

At **3.05s** the whole overlay slides up and off: \`transform: translateY(0 → -101%)\`, **0.9s**, \`cubic-bezier(.76,0,.24,1)\`, and is unmounted at ~4.05s. Clicking anywhere on the overlay dismisses it immediately. Once played, set \`sessionStorage['pp-intro-seen'] = '1'\` and skip on subsequent navigations; honour \`prefers-reduced-motion: reduce\` by skipping the overlay entirely (this is a required addition in the real build).

### 1. Header (all views)
Sticky, \`top:0\`, \`z-index 40\`, background \`--paper\`, bottom rule 1px ink, padding \`16px 5vw\`. Left: wordmark "PLASTIC PRODUCTIONS", Archivo 800 15px, ls -.02em, UPPERCASE → links home. Right: nav, mono 11px ls .12em UPPERCASE, 26px gap — About / Artists / For brands / Contact. Inactive items sit at \`opacity .5\`, the current view at \`1\`; hover \`color:#e26a2c\`.

### 2. Home
1. **Hero** — accent mono eyebrow "ART & PERFORMANCE SERIES · BERLIN · SINCE 2023"; H1 "A PLATFORM FOR / ARTISTS WORTH / THE ROOM"; two-column paragraph pair below (auto-fit 320px), max-width 980px.
2. **Marquee** — full-bleed accent band, ink text, 12px vertical padding, content duplicated once and translated \`0 → -50%\` over **26s linear infinite**. Items: "Next: Vol. 015 — Oct 11 — Neukölln · Open call for artists · Brand bookings 2026 ·".
3. **Two doors** — 50/50 split with a vertical rule. Left on paper: "01 / FOR THE COMMUNITY" → "COME TO A NIGHT" → outline button "HOW IT WORKS →" (goes to About). Right on \`--ink\`: "02 / FOR BRANDS" (accent label) → "BOOK THE ROSTER" → inverted outline button "WHAT WE DO →" (goes to For brands).
4. **Index of nights** — label row "INDEX OF NIGHTS" + right link "ALL 14 →". Rows are a 4-col grid \`70px minmax(0,1fr) 220px 120px\`, gap 16px, 16px vertical padding, 1px top hairline each. Cells: number (mono 12px accent) / title (Archivo 800 \`clamp(20px,2.2vw,28px)\` UPPERCASE) / venue (400 14px ink-soft) / date (mono 12px ink-mute, right-aligned). Row hover tints \`rgba(226,106,44,.08)\`. Data: 014 Soft Machines · Kreuzberg warehouse · 06.2026 / 013 Nothing Rehearsed · Wedding basement · 04.2026 / 012 Body of Work · Neukölln studio · 02.2026 / 011 Loud Room, Quiet Hands · Lichtenberg hall · 11.2025 / 010 Second Language · Moabit shopfront · 09.2025.
5. **Roster preview** — label + "FULL ROSTER →"; auto-fill 220px grid, gap 16px; each card = 3:4 image slot, then name (Archivo 800 17px UPPERCASE) and craft (mono 10px ls .12em ink-mute).

### 3. About / manifesto
Hero H1 "WE STARTED BECAUSE / THE ROOM WAS / ALWAYS FULL OF / THE SAME PEOPLE". Then a two-column band: left a mono fact stack (Est. 2023 / Berlin / 14 nights / 60+ artists / ~400 people a night), right three paragraphs (lead + two body, max 62ch). Then **"HOW WE WORK"**: four cells, each with a 1px top rule, accent mono number, Archivo 800 22px UPPERCASE title, 15px body — 01 Artist first / 02 No pay to play / 03 Open door / 04 Paid work. Then the full night index (same row component as Home).

### 4. Artists
Hero "THE PEOPLE / WE PUT ON" with eyebrow "ROSTER — 60 ARTISTS AND COUNTING". Roster grid of 8 cards, 4 columns at desktop (themeable 3–5 via `--pp-cols`), with a 200px card floor so it collapses on narrow screens: `repeat(auto-fill, minmax(max(200px, calc((100% - (var(--pp-cols,4) - 1) * 18px) / var(--pp-cols,4))), 1fr))`, gap 18px, same card as the Home preview; card image slot border goes accent on hover. Below, a split band: left panel filled **accent** — "OPEN CALL — ALWAYS OPEN" → "SEND US YOUR WORK" → "SUBMIT →" (to Contact); right on paper — "WHAT WE COVER" list of four hairline rows (space & tech, documentation, fee always for brand work, right of refusal).

### 5. For brands
1. **Hero on \`--ink\`** (full-bleed dark, the only dark hero): eyebrow accent "FOR BRANDS & AGENCIES", H1 "HIRE ARTISTS, / NOT ENTERTAINMENT", 56ch lead in \`rgba(242,241,237,.72)\`.
2. **Services** — four cells (same pattern as About principles): 01 Curation & casting / 02 Live performance / 03 Installation & scenography / 04 Production & run of show.
3. **Selected work** — three 4:3 image slots (auto-fit 300px): client night, installation, launch.
4. **How a booking runs** — four cells with a **3px** solid ink top rule; Archivo 900 40px accent numeral, 18px UPPERCASE title, 14px body: 1 Brief / 2 Proposal / 3 Build / 4 Night.
5. **CTA band** — full-bleed accent, Archivo 900 \`clamp(30px,4.6vw,60px)\` "TELL US WHAT / THE NIGHT IS" + solid ink button "REQUEST THE DECK →".

### 6. Contact
Hero "SAY WHAT YOU / NEED. BRIEFLY." Split band. Left: three labelled email blocks — Brands & agencies \`book@\`, Artists & open call \`submit@\`, Everything else \`hello@\` (each Archivo 800 \`clamp(20px,2.2vw,28px)\`, \`mailto:\`), then a hairline-topped mono block (Berlin DE / Instagram / Press kit). Right: form — a three-way segmented selector (Brand / Artist / Other, ink fill on the active one), name, email, message (min-height 120px), all 1px ink boxes with mono 14px placeholders, and an accent "SEND →" submit. **The form is unwired in the prototype** — hook to whatever the codebase uses; validate email format, require type + message.

### 7. Footer (all views)
1px top rule, auto-fit 300px two-column, \`align-items:end\`. Left: "GET THE / NEXT DATE FIRST" (Archivo 900 \`clamp(30px,4.4vw,56px)\`) + inline email field (1px ink box, no right border) butted against a solid ink "JOIN" button; below, mono 10px "ONE EMAIL A MONTH. THE NEXT DATE, NOTHING ELSE." Right: mono link stack — email, Instagram, Press kit, Imprint · Privacy, then "© 2026 PLASTIC PRODUCTIONS — BERLIN" in full ink.

---

## Interactions & Behavior
- **Navigation:** five views. The prototype swaps them client-side and scrolls to top. In the real build these should be **real routes** (\`/\`, \`/about\`, \`/artists\`, \`/brands\`, \`/contact\`) with proper \`<a>\` elements, titles and meta — not state-swapped panes.
- **Intro:** once per session, timings above, click-to-skip, \`sessionStorage\` flag, skipped under reduced-motion.
- **Marquee:** 26s linear infinite loop; pause on hover is optional and welcome.
- **Hover states:** buttons invert; event rows tint accent-8%; roster image slots take an accent border; nav items go accent.
- **Responsive:** single \`5vw\` gutter and \`clamp()\` type mean no breakpoints are strictly required; \`auto-fit\` collapses every multi-column band. Below ~640px, replace the header nav with a full-screen ink overlay menu (not designed yet — flag it), and let the event-row grid drop the venue column.
- **Accessibility:** clickable spans in the prototype must become real \`<a>\`/\`<button>\` elements with focus styles (a 2px accent outline is consistent with the system). Contrast of ink on paper and ink on accent both pass AA.

## State Management
Minimal. Current route (from the router), \`introSeen\` (sessionStorage), form field values + submit state (idle / sending / sent / error), newsletter email + submit state. Content (nights, roster, services, principles, steps) is defined as flat arrays in the prototype's logic class — move it to a CMS or content collection; the roster and event index are the two lists that will grow.

## Assets
None supplied. Every image is a placeholder: 45° striped fill \`repeating-linear-gradient(45deg, rgba(19,19,19,.07) 0 6px, transparent 6px 12px)\` with a 1px \`rgba(19,19,19,.25)\` border and a mono caption naming what belongs there. Slots needed: artist portraits **3:4** (8+ on Artists, 4 on Home), case images **4:3** (3 on For brands). Fonts load from Google Fonts (Archivo, IBM Plex Mono) — self-host in production.

## Files
- \`Plastic Productions.dc.html\` — the full five-view prototype including the intro animation (this is the design of record).
