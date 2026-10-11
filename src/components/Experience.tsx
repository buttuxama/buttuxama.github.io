import { Section } from './Section';
import { experience } from '../content/experience';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been building"
      description="Hiring history at a glance — see the Projects section for case studies."
    >
      <ol className="relative space-y-6 md:space-y-8 border-l border-border pl-6 md:pl-8">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} className="relative">
            <span className="absolute -left-[31px] md:left-[-33px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-canvas" />
            <article className="rounded-2xl border border-border bg-surface p-6 md:p-7 transition-colors hover:bg-surface-2">
              <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl md:text-2xl tracking-tight">
                  {entry.role}
                  <span className="text-fg-muted"> · {entry.company}</span>
                </h3>
                <p className="text-sm text-fg-muted tabular-nums">
                  {entry.start} — {entry.end}
                </p>
              </header>
              {entry.location && (
                <p className="mt-1 text-sm text-fg-subtle">{entry.location}</p>
              )}

              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-fg-muted">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {entry.stack && entry.stack.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {entry.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-canvas/40 px-2 py-0.5 text-xs text-fg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}