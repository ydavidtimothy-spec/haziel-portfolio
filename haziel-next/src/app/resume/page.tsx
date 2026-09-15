import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume — Haziel Nablo",
  description: "Resume of Haziel Nablo, Customer Service & Content Moderation, Davao City.",
};

export default function ResumePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="no-print">
            <Link href="/" className="back-link">
              ← Back to Portfolio
            </Link>
          </div>
          <h1 className="h-section">Haziel Nablo</h1>
          <p className="resume-lede">
            Customer Service &amp; Content Moderation · Agdao, Davao City, Philippines
            <br />
            hazielnablo19@gmail.com · +63 935 198 0042
          </p>
          <div className="resume-actions no-print">
            <PrintButton />
            <Link href="/Haziel-Nablo-Resume.pdf" className="btn btn-secondary">
              Download PDF with Photo
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="resume-sheet">
            <h2>Professional Summary</h2>
            <ul>
              <li>Flexible enough to deal with a range of clients and customers.</li>
              <li>Balancing multiple tasks and responding to customers in a timely manner.</li>
              <li>Maintaining a positive demeanor even in challenging situations to provide excellent service.</li>
            </ul>
            <h2>Professional Experience — Conectys · Concentrix</h2>
            <ul>
              <li><strong>Content moderation, Threads (2024 — Jun 2026):</strong> reviewed uploaded videos and decided allow, restrict, age-gate, or remove; checked profile pictures, thumbnails, and photo posts for nudity, graphic violence, hateful imagery, and prohibited symbols; judged context, not just individual elements; handled abusive, threatening, and sexually explicit comments; handled sensitive cases including graphic violence, self-harm, abuse, and sexual exploitation; recognized new spam, scams, and harmful challenges; applied Community Guidelines consistently and objectively.</li>
            </ul>
            <h2>Professional Experience — Ibex Global Solutions</h2>
            <ul>
              <li><strong>Vendor escalations &amp; retention support (2023 — 2024):</strong> updated private vendor data (bank details, contact person); explained invoices (revenue, VAT, charges, deductions); troubleshot or replaced vendor devices; retained vendors considering termination; terminated or activated accounts; updated restaurant / store address or name.</li>
              <li><strong>Chat support specialist (2022 — 2023):</strong> assisted vendors across up to 4 concurrent live chats; cancelled orders per request; explained order breakdowns; followed up with assigned riders for delivery.</li>
            </ul>
            <h2>Education</h2>
            <ul>
              <li><strong>Holy Cross of Davao College</strong> — BS Business Administration, HR Development Management (AY 2019 — 2021).</li>
              <li><strong>Francisco Bangoy Senior High School, Sasa, Davao City</strong> — TVL, Beauty Care / Nail Care / Massage (SY 2017 — 2018).</li>
            </ul>
            <h2>Honors &amp; Certifications</h2>
            <ul>
              <li><strong>2023:</strong> Top Agent and Chat Warrior Awardee, Ibex Global Solutions.</li>
              <li><strong>2018:</strong> Leadership Awardee, Best in TVL, Best in OJT (Massage, Beauty Care).</li>
              <li><strong>TESDA NCII:</strong> Beauty Care / Nail Care, Massage Therapy, Housekeeping.</li>
            </ul>
            <h2>Skills</h2>
            <ul>
              <li><strong>Vendor operations:</strong> multi-chat support, order cancellation, rider coordination, retention &amp; de-escalation.</li>
              <li><strong>Billing &amp; accounts:</strong> invoice / VAT explanations, private data updates, device troubleshooting, CRM &amp; ticketing.</li>
              <li><strong>Trust &amp; safety:</strong> review queues, allow / restrict / age-gate / remove, spam &amp; scam detection, guideline consistency.</li>
              <li><strong>Soft strengths:</strong> work under pressure, multi-tasking, empathy &amp; patience, adaptability, time management.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
