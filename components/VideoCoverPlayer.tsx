"use client";

import { useRef, useState } from "react";

type VideoCoverPlayerProps = {
  src: string;
  ariaLabel: string;
};

export default function VideoCoverPlayer({ src, ariaLabel }: VideoCoverPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
    } catch {
      // Autoplay restrictions may block programmatic play until user gesture.
    }
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover scale-[1.06]"
        controls
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de cette video.
      </video>

      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={handlePlayClick}
            className="pointer-events-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#003662]/80 text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            aria-label="Lire la video"
          >
            <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
