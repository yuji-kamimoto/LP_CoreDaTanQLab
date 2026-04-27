import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDetailLink } from "@/components/SectionDetailLink";
import { courses, courseTheme } from "@/lib/courses-data";

const ADMISSION_FEE_LABEL = "入会金";
const ADMISSION_FEE_AMOUNT = "11,000円（税込）";
const ADMISSION_FEE_DESCRIPTION =
  "初回のご入会時に一度だけお支払いいただく費用です。";

function AdmissionFeeCard() {
  const theme = courseTheme.zeroOne;

  return (
    <div className="w-fit max-w-full justify-self-center overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-md dark:border-foreground/20 dark:bg-surface lg:col-span-3">
      <dl
        className={`divide-y divide-dashed ${theme.divideClass} w-max max-w-full px-5 py-1 text-sm md:text-base`}
      >
        <div className="py-6">
          <div className="flex max-w-full flex-row flex-wrap items-center gap-x-2 md:gap-x-3">
            <dt className={`shrink-0 font-bold ${theme.dtStrong}`}>
              {ADMISSION_FEE_LABEL}
            </dt>
            <dd className="flex min-w-0 flex-row flex-nowrap items-baseline gap-x-2 text-sm leading-relaxed md:gap-x-3 md:text-base">
              <span className="tabular-nums font-medium text-foreground md:text-lg">
                {ADMISSION_FEE_AMOUNT}
              </span>
              <span className="text-muted">{ADMISSION_FEE_DESCRIPTION}</span>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

function CoursePriceCard({
  course,
}: {
  course: (typeof courses)[number];
}) {
  const theme = courseTheme[course.key];
  const dtClass = `text-center font-bold ${theme.dtStrong}`;
  const rowClass =
    "grid grid-cols-[minmax(0,7.5rem)_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[minmax(0,9rem)_1fr]";

  return (
    <article
      className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-surface"
      aria-labelledby={`pricing-${course.id}`}
    >
      <h3
        id={`pricing-${course.id}`}
        className={`${theme.headerBg} ${theme.headerText} px-4 py-4 text-center font-heading text-xl font-bold md:py-4 md:text-2xl`}
      >
        {course.name}
      </h3>
      <dl
        className={`divide-y divide-dashed ${theme.divideClass} px-5 py-1 text-sm md:text-base`}
      >
        <div className={rowClass}>
          <dt className={dtClass}>月謝</dt>
          <dd className="text-left tabular-nums text-foreground">
            {course.monthlyPrice}
          </dd>
        </div>
        <div className={rowClass}>
          <dt className={dtClass}>レッスン</dt>
          <dd className="text-left text-foreground">
            {course.monthlySessions}
          </dd>
        </div>
        <div className={rowClass}>
          <dt className={dtClass}>備考</dt>
          <dd className="text-left text-sm text-muted md:text-base">
            {course.themeNote}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function HomePricingSection() {
  return (
    <section id="pricing" className="bg-[#eef6fc] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
              料金について
            </h2>
            <div className="mt-6 grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              <AdmissionFeeCard />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {courses.map((course) => (
              <CoursePriceCard key={course.id} course={course} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <SectionDetailLink href="/pricing">
              料金・割引の詳細を見る
            </SectionDetailLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
