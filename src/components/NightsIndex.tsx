import type { Night } from "@/lib/content";

type NightsIndexProps = {
  nights: Night[];
};

export default function NightsIndex({ nights }: NightsIndexProps) {
  return (
    <div>
      {nights.map((night) => (
        <div className="night-row" key={night.number}>
          <span className="night-row__number">{night.number}</span>
          <span className="night-row__title">{night.title}</span>
          <span className="night-row__venue">{night.venue}</span>
          <span className="night-row__date">{night.date}</span>
        </div>
      ))}
    </div>
  );
}
