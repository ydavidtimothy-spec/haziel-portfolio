// Project adapter over upstream React Bits StarBorder
// (src/components/bits/StarBorder.tsx). Keeps Next.js client-side navigation
// via Link and the dual-theme tokens; geometry tuned to the pill buttons.

import Link from "next/link";
import type { ReactNode } from "react";
import StarBorder from "@/components/bits/StarBorder";

type Props = {
  href: string;
  children: ReactNode;
  /** Render a flat accent pill with no orbit (for secondary CTAs). */
  plain?: boolean;
};

export default function StarButton({ href, children, plain = false }: Props) {
  if (plain) {
    return (
      <Link href={href} className="btn btn-primary">
        {children}
      </Link>
    );
  }
  return (
    <StarBorder
      as={Link}
      href={href}
      className="star-btn"
      color="var(--accent)"
      speed="5s"
      thickness={2}
      backgroundColor="var(--accent)"
      textColor="var(--accent-ink)"
      borderColor="transparent"
    >
      {children}
    </StarBorder>
  );
}
