import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { deleteMedia, FOLDERS, listCategories, listMedia, mediaTag, moveMedia, type MediaType } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

const parseType = (v: string | null): MediaType | null => (v && v in FOLDERS ? (v as MediaType) : null);

function refresh(type: MediaType) {
  revalidateTag(mediaTag(type));
  if (type === "gallery") revalidatePath("/gallery");
}

/** GET ?type=gallery|popup — list images */
export async function GET(req: Request) {
  const type = parseType(new URL(req.url).searchParams.get("type"));
  if (!type) return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  return NextResponse.json({ items: await listMedia(type, true) }); // admin always sees the live list
}

/** POST { type } — call after uploading so the site refreshes */
export async function POST(req: Request) {
  const { type } = (await req.json().catch(() => ({}))) as { type?: string };
  const t = parseType(type ?? null);
  if (!t) return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  refresh(t);
  return NextResponse.json({ ok: true });
}

/** DELETE { type, publicId } */
export async function DELETE(req: Request) {
  const { type, publicId } = (await req.json().catch(() => ({}))) as { type?: string; publicId?: string };
  const t = parseType(type ?? null);
  if (!t || !publicId || !publicId.startsWith(FOLDERS[t] + "/")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const ok = await deleteMedia(publicId);
  refresh(t);
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}

/** PATCH { publicId, category } — move a gallery photo to another category (null = none) */
export async function PATCH(req: Request) {
  const { publicId, category } = (await req.json().catch(() => ({}))) as {
    publicId?: string;
    category?: string | null;
  };
  if (!publicId || !publicId.startsWith(FOLDERS.gallery + "/")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (category && !(await listCategories(true)).includes(category)) {
    return NextResponse.json({ error: "Unknown category" }, { status: 400 });
  }
  const ok = await moveMedia(publicId, category ?? null);
  refresh("gallery");
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
