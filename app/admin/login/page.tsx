"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) {
      router.replace("/admin");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Login failed");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0A0B0E] via-ink to-ink-soft px-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-[1.75rem] bg-white p-8 shadow-2xl">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral text-white">
          <Lock size={22} />
        </span>
        <h1 className="mt-5 font-hero text-2xl font-semibold text-[#1B2A4A]">Admin panel</h1>
        <p className="mt-1 text-[14px] text-ink-muted">Indian Dental &amp; Cosmetology Clinic</p>

        <label htmlFor="pw" className="mt-6 block text-[12.5px] font-semibold text-[#1B2A4A]/70">
          Password
        </label>
        <input
          id="pw"
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-[#1B2A4A]/10 bg-[#F8F9FB] px-4 py-3 text-[15px] outline-none focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10"
        />
        {error && <p className="mt-3 text-[13px] text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-coral-dark disabled:opacity-60"
        >
          <LogIn size={17} /> {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
