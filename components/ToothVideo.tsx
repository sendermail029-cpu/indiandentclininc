"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A white-background clip blended into the page (tooth, skin, hair videos).
 * The clip's background is a light grey, so white gradients on every edge
 * fade the frame away and the subject appears to sit directly on the page.
 *
 * The *-loop.mp4 files are pre-trimmed (no dark frames at start/end),
 * audio-free, web-optimised (faststart, a keyframe every second), so the
 * browser's native `loop` plays them continuously with no JS seeking.
 */
const FADE_X = "linear-gradient(to right, transparent, #000 16%, #000 84%, transparent)";
const FADE_Y = "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)";
const SOFT_MASK: React.CSSProperties = {
  maskImage: `${FADE_X}, ${FADE_Y}`,
  WebkitMaskImage: `${FADE_X}, ${FADE_Y}`,
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

export default function ToothVideo({
  className = "",
  src = "/home1-loop.mp4",
  label = "Miniature team polishing a giant tooth on a dental implant",
  soft = false,
}: {
  className?: string;
  src?: string;
  label?: string;
  /** Fade the frame with a mask instead of white overlays (for tinted backgrounds) */
  soft?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let visible = true;
    const play = () => {
      if (v.paused && visible && !document.hidden) v.play().catch(() => {});
    };
    const onPlaying = () => setReady(true);

    // Only decode while on screen, so several videos don't compete
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else v.pause();
    });
    io.observe(v);

    v.addEventListener("playing", onPlaying);
    document.addEventListener("visibilitychange", play);
    if (!v.paused) setReady(true);
    play();

    return () => {
      io.disconnect();
      v.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={soft ? SOFT_MASK : undefined}>
      {/* Lift the grey backdrop toward white; multiply drops what's left */}
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
        className={`block aspect-video w-full object-cover ${soft ? "brightness-[1.15]" : "brightness-[1.12]"} contrast-[1.03] transition-opacity duration-500 ${
          soft ? "" : "bg-white mix-blend-multiply"
        } ${ready ? "opacity-100" : "opacity-0"}`}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Edge fades — hide the video frame without covering the subject */}
      {!soft && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[7%] bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[5%] bg-gradient-to-t from-white to-transparent" />
        </>
      )}
    </div>
  );
}
