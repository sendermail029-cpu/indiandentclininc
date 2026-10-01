import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ClinicMoments from "@/components/gallery/ClinicMoments";
import HeroSlideshow, { type Slide } from "@/components/gallery/HeroSlideshow";
import { clinic } from "@/lib/content";
import { getGallery } from "@/lib/gallery";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

// Re-read uploaded photos on every visit so new ones appear without a rebuild
export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta({
  title: "Clinic Gallery",
  description:
    "Step inside Indian Dental & Cosmetology Clinic, Vijayawada — our treatment rooms, modern equipment, team and patient moments.",
  path: "/gallery",
  keywords: ["dental clinic photos Vijayawada","Indian Dental clinic gallery"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Gallery", path: "/gallery" }]);

// Background slideshow — real clinic photos, faces kept in frame
const SLIDES: Slide[] = [
  { src: "/indiandental (12).webp", alt: "Our clinic team", position: "center 30%" },
  { src: "/indiandental (14).webp", alt: "A skin treatment in progress at the clinic", position: "center 30%" },
  { src: "/indiandental (8).webp", alt: "Dr. Durga Prasad in the dental treatment room", position: "center 20%" },
  { src: "/treatments/skin/laser-treatments.webp", alt: "An advanced facial device treatment", position: "center 40%" },
];

export default async function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {/* Single full-width photo hero */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden pb-14 pt-28 sm:min-h-[440px] sm:pt-32 md:min-h-[500px] md:pb-14 md:pt-36">
        <HeroSlideshow slides={SLIDES} />
        <div className="absolute inset-0 z-10 bg-[#0F1A30]/65" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F1A30]/80 via-transparent to-[#0F1A30]/50" />

        <div className="container-x relative z-20 w-full text-center">
          <Reveal>
            <h1 className="mx-auto max-w-3xl font-hero text-[2.1rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-[3rem] md:text-[4rem]">
              <span className="font-accent text-[1.12em] italic tracking-normal">
                A look inside
              </span>{" "}
              <span className="font-semibold">
                our <span className="text-[#F4B48C]">clinic.</span>
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/80 sm:mt-5 sm:text-[16px]">
              Our facility, team and everyday moments — caring for smiles and
              skin in Vijayawada since {clinic.since}.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
              <a
                href="#moments"
                className="group flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-[14.5px] font-medium text-white shadow-lg shadow-coral/30 sm:px-6 sm:text-[15px] transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                View photos
                <ArrowDown
                  size={17}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[14.5px] text-white sm:px-6 sm:text-[15px] backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Visit the clinic
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ClinicMoments {...await getGallery()} />
    </>
  );
}
