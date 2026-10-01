"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Branded page-to-page transition. Internal link clicks are intercepted:
 * a plain white screen fades in with the clinic logo,
 * THEN we navigate; once the new page has rendered it fades away.
 */
const COVER = 220; // white screen covers the page before navigating (ms)
const HOLD = 80; // keep the logo on the new page briefly before revealing (ms)
const MAX_SHOW = 6000; // safety: never block the page longer than this

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
        <motion.div
          key="page-transition"
          aria-hidden
          className="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.22, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
        >
          {/* Logo only */}
          <motion.span
            className="relative block h-28 w-28 sm:h-32 sm:w-32"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            exit={{ scale: 1.08, opacity: 0, transition: { duration: 0.25 } }}
          >
            <motion.span
              className="relative block h-full w-full"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/brand/logo.webp" alt="" fill sizes="128px" priority className="object-contain" />
            </motion.span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
