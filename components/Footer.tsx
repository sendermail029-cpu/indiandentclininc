import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Clock,
  Droplet,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Youtube,
} from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";
import FooterWordmark from "@/components/FooterWordmark";
import { clinic } from "@/lib/content";

const exploreLinks = [
  { href: "/about", label: "About the clinic" },
  { href: "/doctors", label: "Our doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/transformation", label: "Results" },
  { href: "/contact", label: "Contact" },
];

const treatmentLinks = [
  { href: "/treatments/dental", label: "Dental care", icon: ToothIcon, accent: "bg-[#2B5CAB]" },
  { href: "/treatments/skin", label: "Skin & cosmetology", icon: Droplet, accent: "bg-coral" },
  { href: "/treatments/hair", label: "Hair & trichology", icon: Scissors, accent: "bg-[#2F7A5B]" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: clinic.social.instagram },
  { icon: Facebook, label: "Facebook", href: clinic.social.facebook },
  { icon: Youtube, label: "YouTube", href: clinic.social.youtube },
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/91${clinic.phones[0]}` },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
      <span className="h-px w-5 bg-gold-light/60" />
      {children}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1120] text-porcelain">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#2B5CAB]/25 blur-[130px]" />
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-coral/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, #000, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-8 xl:px-10">
        {/* Main grid */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 md:py-12 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white/10">
                <Image src="/brand/logo.webp" alt="" fill sizes="56px" className="object-contain" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[18px]">Indian Dental</span>
                <span className="block font-accent text-[17px] italic text-gold-light">&amp; Cosmetology Clinic</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-porcelain/60">
              Caring for Vijayawada&apos;s smiles, skin and hair since {clinic.since} — with specialist doctors under
              one roof.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-porcelain/80 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-coral hover:text-white hover:ring-coral"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <Heading>Explore</Heading>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[15px] text-porcelain/75 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-coral transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <Heading>Treatments</Heading>
            <ul className="mt-4 space-y-2">
              {treatmentLinks.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="group flex items-center gap-3 rounded-2xl bg-white/[0.04] p-2 pr-3 ring-1 ring-white/[0.06] transition-all hover:bg-white/[0.08] hover:ring-white/15"
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white ${t.accent}`}>
                      <t.icon size={16} />
                    </span>
                    <span className="flex-1 text-[14px] font-medium text-porcelain/90">{t.label}</span>
                    <ArrowUpRight
                      size={15}
                      className="text-porcelain/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <Heading>Visit us</Heading>
            <ul className="mt-4 space-y-3 text-[14px] text-porcelain/75">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-coral" />
                <span>
                  {clinic.address}
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 flex items-center gap-1 text-[13px] font-semibold text-gold-light hover:text-white"
                  >
                    Get directions <ArrowUpRight size={13} />
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-coral" />
                <span className="flex flex-wrap gap-x-2">
                  {clinic.phones.map((p, i) => (
                    <a key={p} href={`tel:+91${p}`} className="hover:text-white">
                      +91 {p}
                      {i < clinic.phones.length - 1 && <span className="text-porcelain/30">,</span>}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-coral" />
                <a href={`mailto:${clinic.email}`} className="break-all hover:text-white">
                  {clinic.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={17} className="shrink-0 text-coral" />
                <span>{clinic.timings}</span>
              </li>
            </ul>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Open all days
            </span>
          </div>
        </div>
      </div>

      {/* Giant wordmark (animated) */}
      <FooterWordmark />

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#0B1120]/80 backdrop-blur">
        <div className="grid w-full items-center justify-items-center gap-3 px-6 py-4 text-[12.5px] text-porcelain/50 md:px-8 lg:grid-cols-3 xl:px-10">
          <p className="text-center lg:justify-self-start lg:text-left">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <a
            href="https://www.pandjtechnologies.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 transition-colors hover:text-porcelain"
          >
            Designed by
            <span className="relative h-6 w-6 shrink-0 overflow-hidden">
              <Image
                src="/pjlogo.webp"
                alt="P&J Technologies logo"
                fill
                sizes="48px"
                className="scale-[2] object-contain transition-transform duration-300 group-hover:scale-[2.15]"
              />
            </span>
            <span className="font-semibold text-porcelain/80 group-hover:text-porcelain">P&amp;J Technologies</span>
          </a>
          <div className="flex items-center gap-5 lg:justify-self-end">
            <Link href="/terms" className="transition-colors hover:text-porcelain">Terms</Link>
            <Link href="/privacy" className="transition-colors hover:text-porcelain">Privacy</Link>
            <a
              href="#"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-porcelain/80 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-coral hover:text-white"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
