"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";

const LINKS = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#career", id: "career", label: "Career" },
  { href: "/#why-hire", id: "why-hire", label: "Why Hire" },
  { href: "/#recognition", id: "recognition", label: "Honors" },
  { href: "/how-i-work", id: "how-i-work", label: "How I Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const effectiveActive = pathname === "/how-i-work" ? "how-i-work" : active;

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
    <header className="nav-bar">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" aria-label="Haziel Nablo home">
          <img src="/logo-hn-sm.svg" alt="" width={30} height={30} className="nav-logo" />
          Haziel Nablo
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={`nav-link${effectiveActive === l.id ? " active" : ""}`}
              aria-current={effectiveActive === l.id ? "true" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

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
            aria-controls="mobile-nav"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-drawer-inner">
              {LINKS.map((l) => (
                <Link key={l.id} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link href="/#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Contact Haziel
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
