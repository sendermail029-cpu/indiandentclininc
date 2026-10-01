import crypto from "node:crypto";

/**
 * Minimal Cloudinary client (REST API, no SDK).
 * Needs CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in .env.local.
 *
 * Gallery categories are Cloudinary asset folders under clinic/gallery/
 * (the account uses dynamic folders, so a photo's category = its asset_folder).
 */
const cloud = process.env.CLOUDINARY_CLOUD_NAME ?? "";
const apiKey = process.env.CLOUDINARY_API_KEY ?? "";
const apiSecret = process.env.CLOUDINARY_API_SECRET ?? "";
const API = `https://api.cloudinary.com/v1_1/${cloud}`;

export const FOLDERS = {
  gallery: "clinic/gallery",
  popup: "clinic/popup",
} as const;
export type MediaType = keyof typeof FOLDERS;

export const cloudinaryReady = () => Boolean(cloud && apiKey && apiSecret);

/** Cache tag used to refresh the gallery/popup right after a change. */
export const mediaTag = (type: MediaType) => `media-${type}`;

const authHeader = () => ({
  Authorization: "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64"),
});
const cacheOpts = (type: MediaType, fresh: boolean) =>
  fresh ? { cache: "no-store" as const } : { next: { tags: [mediaTag(type)], revalidate: 3600 } };
/** Encode each path segment but keep the slashes. */
const encodePath = (p: string) => p.split("/").map(encodeURIComponent).join("/");

function sign(params: Record<string, string | number>) {
  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
  return crypto.createHash("sha1").update(toSign + apiSecret).digest("hex");
}

/** Keeps category names folder-safe: letters, digits, spaces and hyphens. */
export function cleanCategory(name: string) {
  return name
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
}

const galleryFolder = (category?: string | null) =>
  category ? `${FOLDERS.gallery}/${category}` : FOLDERS.gallery;

/** Signature for a direct browser → Cloudinary upload into the given folder. */
export function signUpload(type: MediaType, category?: string | null) {
  const timestamp = Math.round(Date.now() / 1000);
  const folder = type === "gallery" ? galleryFolder(category) : FOLDERS[type];
  return {
    cloudName: cloud,
    apiKey,
    timestamp,
    folder,
    signature: sign({ folder, timestamp }),
  };
}

export interface MediaItem {
  publicId: string;
  url: string;
  /** Original file, forced to download */
  downloadUrl: string;
  width: number;
  height: number;
  createdAt: string;
  /** Gallery category (asset sub-folder), or null if uncategorised */
  category: string | null;
}

/** Lists images in a folder (incl. sub-folders), newest first. */
export async function listMedia(type: MediaType, fresh = false): Promise<MediaItem[]> {
  if (!cloudinaryReady()) return [];
  const url = `${API}/resources/image/upload?prefix=${encodeURIComponent(FOLDERS[type] + "/")}&max_results=500`;
  const res = await fetch(url, { headers: authHeader(), ...cacheOpts(type, fresh) });
  if (!res.ok) {
    console.error("Cloudinary list failed:", res.status, await res.text());
    return [];
  }
  const data = (await res.json()) as {
    resources: {
      public_id: string;
      secure_url: string;
      width: number;
      height: number;
      created_at: string;
      asset_folder?: string;
    }[];
  };
  const root = FOLDERS[type];
  return data.resources
    .map((r) => {
      const folder = r.asset_folder ?? r.public_id.split("/").slice(0, -1).join("/");
      const category = folder.startsWith(root + "/") ? folder.slice(root.length + 1) : null;
      return {
        publicId: r.public_id,
        // f_auto,q_auto: Cloudinary serves an optimised format/quality automatically
        url: r.secure_url.replace("/upload/", "/upload/f_auto,q_auto/"),
        downloadUrl: r.secure_url.replace("/upload/", "/upload/fl_attachment/"),
        width: r.width,
        height: r.height,
        createdAt: r.created_at,
        category,
      };
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function deleteMedia(publicId: string) {
  const timestamp = Math.round(Date.now() / 1000);
  const body = new URLSearchParams({
    public_id: publicId,
    timestamp: String(timestamp),
    api_key: apiKey,
    signature: sign({ public_id: publicId, timestamp }),
  });
  const res = await fetch(`${API}/image/destroy`, { method: "POST", body });
  return res.ok;
}

/* ───────────── Gallery categories ───────────── */

export async function listCategories(fresh = false): Promise<string[]> {
  if (!cloudinaryReady()) return [];
  const res = await fetch(`${API}/folders/${encodePath(FOLDERS.gallery)}`, {
    headers: authHeader(),
    ...cacheOpts("gallery", fresh),
  });
  if (!res.ok) return []; // 404 = no categories yet
  const data = (await res.json()) as { folders: { name: string }[] };
  return data.folders.map((f) => f.name).sort((a, b) => a.localeCompare(b));
}

export async function createCategory(name: string) {
  const res = await fetch(`${API}/folders/${encodePath(galleryFolder(name))}`, {
    method: "POST",
    headers: authHeader(),
  });
  return res.ok;
}

/** Deletes a category and every photo inside it. */
export async function deleteCategory(name: string) {
  const items = await listMedia("gallery", true);
  await Promise.all(items.filter((i) => i.category === name).map((i) => deleteMedia(i.publicId)));
  const res = await fetch(`${API}/folders/${encodePath(galleryFolder(name))}`, {
    method: "DELETE",
    headers: authHeader(),
  });
  return res.ok;
}

/** Moves a gallery photo into a category (or back to uncategorised). */
export async function moveMedia(publicId: string, category: string | null) {
  const res = await fetch(`${API}/resources/image/upload/${encodePath(publicId)}`, {
    method: "POST",
    headers: authHeader(),
    body: new URLSearchParams({ asset_folder: galleryFolder(category) }),
  });
  return res.ok;
}
