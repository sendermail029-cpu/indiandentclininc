interface TreatmentItem {
  name: string;
  detail?: string;
}

export default function TreatmentList({
  items,
  variant,
}: {
  items: TreatmentItem[];
  variant: "list" | "pills";
}) {
  if (variant === "list") {
    return (
      <ul className="mt-8 divide-y divide-ink/10">
        {items.map((t) => (
          <li
            key={t.name}
            className="grid gap-1 py-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8"
          >
            <p className="font-display text-xl text-ink">{t.name}</p>
            {t.detail && (
              <p className="text-[15px] leading-relaxed text-ink-muted">
                {t.detail}
              </p>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((t) => (
        <span
          key={t.name}
          className="line-reveal rounded-full border border-ink/15 px-5 py-2.5 text-[15px] text-ink/85"
        >
          {t.name}
        </span>
      ))}
    </div>
  );
}
