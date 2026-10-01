"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export interface ResultItem {
  title: string;
  image: string;
  subtitle?: string;
  href?: string;
  /** CSS object-position for the photo */
  position?: string;
}

const AUTOPLAY_MS = 3000;

/** Single-row results carousel: auto-advances one card, with dot navigation. */
export default function ResultsCarousel({
  items,
  badge = "Before & after",
  portrait = false,
}: {
  items: ResultItem[];
  /** Small label above each title; pass null to hide */
  badge?: string | null;
  /** 3:4 portrait cards instead of squares */
  portrait?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const inView = useInView(track, { margin: "100px 0px" });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const step = () => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return 1;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    return card.offsetWidth + gap;
  };

  const goTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.min(i * step(), max), behavior: "smooth" });
  }, []);

  // Track the active card from the scroll position
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      setIndex(atEnd ? items.length - 1 : Math.round(el.scrollLeft / step()));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  // Autoplay (loops back to the start), paused on hover/touch or reduced motion
  useEffect(() => {
    if (paused || !inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = track.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      goTo(atEnd ? 0 : index + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, inView, index, goTo]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
    >
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] sm:gap-5 md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t) => (
          <Link key={t.image} href={t.href ?? "/transformation"} className="group w-[200px] shrink-0 snap-start sm:w-[240px]">
            <div className={`relative ${portrait ? "aspect-[3/4]" : "aspect-square"} overflow-hidden rounded-2xl bg-porcelain shadow-md shadow-ink/10 ring-1 ring-ink/[0.05] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-coral/40`}>
              <Image
                src={t.image}
                alt={badge ? `${t.title} — ${badge.toLowerCase()}` : t.title}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={t.position ? { objectPosition: t.position } : undefined}
              />
            </div>
            {badge && (
              <p className="mt-3 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-coral">
                <BadgeCheck size={12} /> {badge}
              </p>
            )}
            <h3 className={`${badge ? "mt-0.5" : "mt-3.5"} font-hero text-[14.5px] font-semibold leading-snug text-[#1B2A4A] transition-colors group-hover:text-coral`}>
              {t.title}
            </h3>
            {t.subtitle && <p className="mt-0.5 text-[12.5px] leading-snug text-ink-muted">{t.subtitle}</p>}
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-8 flex flex-wrap justify-center gap-1.5 px-6">
        {items.map((t, i) => (
          <button
            key={t.image}
            onClick={() => goTo(i)}
            aria-label={`Show ${t.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-coral" : "w-2 bg-[#1B2A4A]/15 hover:bg-[#1B2A4A]/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
