import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <Link href="/" className="wordmark">
            Plastic Productions
          </Link>
          <ul className="footer__links">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Plastic Productions — Berlin</span>
          <span>
            <a href="#">Imprint</a> · <a href="#">Privacy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
