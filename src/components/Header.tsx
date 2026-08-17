"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/brands", label: "For brands" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="site-header__word">
          Plastic Productions
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-nav" className="mobile-nav" role="dialog" aria-modal="true">
          <div className="mobile-nav__top">
            <span className="site-header__word" style={{ color: "var(--on-dark)" }}>
              Plastic Productions
            </span>
            <button
              type="button"
              className="mobile-nav__close"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="mobile-nav__links" aria-label="Primary">
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
