// Placeholder team-portal content — edit this file directly to keep it
// current. Not rendered anywhere public; only reachable behind the
// password gate at /team.

export type FileLink = {
  label: string;
  url: string;
  note?: string;
};

export const fileLinks: FileLink[] = [
  { label: "Roster & rates (sheet)", url: "#", note: "Google Sheets" },
  { label: "Brand deck template", url: "#", note: "Google Slides" },
  { label: "Night 015 run of show", url: "#", note: "Google Docs" },
  { label: "Press & photo archive", url: "#", note: "Drive folder" },
];

// The updates board itself lives in src/lib/team-updates.ts (backed by
// Redis, editable from the /team page) rather than here.

export type Meeting = {
  date: string;
  time: string;
  title: string;
  location: string;
};

export const upcomingMeetings: Meeting[] = [
  { date: "08.09.2026", time: "18:00", title: "Night 015 production check-in", location: "Studio" },
  { date: "15.09.2026", time: "10:00", title: "Q4 brand pipeline review", location: "Video call" },
];

export const currentPlans = [
  "Night 015 — Kreuzberg warehouse, mid-Sept — production in progress.",
  "Two brand proposals out for review, one follow-up call scheduled.",
  "Open call for the roster closes end of month.",
];
