/** 月曜始まりの1週間 = 7日分の Date（同一週） */
export type WeekRow = Date[];

/**
 * 指定月を覆う週行を生成（前月・翌月のはみ出し日を含む）
 */
export function getWeekRowsForMonth(
  year: number,
  monthIndex0: number
): WeekRow[] {
  const first = new Date(year, monthIndex0, 1);
  const last = new Date(year, monthIndex0 + 1, 0);

  const mondayIndex = (d: Date) => {
    const day = d.getDay();
    return day === 0 ? 6 : day - 1;
  };

  const start = new Date(first);
  start.setDate(start.getDate() - mondayIndex(first));

  const end = new Date(last);
  end.setDate(end.getDate() + (6 - mondayIndex(last)));

  const weeks: WeekRow[] = [];
  const cur = new Date(start);
  while (cur <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

export function formatMonthDay(d: Date) {
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${String(m).padStart(2, "0")}/${String(day).padStart(2, "0")}`;
}

export function isInMonth(d: Date, year: number, monthIndex0: number) {
  return d.getFullYear() === year && d.getMonth() === monthIndex0;
}
