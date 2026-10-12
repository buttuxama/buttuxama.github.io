import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [open, setOpen] = useState(false);
  const justOpenedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (e: MouseEvent) => {
      if (justOpenedRef.current) {
        justOpenedRef.current = false;
        return;
      }
      const target = e.target as HTMLElement;
      if (target.closest('[data-nav]')) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggle = () => {
    justOpenedRef.current = true;
    setOpen((o) => !o);
  };

  const close = () => setOpen(false);

  return (
    <header
      data-nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled || open
          ? 'bg-bg/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="container-narrow flex h-14 items-center justify-between">
        <a
          href="#top"
          onClick={close}
          className="font-mono text-sm text-fg hover:text-accent transition-colors whitespace-nowrap"
        >
          <span className="text-syntax-comment">~/</span>
          <span>{profile.shortName.toLowerCase().replace(' ', '-')}</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" data-nav>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-fg-muted hover:text-fg hover:bg-panel transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-md border border-border px-3 py-1.5 text-sm text-fg hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={toggle}
          className="md:hidden -mr-2 rounded-md p-2 text-fg-muted hover:text-fg hover:bg-panel transition-colors"
          data-nav
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          data-nav
          className="md:hidden border-b border-border bg-bg/95 backdrop-blur-md"
        >
          <nav className="container-narrow flex flex-col py-2" data-nav>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-md px-3 py-3 text-sm text-fg-muted hover:text-fg hover:bg-panel transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="rounded-md px-3 py-3 text-sm text-fg-muted hover:text-fg hover:bg-panel transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}