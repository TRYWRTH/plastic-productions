import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a meeting or send a question to Plastic Productions, Berlin and Stockholm.",
};

export default function Contact() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__copy">
          <p className="small load">Contact</p>
          <h1 className="load" style={{ animationDelay: "120ms" }}>
            Let’s talk
          </h1>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
