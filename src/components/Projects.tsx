import { ExternalLink, Star } from 'lucide-react';
import { Section } from './Section';
import projects from '../content/projects-source.json';
import type { GitHubRepo } from '../content/projects-source';
import { relativeTime } from '../lib/format-time';

const repos = projects as GitHubRepo[];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've shipped"
      description="Public work on GitHub. Click a card to open the repository."
    >
      {repos.length === 0 ? (
        <p className="text-sm text-fg-muted">
          Projects are generated from GitHub at build time. None were found —
          either the fetch failed or the account has no public repos with a
          description.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <a
              key={r.name}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/60 hover:bg-surface-2"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg tracking-tight break-all">
                  {r.name}
                </h3>
                <ExternalLink
                  size={16}
                  className="mt-1 shrink-0 text-fg-subtle transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                {r.description}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-fg-subtle">
                {r.language && (
                  <span className="rounded-md border border-border bg-canvas/40 px-2 py-0.5">
                    {r.language}
                  </span>
                )}
                {typeof r.stargazers_count === 'number' && r.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} className="fill-current" />
                    {r.stargazers_count}
                  </span>
                )}
                <span>Updated {relativeTime(r.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}