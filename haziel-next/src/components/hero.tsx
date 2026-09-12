"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SplitText from "@/components/bits/split-text";
import ShinyText from "@/components/bits/shiny-text";
import CountUp from "@/components/bits/count-up";
import StarButton from "@/components/bits/star-button";
import ProfileCard from "@/components/bits/profile-card";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const prefersReduced = useReducedMotion();

  function scrollToContact() {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  }

  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="hero-name">
            <ShinyText text="HAZIEL NABLO" />
          </p>
          <span className="eyebrow mono">Customer Service & Content Moderation</span>
          <h1 className="hero-title">
            <SplitText text="Customer Support &" delay={0.15} />
            <br />
            <SplitText text="Trust & Safety Moderation" delay={0.3} />
          </h1>
          <p className="hero-sub">
            Experienced in high-volume chat support, vendor operations, escalations,
            and content moderation — with a focus on staying clear, calm, and
            helpful under pressure.
          </p>
          <div className="hero-cta">
            <StarButton href="/#experience">View Experience</StarButton>
            <Link href="/resume" className="btn btn-secondary">
              Download Resume
            </Link>
          </div>
          <div className="proof-row">
            <div className="proof-item">
              <span className="proof-value mono">
                <CountUp to={4} />
              </span>
              <span className="proof-label">Concurrent chats</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-value mono accent">Top Agent &rsquo;23</span>
              <span className="proof-label">Ibex Global Solutions</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-value mono accent">Chat Warrior &rsquo;23</span>
              <span className="proof-label">Ibex Global Solutions</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-value mono violet">Threads moderation</span>
              <span className="proof-label">Conectys · Concentrix · &rsquo;24–&rsquo;26</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          <div className="float-card float-left">
            <div className="fc-value mono">4 concurrent</div>
            <div className="fc-label">Live chats</div>
          </div>
          <div className="float-card float-right">
            <div className="fc-value mono">Top Agent</div>
            <div className="fc-label">Ibex · 2023</div>
          </div>
          <ProfileCard
            name="Haziel Nablo"
            title="Customer Service & Content Moderation"
            handle="hazielnablo"
            status="Open to Work · Davao City"
            contactText="Contact Me"
            avatarUrl="/images/haziel-nablo.png"
            showUserInfo
            enableTilt={!prefersReduced}
            enableMobileTilt={false}
            onContactClick={scrollToContact}
            behindGlowEnabled
            behindGlowColor="rgba(132, 204, 22, 0.35)"
            iconUrl=""
            grainUrl=""
            innerGradient="linear-gradient(145deg, rgba(17,17,17,0.55) 0%, rgba(132,204,22,0.16) 100%)"
            className="profile-card"
          />
        </motion.div>
      </div>
    </section>
  );
}
