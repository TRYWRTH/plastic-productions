import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import Scene from "@/components/Scene";
import { images, type ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: "Plastic Productions — Independent art and performance for brands" },
  description:
    "The independent arts and performance scene, made accessible to brands. Access, curation and delivery from Berlin and Stockholm.",
};

const ANSWER = [
  { n: "01", t: "Access", d: "A network of independent performers and artists that no other roster carries." },
  { n: "02", t: "Curation", d: "The concept and the shortlist: why this artist, why this room, why now." },
  {
    n: "03",
    t: "Delivery",
    d: "We handle everything: contracts, artist care, timing. One point of contact, one invoice. We are on site on the day to ensure a smooth and mutually beneficial exchange.",
  },
];

const STATS = [
  { n: "13", d: "self-produced events since 2022" },
  { n: "90+", d: "artists and performers worked with over the years" },
  { n: "9", d: "different venues, from galleries to a former bank" },
  { n: "26", d: "nationalities among our artists and performers" },
];

const TALENT: { slot: ImageKey; title: string }[] = [
  { slot: "dancers", title: "Dancers" },
  { slot: "musicians", title: "Musicians" },
  { slot: "drag", title: "Drag artists" },
  { slot: "performers", title: "Performers" },
  { slot: "visualArts", title: "Visual arts" },
  { slot: "aerial", title: "Aerial talent" },
];

function Col({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rv">
      <h3 className="label">{label}</h3>
      <p className="lead">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero__copy">
            <h1 className="load">
              The independent arts and performance scene, made accessible to brands
            </h1>
            <p className="small mute load" style={{ animationDelay: "120ms" }}>
              Plastic Productions — Berlin and Stockholm
            </p>
            <div className="btns load" style={{ animationDelay: "220ms" }}>
              <Link href="/contact" className="btn btn--primary">Book a meeting →</Link>
              <Link href="/contact" className="btn btn--secondary">Send a question</Link>
            </div>
          </div>
          <div className="load" style={{ animationDelay: "340ms" }}>
            <ImageSlot slot="hero" ratio="16 / 8" caption="Full-bleed event photography or loop" />
          </div>
        </div>
      </section>

      <Scene num="01" name="The gap">
        <div className="stack">
          <h2 className="h2 rv">Brands and independent artists rarely connect</h2>
          <div className="grid grid--2">
            <Col label="Brand world">
              Brands are constantly looking for ways to stand out, using art and culture. Due to a
              lack of knowledge and network, they often end up booking talent from the same pool as
              everyone else.
            </Col>
            <Col label="Artist world">
              Performers in the independent scene do not believe they belong in the commercial
              world, and do not know how to reach brands.
            </Col>
          </div>
          <p className="bigline rv">
            They could benefit from each other, but do not know how to reach each other
          </p>
        </div>
      </Scene>

      <Scene num="02" name="Our answer" variant="dark" id="answer">
        <div className="stack">
          <h2 className="h2 rv">Plastic Productions builds the bridge</h2>
          <div className="grid grid--3">
            {ANSWER.map((a) => (
              <div key={a.n} className="rule rv">
                <p className="small" style={{ marginBottom: 20 }}>{a.n}</p>
                <h3 className="h3">{a.t}</h3>
                <p>{a.d}</p>
              </div>
            ))}
          </div>
          <p className="bigline rv">
            Delivery makes it effortless for the client, curation and access make it uniquely
            Plastic Productions
          </p>
        </div>
      </Scene>

      <Scene num="03" name="The proof">
        <div className="stack">
          <h2 className="h2 rv">We know the power of in-person experiences</h2>
          <dl className="grid grid--4" style={{ margin: 0 }}>
            {STATS.map((s) => (
              <div key={s.n} className="hair rv">
                <dt className="stat__num">{s.n}</dt>
                <dd style={{ margin: 0 }}>{s.d}</dd>
              </div>
            ))}
          </dl>
          <div className="prose">
            <p className="lead rv">
              Under the name Plastic Productions, we have created events across Berlin and
              Stockholm. Since 2022 we have worked with artists and performers across dance,
              performance art, burlesque, pop music, noise, spoken word, aerial performance, drag
              and more.
            </p>
            <p className="small mute rv">
              Venues so far include galleries, abandoned nuclear bunkers, project spaces, a bike
              shop and a former bank.
            </p>
          </div>
        </div>
      </Scene>

      <Scene num="04" name="The talent" variant="hair" id="talent">
        <div className="stack">
          <h2 className="h2 rv">The talent we work with</h2>
          <ul className="tiles" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {TALENT.map((t) => (
              <li key={t.slot}>
                <ImageSlot slot={t.slot} ratio="4 / 5" caption={t.title} />
                <div className="tile__meta">
                  <span className="tile__title">{t.title}</span>
                  <span className="mute">{images[t.slot].credit}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Scene>

      <Scene num="05" name="Why it works for brands" variant="alt">
        <div className="stack">
          <h2 className="h2 rv">Access for brands to unique and skilled talent</h2>
          <div className="grid grid--2">
            <Col label="Changing branding formats">
              Brand building today cannot simply rely on a colour palette or a static logo. Instead
              it centres on emotional resonance, customer lifetime value and genuine trust.
            </Col>
            <Col label="Future brand events">
              Branded events are shifting from superficial logo displays and mass gatherings to
              strategic, measurable and highly curated live experiences. Live events bypass digital
              fatigue and offer direct, unfiltered human connection.
            </Col>
          </div>
          <div className="grid grid--2 rule">
            <div className="rv">
              <h3 className="h3">Brand experience and marketing agencies</h3>
              <p>
                Agencies run activations for multiple clients continuously. By using Plastic
                Productions to find talent for these events, they gain a unique competitive angle.
              </p>
            </div>
            <div className="rv">
              <h3 className="h3">Direct brands</h3>
              <p>
                In-house creative directors and brand teams work with brand identity every day.
                Plastic Productions helps them find the specific talent that captures and
                communicates it.
              </p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene num="06" name="Why it works for artists">
        <div className="stack">
          <h2 className="h2 rv">New and fair revenue streams for artists</h2>
          <div className="grid grid--2">
            <p className="lead rv">
              Working with brands opens new sources of revenue, so artists can keep focusing on
              their practice without juggling multiple jobs to get by.
            </p>
            <p className="lead rv">
              Compensating artists and performers for their work has always been one of the core
              principles of Plastic Productions.
            </p>
          </div>
          <p className="bigline rv">
            We help keep the independent scene alive and give back to a world we love and care
            about
          </p>
        </div>
      </Scene>

      <Scene num="07" name="Next" variant="dark">
        <div className="stack">
          <h2 className="h2 h2--xl rv">Experiences that are new, unexpected and unique</h2>
          <p className="lead rv">
            Book a meeting or send us a question. We will come back to you with next steps.
          </p>
          <div className="btns rv">
            <Link href="/contact" className="btn btn--primary">Book a meeting →</Link>
            <Link href="/contact" className="btn btn--secondary">Send a question</Link>
          </div>
        </div>
      </Scene>
    </>
  );
}
