// Adapted from React Bits (https://reactbits.dev — ShinyText, MIT-licensed).
// Pure CSS shine sweep; colors come from the dual-theme tokens in globals.css.

export default function ShinyText({ text, className = "" }: { text: string; className?: string }) {
  return <span className={`shiny-text ${className}`}>{text}</span>;
}
