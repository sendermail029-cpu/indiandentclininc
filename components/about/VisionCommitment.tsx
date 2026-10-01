import Image from "next/image";
import BookButton from "@/components/booking/BookButton";
import {
  ArrowUpRight,
  Cpu,
  Eye,
  HeartHandshake,
  History,
  MapPinned,
  TrendingUp,
  UserRound,
} from "lucide-react";
import Aos from "@/components/Aos";

const COMMITMENT = [
  { icon: History, label: "More than a decade of clinical journey" },
  { icon: MapPinned, label: "Multiple locations" },
  { icon: TrendingUp, label: "Continuous advancement" },
  { icon: Cpu, label: "Modern technology" },
  { icon: UserRound, label: "Patient-centred care" },
];

const PILLARS = ["Modern dentistry", "Aesthetic medicine", "Cosmetology", "Trichology"];

/** Light "Our vision" + "Our commitment" section. */
export default function VisionCommitment() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[460px] w-[460px] rounded-full bg-coral/[0.06] blur-[120px]" />

      <div className="container-x relative space-y-16 md:space-y-28">
        {/* ── Vision ── */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Aos effect="fade-right" className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[520px]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
                <Image
                  src="/indiandental (12).webp"
                  alt="The clinic team"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
              {/* 2012 → today chip */}
              <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 sm:left-6 sm:right-6 sm:px-5 sm:py-4 shadow-xl shadow-ink/10 sm:left-auto sm:right-8 sm:w-[340px]">
                <div className="text-center">
                  <p className="font-hero text-xl font-bold text-coral">2012</p>
                  <p className="text-[11px] text-ink-muted">One clinic</p>
                </div>
                <div className="relative h-px flex-1 bg-gradient-to-r from-coral to-[#2B5CAB]">
                  <span className="absolute -right-1 -top-1 h-2 w-2 rotate-45 border-r-2 border-t-2 border-[#2B5CAB]" />
                </div>
                <div className="text-center">
                  <p className="font-hero text-xl font-bold text-[#2B5CAB]">Today</p>
                  <p className="text-[11px] text-ink-muted">Multidisciplinary centre</p>
                </div>
              </div>
            </div>
          </Aos>

          <div className="order-1 lg:order-2">
            <Aos effect="pop">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Eye size={22} />
              </span>
            </Aos>
            <Aos effect="fade-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3rem]">
                <span className="font-accent text-[1.12em] italic tracking-normal">Our</span>{" "}
                <span className="font-semibold text-coral">vision.</span>
              </h2>
            </Aos>
            <Aos effect="fade-up" delay={0.15}>
              <p className="mt-5 text-[15px] leading-[1.8] text-ink-muted sm:text-[16px] sm:leading-[1.85]">
                From a single dental clinic in Chittinagar in 2012 to a
                multidisciplinary Dental, Cosmetology and Trichology centre, our
                journey has been built on continuous learning, professional
                development, technological advancement and — most importantly —
                the trust of our patients.
              </p>
            </Aos>
            <Aos effect="fade-up" delay={0.2}>
              <div className="mt-6 rounded-2xl border-l-4 border-coral bg-porcelain/70 p-5">
                <p className="text-[15.5px] leading-relaxed text-[#1B2A4A]">
                  To bring together modern dentistry, aesthetic medicine,
                  cosmetology and trichology in one centre — providing
                  comprehensive care in a professional, comfortable and
                  patient-focused environment.
                </p>
              </div>
            </Aos>
            <div className="mt-6 flex flex-wrap gap-2">
              {PILLARS.map((p, i) => (
                <Aos key={p} effect="pop" delay={0.25 + i * 0.07} as="span">
                  <span className="inline-block rounded-full bg-[#1B2A4A] px-4 py-1.5 text-[12.5px] font-medium text-white">
                    {p}
                  </span>
                </Aos>
              ))}
            </div>
          </div>
        </div>

        {/* ── Commitment ── */}
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <Aos effect="pop">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <HeartHandshake size={22} />
              </span>
            </Aos>
            <Aos effect="fade-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3rem]">
                <span className="font-accent text-[1.12em] italic tracking-normal">Our</span>{" "}
                <span className="font-semibold text-coral">commitment.</span>
              </h2>
            </Aos>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-3 lg:grid-cols-5">
            {COMMITMENT.map((c, i) => (
              <Aos
                key={c.label}
                effect="fade-up"
                delay={i * 0.08}
                className={i === 4 ? "col-span-2 md:col-span-1" : ""}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl bg-porcelain/60 p-4 text-center sm:p-6 ring-1 ring-ink/[0.05] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-coral/10 hover:ring-coral/30">
                  <span className="absolute right-4 top-3 font-hero text-4xl font-bold text-ink/[0.05]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-coral shadow-md transition-colors duration-300 group-hover:bg-coral group-hover:text-white">
                    <c.icon size={24} strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-[13px] font-semibold leading-snug text-[#1B2A4A] sm:mt-4 sm:text-[14.5px]">{c.label}</p>
                </div>
              </Aos>
            ))}
          </div>

          <Aos effect="zoom-in" delay={0.1}>
            <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-porcelain to-white p-6 text-center ring-1 ring-coral/20 sm:p-8 md:mt-12 md:p-12">
              <span className="font-accent text-6xl leading-none text-coral/30">&ldquo;</span>
              <p className="-mt-4 font-accent text-[1.2rem] italic leading-relaxed text-[#1B2A4A] sm:text-[1.4rem] md:text-[1.7rem]">
                Since 1st March 2012, our commitment has remained the same: to
                provide quality care with professionalism, compassion and a
                continuous pursuit of excellence.
              </p>
              <BookButton
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-[15px] font-medium text-white shadow-lg shadow-coral/30 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                Book your visit <ArrowUpRight size={17} />
              </BookButton>
            </div>
          </Aos>
        </div>
      </div>
    </section>
  );
}
