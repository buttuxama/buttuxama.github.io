import { ExternalLink, Star } from 'lucide-react';
import { Section } from './Section';
import projects from '../content/projects-source.json';
import type { GitHubRepo } from '../content/projects-source';
import { relativeTime } from '../lib/format-time';

const repos = projects as GitHubRepo[];

// GitHub-style language colors (the ones GitHub itself uses).
const LANGUAGE_DOT: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  'C#': '#178600',
  'C++': '#f34b7d',
  Swift: '#F05138',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  Ruby: '#701516',
};

function languageDot(lang: string | null): string {
  if (!lang) return '#4b5263';
  return LANGUAGE_DOT[lang] ?? '#4b5263';
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've shipped"
      description="Public work on GitHub. Click a card to open the repository."
    >
      {repos.length === 0 ? (
        <p className="font-sans text-sm text-fg-muted">
          Projects are generated from GitHub at build time. None were found —
          either the fetch failed or the account has no public repos with a
          description.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <a
              key={r.name}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-md border border-border bg-panel p-5 transition-colors hover:bg-panel-hover hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-sm font-medium tracking-tight text-fg break-all">
                  {r.name}
                </h3>
                <ExternalLink
                  size={14}
                  className="mt-1 shrink-0 text-fg-subtle transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-3 font-sans text-sm text-fg-muted leading-relaxed line-clamp-4">
                {r.description}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-5 font-mono text-[11px] text-fg-subtle">
                {r.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: languageDot(r.language) }}
                      aria-hidden="true"
                    />
                    {r.language}
                  </span>
                )}
                {typeof r.stargazers_count === 'number' && r.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <Star size={11} className="fill-current" />
                    {r.stargazers_count}
                  </span>
                )}
                <span>updated {relativeTime(r.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}