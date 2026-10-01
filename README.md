# Indian Dental & Cosmetology Clinic — Website

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — pages: home, about, treatments, gallery, contact (App Router)
- `components/` — shared UI (Navbar, Footer, motion primitives) and per-page sections in `components/home/`, `components/treatments/`
- `lib/content.ts` — all clinic copy (services, doctors, address, schemes) in one place — edit this file to update text sitewide
- `public/brand/logo.png` — your clinic logo
- `public/gallery/` — before/after photos (currently placeholders from your uploaded brochure — swap these files with real clinic photography, keeping the same filenames, or update the paths in `lib/content.ts`)

## Notes

- Fonts: Fraunces (display/serif) + Manrope (body), loaded via `next/font/google` — no manual font files needed, but the build machine needs internet access the first time to fetch them.
- The before/after comparison on the Gallery and Home pages is a draggable slider (`components/BeforeAfterSlider.tsx`).
- Update phone numbers, address, and map link in `lib/content.ts`. The Contact page embeds a Google Map centered on the address text — replace with an exact embed URL from Google Maps "Share > Embed a map" for pixel-perfect pin placement.
- Colors and fonts are defined as design tokens in `tailwind.config.ts`.
