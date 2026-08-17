"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPES = ["Brand", "Artist", "Other"] as const;
type ContactType = (typeof TYPES)[number];
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [type, setType] = useState<ContactType>("Brand");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setErrorMessage("Enter a valid email.");
      return;
    }
    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Tell us a little about what you need.");
      return;
    }

    setStatus("sending");
    // Not wired to a real endpoint yet — see design handoff.
    setTimeout(() => setStatus("sent"), 400);
  }

  if (status === "sent") {
    return (
      <p className="lead">
        Got it — we&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <form className="stack" onSubmit={handleSubmit} noValidate>
      <div className="segmented" role="group" aria-label="I am a...">
        {TYPES.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={type === option}
            onClick={() => setType(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="stack" style={{ gap: 16 }}>
        <input
          className="field"
          type="text"
          name="name"
          placeholder="NAME"
          aria-label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          className="field"
          type="email"
          name="email"
          placeholder="EMAIL"
          aria-label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <textarea
          className="field"
          name="message"
          placeholder="MESSAGE"
          aria-label="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>

      {status === "error" && (
        <p className="form-status form-status--error" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="btn btn--fill-accent" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send →"}
      </button>
    </form>
  );
}
