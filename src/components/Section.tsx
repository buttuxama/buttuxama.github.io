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
      className={cn('py-14 md:py-20 scroll-mt-16', className)}
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-2 font-mono text-sm text-syntax-comment">
              // {eyebrow.toLowerCase()}
            </p>
          )}
          <h2 className="font-mono text-2xl md:text-3xl leading-[1.15] tracking-tight text-fg">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base text-fg-muted font-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}