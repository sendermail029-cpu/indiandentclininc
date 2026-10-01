"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon, Maximize2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/gallery/Lightbox";
import type { GalleryImage } from "@/lib/gallery";

const ALL = "All";

export default function ClinicMoments({
  images,
  categories,
}: {
  images: GalleryImage[];
  categories: string[];
}) {
  const [active, setActive] = useState(ALL);
  const [viewing, setViewing] = useState<number | null>(null);

  // Only show categories that actually have photos
  const tabs = useMemo(
    () => [ALL, ...categories.filter((c) => images.some((i) => i.category === c))],
    [categories, images]
  );
  const shown = active === ALL ? images : images.filter((i) => i.category === active);

  return (
    <section id="moments" className="scroll-mt-24 bg-white pb-16 pt-10 md:pb-24 md:pt-12">
      <div className="container-x">
        {/* Category filter — All first, then categories that have photos */}
        {images.length > 0 && (
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden">
            {tabs.map((t) => {
              const count = t === ALL ? images.length : images.filter((i) => i.category === t).length;
              const on = t === active;
              return (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-medium transition-all ${
                    on
                      ? "bg-coral text-white shadow-lg shadow-coral/25"
                      : "border border-ink/10 bg-white text-[#1B2A4A] hover:border-coral/50 hover:text-coral"
                  }`}
                >
                  {t}
                  <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-white/25" : "bg-porcelain text-ink-muted"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {images.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-ink/10 bg-porcelain/50 px-6 py-14 text-center sm:py-20">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-coral shadow-md">
                <ImageIcon size={28} strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-hero text-xl font-semibold text-[#1B2A4A]">No images yet</h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-muted">
                Photos from our clinic will appear here soon.
              </p>
            </div>
          </Reveal>
        ) : (
          // Masonry-style columns keep each photo's natural shape
          <div className="mt-6 columns-2 gap-4 md:mt-8 md:columns-3 md:gap-5 lg:columns-4">
            <AnimatePresence mode="popLayout">
              {shown.map((img, i) => (
                <motion.button
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setViewing(i)}
                  className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-porcelain shadow-sm md:mb-5"
                  aria-label="View photo"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width ?? 800}
                    height={img.height ?? 800}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-[#0A0B0E]/0 transition-colors group-hover:bg-[#0A0B0E]/35">
                    <span className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/95 text-[#1B2A4A] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <Maximize2 size={18} />
                    </span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <Lightbox images={shown} index={viewing} onChange={setViewing} />
    </section>
  );
}
