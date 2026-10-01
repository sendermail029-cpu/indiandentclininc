"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Branded page-to-page transition. Internal link clicks are intercepted:
 * two curtains (coral, then cream) sweep up and the clinic logo animates in,
 * THEN we navigate; once the new page has rendered the curtains lift away.
 */
const COVER = 300; // curtains cover the screen before navigating (ms)
const HOLD = 80; // keep the logo on the new page briefly before revealing (ms)
const MAX_SHOW = 6000; // safety: never block the page longer than this

const ease = [0.76, 0, 0.24, 1] as const;

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const fromPath = useRef(pathname);
  const busy = useRef(false);
  const safety = useRef<number>();

  // Start the transition on internal link clicks to a different page
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page / hash link
      if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Take over from Next's <Link>: play the intro first, then navigate
      e.preventDefault();
      e.stopPropagation();
      if (busy.current) return;
      busy.current = true;
      const target = url.pathname + url.search + url.hash;
      router.prefetch(target);
      fromPath.current = window.location.pathname;
      setActive(true);
      window.setTimeout(() => router.push(target), COVER);
      window.clearTimeout(safety.current);
      safety.current = window.setTimeout(() => {
        busy.current = false;
        setActive(false);
      }, MAX_SHOW);
    };
    // Warm up the next page as soon as a link is hovered or touched, so it is
    // usually ready before the curtains have even finished covering
    const warmed = new Set<string>();
    const onHover = (e: Event) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api") || warmed.has(url.pathname)) return;
      warmed.add(url.pathname);
      router.prefetch(url.pathname);
    };
    // Capture phase on document runs before React's own handlers
    document.addEventListener("click", onClick, true);
    document.addEventListener("mouseover", onHover, { passive: true });
    document.addEventListener("touchstart", onHover, { passive: true });
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("touchstart", onHover);
    };
  }, [router]);

  // New page rendered → lift the curtains (after the minimum show time)
  useEffect(() => {
    if (!active || pathname === fromPath.current) return;
    const id = window.setTimeout(() => {
      window.clearTimeout(safety.current);
      busy.current = false;
      window.scrollTo(0, 0);
      setActive(false);
    }, HOLD);
    return () => window.clearTimeout(id);
  }, [pathname, active]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div key="page-transition" className="pointer-events-auto fixed inset-0 z-[100]" aria-hidden>
          {/* Coral curtain */}
          <motion.div
            className="absolute inset-0 bg-coral"
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { duration: 0.32, ease } }}
            exit={{ y: "-100%", transition: { duration: 0.38, ease, delay: 0.08 } }}
          />
          {/* Cream curtain with the logo */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#FBF6EF]"
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { duration: 0.32, ease, delay: 0.05 } }}
            exit={{ y: "-100%", transition: { duration: 0.38, ease } }}
          >
            <span aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#7DB8FF]/25 blur-[100px]" />
            <span aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-coral/20 blur-[100px]" />

            <motion.div
              className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 0.15, type: "spring", stiffness: 300, damping: 20 } }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            >
              {/* Spinning arc around the logo */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(193,101,46,0.15)" strokeWidth="2" />
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  fill="none"
                  stroke="#C1652E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="70 225"
                />
              </motion.svg>
              <motion.span
                className="relative h-[78%] w-[78%] overflow-hidden rounded-full bg-white shadow-[0_15px_40px_-12px_rgba(27,42,74,0.35)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/brand/logo.webp" alt="" fill sizes="144px" priority className="object-contain p-1" />
              </motion.span>
            </motion.div>

            <motion.p
              className="mt-6 text-center font-display text-[20px] text-ink sm:text-[22px]"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              Indian Dental <span className="font-accent italic text-coral">&amp; Cosmetology Clinic</span>
            </motion.p>
            <motion.p
              className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              Vijayawada · Since 2012
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
