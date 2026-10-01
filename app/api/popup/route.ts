import { NextResponse } from "next/server";
import { listMedia } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

/** Public: the newest poster (or null). Cloudinary list stays cached until an upload/delete. */
export async function GET() {
  const [latest] = await listMedia("popup");
  return NextResponse.json({ poster: latest ? { url: latest.url, id: latest.publicId, width: latest.width, height: latest.height } : null });
}
