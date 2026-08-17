"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pp-intro-seen";
const TOTAL_DURATION_MS = 4050;

const WORDS = [
  { text: "No stage", delay: "0s" },
  { text: "No gate", delay: ".62s" },
  { text: "No filter", delay: "1.24s" },
];

export default function Intro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadySeen || reducedMotion) return;

    sessionStorage.setItem(STORAGE_KEY, "1");

    const revealTimer = setTimeout(() => setVisible(true), 0);
    const hideTimer = setTimeout(() => setVisible(false), TOTAL_DURATION_MS);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="intro-overlay"
      onClick={() => setVisible(false)}
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
    >
      <div className="intro-overlay__center">
        <div className="intro-overlay__stage">
          {WORDS.map((word) => (
            <div
              key={word.text}
              className="intro-overlay__word"
              style={{ animationDelay: word.delay }}
            >
              {word.text}
            </div>
          ))}
          <div
            className="intro-overlay__word intro-overlay__word--brand"
            style={{ animationDelay: "1.86s" }}
          >
            Plastic Productions
          </div>
        </div>
      </div>
      <div className="intro-overlay__corner intro-overlay__corner--left">
        Berlin
      </div>
      <div className="intro-overlay__corner intro-overlay__corner--right">
        Est. 2023 — skip
      </div>
    </div>
  );
}
