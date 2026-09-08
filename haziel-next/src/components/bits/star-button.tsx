// Project adapter over upstream React Bits StarBorder
// (src/components/bits/StarBorder.tsx). Keeps Next.js client-side navigation
// via Link and the dual-theme tokens; geometry tuned to the pill buttons.

import Link from "next/link";
import type { ReactNode } from "react";
import StarBorder from "@/components/bits/StarBorder";

type Props = {
  href: string;
  children: ReactNode;
};

export default function StarButton({ href, children }: Props) {
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
