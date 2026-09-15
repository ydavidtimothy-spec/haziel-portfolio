"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "@/components/bits/count-up";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="hero-label">HAZIEL NABLO</p>
          <span className="eyebrow mono">Customer Service &amp; Content Moderation</span>
          <h1 className="hero-title">
            Customer <em className="display-em accent">Support</em> &amp;
            <br />
            Trust &amp; Safety <em className="display-em mod">Moderation</em>
          </h1>
          <p className="hero-sub">
            Experienced in high-volume chat support, vendor operations, escalations,
            and content moderation — with a focus on staying clear, calm, and
            helpful under pressure.
          </p>
          <div className="hero-cta">
            <Link href="/#experience" className="btn btn-primary">
              View Experience
            </Link>
            <Link href="/resume" className="btn btn-secondary">
              Download Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          <div className="portrait-frame">
            <img
              className="portrait-photo"
              src="/images/haziel-nablo.png"
              alt="Portrait of Haziel Nablo"
              width={720}
              height={900}
            />
          </div>
          <p className="portrait-meta">
            <span className="status-dot" aria-hidden="true" />
            Open to Work · Davao City
          </p>
        </motion.div>
      </div>

      <div className="stats-rail">
        <div className="container stats-inner">
          <div className="stat">
            <span className="stat-value mono">
              <CountUp to={4} />
            </span>
            <span className="stat-label">Concurrent chats</span>
          </div>
          <div className="stat">
            <span className="stat-value mono accent">Top Agent &rsquo;23</span>
            <span className="stat-label">Ibex Global Solutions</span>
          </div>
          <div className="stat">
            <span className="stat-value mono accent">Chat Warrior &rsquo;23</span>
            <span className="stat-label">Ibex Global Solutions</span>
          </div>
          <div className="stat">
            <span className="stat-value mono mod">Threads moderation</span>
            <span className="stat-label">Conectys · Concentrix · &rsquo;24–&rsquo;26</span>
          </div>
        </div>
      </div>
    </section>
  );
}
