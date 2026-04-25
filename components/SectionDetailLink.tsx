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
      className={`group inline-flex min-h-[4.5rem] items-center justify-center gap-2 rounded-full border-2 border-accent/40 bg-surface px-8 py-4 text-base font-bold tracking-wide text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white md:px-10 md:text-lg ${className}`}
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
