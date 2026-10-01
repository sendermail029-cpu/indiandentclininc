"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Send, X } from "lucide-react";
import { clinic } from "@/lib/content";
import type { BookingPrefill } from "./BookButton";

const DEPARTMENTS = ["Dental", "Skin & Cosmetology", "Hair Care", "Not sure — need advice"];
const TIMES = ["Morning (9:30 – 12:30)", "Afternoon (12:30 – 4:30)", "Evening (4:30 – 8:30)"];

const today = () => new Date().toISOString().slice(0, 10);

/** Site-wide booking form. Opens on the "open-booking" event and sends the details to WhatsApp. */
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIMES[0]);
  const [message, setMessage] = useState("");
  const firstField = useRef<HTMLInputElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Open (with optional prefill) from anywhere on the site
  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<BookingPrefill>).detail ?? {};
      if (detail.department) {
        const match = DEPARTMENTS.find((d) => d.toLowerCase().startsWith(detail.department!.toLowerCase().slice(0, 4)));
        if (match) setDepartment(match);
      }
      setTreatment(detail.treatment ?? "");
      setOpen(true);
    };
    window.addEventListener("open-booking", onOpen);
    return () => window.removeEventListener("open-booking", onOpen);
  }, []);

  // Esc to close, lock page scroll, focus the first field
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstField.current?.focus(), 250);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open, close]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const niceDate = date
      ? new Date(date + "T00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })
      : "Any day";
    const lines = [
      "Hello Indian Dental & Cosmetology Clinic,",
      "I would like to book an appointment.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone}`,
      `Department: ${department}`,
    ];
    if (treatment.trim()) lines.push(`Treatment: ${treatment.trim()}`);
    lines.push(`Preferred date: ${niceDate}`, `Preferred time: ${time}`);
    if (message.trim()) lines.push("", `Message: ${message.trim()}`);
    const text = lines.join("\n");
    window.open(`https://wa.me/91${clinic.phones[0]}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    close();
  }

  const input =
    "w-full rounded-xl border border-[#1B2A4A]/10 bg-[#F8F9FB] px-4 py-3 text-[15px] text-[#1B2A4A] placeholder:text-ink-muted/60 outline-none transition-all focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10";
  const label = "mb-1.5 block text-[12.5px] font-semibold text-[#1B2A4A]/70";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#0A0B0E]/60 backdrop-blur-sm" onClick={close} />

          {/* Panel */}
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-[1.75rem] bg-white shadow-2xl sm:max-w-xl sm:rounded-[1.75rem]"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0A0B0E] via-ink to-ink-soft px-6 pb-6 pt-6 text-white sm:px-8">
              <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral text-white shadow-lg shadow-coral/30">
                <CalendarCheck size={20} />
              </span>
              <h2 id="booking-title" className="mt-4 font-hero text-2xl font-semibold">
                Book an <span className="text-coral">appointment</span>
              </h2>
              <p className="mt-1 text-[13.5px] text-white/65">
                Fill in your details — we&apos;ll confirm your slot on WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-6 sm:grid-cols-2 sm:px-8">
              <div>
                <label className={label} htmlFor="bk-name">Your name</label>
                <input id="bk-name" ref={firstField} required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className={input} />
              </div>
              <div>
                <label className={label} htmlFor="bk-phone">Phone number</label>
                <input
                  id="bk-phone"
                  required
                  type="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a valid 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="10-digit mobile"
                  className={input}
                />
              </div>
              <div>
                <label className={label} htmlFor="bk-dept">Department</label>
                <select id="bk-dept" value={department} onChange={(e) => setDepartment(e.target.value)} className={input}>
                  {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="bk-treatment">Treatment <span className="font-normal text-ink-muted">(optional)</span></label>
                <input id="bk-treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} placeholder="e.g. Teeth cleaning" className={input} />
              </div>
              <div>
                <label className={label} htmlFor="bk-date">Preferred date</label>
                <input id="bk-date" type="date" min={today()} value={date} onChange={(e) => setDate(e.target.value)} className={input} />
              </div>
              <div>
                <label className={label} htmlFor="bk-time">Preferred time</label>
                <select id="bk-time" value={time} onChange={(e) => setTime(e.target.value)} className={input}>
                  {TIMES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="bk-msg">Message <span className="font-normal text-ink-muted">(optional)</span></label>
                <textarea id="bk-msg" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us briefly about your concern" className={`${input} resize-none`} />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1EBE5A] sm:col-span-2"
              >
                <MessageCircle size={18} />
                Send booking on WhatsApp
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-center text-[12px] text-ink-muted sm:col-span-2">
                Open all days, {clinic.timings.split(",")[0]} · or call {clinic.phones[0]}
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
