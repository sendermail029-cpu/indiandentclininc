import Link from "next/link";

const categories = [
  { slug: "dental", href: "/treatments/dental", label: "Dental" },
  { slug: "skin", href: "/treatments/skin", label: "Skin & Cosmetology" },
  { slug: "hair", href: "/treatments/hair", label: "Hair Care" },
] as const;

export default function CategorySwitcher({
  active,
}: {
  active: (typeof categories)[number]["slug"];
}) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-ink/10">
      {categories.map((c) => {
        const isActive = c.slug === active;
        return (
          <Link
            key={c.slug}
            href={c.href}
            className={`relative px-1 pb-4 pt-2 font-display text-lg transition-colors ${
              isActive ? "text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            {c.label}
            {isActive && (
              <span className="absolute inset-x-0 -bottom-px h-[2px] bg-coral" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
