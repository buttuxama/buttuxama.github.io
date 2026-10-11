import { ArrowRight, Github, Linkedin, FileDown, Mail } from 'lucide-react';
import { profile } from '../content/profile';

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container-narrow">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.tagline}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              {profile.name.split(' ')[0]}{' '}{profile.name.split(' ')[1]}{' '}
              <span className="text-accent">
                {profile.name.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="mt-5 text-sm text-fg-muted">
              {profile.location} · {profile.relocation}
            </p>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-fg-muted leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-canvas hover:bg-accent-hover transition-colors"
              >
                View Experience <ArrowRight size={16} />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
              >
                <FileDown size={16} /> Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg-muted hover:text-fg transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg-muted hover:text-fg transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-fg-muted hover:text-fg transition-colors"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/avatar.jpg"
              alt={profile.name}
              width={160}
              height={160}
              className="h-40 w-40 rounded-2xl border border-border object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}