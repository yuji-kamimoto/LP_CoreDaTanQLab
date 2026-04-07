import Link from "next/link";

type SectionDetailLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionDetailLink({
  href,
  children,
  className = "",
}: SectionDetailLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent/40 bg-surface px-6 py-3 text-sm font-bold tracking-wide text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
