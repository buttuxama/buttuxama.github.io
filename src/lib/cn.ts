// Tiny className joiner — same idea as clsx for the few cases we need.
export function cn(
  ...args: Array<string | number | false | null | undefined>
): string {
  return args.filter(Boolean).join(' ');
}