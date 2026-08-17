import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { bookingSteps, caseImages, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "For brands",
  description:
    "Hire Plastic Productions artists for brand and agency events — curation, live performance, installation and full production.",
};

export default function Brands() {
  return (
    <>
      <section className="section section--hero section--dark gutter">
        <span className="eyebrow">For brands &amp; agencies</span>
        <h1 className="h1" style={{ margin: "16px 0 24px" }}>
          Hire artists,
          <br />
          not entertainment
        </h1>
        <p className="copy copy--on-dark" style={{ maxWidth: "56ch" }}>
          Book a night, an installation or a single set from artists whose
          work already draws a room — cast for your brief, not booked off a
          rate card.
        </p>
      </section>

      <section className="section gutter">
        <div className="grid-fit-260" style={{ gap: 24 }}>
          {services.map((service) => (
            <div className="numbered-cell" key={service.number}>
              <span className="numbered-cell__number">{service.number}</span>
              <h3 className="numbered-cell__title">{service.title}</h3>
              <p className="numbered-cell__body">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section gutter">
        <h2 className="h2" style={{ marginBottom: 24 }}>
          Selected work
        </h2>
        <div className="grid-fit-300" style={{ gap: 18 }}>
          {caseImages.map((image) => (
            <ImagePlaceholder key={image.caption} caption={image.caption} ratio="4x3" />
          ))}
        </div>
      </section>

      <section className="section gutter">
        <h2 className="h2" style={{ marginBottom: 24 }}>
          How a booking runs
        </h2>
        <div className="grid-fit-220" style={{ gap: 24 }}>
          {bookingSteps.map((step) => (
            <div className="numbered-cell numbered-cell--thick" key={step.number}>
              <span className="numbered-cell__number--lg">{step.number}</span>
              <h3 className="numbered-cell__title--sm">{step.title}</h3>
              <p className="numbered-cell__body">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--no-border section--accent gutter" style={{ textAlign: "center" }}>
        <h2
          style={{
            font: "900 clamp(30px,4.6vw,60px)/1.05 var(--font-archivo)",
            letterSpacing: "-.03em",
            textTransform: "uppercase",
            margin: "0 0 28px",
          }}
        >
          Tell us what
          <br />
          the night is
        </h2>
        <Link href="/contact" className="btn btn--fill-ink btn--lg">
          Request the deck →
        </Link>
      </section>
    </>
  );
}
