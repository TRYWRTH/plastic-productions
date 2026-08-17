import Link from "next/link";
import Marquee from "@/components/Marquee";
import NightsIndex from "@/components/NightsIndex";
import RosterGrid from "@/components/RosterGrid";
import { recentNights, rosterPreview } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="section section--hero gutter">
        <span className="eyebrow">Art &amp; performance series · Berlin · Since 2023</span>
        <h1 className="h1" style={{ margin: "16px 0 32px" }}>
          A platform for
          <br />
          artists worth
          <br />
          the room
        </h1>
        <div className="grid-fit-320" style={{ gap: 24, maxWidth: 980 }}>
          <p className="copy">
            We put nights on for the people who show up for the work itself,
            not the flyer. No headliners, no hierarchy of who gets the good
            slot.
          </p>
          <p className="copy">
            Sixty-plus artists deep and still open to anyone who submits.
            Fourteen nights in, and the room keeps changing.
          </p>
        </div>
      </section>

      <Marquee />

      <div className="doors">
        <div className="door">
          <span className="eyebrow">01 / For the community</span>
          <h2 className="h2">Come to a night</h2>
          <Link href="/about" className="btn">
            How it works →
          </Link>
        </div>
        <div className="door door--dark">
          <span className="eyebrow">02 / For brands</span>
          <h2 className="h2">Book the roster</h2>
          <Link href="/brands" className="btn btn--on-dark">
            What we do →
          </Link>
        </div>
      </div>

      <section className="section gutter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 8,
          }}
        >
          <span className="mono">Index of nights</span>
          <Link href="/about#nights" className="mono">
            All 14 →
          </Link>
        </div>
        <NightsIndex nights={recentNights} />
      </section>

      <section className="section section--no-border gutter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 20,
          }}
        >
          <span className="mono">Roster preview</span>
          <Link href="/artists" className="mono">
            Full roster →
          </Link>
        </div>
        <RosterGrid artists={rosterPreview} className="grid-fit-220" />
      </section>
    </>
  );
}
