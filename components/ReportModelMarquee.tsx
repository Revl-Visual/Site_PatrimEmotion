"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TransitionEvent,
} from "react";

const N = 6;
const PAGES = [1, 2, 3, 4, 5, 6] as const;
const AUTO_MS = 5000;
/** Part du viewport pour la slide « principale » ; le reste montre le voisin (effet peek). */
const SLIDE_WIDTH_FRAC = 0.68;
const GAP_PX = 20;

const TRACK_START = N;
const CLONE_END = 2 * N;
/** Fond unique derrière `object-contain` : pas de bandes claires (elles ne font pas partie des PNG). */
const SLIDE_CANVAS = "#003662";

function rapportImageSrc(page: number) {
  return `/images/exemple_bilan/exemple_bilan_${page}.png`;
}

function RapportPageThumb({ page, active }: { page: number; active: boolean }) {
  return (
    <div
      className={[
        "relative mx-auto aspect-[993/746] w-full max-h-[70vh] max-w-xl overflow-hidden",
        active
          ? [
              "rounded-2xl opacity-100 scale-100",
              "border border-[#f4ca3a]/50 shadow-[0_22px_55px_-14px_rgba(0,0,0,0.45)]",
            ].join(" ")
          : [
              "rounded-[1.05rem] opacity-[0.52] scale-[0.84]",
              "border border-transparent shadow-none",
            ].join(" "),
      ].join(" ")}
      style={{
        backgroundColor: SLIDE_CANVAS,
        transitionProperty: "opacity, transform, box-shadow, border-color",
        transitionDuration: "0.4s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      <Image
        src={rapportImageSrc(page)}
        alt={`Extrait du modèle de bilan PatrimEmotion, page ${page} sur ${N}`}
        fill
        className={["object-contain object-center", active ? "" : "brightness-[0.94] contrast-[1.02]"].join(" ")}
        style={{ backgroundColor: SLIDE_CANVAS }}
        sizes="(max-width: 768px) 75vw, 560px"
        quality={92}
        priority={page === 1}
      />
    </div>
  );
}

export default function ReportModelMarquee() {
  const [trackIndex, setTrackIndex] = useState(TRACK_START);
  const [viewportW, setViewportW] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [motionOn, setMotionOn] = useState(true);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackIndexRef = useRef(trackIndex);

  const slideW = viewportW > 0 ? viewportW * SLIDE_WIDTH_FRAC : 0;
  const step = slideW + GAP_PX;
  const translateX =
    viewportW > 0 ? viewportW / 2 - trackIndex * step - slideW / 2 : 0;

  const syncWidth = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    setViewportW(el.clientWidth);
  }, []);

  useLayoutEffect(() => {
    trackIndexRef.current = trackIndex;
  }, [trackIndex]);

  useLayoutEffect(() => {
    syncWidth();
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => syncWidth());
    ro.observe(el);
    return () => ro.disconnect();
  }, [syncWidth]);

  const jumpTo = useCallback((index: number) => {
    setMotionOn(false);
    setTrackIndex(index);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMotionOn(true));
    });
  }, []);

  const goNext = useCallback(() => {
    setAutoPlay(false);
    setTrackIndex((i) => {
      if (i >= CLONE_END) return i;
      if (i === CLONE_END - 1) return CLONE_END;
      return i + 1;
    });
  }, []);

  const goPrev = useCallback(() => {
    setAutoPlay(false);
    setTrackIndex((i) => {
      if (i < TRACK_START) return i;
      if (i === TRACK_START) return N - 1;
      return i - 1;
    });
  }, []);

  const onTrackTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
      const i = trackIndexRef.current;
      if (i === CLONE_END) jumpTo(TRACK_START);
      else if (i === N - 1) jumpTo(2 * N - 1);
    },
    [jumpTo]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) setAutoPlay(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setTrackIndex((i) => {
        if (i < TRACK_START || i >= CLONE_END) return i;
        if (i === CLONE_END - 1) return CLONE_END;
        return i + 1;
      });
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [autoPlay]);

  const onScrollerKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext]
  );

  const logical = logicalIndex(trackIndex);
  const trackSlides = 3 * N;

  return (
    <div id="modele-rapport" className="relative z-10 mt-14 md:mt-16 w-full scroll-mt-24">
      <h3 className="pe-heading-card mb-8 md:mb-10 w-full rounded-2xl bg-[#9fb620] px-5 py-3.5 text-center tracking-tight text-white md:px-8 md:py-4">
        Modèle de rapport
      </h3>

      <div
        className="relative w-full rounded-xl"
        role="region"
        aria-roledescription="carousel"
        aria-label="Aperçu du modèle de rapport PatrimEmotion, six pages"
      >
        <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-md shadow-black/20 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ca3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003662] sm:h-12 sm:w-12"
            aria-label="Image précédente"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={viewportRef}
            tabIndex={0}
            onKeyDown={onScrollerKeyDown}
            className="relative isolate min-w-0 overflow-hidden rounded-xl py-1 outline-none focus-visible:ring-2 focus-visible:ring-[#f4ca3a]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003662]"
            style={{ backgroundColor: SLIDE_CANVAS }}
          >
            {/* Couvre toute la zone peek (pas seulement le bord) pour fondre au bleu section */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[min(32%,9rem)] bg-gradient-to-r from-[#003662] via-[#003662]/80 via-45% to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[min(32%,9rem)] bg-gradient-to-l from-[#003662] via-[#003662]/80 via-45% to-transparent"
              aria-hidden
            />

            <div
              role="presentation"
              className="flex flex-nowrap"
              style={{
                gap: GAP_PX,
                backgroundColor: SLIDE_CANVAS,
                transform: `translateX(${translateX}px)`,
                transitionProperty: motionOn ? "transform" : "none",
                transitionDuration: motionOn ? "0.45s" : "0s",
                transitionTimingFunction: motionOn ? "cubic-bezier(0.25, 0.1, 0.25, 1)" : "linear",
                willChange: "transform",
              }}
              onTransitionEnd={onTrackTransitionEnd}
            >
              {Array.from({ length: trackSlides }, (_, i) => {
                const page = PAGES[i % N];
                return (
                  <div
                    key={`${i}-${page}`}
                    className="shrink-0 self-stretch"
                    style={{
                      width: slideW > 0 ? `${slideW}px` : `${SLIDE_WIDTH_FRAC * 100}%`,
                      backgroundColor: SLIDE_CANVAS,
                    }}
                    aria-hidden={i !== trackIndex}
                  >
                    <RapportPageThumb page={page} active={i === trackIndex} />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-md shadow-black/20 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ca3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003662] sm:h-12 sm:w-12"
            aria-label="Image suivante"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="mt-5 text-center text-sm tabular-nums tracking-wide text-white/55">
          <span aria-live="polite">
            {logical + 1} / {N}
          </span>
          {!autoPlay ? (
            <span className="sr-only">
              Défilement automatique désactivé jusqu&apos;au prochain chargement de la page.
            </span>
          ) : null}
        </p>
      </div>

      <p className="sr-only">
        Carrousel en boucle de six extraits du modèle de bilan. Flèches ou touches gauche et droite ; le défilement
        automatique s&apos;arrête après une action manuelle.
      </p>
    </div>
  );
}

function logicalIndex(trackIndex: number) {
  return trackIndex % N;
}
