import fs from "node:fs";
import BookButton from "@/components/booking/BookButton";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Ambulance,
  Bone,
  HeartPulse,
  ScanSearch,
  SlidersHorizontal,
  Scissors,
  Anchor,
  ArrowRight,
  Check,
  CircleDot,
  Crown,
  Droplet,
  Droplets,
  Eye,
  FlaskConical,
  Gem,
  Heart,
  Hourglass,
  Leaf,
  Sprout,
  Target,
  Paintbrush,
  ScanFace,
  ScanLine,
  ShieldCheck,
  Smile,
  Snowflake,
  Sparkles,
  Stethoscope,
  Sun,
  SunDim,
  Syringe,
  Wand,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { dentalTreatments, hairTreatments, skinTreatments } from "@/lib/content";

const DATA = { dental: dentalTreatments, skin: skinTreatments, hair: hairTreatments };
export type TreatmentCategory = keyof typeof DATA;

const ICONS: Record<string, LucideIcon> = {
  // Dental
  "laser-dentistry": Zap,
  implantology: Anchor,
  "zirconia-crowns": Crown,
  "zoom-whitening": Sparkles,
  "root-canal": Activity,
  "digital-xray": ScanLine,
  dentures: Smile,
  "wisdom-tooth": Stethoscope,
  "scaling-polishing": Droplets,
  sterilization: ShieldCheck,
  "tooth-fillings": Paintbrush,
  braces: SlidersHorizontal,
  "gum-surgery": HeartPulse,
  "tooth-extraction": Scissors,
  "oral-cancer": ScanSearch,
  "tmj-disorders": Bone,
  "jaw-fracture": Ambulance,
  // Skin
  "acne-scars": ScanFace,
  "chemical-peels": FlaskConical,
  "anti-aging": Hourglass,
  "laser-treatments": Zap,
  "sun-tan": Sun,
  melasma: SunDim,
  "dark-circles": Eye,
  "botox-fillers": Syringe,
  dermaplaning: Wand,
  "permanent-makeup": Paintbrush,
  cryolipolysis: Snowflake,
  lipocavitation: Waves,
  "double-chin": Smile,
  "warts-moles": CircleDot,
  "iv-gluta": Droplet,
  "pre-bridal": Heart,
  "ear-piercing": Gem,
  // Hair
  "laser-hair-reduction": Zap,
  "hair-loss": Sprout,
  "hair-transplant": Leaf,
  electrolysis: Target,
};

/**
 * Images live at public/treatments/<category>/<slug>.jpg (or .jpeg / .png / .webp).
 * A treatment without a file gets a soft gradient panel instead.
 */
function findImage(category: TreatmentCategory, slug: string) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const rel = `/treatments/${category}/${slug}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

// Horizontal cards, 2 per row: photo left, details right
export default function TreatmentCards({
  category,
  layout = "horizontal",
}: {
  category: TreatmentCategory;
  /**
   * "horizontal": 2 per row, photo left (dental).
   * "tiles": 3 per row, photo on top (skin).
   * "feature": large 2×2 photo cards with text over the photo (hair).
   */
  layout?: "horizontal" | "tiles" | "feature";
}) {
  if (layout === "tiles") return <TileCards category={category} />;
  if (layout === "feature") return <FeatureCards category={category} />;

  return (
    <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
      {DATA[category].map((t, i) => {
        const Icon = ICONS[t.slug] ?? Sparkles;
        const image = findImage(category, t.slug);
        // Checkerboard: accents alternate across and down the 2-col grid
        const blue = (Math.floor(i / 2) + i) % 2 === 1;
        const accent = blue ? "text-[#2B5CAB]" : "text-coral";
        const accentSoft = blue ? "bg-[#2B5CAB]/10" : "bg-coral/10";

        return (
          <Reveal key={t.slug} delay={(i % 2) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_2px_20px_rgba(27,42,74,0.06)] ring-1 ring-ink/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(27,42,74,0.12)] sm:flex-row">
              {/* Photo */}
              <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-[#1B2A4A] sm:aspect-auto sm:min-h-[260px] sm:w-[42%]">
                {image ? (
                  <>
                    {/* Blurred copy fills the frame; the full photo sits on top uncropped */}
                    <Image
                      src={image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="40px"
                      className="scale-110 object-cover opacity-70 blur-2xl"
                    />
                    <Image
                      src={image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </>
                ) : (
                  <div className="h-full bg-gradient-to-br from-[#FBEDE4] to-[#E7EEF9]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span
                  className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 shadow-md backdrop-blur ${accent}`}
                >
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <span className="absolute bottom-4 left-4 font-hero text-[13px] font-semibold tracking-wide text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
                <h3 className="font-hero text-[19px] font-semibold leading-snug sm:text-[21px] tracking-[-0.01em] text-[#1B2A4A]">
                  {t.name}
                </h3>
                <p className={`mt-1.5 text-[13.5px] font-medium leading-snug ${accent}`}>
                  {t.detail}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                  {t.description}
                </p>

                <ul className="mb-5 mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {t.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#1B2A4A]/80"
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${accentSoft}`}
                      >
                        <Check size={10} strokeWidth={3.2} className={accent} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-ink/[0.07] pt-4">
                  <BookButton department={category} treatment={t.name}
                    className={`inline-flex items-center gap-1.5 text-[13.5px] font-semibold ${accent}`}
                  >
                    Book this treatment
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </BookButton>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

// Tiles, 3 per row: tall photo with the name printed on it, details below
function TileCards({ category }: { category: TreatmentCategory }) {
  return (
    <div className="mt-8 grid gap-x-5 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
      {DATA[category].map((t, i) => {
        const Icon = ICONS[t.slug] ?? Sparkles;
        const image = findImage(category, t.slug);

        return (
          <Reveal key={t.slug} delay={(i % 3) * 0.07}>
            <article className="group flex h-full flex-col">
              {/* Photo with title overlay */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#1B2A4A] shadow-lg shadow-ink/10">
                {image ? (
                  <>
                    {/* Blurred copy fills the frame; the full photo sits on top uncropped */}
                    <Image
                      src={image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="40px"
                      className="scale-110 object-cover opacity-70 blur-2xl"
                    />
                    <Image
                      src={image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </>
                ) : (
                  <div className="h-full bg-gradient-to-br from-[#F8E1D6] to-[#F3E6F0]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/25 to-transparent" />

                <span className="absolute right-4 top-4 rounded-full bg-white/20 px-2.5 py-0.5 font-hero text-[12px] font-semibold text-white ring-1 ring-white/30 backdrop-blur-md">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coral text-white shadow-lg shadow-coral/40">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="font-hero text-lg font-semibold leading-snug text-white md:text-[19px]">
                    {t.name}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col px-1 pt-5">
                <p className="text-[14px] font-medium leading-snug text-coral">
                  {t.detail}
                </p>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                  {t.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {t.benefits.map((b) => (
                    <li
                      key={b}
                      className="rounded-full bg-coral/[0.08] px-3 py-1 text-[12px] font-medium text-[#1B2A4A]/80"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <BookButton department={category} treatment={t.name}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13.5px] font-semibold text-[#1B2A4A] transition-colors hover:text-coral"
                >
                  Book this treatment
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </BookButton>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

// Feature cards, 2×2: clean white cards — photo on top, details below (hair)
function FeatureCards({ category }: { category: TreatmentCategory }) {
  return (
    <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:gap-8">
      {DATA[category].map((t, i) => {
        const Icon = ICONS[t.slug] ?? Sparkles;
        const image = findImage(category, t.slug);

        return (
          <Reveal key={t.slug} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_2px_20px_rgba(27,42,74,0.06)] ring-1 ring-ink/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-15px_rgba(47,122,91,0.25)]">
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1F5A42]">
                {image ? (
                  <>
                    {/* Blurred copy fills the frame; the full photo sits on top uncropped */}
                    <Image
                      src={image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="40px"
                      className="scale-110 object-cover opacity-70 blur-2xl"
                    />
                    <Image
                      src={image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </>
                ) : (
                  <div className="h-full bg-gradient-to-br from-[#2F7A5B] to-[#1F5A42]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E]/35 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 font-hero text-[12px] font-semibold text-[#1B2A4A] backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Details */}
              <div className="relative flex flex-1 flex-col p-6 pt-9 sm:p-8 sm:pt-10">
                {/* Icon overlapping the photo edge */}
                <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F7A5B] text-white shadow-lg shadow-[#2F7A5B]/30 ring-4 ring-white sm:left-8">
                  <Icon size={24} strokeWidth={1.8} />
                </span>

                <h3 className="font-hero text-[1.35rem] font-semibold leading-snug tracking-[-0.01em] text-[#1B2A4A] sm:text-2xl">
                  {t.name}
                </h3>
                <p className="mt-1.5 text-[14px] font-medium text-[#2F7A5B]">{t.detail}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">{t.description}</p>

                <ul className="mb-6 mt-5 flex flex-wrap gap-2">
                  {t.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-1.5 rounded-full bg-[#2F7A5B]/[0.08] px-3 py-1.5 text-[12.5px] font-medium text-[#1F5A42]"
                    >
                      <Check size={12} strokeWidth={3} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-ink/[0.07] pt-5">
                  <BookButton
                    department={category}
                    treatment={t.name}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-coral transition-colors hover:text-coral-dark"
                  >
                    Book this treatment
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </BookButton>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
