import type { Metadata } from "next";
import Image from "next/image";
import Aos from "@/components/Aos";
import ContactForm from "@/components/ContactForm";
import { clinic } from "@/lib/content";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us & Directions",
  description:
    "Book an appointment at Indian Dental & Cosmetology Clinic, Prabhas College Main Road, Kedareswararaopet, Vijayawada. Call +91 9293922363 or WhatsApp — open 9:30 AM to 8:30 PM, all days.",
  path: "/contact",
  keywords: ["contact dental clinic Vijayawada","book dentist appointment Vijayawada","dental clinic Kedareswararaopet","Indian Dental clinic phone number"],
  image: { url: "/gallery/contacthome.webp", width: 1456, height: 1080, alt: "Indian Dental & Cosmetology Clinic, Vijayawada" },
});

const breadcrumb = breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);


const socialLinks = [
  { icon: Instagram, label: "Instagram", href: clinic.social.instagram },
  { icon: Facebook, label: "Facebook", href: clinic.social.facebook },
  { icon: Youtube, label: "YouTube", href: clinic.social.youtube },
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/91${clinic.whatsapp}` },
  { icon: Mail, label: "Email", href: `mailto:${clinic.email}` },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />

      <section className="relative -mt-[73px] flex min-h-[400px] items-end overflow-hidden pb-12 pt-36 sm:min-h-[460px] sm:pb-14 sm:pt-44 md:min-h-[560px] md:pb-20">
        {/* Photo slowly settles from a zoom as the page opens */}
        <Aos effect="zoom-out" duration={2.4} className="absolute inset-0">
          <Image
            src="/indiandental (10).webp"
            alt="Our doctor and nursing team at the clinic"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </Aos>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="container-x relative z-10">
          <Aos effect="fade-right" delay={0.2}>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-10 bg-coral" />
              Get in touch
            </p>
          </Aos>
          <h1 className="mt-5 max-w-2xl font-hero text-[1.95rem] leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.6rem] md:text-[3.4rem]">
            <Aos effect="flip-up" delay={0.35} as="span" className="block">
              <span className="font-accent text-[1.12em] italic tracking-normal">
                Let&apos;s find you
              </span>
            </Aos>
            <Aos effect="flip-up" delay={0.5} as="span" className="block font-semibold">
              the right <span className="text-coral">appointment.</span>
            </Aos>
          </h1>
          <Aos effect="fade-up" delay={0.7}>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75 sm:mt-5 sm:text-[16px]">
              Call, WhatsApp or walk in — we&apos;ll match you with the right
              doctor.
            </p>
          </Aos>
        </div>
      </section>

      <section className="bg-porcelain py-12 md:py-24">
        <div className="container-x">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Aos effect="pop">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-coral">
                <MessageCircle size={13} /> Contact Us
              </span>
            </Aos>
            <Aos effect="fade-up" delay={0.1}>
              <h2 className="font-display text-[1.75rem] leading-tight text-ink sm:text-3xl md:text-4xl">
                We&apos;d love to hear from you
              </h2>
            </Aos>
          </div>

          <Aos
            effect="zoom-in"
            delay={0.1}
            duration={0.9}
            className="mt-8 grid overflow-hidden rounded-[1.5rem] bg-white sm:mt-10 sm:rounded-[2rem] shadow-[0_30px_70px_-25px_rgba(27,42,74,0.25)] ring-1 ring-ink/[0.05] lg:grid-cols-[0.9fr_1.1fr]"
          >
            {/* Info panel — same charcoal gradient as the footer */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#0A0B0E] via-ink to-ink-soft px-5 py-8 text-white sm:px-10 sm:py-10 md:py-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-coral/25 blur-[100px]"
              />

              <Aos effect="fade-right" delay={0.3}>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
                  <span className="h-px w-8 bg-coral" />
                  Get in touch
                </p>
              </Aos>
              <Aos effect="fade-up" delay={0.4}>
                <h2 className="mt-4 font-hero text-[1.75rem] leading-[1.1] tracking-[-0.02em] sm:text-[2rem] md:text-[2.4rem]">
                  <span className="block font-accent text-[1.12em] italic tracking-normal">
                    Visit or reach us
                  </span>
                  <span className="font-semibold">
                    any<span className="text-coral">time.</span>
                  </span>
                </h2>
              </Aos>

              <div className="mt-8 space-y-3">
                <Aos effect="fade-right" delay={0.5} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm sm:gap-4 sm:p-4 transition-colors hover:border-coral/40 hover:bg-white/[0.09]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/20 text-coral">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Address</p>
                    <p className="mt-0.5 text-[14.5px] leading-relaxed text-white/90">{clinic.address}</p>
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-medium text-coral hover:text-white"
                    >
                      Get directions <ArrowUpRight size={13} />
                    </a>
                  </div>
                </Aos>

                <Aos effect="fade-right" delay={0.62} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm sm:gap-4 sm:p-4 transition-colors hover:border-coral/40 hover:bg-white/[0.09]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/20 text-coral">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Opening hours</p>
                    <p className="mt-0.5 text-[14.5px] text-white/90">{clinic.timings}</p>
                  </div>
                </Aos>

                <Aos effect="fade-right" delay={0.74} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm sm:gap-4 sm:p-4 transition-colors hover:border-coral/40 hover:bg-white/[0.09]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/20 text-coral">
                    <Phone size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Call us</p>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                      {clinic.phones.map((num) => (
                        <a
                          key={num}
                          href={`tel:+91${num}`}
                          className="font-hero text-[17px] font-medium text-white transition-colors hover:text-coral"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </Aos>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((s, i) => (
                  <Aos key={s.label} effect="pop" delay={0.9 + i * 0.08}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") || s.href.startsWith("mailto") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all hover:-translate-y-1 hover:rotate-6 hover:border-coral hover:bg-coral"
                    >
                      <s.icon size={18} />
                    </a>
                  </Aos>
                ))}
              </div>
            </div>

            {/* Form panel slides in from the right */}
            <Aos effect="fade-left" delay={0.35} className="bg-white px-5 py-8 sm:px-10 sm:py-10 md:py-12">
              <ContactForm embedded />
            </Aos>
          </Aos>

          <div className="mt-14 flex flex-col items-center gap-4 text-center md:mt-20">
            <Aos effect="pop">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-coral">
                <MapPin size={13} /> Our Location
              </span>
            </Aos>
            <Aos effect="fade-up" delay={0.1}>
              <h2 className="max-w-2xl font-display text-[1.45rem] leading-snug text-ink sm:text-2xl md:text-3xl">
                Visit Our Hospital For Consultations
              </h2>
            </Aos>
          </div>

          <Aos effect="zoom-in" delay={0.15} duration={1} className="relative mt-6">
            <div className="h-[280px] w-full overflow-hidden rounded-[1.5rem] border border-ink/10 shadow-lg sm:h-[360px] sm:rounded-[2rem]">
              <iframe
                title="Clinic location map"
                src={clinic.mapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Aos effect="pop" delay={0.8} className="pointer-events-none absolute inset-x-0 -bottom-5 flex justify-center sm:inset-x-auto sm:right-6">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group pointer-events-auto flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-porcelain shadow-lg transition-colors hover:bg-coral"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral group-hover:bg-white" />
                </span>
                Get directions
                <ArrowUpRight size={16} />
              </a>
            </Aos>
          </Aos>
        </div>
      </section>
    </>
  );
}
