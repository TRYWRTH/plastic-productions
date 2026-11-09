"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import {
  BOOK_EMAIL,
  HELLO_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SUBMIT_EMAIL,
} from "@/lib/site";

type Mode = "book" | "question";

const WHO = ["Brand", "Agency", "Artist or performer", "Something else"];
const TIMES = ["10:00", "11:30", "14:00", "15:30", "17:00"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Today's date as a stable string; empty during static prerender so the
// weekday chips only render in the browser (no hydration mismatch).
const subscribe = () => () => {};
const todayKey = () => new Date().toDateString();
const serverKey = () => "";

function nextWeekdays(key: string, count = 5): string[] {
  if (!key) return [];
  const fmt = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const out: string[] = [];
  const d = new Date(key);
  while (out.length < count) {
    d.setDate(d.getDate() + 1);
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) out.push(fmt.format(d).replace(",", ""));
  }
  return out;
}

function Chips({
  legend,
  options,
  value,
  onChange,
  note,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  note?: string;
}) {
  return (
    <fieldset className="fieldset">
      <legend>{legend}</legend>
      <div className="chips">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className="chip"
            aria-pressed={value === o}
            onClick={() => onChange(value === o ? "" : o)}
          >
            {o}
          </button>
        ))}
      </div>
      {note && <p className="note">{note}</p>}
    </fieldset>
  );
}

export default function ContactForm() {
  const key = useSyncExternalStore(subscribe, todayKey, serverKey);
  const days = useMemo(() => nextWeekdays(key), [key]);

  const [mode, setMode] = useState<Mode>("book");
  const [who, setWho] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const isBook = mode === "book";
  const emailOk = EMAIL_RE.test(email.trim());
  const valid =
    who !== "" &&
    name.trim() !== "" &&
    emailOk &&
    (isBook ? day !== "" && time !== "" : message.trim() !== "");

  const missing: string[] = [];
  if (!who) missing.push("who you are");
  if (isBook && !day) missing.push("a day");
  if (isBook && !time) missing.push("a time");
  if (!name.trim()) missing.push("your name");
  if (!emailOk) missing.push("a valid email");
  if (!isBook && !message.trim()) missing.push("your question");

  function reset(next: Mode = mode) {
    setMode(next);
    setWho("");
    setDay("");
    setTime("");
    setName("");
    setEmail("");
    setMessage("");
    setEmailTouched(false);
    setSent(false);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const subject = isBook
      ? `Meeting request: ${day}, ${time} (Berlin time) — ${name}`
      : `Question from ${name}`;
    const lines = [
      `Who: ${who}`,
      ...(isBook ? [`Day: ${day}`, `Time: ${time} (Berlin time)`] : []),
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message.trim() || "(no message)",
    ];
    const href = `mailto:${BOOK_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <div className="contact-grid">
      <div>
        <div className="switch" role="group" aria-label="Contact type">
          <button type="button" aria-pressed={isBook} onClick={() => reset("book")}>
            Book a meeting
          </button>
          <button type="button" aria-pressed={!isBook} onClick={() => reset("question")}>
            Send a question
          </button>
        </div>

        {sent ? (
          <div className="stack" style={{ gap: 28 }} role="status">
            <h2 className="h2">{isBook ? "Meeting requested" : "Question sent"}</h2>
            <p className="lead">
              Your email app should open with the message ready to send. If it did not, write to
              us directly at <a href={`mailto:${BOOK_EMAIL}`}>{BOOK_EMAIL}</a>.
            </p>
            <div className="btns">
              <button type="button" className="btn btn--secondary" onClick={() => reset()}>
                Start over
              </button>
            </div>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            <Chips legend="Who are you?" options={WHO} value={who} onChange={setWho} />

            {isBook && (
              <>
                <Chips legend="Pick a day" options={days} value={day} onChange={setDay} />
                <Chips
                  legend="Pick a preferred time (Berlin time)"
                  options={TIMES}
                  value={time}
                  onChange={setTime}
                  note="We confirm by email."
                />
              </>
            )}

            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                aria-invalid={emailTouched && !emailOk}
                aria-describedby={emailTouched && !emailOk ? "cf-email-err" : undefined}
                onBlur={() => setEmailTouched(true)}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailTouched && !emailOk && (
                <p id="cf-email-err" className="field__err">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="cf-msg">
                {isBook ? "What would you like to talk about (optional)" : "Your question"}
              </label>
              <textarea
                id="cf-msg"
                name="message"
                required={!isBook}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn--primary"
                disabled={!valid}
                aria-describedby="cf-hint"
              >
                {isBook ? "Request meeting →" : "Send question →"}
              </button>
              <p id="cf-hint" className="note" aria-live="polite">
                {valid
                  ? "Opens your email app with the message ready to send."
                  : `Still needed: ${missing.join(", ")}.`}
              </p>
            </div>
          </form>
        )}
      </div>

      <aside className="aside hair">
        {isBook && (
          <div>
            <h2 className="label">Your meeting</h2>
            <dl className="summary">
              <dt>Day</dt>
              <dd>{day || "—"}</dd>
              <dt>Time</dt>
              <dd>{time ? `${time} Berlin time` : "—"}</dd>
              <dt>Who</dt>
              <dd>{who || "—"}</dd>
            </dl>
          </div>
        )}
        <div>
          <h2 className="label">Prefer email</h2>
          <ul className="list">
            <li>
              <span className="small mute">Meetings</span>
              <br />
              <a href={`mailto:${BOOK_EMAIL}`}>{BOOK_EMAIL}</a>
            </li>
            <li>
              <span className="small mute">Artist submissions</span>
              <br />
              <a href={`mailto:${SUBMIT_EMAIL}`}>{SUBMIT_EMAIL}</a>
            </li>
            <li>
              <span className="small mute">Everything else</span>
              <br />
              <a href={`mailto:${HELLO_EMAIL}`}>{HELLO_EMAIL}</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="label">Find us</h2>
          <p>Berlin and Stockholm</p>
          <ul className="list">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
