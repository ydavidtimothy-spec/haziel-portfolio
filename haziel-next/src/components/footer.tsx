import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-meta">
          © 2026 Haziel Nablo · Agdao, Davao City. Content grounded in resume.
        </span>
        <span className="footer-links">
          <Link href="mailto:hazielnablo19@gmail.com">hazielnablo19@gmail.com</Link>
          <Link href="tel:+639351980042">+63 935 198 0042</Link>
          <Link href="/how-i-work">How I Work</Link>
        </span>
      </div>
    </footer>
  );
}
