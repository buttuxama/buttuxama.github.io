import { useEffect, useState } from 'react';
import { cn } from '../lib/cn';
import { profile } from '../content/profile';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled
          ? 'bg-canvas/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-fg hover:text-accent transition-colors"
        >
          {profile.shortName}
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-fg-muted hover:text-fg hover:bg-surface transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden sm:inline-flex rounded-md border border-border px-3 py-1.5 text-sm text-fg hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}