import Link from "next/link";
import Reveal from "@/components/reveal";
import CopyEmail from "@/components/copy-email";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow mono">08 / Contact</span>
          <div className="contact-grid">
            <div>
              <h2 className="contact-title">Looking for steady customer &amp; vendor support?</h2>
              <p className="lede">
                Available for Customer Service, Vendor Support, Escalations, Retention,
                and Content Moderation roles.
              </p>
              <div className="contact-actions">
                <Link href="/resume" className="btn btn-primary">
                  Download Resume
                </Link>
                <Link href="mailto:hazielnablo19@gmail.com" className="btn btn-secondary">
                  Send Email
                </Link>
                <CopyEmail />
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-line">
                <span className="contact-line-label mono">Location</span>
                <span>Agdao, Davao City</span>
              </div>
              <div className="contact-line">
                <span className="contact-line-label mono">Email</span>
                <Link href="mailto:hazielnablo19@gmail.com">hazielnablo19@gmail.com</Link>
              </div>
              <div className="contact-line">
                <span className="contact-line-label mono">Phone</span>
                <Link href="tel:+639351980042">+63 935 198 0042</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
