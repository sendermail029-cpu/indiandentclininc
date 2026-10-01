import Image from "next/image";
import { doctors } from "@/lib/content";

type Doctor = (typeof doctors)[number];

export default function DoctorsWall({
  items,
  duration = "45s",
}: {
  items: Doctor[];
  duration?: string;
}) {
  return (
    <div className="absolute inset-0">
      <div
        className="flex h-full w-max animate-marquee"
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((d, i) => (
          <div
            key={`${d.name}-${i}`}
            className="relative h-full w-[300px] shrink-0 overflow-hidden sm:w-[360px] md:w-[420px]"
          >
            <Image
              src={d.image!}
              alt={d.name}
              fill
              className="object-cover"
              style={{ objectPosition: d.focal ?? "center 8%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
