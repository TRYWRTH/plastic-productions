import type { Metadata } from "next";
import Link from "next/link";
import RosterGrid from "@/components/RosterGrid";
import { roster, whatWeCover } from "@/lib/content";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "The Plastic Productions roster — sixty-plus artists across performance, sound, movement, visual art and more, and counting.",
};

export default function Artists() {
  return (
    <>
      <section className="section section--hero gutter">
        <span className="eyebrow">Roster — 60 artists and counting</span>
        <h1 className="h1" style={{ marginTop: 16 }}>
          The people
          <br />
          we put on
        </h1>
      </section>

      <section className="section section--no-border gutter">
        <RosterGrid artists={roster} className="roster-grid" />
      </section>

      <div className="doors">
        <div className="door door--accent">
          <span className="mono" style={{ color: "var(--on-accent)" }}>
            Open call — always open
          </span>
          <h2 className="h2">Send us your work</h2>
          <Link href="/contact" className="btn btn--on-accent">
            Submit →
          </Link>
        </div>
        <div className="door">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            What we cover
          </h2>
          <div className="hairline-list" style={{ width: "100%" }}>
            {whatWeCover.map((item) => (
              <span className="hairline-list__item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
