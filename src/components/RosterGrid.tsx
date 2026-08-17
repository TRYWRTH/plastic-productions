import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Artist } from "@/lib/content";

type RosterGridProps = {
  artists: Artist[];
  className?: string;
};

export default function RosterGrid({ artists, className }: RosterGridProps) {
  return (
    <div className={className}>
      {artists.map((artist) => (
        <div className="roster-card" key={artist.name}>
          <ImagePlaceholder caption={artist.name} ratio="3x4" />
          <span className="roster-card__name">{artist.name}</span>
          <span className="roster-card__craft">{artist.craft}</span>
        </div>
      ))}
    </div>
  );
}
