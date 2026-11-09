// Every image on the site lives here. To use a real photo, drop the file
// into public/images/ and set `src` to its file name (e.g. "hero.jpg").
// While `src` is null a coloured placeholder tile is shown instead.

export type ImageEntry = {
  src: string | null;
  alt: string;
  credit: string | null;
  tint: string;
};

export const images = {
  hero: { src: null, alt: "Live performance at a Plastic Productions event", credit: null, tint: "#2A1456" },
  dancers: { src: null, alt: "Dancers performing", credit: "Photo — Sherio Almasryl", tint: "#7A2E1F" },
  musicians: { src: null, alt: "Musicians performing", credit: "Photo — José M Ruas", tint: "#1F3B4D" },
  drag: { src: null, alt: "Drag artist performing", credit: "Photo — Bela Lehrnickel", tint: "#8C1C4A" },
  performers: { src: null, alt: "Performance artist on stage", credit: "Photo — Christine Leuhusen", tint: "#3D4A1E" },
  visualArts: { src: null, alt: "Visual art installation", credit: "Photo — José M Ruas", tint: "#4A3A6B" },
  aerial: { src: null, alt: "Aerial performer", credit: "Photo — Bela Lehrnickel", tint: "#1E4A44" },
  founder: { src: null, alt: "Portrait of Johanne Björklund Larsen", credit: null, tint: "#3B2F2A" },
  teamZuzanna: { src: null, alt: "Portrait of Zuzanna Banach", credit: null, tint: "#2F3A4A" },
  teamCharles: { src: null, alt: "Portrait of Charles Wyszogrod", credit: null, tint: "#4A2F38" },
  teamChristine: { src: null, alt: "Portrait of Christine Paseman", credit: null, tint: "#38432F" },
} satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof images;
