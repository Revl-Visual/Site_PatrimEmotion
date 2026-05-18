"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";

export type ProfilEmotionnelItem = {
  main: string;
  sub: string;
  def: string;
  image: string;
};

type Props = {
  profiles: readonly ProfilEmotionnelItem[];
};

export default function ProfilsFlipCards({ profiles }: Props) {
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {profiles.map((profile, i) => (
        <ProfilFlipCard key={`${profile.main}-${profile.sub}-${i}`} profile={profile} index={i} />
      ))}
    </div>
  );
}

function ProfilFlipCard({
  profile,
  index,
}: {
  profile: ProfilEmotionnelItem;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const label = `${profile.main} ${profile.sub}`;
  const baseId = useId();
  const descId = `${baseId}-def-${index}`;

  const toggle = useCallback(() => {
    setFlipped((f) => !f);
  }, []);

  return (
    <article className="mx-auto w-full max-w-[min(100%,280px)] sm:max-w-[240px]">
      <div className="[perspective:1200px]">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={flipped}
          aria-label={
            flipped
              ? `Retourner la carte — ${label}`
              : `Retourner la carte pour lire la définition — ${label}`
          }
          className={`relative aspect-square w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 outline-none transition-[transform] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-[#f4ca3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003662] ${
            flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
          } `}
        >
          {/* Recto — illustration */}
          <span
            className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20 bg-[#001a2e] shadow-[0_12px_28px_-8px_rgba(0,0,0,0.45)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(1px)]"
            aria-hidden={flipped}
          >
            <Image
              src={profile.image}
              alt={label}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 180px"
            />
          </span>

          {/* Verso — définition */}
          <span
            id={descId}
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-[#003662] px-3 py-4 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.55)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)]"
            aria-hidden={!flipped}
          >
            <span className="mx-auto max-h-full max-w-[100%] overflow-y-auto text-center text-balance font-sans text-[0.8125rem] font-normal italic leading-snug text-white sm:text-sm sm:leading-snug">
              {profile.def}
            </span>
          </span>
        </button>
      </div>
    </article>
  );
}
