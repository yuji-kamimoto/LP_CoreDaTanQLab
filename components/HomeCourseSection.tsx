import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import type { CourseDefinition } from "@/lib/courses-data";
import { courseTheme, showComingSoonUI } from "@/lib/courses-data";

type Props = {
  course: CourseDefinition;
  imageSrc?: string;
  /** 画像を左右どちらに配置するか（交互に変えると変化が出る） */
  imagePosition?: "right" | "left";
};

export function HomeCourseSection({
  course,
  imageSrc,
  imagePosition = "right",
}: Props) {
  const th = courseTheme[course.key];
  const comingSoonVisible = showComingSoonUI(course);

  const textPanel = (
    <div className="flex flex-col justify-center px-8 py-10 text-center md:px-12 md:py-14">
      {comingSoonVisible ? (
        <span className="mx-auto mb-3 inline-flex items-center rounded-full bg-white/20 px-3.5 py-1 text-[0.65rem] font-black tracking-[0.18em] text-white md:text-xs">
          COMING SOON
        </span>
      ) : null}
      <p className="text-sm font-semibold text-white/75">{course.tagline}</p>
      <h2 className="mt-3 font-heading text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
        {course.name}
      </h2>
      <ul className="mt-6 space-y-2 text-left">
        {course.childChanges.map((line) => (
          <li
            key={line}
            className="flex gap-2 text-sm leading-relaxed text-white/90 md:text-base"
          >
            <span aria-hidden className="mt-0.5 shrink-0 text-white/60">
              →
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-center gap-3 border-t border-white/20 pt-5">
        <span className="text-xs font-bold uppercase tracking-widest text-white/60">
          対象
        </span>
        <span className="text-sm font-bold text-white">{course.ageRange}</span>
      </div>
      <div className="mt-8 flex w-full justify-center">
        {comingSoonVisible ? (
          <span className="inline-flex w-full max-w-lg min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white/10 px-10 py-3 text-base font-bold text-white/70 md:min-h-[3.75rem] md:px-14 md:py-4 md:text-lg">
            準備中です
          </span>
        ) : (
          <Link
            href={`/courses#${course.id}`}
            className="inline-flex w-full max-w-lg min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white/20 px-10 py-3 text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/35 md:min-h-[3.75rem] md:px-14 md:py-4 md:text-lg"
          >
            詳細を見る →
          </Link>
        )}
      </div>
    </div>
  );

  const imagePanel = (
    <div className="relative min-h-[220px] overflow-hidden md:min-h-[300px]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={course.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-white/10">
          <span className="text-7xl opacity-20" aria-hidden>
            🔬
          </span>
        </div>
      )}
    </div>
  );

  return (
    <ScrollReveal>
      <div
        id={course.id}
        className={`relative scroll-mt-20 overflow-hidden rounded-3xl shadow-lg ${th.headerBg}`}
      >
        <div
          className={`grid md:grid-cols-2 ${
            course.comingSoon && comingSoonVisible ? "grayscale" : ""
          } ${
            imagePosition === "left" ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {textPanel}
          {imagePanel}
        </div>

        {comingSoonVisible ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-neutral-900/70 px-6 text-center backdrop-blur-[2px]">
            <span className="font-heading text-4xl font-black uppercase tracking-[0.12em] text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Coming Soon
            </span>
            <span className="text-sm font-bold tracking-wide text-white/85 md:text-base">
              {course.name}は準備中です
            </span>
          </div>
        ) : null}
      </div>
    </ScrollReveal>
  );
}
