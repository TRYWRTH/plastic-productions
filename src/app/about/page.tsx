import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import Scene from "@/components/Scene";
import type { ImageKey } from "@/lib/images";
import { WHISPER_RING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Plastic Productions is built on Berlin’s independent art and performance scene. Meet the founder and the team.",
};

const VALUES = [
  { t: "A platform", d: "The project began to platform independent artists and performers." },
  { t: "Social catalysts", d: "We create spaces where art and culture bring people together." },
  { t: "Fair pay", d: "Compensating artists and performers has always been one of our core principles." },
];

const TEAM: { slot: ImageKey; name: string; role: string }[] = [
  { slot: "teamZuzanna", name: "Zuzanna Banach", role: "Music curator and head of digital product" },
  { slot: "teamCharles", name: "Charles Wyszogrod", role: "Producer and artist care" },
  { slot: "teamChristine", name: "Christine Paseman", role: "PR and comms" },
];

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__copy" style={{ marginBottom: 0 }}>
          <p className="small load">About us</p>
          <h1 className="load" style={{ animationDelay: "120ms" }}>
            Berlin’s independent art and performance scene is our love and our platform
          </h1>
        </div>
      </section>

      <Scene num="01" name="The founder">
        <div className="founder">
          <ImageSlot slot="founder" ratio="4 / 5" caption="Portrait" />
          <div className="stack" style={{ gap: 32 }}>
            <h2 className="h2 rv">Johanne Björklund Larsen</h2>
            <div className="prose">
              <p className="lead rv">
                Producer and curator of performing arts and live acts. Since 2019, working with
                more than 200 artists, performers and creatives across exhibitions, performance
                events, publications and nightlife.
              </p>
              <p className="lead rv">
                MA in History of Art and Art World Practice from Christie’s Education and the
                University of Glasgow, and an MBA from ESMT Berlin.
              </p>
              <p className="lead mute rv">
                The practical experience and the theory to connect the independent art scene and
                the commercial world, for a mutually beneficial exchange.
              </p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene num="02" name="What we stand for" variant="dark">
        <div className="stack">
          <h2 className="h2 rv">Independent artists first</h2>
          <div className="grid grid--3">
            {VALUES.map((v) => (
              <div key={v.t} className="rule rv">
                <h3 className="h3">{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene num="03" name="The team">
        <div className="stack">
          <h2 className="h2 rv">The people behind the nights</h2>
          <ul className="grid grid--3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {TEAM.map((m) => (
              <li key={m.slot}>
                <ImageSlot slot={m.slot} ratio="4 / 5" caption="Portrait" />
                <div className="rv" style={{ marginTop: 16 }}>
                  <h3 className="h3" style={{ marginBottom: 4 }}>{m.name}</h3>
                  <p className="mute">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Scene>

      <Scene num="04" name="Community" variant="hair">
        <div className="stack" style={{ gap: 32 }}>
          <h2 className="h2 rv">Our community events app, Whisper Ring</h2>
          <p className="lead rv">Discover, save and share nights in the independent scene.</p>
          <div className="btns rv">
            <a href={WHISPER_RING_URL} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
              Open Whisper Ring ↗
            </a>
          </div>
        </div>
      </Scene>

      <Scene variant="dark">
        <div className="stack">
          <h2 className="h2 rv">Book a meeting or send us a question</h2>
          <div className="btns rv">
            <Link href="/contact" className="btn btn--primary">Book a meeting →</Link>
            <Link href="/contact" className="btn btn--secondary">Send a question</Link>
          </div>
        </div>
      </Scene>
    </>
  );
}
