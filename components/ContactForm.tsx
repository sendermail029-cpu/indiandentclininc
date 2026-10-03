"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { clinic } from "@/lib/content";

export default function ContactForm({ embedded = false }: { embedded?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      "Hello Indian Dental & Cosmetology Clinic,",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone}`,
      "",
      message.trim(),
    ].join("\n");
    // Navigate in the same tab: opens the WhatsApp app on phones and
    // WhatsApp Web / desktop on computers, and can't be caught by popup blockers.
    window.location.href = `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  const inputClass =
    "w-full rounded-xl border border-[#1B2A4A]/10 bg-[#F8F9FB] px-4 py-3.5 text-[15px] text-[#1B2A4A] placeholder:text-ink-muted/60 outline-none transition-all focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        embedded
          ? "flex flex-col gap-5"
          : "flex flex-col gap-5 rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-[0_24px_60px_-20px_rgba(20,21,27,0.18)] md:p-9"
      }
    >
      <div>
        {!embedded && (
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            <Sparkles size={13} /> Get in touch
          </p>
        )}
        <p
          className={`font-hero text-[26px] font-semibold leading-tight tracking-[-0.02em] text-[#1B2A4A] md:text-[30px] ${embedded ? "" : "mt-3"}`}
        >
          Send us a <span className="text-coral">message</span>
        </p>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Share a few details and we&apos;ll reply on WhatsApp, usually within a few hours.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-[#1B2A4A]/70">
            Your name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-[#1B2A4A]/70">
            Phone number
          </label>
          <input
            required
            type="tel"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="Enter a valid 10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-[13px] font-semibold text-[#1B2A4A]/70">
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you'd like help with"
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-porcelain shadow-[0_10px_30px_-8px_rgba(20,21,27,0.5)] transition-colors hover:bg-[#25D366]"
      >
        <MessageCircle size={17} />
        Send on WhatsApp
        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
