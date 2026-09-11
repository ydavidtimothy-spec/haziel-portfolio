import Link from "next/link";
import Reveal from "@/components/reveal";
import CopyEmail from "@/components/copy-email";
import StarButton from "@/components/bits/star-button";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="contact-inner">
            <span className="eyebrow mono">08 / Contact</span>
            <h2 className="contact-title">Looking for steady customer &amp; vendor support?</h2>
            <p className="lede" style={{ margin: "0 auto" }}>
              Available for Customer Service, Vendor Support, Escalations, Retention,
              and Content Moderation roles.
            </p>
            <div className="contact-actions">
              <StarButton href="/resume" plain>Download Resume</StarButton>
              <Link href="mailto:hazielnablo19@gmail.com" className="btn btn-secondary">
                Send Email
              </Link>
              <CopyEmail />
            </div>
            <p className="contact-phone">
              <Link href="tel:+639351980042">+63 935 198 0042</Link> · Agdao, Davao City
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
