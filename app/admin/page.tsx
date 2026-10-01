"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ExternalLink,
  ImageIcon,
  ImagePlus,
  Loader2,
  LogOut,
  Megaphone,
  Plus,
  X,
  Trash2,
  UploadCloud,
} from "lucide-react";

type MediaType = "gallery" | "popup";
interface MediaItem {
  publicId: string;
  url: string;
  createdAt: string;
  category: string | null;
}

const TABS: { type: MediaType; label: string; icon: typeof ImageIcon; hint: string }[] = [
  {
    type: "gallery",
    label: "Gallery photos",
    icon: ImageIcon,
    hint: "Photos appear on the Gallery page under “Clinic moments”, newest first.",
  },
  {
    type: "popup",
    label: "Popup poster",
    icon: Megaphone,
    hint: "The newest poster pops up for visitors once per visit. Delete all posters to turn the popup off.",
  },
];

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<MediaType>("gallery");
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string>("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [uploadCat, setUploadCat] = useState("");
  const [newCat, setNewCat] = useState("");
  const [catBusy, setCatBusy] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const current = TABS.find((t) => t.type === tab)!;

  const load = useCallback(async (type: MediaType) => {
    setLoading(true);
    setError("");
    const res = await fetch(`/api/admin/media?type=${type}`, { cache: "no-store" });
    if (res.status === 401) return router.replace("/admin/login");
    const data = await res.json().catch(() => ({ items: [] }));
    setItems(data.items ?? []);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    load(tab);
  }, [tab, load]);

  const loadCategories = useCallback(async () => {
    const res = await fetch("/api/admin/categories", { cache: "no-store" });
    const data = await res.json().catch(() => ({ categories: [] }));
    setCategories(data.categories ?? []);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  async function addCategory() {
    if (!newCat.trim()) return;
    setCatBusy(true);
    setError("");
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCat }),
    });
    const data = await res.json().catch(() => ({}));
    setCatBusy(false);
    if (!res.ok) return setError(data.error ?? "Could not create the category.");
    setNewCat("");
    await loadCategories();
    setUploadCat(data.name);
  }

  async function removeCategory(name: string) {
    const count = items.filter((i) => i.category === name).length;
    const msg = count
      ? `Delete the category "${name}" and its ${count} photo${count === 1 ? "" : "s"}? This cannot be undone.`
      : `Delete the category "${name}"?`;
    if (!confirm(msg)) return;
    setCatBusy(true);
    await fetch("/api/admin/categories", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setCatBusy(false);
    if (uploadCat === name) setUploadCat("");
    await Promise.all([loadCategories(), load("gallery")]);
  }

  async function move(item: MediaItem, category: string) {
    const next = category || null;
    setItems((prev) => prev.map((i) => (i.publicId === item.publicId ? { ...i, category: next } : i)));
    const res = await fetch("/api/admin/media", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId: item.publicId, category: next }),
    });
    if (!res.ok) {
      setError("Could not move the photo. Please try again.");
      load("gallery");
    }
  }

  async function upload(files: FileList | null) {
    if (!files?.length) return;
    setError("");
    const list = Array.from(files);
    try {
      for (let i = 0; i < list.length; i++) {
        setUploading(`Uploading ${i + 1} of ${list.length}…`);
        const sig = await fetch("/api/admin/sign", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: tab, category: tab === "gallery" ? uploadCat || null : null }),
        }).then((r) => r.json());
        if (sig.error) throw new Error(sig.error);

        const form = new FormData();
        form.append("file", list[i]);
        form.append("api_key", sig.apiKey);
        form.append("timestamp", String(sig.timestamp));
        form.append("folder", sig.folder);
        form.append("signature", sig.signature);
        const up = await fetch(`https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`, {
          method: "POST",
          body: form,
        });
        if (!up.ok) {
          const detail = await up.json().catch(() => null);
          const msg = detail?.error?.message?.replace(/^[[^]]*]s*/, "") ?? "";
          throw new Error(`Upload failed for ${list[i].name}${msg ? ` — ${msg}` : ""}`);
        }
      }
      await fetch("/api/admin/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: tab }),
      });
      await load(tab);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading("");
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  async function remove(item: MediaItem) {
    if (!confirm("Delete this image from the website? This cannot be undone.")) return;
    setItems((prev) => prev.filter((i) => i.publicId !== item.publicId));
    const res = await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: tab, publicId: item.publicId }),
    });
    if (!res.ok) {
      setError("Could not delete the image. Please try again.");
      load(tab);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  return (
    <main className="min-h-screen bg-[#F4F5F8]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-ink/[0.06] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="font-hero text-lg font-semibold text-[#1B2A4A]">Admin panel</p>
            <p className="text-[12.5px] text-ink-muted">Indian Dental &amp; Cosmetology Clinic</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              className="hidden items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-[13px] text-[#1B2A4A] hover:border-coral hover:text-coral sm:flex"
            >
              View site <ExternalLink size={14} />
            </a>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 rounded-full bg-[#1B2A4A] px-4 py-2 text-[13px] text-white hover:bg-coral"
            >
              <LogOut size={14} /> Log out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* Tabs */}
        <div className="flex gap-2">
          {TABS.map((t) => (
            <button
              key={t.type}
              onClick={() => setTab(t.type)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
                tab === t.type ? "bg-coral text-white shadow-lg shadow-coral/25" : "bg-white text-[#1B2A4A] hover:bg-coral/10"
              }`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>

        {/* Categories (gallery only) */}
        {tab === "gallery" && (
          <div className="mt-6 rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1B2A4A]/60">Categories</p>
            <p className="mt-1 text-[13px] text-ink-muted">
              Visitors can filter the gallery by these. “All” is always shown first.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#1B2A4A] px-3.5 py-1.5 text-[13px] text-white">All</span>
              {categories.map((c) => (
                <span key={c} className="flex items-center gap-1.5 rounded-full bg-coral/10 py-1.5 pl-3.5 pr-1.5 text-[13px] text-[#1B2A4A]">
                  {c}
                  <span className="text-[11px] text-ink-muted">({items.filter((i) => i.category === c).length})</span>
                  <button
                    onClick={() => removeCategory(c)}
                    disabled={catBusy}
                    aria-label={`Delete category ${c}`}
                    className="flex h-5 w-5 items-center justify-center rounded-full text-ink-muted hover:bg-red-600 hover:text-white"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addCategory();
              }}
              className="mt-4 flex flex-wrap gap-2"
            >
              <input
                value={newCat}
                onChange={(e) => setNewCat(e.target.value)}
                placeholder="New category, e.g. Clinic Interior"
                maxLength={40}
                className="min-w-[220px] flex-1 rounded-full border border-[#1B2A4A]/10 bg-[#F8F9FB] px-4 py-2.5 text-[14px] outline-none focus:border-coral focus:bg-white"
              />
              <button
                type="submit"
                disabled={catBusy || !newCat.trim()}
                className="flex items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 text-[14px] font-medium text-white hover:bg-coral-dark disabled:opacity-50"
              >
                <Plus size={16} /> Add category
              </button>
            </form>
          </div>
        )}

        {/* Upload area */}
        <div className="mt-6 rounded-[1.5rem] bg-white p-6 shadow-sm">
          <p className="text-[13.5px] text-ink-muted">{current.hint}</p>
          {tab === "gallery" && (
            <label className="mt-4 flex flex-wrap items-center gap-2 text-[13.5px] font-medium text-[#1B2A4A]">
              Upload into
              <select
                value={uploadCat}
                onChange={(e) => setUploadCat(e.target.value)}
                className="rounded-full border border-[#1B2A4A]/15 bg-white px-4 py-2 text-[13.5px] outline-none focus:border-coral"
              >
                <option value="">No category (All only)</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
          )}
          <label
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              upload(e.dataTransfer.files);
            }}
            className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-coral/30 bg-coral/[0.03] px-6 py-10 text-center transition-colors hover:border-coral hover:bg-coral/[0.06]"
          >
            {uploading ? (
              <>
                <Loader2 size={30} className="animate-spin text-coral" />
                <p className="mt-3 font-medium text-[#1B2A4A]">{uploading}</p>
              </>
            ) : (
              <>
                <UploadCloud size={32} className="text-coral" />
                <p className="mt-3 font-medium text-[#1B2A4A]">
                  Click to choose {tab === "gallery" ? "photos" : "a poster"} or drag them here
                </p>
                <p className="mt-1 text-[12.5px] text-ink-muted">JPG, PNG or WebP</p>
              </>
            )}
            <input
              ref={fileInput}
              type="file"
              accept="image/*"
              multiple={tab === "gallery"}
              disabled={Boolean(uploading)}
              onChange={(e) => upload(e.target.files)}
              className="hidden"
            />
          </label>
          {error && <p className="mt-3 text-[13px] text-red-600">{error}</p>}
        </div>

        {/* Images */}
        <div className="mt-8">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1B2A4A]/60">
            {loading ? "Loading…" : `${items.length} ${items.length === 1 ? "image" : "images"}`}
            {tab === "popup" && items.length > 0 && " · the first one is live"}
          </p>
          {!loading && items.length === 0 && (
            <div className="flex flex-col items-center rounded-2xl bg-white py-14 text-center text-ink-muted">
              <ImagePlus size={28} className="text-coral" />
              <p className="mt-3">Nothing uploaded yet.</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => (
              <div key={item.publicId} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.url.replace("/upload/", "/upload/c_fill,w_500,h_500/")} alt="" className="aspect-square w-full object-cover" />
                {tab === "popup" && i === 0 && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#25D366] px-2.5 py-1 text-[11px] font-semibold text-white">
                    LIVE
                  </span>
                )}
                <button
                  onClick={() => remove(item)}
                  aria-label="Delete image"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-md transition-colors hover:bg-red-600 hover:text-white"
                >
                  <Trash2 size={16} />
                </button>
                {tab === "gallery" && (
                  <select
                    value={item.category ?? ""}
                    onChange={(e) => move(item, e.target.value)}
                    aria-label="Photo category"
                    className="mx-3 mt-2 w-[calc(100%-1.5rem)] rounded-lg border border-[#1B2A4A]/10 bg-[#F8F9FB] px-2 py-1.5 text-[12.5px] outline-none focus:border-coral"
                  >
                    <option value="">No category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                )}
                <p className="px-3 py-2 text-[11.5px] text-ink-muted">
                  {new Date(item.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
