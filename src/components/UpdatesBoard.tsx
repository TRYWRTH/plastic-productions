"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Update } from "@/lib/team-updates";

type Status = "idle" | "sending" | "error";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function UpdatesBoard({ updates }: { updates: Update[] }) {
  const router = useRouter();
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/team/updates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, body }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setErrorMessage(data.error ?? "Couldn't post that. Try again.");
      return;
    }

    setBody("");
    setStatus("idle");
    router.refresh();
  }

  return (
    <div className="stack" style={{ gap: 24 }}>
      <form className="stack" style={{ gap: 12, maxWidth: 480 }} onSubmit={handleSubmit} noValidate>
        <input
          className="field"
          type="text"
          placeholder="YOUR NAME"
          aria-label="Your name"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
        <textarea
          className="field"
          placeholder="WHAT'S GOING ON — plans, tasks, who's doing what…"
          aria-label="Update"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
        {status === "error" && (
          <p className="form-status form-status--error" role="alert">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          className="btn btn--fill-accent"
          disabled={status === "sending" || !author.trim() || !body.trim()}
          style={{ alignSelf: "flex-start" }}
        >
          {status === "sending" ? "Posting…" : "Post update →"}
        </button>
      </form>

      <div className="stack" style={{ gap: 20 }}>
        {updates.length === 0 && <p className="lead">No updates yet — be the first.</p>}
        {updates.map((update) => (
          <div key={update.id} className="stack" style={{ gap: 4 }}>
            <span className="mono-meta">
              {formatDate(update.date)} · {update.author}
            </span>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{update.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
