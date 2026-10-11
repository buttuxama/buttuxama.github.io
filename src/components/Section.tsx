import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-12 md:py-16 scroll-mt-20', className)}
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-4xl leading-[1.1] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base md:text-lg text-fg-muted">
              {description}
            </p>
          )}
        </div>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}