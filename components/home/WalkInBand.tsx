import { MessageCircle, Phone } from "lucide-react";
import Aos from "@/components/Aos";
import WireTerrain from "@/components/WireTerrain";
import { clinic } from "@/lib/content";

/** Closing band: animated wire terrain in the footer's charcoal, above the footer. */
export default function WalkInBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0B0E] text-white">
      <WireTerrain
        background="#0A0B0E"
        lineColor="#C1652E"
        accent="#F4B48C"
        density={70}
        speed={40}
        relief={230}
        dotSize={80}
        className="-z-10"
        style={{ position: "absolute", inset: 0 }}
      />
      {/* Soften the terrain behind the text */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,11,14,0.85)_0%,rgba(10,11,14,0.35)_55%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-[#0A0B0E] to-transparent" />

      <div className="container-x flex min-h-[460px] flex-col items-center justify-center py-20 text-center md:min-h-[520px]">
        <Aos effect="fade-down">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
            <span className="h-px w-8 bg-coral" />
            Open all days
            <span className="h-px w-8 bg-coral" />
          </p>
        </Aos>
        <Aos effect="flip-up" delay={0.15}>
          <h2 className="mt-5 font-hero text-[2.3rem] leading-[1.08] tracking-[-0.02em] md:text-[3.4rem]">
            <span className="font-accent text-[1.12em] italic tracking-normal">Walk in</span>{" "}
            <span className="font-semibold">
              any <span className="text-coral">day.</span>
            </span>
          </h2>
        </Aos>
        <Aos effect="fade-up" delay={0.3}>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/70">
            {clinic.timings}. No long waits — just caring, expert treatment.
          </p>
        </Aos>
        <Aos effect="zoom-in" delay={0.45}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:+91${clinic.phones[0]}`}
              className="flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-medium text-white shadow-lg shadow-coral/30 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              <Phone size={17} /> Call {clinic.phones[0]}
            </a>
            <a
              href={`https://wa.me/91${clinic.phones[0]}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-[15px] text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]"
            >
              <MessageCircle size={17} /> WhatsApp us
            </a>
          </div>
        </Aos>
      </div>
    </section>
  );
}
