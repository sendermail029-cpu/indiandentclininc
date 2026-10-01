import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cleanCategory, createCategory, deleteCategory, listCategories, mediaTag } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

function refresh() {
  revalidateTag(mediaTag("gallery"));
  revalidatePath("/gallery");
}

export async function GET() {
  return NextResponse.json({ categories: await listCategories(true) });
}

/** POST { name } — create a category */
export async function POST(req: Request) {
  const { name } = (await req.json().catch(() => ({}))) as { name?: string };
  const clean = cleanCategory(name ?? "");
  if (!clean) return NextResponse.json({ error: "Please enter a category name." }, { status: 400 });
  const existing = await listCategories(true);
  if (existing.some((c) => c.toLowerCase() === clean.toLowerCase())) {
    return NextResponse.json({ error: "That category already exists." }, { status: 409 });
  }
  const ok = await createCategory(clean);
  refresh();
  return ok
    ? NextResponse.json({ ok: true, name: clean })
    : NextResponse.json({ error: "Could not create the category." }, { status: 502 });
}

/** DELETE { name } — delete a category and its photos */
export async function DELETE(req: Request) {
  const { name } = (await req.json().catch(() => ({}))) as { name?: string };
  const existing = await listCategories(true);
  if (!name || !existing.includes(name)) return NextResponse.json({ error: "Unknown category" }, { status: 400 });
  const ok = await deleteCategory(name);
  refresh();
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
