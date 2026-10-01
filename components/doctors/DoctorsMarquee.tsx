import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/content";

type Doctor = (typeof doctors)[number];

function Row({
  items,
  reverse,
  duration,
  showCaption,
}: {
  items: Doctor[];
  reverse?: boolean;
  duration: string;
  showCaption: boolean;
}) {
  return (
    <div
      className="flex w-max gap-5 px-6 animate-marquee"
      style={{
        animationDuration: duration,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...items, ...items].map((d, i) => (
        <Link
          key={`${d.name}-${i}`}
          href="/doctors"
          className="group relative h-56 w-40 shrink-0 overflow-hidden rounded-2xl shadow-xl md:h-64 md:w-48"
        >
          <Image
            src={d.image!}
            alt={d.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          {showCaption && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <p className="font-display text-sm text-porcelain">
                  {d.name}
                </p>
                <p className="text-[10.5px] text-coral">{d.role}</p>
              </div>
            </>
          )}
        </Link>
      ))}
    </div>
  );
}

export default function DoctorsMarquee({
  items,
  rows = 1,
  duration = "38s",
  showCaption = true,
  fadeColor = "ink",
}: {
  items: Doctor[];
  rows?: 1 | 2;
  duration?: string;
  showCaption?: boolean;
  fadeColor?: "ink" | "porcelain";
}) {
  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${
          fadeColor === "ink" ? "from-ink" : "from-porcelain"
        } to-transparent md:w-32`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${
          fadeColor === "ink" ? "from-ink" : "from-porcelain"
        } to-transparent md:w-32`}
      />
      <div className="flex flex-col gap-5">
        <Row items={items} duration={duration} showCaption={showCaption} />
        {rows === 2 && (
          <Row
            items={[...items].reverse()}
            reverse
            duration="32s"
            showCaption={showCaption}
          />
        )}
      </div>
    </div>
  );
}
