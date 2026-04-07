"use client";

import type { ReactNode } from "react";

type MarqueeRowProps = {
  slotA: ReactNode;
  slotB: ReactNode;
  durationSec?: number;
  className?: string;
};

export function MarqueeRow({
  slotA,
  slotB,
  durationSec = 48,
  className = "",
}: MarqueeRowProps) {
  return (
    <div
      className={`group relative overflow-hidden border-y-2 border-accent/20 bg-surface-warm/90 py-5 ${className}`}
    >
      <div
        className="flex w-max animate-marquee-x group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSec}s` }}
      >
        <div className="flex shrink-0 items-stretch gap-5 pr-5 md:gap-6 md:pr-6">
          {slotA}
        </div>
        <div
          className="flex shrink-0 items-stretch gap-5 pr-5 md:gap-6 md:pr-6"
          aria-hidden="true"
        >
          {slotB}
        </div>
      </div>
    </div>
  );
}
