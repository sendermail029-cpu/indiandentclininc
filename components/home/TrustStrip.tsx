import { Award, MapPin, ShieldCheck, Sparkle, Star, Stethoscope, Users, CalendarHeart } from "lucide-react";
import Aos from "@/components/Aos";
import CountUp from "@/components/CountUp";

const STATS = [
  { icon: Users, to: 15000, suffix: "+", label: "Happy patients" },
  { icon: Star, to: 1200, suffix: "+", label: "5-star Google reviews" },
  { icon: CalendarHeart, to: 14, suffix: "", label: "Years of trusted care" },
  { icon: MapPin, to: 4, suffix: "", label: "Branches in Vijayawada" },
];

const POINTS = [
  { icon: Stethoscope, label: "Dental laser & implant department" },
  { icon: Sparkle, label: "Advanced skin, hair & laser cosmetology" },
  { icon: ShieldCheck, label: "B-Class sterilization on every visit" },
  { icon: Award, label: "Internationally trained specialists" },
];

/** Animated trust numbers + key promises, right below the hero. */
export default function TrustStrip() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0A0B0E] via-ink to-ink-soft py-14 text-white md:py-16">
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-coral/25 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 -z-10 h-72 w-72 rounded-full bg-[#2B5CAB]/25 blur-[110px]" />

      <div className="container-x">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Aos
              key={s.label}
              effect="fade-up"
              delay={i * 0.1}
              className={`flex flex-col items-center px-3 text-center ${
                i % 2 === 0 ? "border-r border-white/10" : "lg:border-r lg:border-white/10"
              } ${i === 3 ? "lg:border-r-0" : ""}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/20 text-coral">
                <s.icon size={20} className={s.icon === Star ? "fill-coral" : ""} />
              </span>
              <p className="mt-4 font-hero text-[2.2rem] font-bold leading-none tracking-tight sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[12.5px] text-white/60 sm:text-sm">{s.label}</p>
            </Aos>
          ))}
        </div>

        <div className="mt-12 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Aos key={p.label} effect="fade-up" delay={0.2 + i * 0.07}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors hover:border-coral/40 hover:bg-white/[0.07]">
                <p.icon size={19} className="shrink-0 text-[#F4B48C]" />
                <span className="text-[13.5px] leading-snug text-white/85">{p.label}</span>
              </div>
            </Aos>
          ))}
        </div>
      </div>
    </section>
  );
}
