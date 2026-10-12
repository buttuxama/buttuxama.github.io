import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../content/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-narrow flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-fg-muted">
          <span className="text-syntax-comment">// </span>© {year} {profile.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-fg-muted hover:text-fg hover:bg-panel transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-fg-muted hover:text-fg hover:bg-panel transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-md p-2 text-fg-muted hover:text-fg hover:bg-panel transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}