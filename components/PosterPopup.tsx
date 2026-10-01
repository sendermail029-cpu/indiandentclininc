"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Poster {
  url: string;
  id: string;
}

const SEEN_KEY = "clinic-poster-seen";

/** Shows the newest admin-uploaded poster once per browser session. */
export default function PosterPopup() {
  const pathname = usePathname();
  const [poster, setPoster] = useState<Poster | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    let seen: string | null = null;
    try {
      seen = sessionStorage.getItem(SEEN_KEY);
    } catch {}

    let timer: ReturnType<typeof setTimeout>;
    fetch("/api/popup")
      .then((r) => r.json())
      .then((data: { poster: Poster | null }) => {
        if (!data.poster || seen === data.poster.id) return;
        setPoster(data.poster);
        timer = setTimeout(() => setOpen(true), 1500); // let the page settle first
      })
      .catch(() => {});
    return () => clearTimeout(timer);
    // only once per page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function close() {
    setOpen(false);
    try {
      if (poster) sessionStorage.setItem(SEEN_KEY, poster.id);
    } catch {}
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && poster && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Clinic announcement"
        >
          <div className="absolute inset-0 bg-[#0A0B0E]/70 backdrop-blur-sm" onClick={close} />
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1B2A4A] shadow-xl transition-colors hover:bg-coral hover:text-white"
            >
              <X size={18} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster.url}
              alt="Clinic announcement"
              className="block h-auto max-h-[88vh] w-auto max-w-[92vw] shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
