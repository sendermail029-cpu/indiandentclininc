import BookButton from "@/components/booking/BookButton";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import LatticeFlight from "@/components/LatticeFlight";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink px-8 py-14 text-porcelain md:px-14 md:py-16">
            {/* Animated coral lattice, toned down for readability */}
            <LatticeFlight
              background="transparent"
              baseColor="#C1652E"
              density={200}
              thickness={7}
              fog={150}
              speed={18}
              interactive={false}
              className="-z-10"
              style={{ position: "absolute", inset: 0 }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold-light">
                  <span className="h-px w-8 bg-gold-light/60" />
                  We&apos;re here for you
                </p>
                <h2
                  className="mt-5 font-display leading-[1.08] tracking-tightest"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
                >
                  <span className="block text-3xl font-light md:text-5xl">
                    A gentle first visit,
                  </span>
                  <span className="mt-1 block text-3xl md:text-5xl">
                    <span className="font-accent italic text-coral">
                      unhurried
                    </span>{" "}
                    <span className="font-light">&amp; caring.</span>
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-porcelain/75">
                  We begin by listening to you — your concerns, your comfort
                  and your goals — before recommending any treatment. We would
                  be happy to welcome you.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <BookButton
                    className="flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-medium text-porcelain shadow-lg shadow-coral/25 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
                  >
                    <CalendarCheck size={17} /> Book an appointment
                  </BookButton>
                  <a
                    href={`https://wa.me/91${clinic.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-porcelain/25 bg-white/5 px-6 py-3.5 text-[15px] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <MessageCircle size={17} /> WhatsApp us
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <InfoTile icon={<Phone size={18} />} label="Call us">
                  {clinic.phones.map((p, i) => (
                    <span key={p}>
                      {i > 0 && <span className="text-porcelain/30"> · </span>}
                      <a href={`tel:+91${p}`} className="transition-colors hover:text-coral">
                        {p}
                      </a>
                    </span>
                  ))}
                </InfoTile>

                <InfoTile icon={<MapPin size={18} />} label="Visit us">
                  <span className="block">{clinic.address}</span>
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex items-center gap-1 text-[13px] text-coral"
                  >
                    Get directions
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </InfoTile>

                <InfoTile icon={<Clock size={18} />} label="Opening hours">
                  {clinic.timings}
                </InfoTile>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoTile({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-ink/40 p-5 backdrop-blur-[2px] transition-colors hover:border-white/20 hover:bg-ink/55">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.16em] text-porcelain/50">
          {label}
        </p>
        <div className="mt-1 text-[15px] leading-relaxed text-porcelain/90">
          {children}
        </div>
      </div>
    </div>
  );
}
