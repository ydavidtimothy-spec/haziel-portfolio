import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import Workflow from "@/components/workflow";

export const metadata: Metadata = {
  title: "How I Work — Haziel Nablo",
  description:
    "How Haziel Nablo handles difficult customer, vendor, and moderation cases: listen, clarify, investigate, act, confirm.",
};

export default function HowIWorkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Portfolio
          </Link>
          <span className="eyebrow mono">How I work — sample flow</span>
          <h1 className="h-section">How I handle difficult customer &amp; vendor issues</h1>
          <p className="lede">
            Listen → clarify → investigate → act → confirm. Based on vendor support,
            escalations, and Threads moderation work — written the way I&rsquo;d explain it in an interview.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <Workflow />
          </Reveal>
          <p className="lede" style={{ marginTop: 32, fontSize: 13 }}>
            Illustrative workflow — no real customer data. This page recreates the steps
            followed during an escalation, without showing real accounts or amounts.
          </p>
        </div>
      </section>
    </main>
  );
}
