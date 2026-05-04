import type { ReactNode } from "react";

type CtaRowLayout = "single" | "split";

export type CtaRowProps = {
  children: ReactNode;
  /** `split` : plusieurs CTA (pile mobile, ligne desktop), même gap qu’en bas de home */
  layout?: CtaRowLayout;
  /** `section` : marge au-dessus comme le CTA « Approche scientifique » (home). `none` : pas de marge (ex. hero). */
  spacing?: "section" | "none";
  className?: string;
};

/**
 * Conteneur d’alignement pour CTA ; avec `spacing="section"`, marge verticale alignée sur « Approche scientifique » (home).
 */
export function CtaRow({
  children,
  layout = "single",
  spacing = "section",
  className,
}: CtaRowProps) {
  const top = spacing === "section" ? "mt-10 md:mt-12" : "";
  const flow =
    layout === "split"
      ? "flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
      : "flex justify-center";
  const cls = [top, flow, className].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  return <div className={cls}>{children}</div>;
}
