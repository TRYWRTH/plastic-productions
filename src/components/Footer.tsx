"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "sent" | "error";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Not wired to a real newsletter provider yet — see design handoff.
    setTimeout(() => setStatus("sent"), 400);
  }

  return (
    <footer className="site-footer gutter">
      <div>
        <h2 className="site-footer__heading">
          Get the
          <br />
          next date first
        </h2>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            aria-label="Email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            required
          />
          <button type="submit" disabled={status === "sending" || status === "sent"}>
            {status === "sent" ? "Joined" : "Join"}
          </button>
        </form>
        {status === "error" && (
          <p className="form-status form-status--error" role="alert">
            Enter a valid email.
          </p>
        )}
        <p className="mono-meta footer-note">
          One email a month. The next date, nothing else.
        </p>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@plasticproductions.berlin">hello@plasticproductions.berlin</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="#">Press kit</a>
        <span className="mono-meta">Imprint · Privacy</span>
        <span className="mono-meta footer-copy">© 2026 Plastic Productions — Berlin</span>
      </div>
    </footer>
  );
}
