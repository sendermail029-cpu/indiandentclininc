"use client";

import Link from "next/link";
import BookButton from "@/components/booking/BookButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  Clock,
  Droplet,
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Scissors,
  Youtube,
} from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";
import { clinic } from "@/lib/content";

const treatmentLinks = [
  {
    href: "/treatments/dental",
    label: "Dental",
    description: "Laser dentistry, implants & crowns",
    icon: ToothIcon,
  },
  {
    href: "/treatments/skin",
    label: "Skin Care",
    description: "Peels, anti-aging, botox & more",
    icon: Droplet,
  },
  {
    href: "/treatments/hair",
    label: "Hair Care",
    description: "Laser reduction, transplant & more",
    icon: Scissors,
  },
];

type NavLink = {
  href: string;
  label: string;
  children?: typeof treatmentLinks;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about#hospital", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/treatments", label: "Treatments", children: treatmentLinks },
  { href: "/gallery", label: "Gallery" },
  { href: "/transformation", label: "Results" },
  { href: "/contact", label: "Contact" },
];

const mobileLinks = links.filter((l) => !l.children);

// Quick, light stagger so the menu is fully built within ~0.3s
const drawerItem = {
  hidden: { opacity: 0, x: 14 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.04 + i * 0.02, duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  }),
};

const LIGHT_HERO_PATHS = ["/", "/treatments/dental", "/treatments/skin", "/treatments/hair", "/terms", "/privacy"];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Pages whose hero is white need dark navbar text
  const light = LIGHT_HERO_PATHS.includes(pathname);
  const inactive = light
    ? "text-ink/75 hover:bg-ink/5 hover:text-ink"
    : "text-porcelain/85 hover:bg-white/10 hover:text-porcelain";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open; close it when booking opens
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = () => setOpen(false);
    window.addEventListener("open-booking", close);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("open-booking", close);
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300">
      {!light && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
      )}
      <div className="relative flex w-full items-center justify-between px-6 py-2.5 md:px-8 xl:px-10">
        <Link href="/" className="group flex shrink-0 items-center gap-4 lg:gap-3 xl:gap-4">
          <span className="relative flex h-[68px] w-[68px] shrink-0 lg:h-[58px] lg:w-[58px] xl:h-[68px] xl:w-[68px] items-center justify-center overflow-hidden rounded-full shadow-lg ring-1 ring-porcelain/20 transition-transform duration-300 ease-out group-hover:scale-105">
            <video
              autoPlay
              muted
              playsInline
              aria-label="Indian Dental & Cosmetology Clinic logo animation"
              className="h-full w-full scale-[1.35] object-cover"
            >
              <source src="/brandlogo.mp4" type="video/mp4" />
            </video>
          </span>

          <span className="hidden h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-gold-light/50 to-transparent sm:block lg:hidden xl:block" />

          <span className="hidden flex-col items-start justify-center leading-[1.15] sm:flex">
            <span
              className={`whitespace-nowrap font-display text-[19px] tracking-tight lg:text-[15px] xl:text-[19px] ${
                light
                  ? "text-ink"
                  : "text-porcelain [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
              }`}
              style={{ fontVariationSettings: '"opsz" 40, "SOFT" 30' }}
            >
              Indian Dental{" "}
              <span className={`italic font-light ${light ? "text-ink/75" : "text-porcelain/80"}`}>
                &amp; Cosmetology Clinic
              </span>
            </span>
            <span
              className={`mt-1.5 flex items-center gap-1.5 whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-[0.2em] lg:mt-1 lg:text-[9px] lg:tracking-[0.15em] xl:mt-1.5 xl:text-[10.5px] xl:tracking-[0.2em] ${
                light ? "text-coral" : "text-coral [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]"
              }`}
            >
              Vijayawada
              <span className="inline-block h-[3px] w-[3px] rounded-full bg-gold-light" />
              Est. {clinic.since}
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div
            className={`flex items-center gap-1 rounded-full border px-1.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 ${
              light ? "border-ink/10 bg-white/70" : "border-white/25 bg-white/10"
            }`}
          >
            {links.map((l) => {
              if (l.children) {
                const active = pathname.startsWith("/treatments");
                return (
                  <div key={l.href} className="group/item relative">
                    <button
                      className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors lg:px-2 lg:text-[12.5px] xl:px-3.5 xl:text-[13px] ${
                        active
                          ? `${light ? "bg-coral/10" : "bg-porcelain"} text-coral shadow-md`
                          : inactive
                      }`}
                    >
                      {l.label}
                      <ChevronDown
                        size={13}
                        className="transition-transform group-hover/item:rotate-180"
                      />
                    </button>

                    <div className="invisible absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover/item:visible group-hover/item:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink/90 p-2 shadow-2xl backdrop-blur-2xl backdrop-saturate-150">
                        {l.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="group/link flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/10"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral transition-colors group-hover/link:bg-coral group-hover/link:text-porcelain">
                              <c.icon size={16} />
                            </span>
                            <span>
                              <span className="block font-display text-[15px] text-porcelain">
                                {c.label}
                              </span>
                              <span className="mt-0.5 block text-[12px] leading-snug text-porcelain/55">
                                {c.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const active = !l.href.includes("#") && pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors lg:px-2 lg:text-[12.5px] xl:px-3.5 xl:text-[13px] ${
                    active
                      ? `${light ? "bg-coral/10" : "bg-porcelain"} text-coral shadow-md`
                      : inactive
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <BookButton
            className="whitespace-nowrap rounded-full bg-coral px-4 py-2 text-[13px] lg:px-3 xl:px-4 font-medium text-porcelain shadow-sm transition-colors hover:bg-coral-dark"
          >
            Book Appointment
          </BookButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`relative z-[60] flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
            open
              ? "bg-coral text-white shadow-lg shadow-coral/40"
              : light
              ? "bg-white text-ink shadow-md ring-1 ring-ink/10"
              : "bg-white/10 text-porcelain ring-1 ring-white/25 backdrop-blur-md"
          }`}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-[2px] rounded-full bg-current transition-all duration-300 ${open ? "w-0 opacity-0" : "w-3.5"}`} />
            <span className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0A0B0E]/60" onClick={() => setOpen(false)} />

            {/* Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto overflow-x-hidden overscroll-contain will-change-transform bg-gradient-to-br from-[#0A0B0E] via-ink to-ink-soft text-white"
              aria-label="Mobile menu"
            >
              <span aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(193,101,46,0.28),transparent)]" />
              <span aria-hidden className="pointer-events-none absolute -bottom-36 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(43,92,171,0.24),transparent)]" />

              <div className="relative flex-1 px-7 pb-8 pt-28">
                {/* Main links */}
                <ul className="space-y-1">
                  {mobileLinks.map((l, i) => (
                    <motion.li key={l.href} custom={i} variants={drawerItem} initial="hidden" animate="show">
                      <Link href={l.href} onClick={() => setOpen(false)} className="group flex items-center gap-4 py-2.5">
                        <span className={`w-6 font-hero text-[12px] font-semibold ${isActive(l.href) ? "text-coral" : "text-white/35"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-hero text-[1.65rem] font-semibold tracking-[-0.02em] transition-colors ${
                            isActive(l.href) ? "text-coral" : "text-white group-hover:text-[#F4B48C]"
                          }`}
                        >
                          {l.label}
                        </span>
                        {isActive(l.href) && <span className="h-2 w-2 rounded-full bg-coral" />}
                        <ArrowUpRight
                          size={18}
                          className="ml-auto text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Treatments */}
                <motion.div custom={mobileLinks.length} variants={drawerItem} initial="hidden" animate="show" className="mt-8">
                  <Link
                    href="/treatments"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50"
                  >
                    Treatments
                    <span className="flex items-center gap-1 normal-case tracking-normal text-[#F4B48C]">
                      View all <ArrowUpRight size={13} />
                    </span>
                  </Link>
                  <div className="mt-3 grid grid-cols-3 gap-2.5">
                    {treatmentLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className={`flex flex-col items-center gap-2 rounded-2xl border px-2 py-4 text-center transition-colors ${
                          isActive(t.href) ? "border-coral bg-coral/15" : "border-white/10 bg-white/[0.05] hover:border-coral/50"
                        }`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral text-white shadow-lg shadow-coral/30">
                          <t.icon size={18} />
                        </span>
                        <span className="text-[12.5px] font-semibold leading-tight">{t.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Quick contact */}
                <motion.div
                  custom={mobileLinks.length + 1}
                  variants={drawerItem}
                  initial="hidden"
                  animate="show"
                  className="mt-8 grid grid-cols-2 gap-2.5"
                >
                  <a
                    href={`tel:+91${clinic.phones[0]}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-3 text-[14px] font-medium"
                  >
                    <Phone size={16} className="text-coral" /> Call us
                  </a>
                  <a
                    href={`https://wa.me/91${clinic.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-3 text-[14px] font-medium"
                  >
                    <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp
                  </a>
                </motion.div>
              </div>

              {/* Drawer footer */}
              <motion.div
                custom={mobileLinks.length + 2}
                variants={drawerItem}
                initial="hidden"
                animate="show"
                className="relative border-t border-white/10 px-7 pb-8 pt-6"
              >
                <BookButton className="flex w-full items-center justify-center gap-2 rounded-full bg-coral px-4 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-coral/30">
                  <CalendarCheck size={18} /> Book Appointment
                </BookButton>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-[12px] text-white/55">
                    <Clock size={13} className="shrink-0" /> {clinic.timings}
                  </p>
                  <div className="flex shrink-0 gap-2">
                    {[
                      { icon: Instagram, href: clinic.social.instagram, label: "Instagram" },
                      { icon: Facebook, href: clinic.social.facebook, label: "Facebook" },
                      { icon: Youtube, href: clinic.social.youtube, label: "YouTube" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-coral hover:text-coral"
                      >
                        <item.icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
