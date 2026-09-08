// Adapted from React Bits (https://reactbits.dev — StarBorder, MIT-licensed).
// A filled accent pill with a slow rotating 1px accent edge. Used sparingly:
// primary CTAs only. Degrades to a plain pill where @property is unsupported.

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function StarButton({ href, children }: Props) {
  return (
    <Link href={href} className="star-btn">
      <span className="star-btn-inner">{children}</span>
    </Link>
  );
}
