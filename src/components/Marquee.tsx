const MARQUEE_TEXT =
  "Next: Vol. 015 — Oct 11 — Neukölln · Open call for artists · Brand bookings 2026 ·";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span className="marquee__item">{MARQUEE_TEXT}</span>
        <span className="marquee__item">{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}
