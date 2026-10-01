"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";

/** Full-screen photo viewer with previous/next, download and close. */
export default function Lightbox({
  images,
  index,
  onChange,
}: {
  images: GalleryImage[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const open = index !== null && images[index] !== undefined;
  const img = open ? images[index!] : null;
  const many = images.length > 1;

  const prev = () => index !== null && onChange((index - 1 + images.length) % images.length);
  const next = () => index !== null && onChange((index + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index]);

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#1B2A4A]";

  return (
    <AnimatePresence>
      {open && img && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0A0B0E]/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => onChange(null)}
        >
          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-5" onClick={(e) => e.stopPropagation()}>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-[13px] text-white/85 backdrop-blur-md">
              {index! + 1} / {images.length}
              {img.category && <span className="text-white/55"> · {img.category}</span>}
            </span>
            <div className="flex items-center gap-2">
              <a href={img.download} download className={btn} aria-label="Download photo" title="Download">
                <Download size={18} />
              </a>
              <button onClick={() => onChange(null)} className={btn} aria-label="Close" title="Close">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] max-w-[92vw] select-none rounded-lg object-contain shadow-2xl"
              draggable={false}
            />
          </AnimatePresence>

          {/* Prev / next */}
          {many && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className={`${btn} absolute left-3 top-1/2 -translate-y-1/2 sm:left-6`}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className={`${btn} absolute right-3 top-1/2 -translate-y-1/2 sm:right-6`}
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
