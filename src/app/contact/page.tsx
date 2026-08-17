import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contactChannels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Plastic Productions — brand and agency bookings, artist submissions, or anything else.",
};

export default function Contact() {
  return (
    <>
      <section className="section section--hero gutter">
        <h1 className="h1">
          Say what you
          <br />
          need. Briefly.
        </h1>
      </section>

      <section className="section section--no-border split-rule grid-fit-340 gutter">
        <div className="stack" style={{ gap: 28 }}>
          {contactChannels.map((channel) => (
            <div key={channel.email}>
              <span className="mono" style={{ display: "block", marginBottom: 6 }}>
                {channel.label}
              </span>
              <a
                href={`mailto:${channel.email}`}
                style={{
                  font: "800 clamp(20px,2.2vw,28px)/1.1 var(--font-archivo)",
                  letterSpacing: "-.02em",
                  textTransform: "uppercase",
                }}
              >
                {channel.email}
              </a>
            </div>
          ))}
          <div className="hairline-list">
            <span className="mono-meta">Berlin, DE</span>
            <span className="mono-meta">Instagram</span>
            <span className="mono-meta">Press kit</span>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
