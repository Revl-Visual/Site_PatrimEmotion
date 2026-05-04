import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Zone cliquable + icône : aligné sur le CTA « Approche scientifique » (home).
 * La typographie (text-base, text-sm, etc.) reste sur `className` si besoin.
 */
export const ctaButtonBaseClass =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-200";

export type CtaButtonVariant =
  | "yellow"
  | "yellow-elevated"
  | "blue"
  | "blue-accent"
  | "green"
  | "green-dark-text"
  | "white"
  | "white-muted"
  | "dark"
  | "blue-navy"
  | "outline-navy"
  | "ghost-on-blue";

const variantClass: Record<CtaButtonVariant, string> = {
  yellow:
    "bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] shadow-md hover:shadow-lg hover:scale-[1.02]",
  "yellow-elevated":
    "bg-[#f4ca3a] hover:bg-[#f5d055] text-[#003662] shadow-lg shadow-[#f4ca3a]/25 hover:shadow-xl hover:shadow-[#f4ca3a]/30 hover:scale-[1.02]",
  blue:
    "bg-[#003662] hover:bg-[#004a7a] text-white shadow-md shadow-[#003662]/15 hover:shadow-lg hover:scale-[1.02]",
  "blue-accent":
    "bg-[#003662] hover:bg-[#004a85] text-[#f4ca3a] shadow-lg shadow-[#003662]/25 hover:shadow-xl hover:shadow-[#003662]/30 hover:scale-[1.02]",
  green:
    "bg-[#9FB620] hover:bg-[#a8c025] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]",
  "green-dark-text":
    "bg-[#9FB620] hover:bg-[#a8c025] text-[#003662] shadow-md transition-colors hover:bg-[#a8c025]",
  white:
    "bg-white text-[#003662] hover:bg-white/95 shadow-lg hover:scale-[1.02]",
  "white-muted":
    "bg-white/90 hover:bg-white text-[#003662] hover:scale-[1.02]",
  dark:
    "bg-[#1a1a1a] text-white transition-colors hover:bg-[#2a2a2a]",
  "blue-navy":
    "bg-[#003662] text-white transition-colors hover:bg-[#002a4a]",
  "outline-navy":
    "border-2 border-[#003662] bg-[#003662] hover:bg-[#002a4a] text-white transition-all",
  "ghost-on-blue":
    "bg-white/15 hover:bg-white/25 text-white border border-white/35 shadow-lg hover:shadow-xl hover:scale-[1.02]",
};

export type CtaButtonProps = {
  href: string;
  variant: CtaButtonVariant;
  className?: string;
  /** Pleine largeur (ex. encart sticky), conserve px-6 py-3.5 */
  fullWidth?: boolean;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

function mergeClass(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

export function CtaButton({
  href,
  variant,
  className,
  fullWidth,
  children,
  ...rest
}: CtaButtonProps) {
  const base = fullWidth
    ? "inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-200"
    : ctaButtonBaseClass;
  const cls = mergeClass(base, variantClass[variant], className);
  const external =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
