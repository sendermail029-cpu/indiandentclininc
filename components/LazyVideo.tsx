"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted looping background video that only downloads when it comes near the
 * screen, and pauses while off-screen. Keeps first page load light.
 */
export default function LazyVideo({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      className={className}
    />
  );
}
