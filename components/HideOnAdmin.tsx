"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Renders its children everywhere except the admin panel. */
export default function HideOnAdmin({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname.startsWith("/admin") ? null : <>{children}</>;
}
