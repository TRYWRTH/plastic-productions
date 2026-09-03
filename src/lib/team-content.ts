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

export type UpdateItem = {
  date: string;
  author: string;
  body: string;
};

// Most recent first.
export const updates: UpdateItem[] = [
  {
    date: "02.09.2026",
    author: "Team",
    body: "Night 015 venue confirmed — Kreuzberg warehouse, load-in 14:00.",
  },
  {
    date: "28.08.2026",
    author: "Team",
    body: "Brand proposal sent to Client X, waiting on sign-off.",
  },
  {
    date: "20.08.2026",
    author: "Team",
    body: "New roster submissions open for review in the shared folder.",
  },
];

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
