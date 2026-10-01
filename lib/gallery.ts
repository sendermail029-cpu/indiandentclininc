import fs from "node:fs";
import path from "node:path";
import { cloudinaryReady, listCategories, listMedia } from "@/lib/cloudinary";

export interface GalleryImage {
  src: string;
  alt: string;
  /** URL that downloads the original file */
  download: string;
  width?: number;
  height?: number;
  category: string | null;
}

const UPLOAD_DIR = path.join(process.cwd(), "public", "gallery", "uploads");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

/**
 * Photos and categories for the "Clinic moments" gallery section, newest first.
 * Managed from the admin panel (Cloudinary); falls back to public/gallery/uploads/
 * when Cloudinary isn't configured.
 */
export async function getGallery(): Promise<{ images: GalleryImage[]; categories: string[] }> {
  if (cloudinaryReady()) {
    const [items, categories] = await Promise.all([listMedia("gallery"), listCategories()]);
    return {
      images: items.map((m) => ({
        src: m.url,
        download: m.downloadUrl,
        alt: m.category ? `${m.category} — Indian Dental & Cosmetology Clinic` : "Indian Dental & Cosmetology Clinic",
        width: m.width,
        height: m.height,
        category: m.category,
      })),
      categories,
    };
  }

  if (!fs.existsSync(UPLOAD_DIR)) return { images: [], categories: [] };
  const images = fs
    .readdirSync(UPLOAD_DIR)
    .filter((f) => IMAGE_EXT.test(f))
    .map((f) => ({ f, mtime: fs.statSync(path.join(UPLOAD_DIR, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)
    .map(({ f }) => ({
      src: `/gallery/uploads/${f}`,
      download: `/gallery/uploads/${f}`,
      // "laser-room_2.jpg" → "Laser room 2"
      alt: f
        .replace(IMAGE_EXT, "")
        .replace(/[-_]+/g, " ")
        .replace(/^\w/, (c) => c.toUpperCase()),
      category: null,
    }));
  return { images, categories: [] };
}
