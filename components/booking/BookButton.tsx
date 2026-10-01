"use client";

import type { ReactNode } from "react";

export interface BookingPrefill {
  department?: string;
  treatment?: string;
}

/** Opens the site-wide booking form (see BookingModal). */
export function openBooking(prefill: BookingPrefill = {}) {
  window.dispatchEvent(new CustomEvent<BookingPrefill>("open-booking", { detail: prefill }));
}

export default function BookButton({
  children,
  className,
  department,
  treatment,
}: {
  children: ReactNode;
  className?: string;
} & BookingPrefill) {
  return (
    <button
      type="button"
      onClick={() => openBooking({ department, treatment })}
      className={className}
    >
      {children}
    </button>
  );
}
