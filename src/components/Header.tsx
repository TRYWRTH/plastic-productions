"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#answer", label: "Services", path: null },
  { href: "/#talent", label: "Talent", path: null },
  { href: "/about", label: "About us", path: "/about" },
  { href: "/contact", label: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (p: string | null) =>
    p && pathname?.replace(/\/$/, "") === p ? "page" : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="wordmark">
          Plastic Productions
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="nav__link" aria-current={current(n.path)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--primary btn--sm">
            Book a meeting
          </Link>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-overlay"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div id="menu-overlay" className="overlay" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="wrap header__inner">
            <Link href="/" className="wordmark" onClick={close}>
              Plastic Productions
            </Link>
            <button type="button" className="menu-btn" onClick={close} autoFocus>
              Close
            </button>
          </div>
          <nav className="wrap overlay__nav" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="overlay__link" aria-current={current(n.path)} onClick={close}>
                {n.label}
              </Link>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn--primary" onClick={close}>
                Book a meeting
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
