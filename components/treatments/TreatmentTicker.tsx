import { Sparkle } from "lucide-react";

/** Editorial single-line ribbon of treatment names. Pauses on hover. */
const THEMES = {
  navy: {
    band: "bg-[#0F1A30]",
    top: "via-coral/70",
    bottom: "via-[#F4B48C]/50",
    glow: "bg-[#2B5CAB]/25",
    text: "text-white/85",
    star: "fill-coral text-coral",
  },
  coral: {
    band: "bg-gradient-to-r from-coral-dark via-coral to-coral-dark",
    top: "via-[#F4B48C]",
    bottom: "via-white/60",
    glow: "bg-[#F4B48C]/30",
    text: "text-white",
    star: "fill-[#1B2A4A] text-[#1B2A4A]",
  },
  green: {
    band: "bg-gradient-to-r from-[#1F5A42] via-[#2F7A5B] to-[#1F5A42]",
    top: "via-[#F4B48C]/80",
    bottom: "via-white/50",
    glow: "bg-[#8FD3B4]/25",
    text: "text-white",
    star: "fill-[#F4B48C] text-[#F4B48C]",
  },
} as const;

export default function TreatmentTicker({
  items,
  theme = "navy",
  label = "Our dental treatments",
}: {
  items: string[];
  theme?: keyof typeof THEMES;
  label?: string;
}) {
  const loop = [...items, ...items];
  const t = THEMES[theme];

  return (
    <section
      aria-label={label}
      className={`group relative overflow-hidden py-3 sm:py-3.5 ${t.band}`}
    >
      {/* Glowing hairlines */}
      <span aria-hidden className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${t.top}`} />
      <span aria-hidden className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent ${t.bottom}`} />
      {/* Soft centre glow */}
      <span aria-hidden className={`pointer-events-none absolute left-1/2 top-1/2 h-12 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${t.glow}`} />

      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: `${items.length * 4.5}s` }}
        >
          {loop.map((name, i) => (
            <span key={i} aria-hidden={i >= items.length} className="flex shrink-0 items-center">
              <span className={`font-sans text-[12.5px] font-semibold uppercase leading-none tracking-[0.18em] sm:text-[13.5px] ${t.text}`}>
                {name}
              </span>
              <Sparkle aria-hidden size={11} className={`mx-5 shrink-0 sm:mx-7 ${t.star}`} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
