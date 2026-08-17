// Placeholder content. Every name, title, stat and line of copy here reads
// plausibly but is not real — replace with the collective's actual content
// before launch (see design handoff README).

export type Night = {
  number: string;
  title: string;
  venue: string;
  date: string;
};

// Most recent first. 014 down to 001 — 14 nights since 2023.
export const nights: Night[] = [
  { number: "014", title: "Soft Machines", venue: "Kreuzberg warehouse", date: "06.2026" },
  { number: "013", title: "Nothing Rehearsed", venue: "Wedding basement", date: "04.2026" },
  { number: "012", title: "Body of Work", venue: "Neukölln studio", date: "02.2026" },
  { number: "011", title: "Loud Room, Quiet Hands", venue: "Lichtenberg hall", date: "11.2025" },
  { number: "010", title: "Second Language", venue: "Moabit shopfront", date: "09.2025" },
  { number: "009", title: "Blunt Instrument", venue: "Friedrichshain courtyard", date: "06.2025" },
  { number: "008", title: "Order of Appearance", venue: "Schöneberg loft", date: "04.2025" },
  { number: "007", title: "A Long Look", venue: "Kreuzberg warehouse", date: "01.2025" },
  { number: "006", title: "Common Ground", venue: "Wedding basement", date: "10.2024" },
  { number: "005", title: "Near Enough", venue: "Neukölln studio", date: "07.2024" },
  { number: "004", title: "Working Title", venue: "Moabit shopfront", date: "04.2024" },
  { number: "003", title: "Some Kind of Proof", venue: "Lichtenberg hall", date: "01.2024" },
  { number: "002", title: "First Draft", venue: "Friedrichshain courtyard", date: "09.2023" },
  { number: "001", title: "Open Rehearsal", venue: "Kreuzberg warehouse", date: "05.2023" },
];

export const recentNights = nights.slice(0, 5);

export type Artist = {
  name: string;
  craft: string;
};

export const roster: Artist[] = [
  { name: "Nadia Kolb", craft: "Performance" },
  { name: "Robin Achterberg", craft: "Sound" },
  { name: "Ilya Marchetti", craft: "Movement" },
  { name: "Sena Okafor", craft: "Visual Art" },
  { name: "Tobias Rehn", craft: "Spoken Word" },
  { name: "Marlene Fuchs", craft: "Installation" },
  { name: "Dario Voss", craft: "DJ / Selector" },
  { name: "Yael Brandt", craft: "Costume & Object" },
];

export const rosterPreview = roster.slice(0, 4);

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Artist first",
    body: "The brief starts with the artist's practice, not a theme we hand down. If it doesn't fit their work, it doesn't happen.",
  },
  {
    number: "02",
    title: "No pay to play",
    body: "Nobody buys a slot on the roster or a place in the room. Every night is booked on the work, full stop.",
  },
  {
    number: "03",
    title: "Open door",
    body: "Anyone can submit for an open call night. No portfolio gatekeeping, no invite-only lists.",
  },
  {
    number: "04",
    title: "Paid work",
    body: "Community nights run at cost. Brand and agency work is what pays every artist on the roster a real fee.",
  },
];

export type Service = {
  number: string;
  title: string;
  body: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Curation & casting",
    body: "We match your brief to artists from the roster whose practice actually fits it, not whoever's free.",
  },
  {
    number: "02",
    title: "Live performance",
    body: "Solo and ensemble sets built for the room you're putting them in, from a launch floor to a gallery opening.",
  },
  {
    number: "03",
    title: "Installation & scenography",
    body: "Spatial and object work that holds a space on its own, or frames the performance inside it.",
  },
  {
    number: "04",
    title: "Production & run of show",
    body: "Tech, timing and on-the-night management, handled by people who've run these nights themselves.",
  },
];

export type Step = {
  number: string;
  title: string;
  body: string;
};

export const bookingSteps: Step[] = [
  {
    number: "1",
    title: "Brief",
    body: "Tell us the occasion, the room and the audience. Fifteen minutes is enough to start.",
  },
  {
    number: "2",
    title: "Proposal",
    body: "We come back with artists, a concept and a number — no exclusivity required to see it.",
  },
  {
    number: "3",
    title: "Build",
    body: "Once you're in, we handle casting, production and everything the artists need to show up ready.",
  },
  {
    number: "4",
    title: "Night",
    body: "We run it start to finish, on site, so nothing lands on your team on the day.",
  },
];

export type CaseImage = {
  caption: string;
};

export const caseImages: CaseImage[] = [
  { caption: "Client night" },
  { caption: "Installation" },
  { caption: "Launch" },
];

export const facts = [
  "Est. 2023",
  "Berlin",
  "14 nights",
  "60+ artists",
  "~400 people a night",
];

export const contactChannels = [
  {
    label: "Brands & agencies",
    email: "book@plasticproductions.berlin",
  },
  {
    label: "Artists & open call",
    email: "submit@plasticproductions.berlin",
  },
  {
    label: "Everything else",
    email: "hello@plasticproductions.berlin",
  },
];

export const whatWeCover = [
  "Space & tech",
  "Documentation",
  "Fee — always, for brand work",
  "Right of refusal",
];
