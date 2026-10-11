import { Section } from './Section';
import { education, languages, skillGroups } from '../content/skills';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Grouped roughly by where they sit in the stack."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-serif text-lg tracking-tight">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-canvas/40 px-2 py-0.5 text-xs text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6 md:p-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Education
          </p>
          <div className="mt-4 space-y-5">
            {education.map((e) => (
              <div key={e.degree}>
                <p className="font-serif text-lg md:text-xl tracking-tight">
                  {e.degree}
                </p>
                <p className="mt-1 text-fg-muted">{e.school}</p>
                <p className="mt-1 text-sm text-fg-subtle tabular-nums">
                  {e.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 md:p-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Languages
          </p>
          <ul className="mt-4 space-y-2 text-fg">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between gap-4"
              >
                <span>{l.name}</span>
                {l.level && (
                  <span className="text-sm text-fg-subtle">{l.level}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}