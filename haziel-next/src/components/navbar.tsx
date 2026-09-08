"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";

const LINKS = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#career", id: "career", label: "Career" },
  { href: "/#recognition", id: "recognition", label: "Honors" },
  { href: "/#why-hire", id: "why-hire", label: "Why Me" },
  { href: "/how-i-work", id: "how-i-work", label: "How I Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = LINKS.filter((l) => l.id !== "how-i-work")
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-fixed">
      <div style={{ width: "100%", maxWidth: 1040, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <nav className="nav-island" aria-label="Main navigation" style={{ maxWidth: "100%" }}>
          <Link href="/" className="nav-brand" aria-label="Haziel Nablo home">
            <span className="nav-monogram">HN</span>
            Haziel Nablo
          </Link>
          <div className="nav-links">
            {LINKS.map((l) => (
              <Link
                key={l.id}
                href={l.href}
                className={`nav-link${active === l.id ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <Link href="/#contact" className="btn btn-primary nav-cta">
              Get in Touch
            </Link>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-drawer-inner">
                {LINKS.map((l) => (
                  <Link key={l.id} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                ))}
                <Link href="/#contact" className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => setOpen(false)}>
                  Contact Haziel
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
