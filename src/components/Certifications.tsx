import { Section } from './Section';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../content/certifications';

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Courses & credentials"
      description="Selected certifications I've earned. Click a card to view the full certificate."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.file}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-md border border-border bg-panel transition-colors hover:bg-panel-hover hover:border-accent/50"
          >
            <div className="relative aspect-[2000/1414] w-full overflow-hidden border-b border-border bg-bg">
              <img
                src={cert.file}
                alt={`${cert.title} — ${cert.issuer} certificate`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-mono text-sm font-medium tracking-tight text-fg">
                  {cert.title}
                </h3>
                <p className="mt-1 font-sans text-xs text-fg-muted">
                  {cert.issuer}
                </p>
              </div>
              <ExternalLink
                size={14}
                className="mt-1 shrink-0 text-fg-subtle transition-colors group-hover:text-accent"
              />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}