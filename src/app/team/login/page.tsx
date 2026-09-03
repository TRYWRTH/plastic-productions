"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Status = "idle" | "sending" | "error";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/team/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setErrorMessage(data.error ?? "Something went wrong.");
      return;
    }

    const dest = searchParams.get("from") || "/team";
    router.push(dest);
    router.refresh();
  }

  return (
    <section className="section section--hero gutter">
      <h1 className="h1">Team login</h1>
      <p className="lead" style={{ marginTop: 12, marginBottom: 32 }}>
        Members only. Ask in the team channel if you don&apos;t have the password.
      </p>
      <form
        className="stack"
        style={{ maxWidth: 360, gap: 16 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="field"
          type="password"
          name="password"
          placeholder="PASSWORD"
          aria-label="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          autoFocus
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
          disabled={status === "sending" || !password}
        >
          {status === "sending" ? "Checking…" : "Enter →"}
        </button>
      </form>
    </section>
  );
}

export default function TeamLogin() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
