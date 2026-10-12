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
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-md border border-border bg-panel p-5"
          >
            <h3 className="font-mono text-sm font-medium text-syntax-keyword">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="rounded border border-border bg-bg/40 px-2 py-0.5 font-mono text-[11px] text-fg-muted transition-colors hover:text-fg hover:border-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-md border border-border bg-panel p-5 md:p-6">
          <p className="font-mono text-sm font-medium text-syntax-comment">
            // education
          </p>
          <div className="mt-4 space-y-5">
            {education.map((e) => (
              <div key={e.degree}>
                <p className="font-mono text-sm md:text-base tracking-tight text-fg">
                  {e.degree}
                </p>
                <p className="mt-1 font-sans text-sm text-fg-muted">
                  {e.school}
                </p>
                <p className="mt-1 font-mono text-xs text-fg-subtle tabular-nums">
                  {e.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-border bg-panel p-5 md:p-6">
          <p className="font-mono text-sm font-medium text-syntax-comment">
            // languages
          </p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between gap-4 text-fg"
              >
                <span>{l.name}</span>
                {l.level && (
                  <span className="text-xs text-syntax-number">{l.level}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}