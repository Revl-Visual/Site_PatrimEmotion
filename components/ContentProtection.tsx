"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function isStudioPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === "/studio" || pathname.startsWith("/studio/");
}

function isFormFieldTarget(node: EventTarget | null): boolean {
  return node instanceof Element && !!node.closest("input, textarea, select, [contenteditable='true']");
}

/**
 * Désactive sélection / copie / clic droit / glisser-déposer des images sur le site public.
 * Désactivé sur /studio pour ne pas bloquer Sanity.
 * Limitation : pas une sécurité absolue (réseau, outils dev, captures d’écran).
 */
export default function ContentProtection() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("pe-protect-content", !isStudioPath(pathname));
  }, [pathname]);

  useEffect(() => {
    if (isStudioPath(pathname)) return;

    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      if (isFormFieldTarget(e.target)) return;
      e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (isFormFieldTarget(e.target)) return;
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const t = e.target;
      if (t instanceof HTMLImageElement) {
        e.preventDefault();
        return;
      }
      if (t instanceof Element && t.closest("picture")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopy);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("dragstart", onDragStart, true);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("dragstart", onDragStart, true);
    };
  }, [pathname]);

  return null;
}
