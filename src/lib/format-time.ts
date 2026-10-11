const RTF = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const DIVISIONS: Array<[number, Intl.RelativeTimeFormatUnit]> = [
  [60, 'second'],
  [60, 'minute'],
  [24, 'hour'],
  [7, 'day'],
  [4.34524, 'week'],
  [12, 'month'],
  [Number.POSITIVE_INFINITY, 'year'],
];

export function relativeTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';

  let duration = (date.getTime() - Date.now()) / 1000;
  for (const [step, unit] of DIVISIONS) {
    if (Math.abs(duration) < step) {
      return RTF.format(Math.round(duration), unit);
    }
    duration /= step;
  }
  return '';
}