import type { Metadata } from "next";
import NightsIndex from "@/components/NightsIndex";
import { facts, nights, principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The manifesto behind Plastic Productions — why we started, how we work, and what fourteen nights in Berlin have built.",
};

export default function About() {
  return (
    <>
      <section className="section section--hero gutter">
        <h1 className="h1">
          We started because
          <br />
          the room was
          <br />
          always full of
          <br />
          the same people
        </h1>
      </section>

      <section className="section split-rule grid-fit-340 gutter">
        <div className="stack">
          {facts.map((fact) => (
            <span className="mono-meta" key={fact}>
              {fact}
            </span>
          ))}
        </div>
        <div className="stack">
          <p className="lead" style={{ maxWidth: "62ch" }}>
            Plastic Productions started as three friends splitting a door fee
            in a Kreuzberg warehouse. The room was full, but it was always
            the same forty people — so we started asking who else should be
            in it.
          </p>
          <p className="copy" style={{ maxWidth: "62ch" }}>
            Every night since has been built around one rule: the work comes
            first, not the guest list. That means open submissions, no pay
            to play, and artists who&apos;ve never had a stage getting one
            next to people who&apos;ve toured festivals.
          </p>
          <p className="copy" style={{ maxWidth: "62ch" }}>
            Brand and agency bookings fund all of it — they&apos;re what
            lets community nights stay free to submit to and cheap to get
            into.
          </p>
        </div>
      </section>

      <section className="section gutter">
        <h2 className="h2" style={{ marginBottom: 24 }}>
          How we work
        </h2>
        <div className="grid-fit-260" style={{ gap: 24 }}>
          {principles.map((principle) => (
            <div className="numbered-cell" key={principle.number}>
              <span className="numbered-cell__number">{principle.number}</span>
              <h3 className="numbered-cell__title">{principle.title}</h3>
              <p className="numbered-cell__body">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="nights" className="section section--no-border gutter">
        <span className="mono" style={{ display: "block", marginBottom: 8 }}>
          Index of nights
        </span>
        <NightsIndex nights={nights} />
      </section>
    </>
  );
}
