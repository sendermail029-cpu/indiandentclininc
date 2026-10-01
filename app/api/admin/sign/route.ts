import { NextResponse } from "next/server";
import { cloudinaryReady, FOLDERS, listCategories, signUpload, type MediaType } from "@/lib/cloudinary";

/** Returns a signature so the browser can upload straight to Cloudinary. */
export async function POST(req: Request) {
  if (!cloudinaryReady()) {
    return NextResponse.json({ error: "Cloudinary is not configured on the server." }, { status: 500 });
  }
  const { type, category } = (await req.json().catch(() => ({}))) as {
    type?: MediaType;
    category?: string | null;
  };
  if (!type || !(type in FOLDERS)) return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  if (category && !(await listCategories(true)).includes(category)) {
    return NextResponse.json({ error: "Unknown category" }, { status: 400 });
  }
  return NextResponse.json(signUpload(type, type === "gallery" ? category : null));
}
