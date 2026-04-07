"use client";

import { motion, useReducedMotion } from "motion/react";

type HeroSectionProps = {
  phrase: string;
};

export function HeroSection({ phrase }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const lines = phrase.split("\n");

  if (reduce) {
    return (
      <div className="relative z-[1] text-center">
        <h1 className="font-heading mx-auto max-w-[22ch] whitespace-pre-line text-center text-[clamp(1.85rem,6vw,3.85rem)] font-bold leading-[1.2] tracking-tight text-foreground md:max-w-[28ch]">
          {phrase}
        </h1>
      </div>
    );
  }

  return (
    <div className="relative z-[1] text-center">
      <h1 className="font-heading mx-auto max-w-[22ch] text-center text-[clamp(1.85rem,6vw,3.85rem)] font-bold leading-[1.2] tracking-tight text-foreground md:max-w-[28ch]">
        {lines.map((line, i) => (
          <span key={`${i}-${line}`} className="block overflow-hidden">
            <motion.span
              className="block pb-0.5 text-center"
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.88,
                delay: 0.12 + i * 0.16,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
}
