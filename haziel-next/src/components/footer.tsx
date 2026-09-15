import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-name">Haziel Nablo</p>
            <p className="footer-blurb">
              Customer Service &amp; Content Moderation · Agdao, Davao City
            </p>
          </div>
          <div className="footer-col">
            <h2 className="footer-title">Contact</h2>
            <Link href="mailto:hazielnablo19@gmail.com">hazielnablo19@gmail.com</Link>
            <Link href="tel:+639351980042">+63 935 198 0042</Link>
          </div>
          <div className="footer-col">
            <h2 className="footer-title">Pages</h2>
            <Link href="/how-i-work">How I Work</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Haziel Nablo · Agdao, Davao City. Content grounded in resume.
        </div>
      </div>
    </footer>
  );
}
