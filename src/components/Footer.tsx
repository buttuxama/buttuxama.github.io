import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../content/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-narrow flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg-muted">
          © {year} {profile.name} · Built with React, TypeScript & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-fg-muted hover:text-fg hover:bg-surface transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-fg-muted hover:text-fg hover:bg-surface transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-md p-2 text-fg-muted hover:text-fg hover:bg-surface transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}