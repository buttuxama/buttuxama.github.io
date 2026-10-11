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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.file}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/60 hover:bg-surface-2"
          >
            <div className="relative aspect-[2000/1414] w-full overflow-hidden border-b border-border bg-canvas">
              <img
                src={cert.file}
                alt={`${cert.title} — ${cert.issuer} certificate`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-start justify-between gap-3 p-5">
              <div>
                <h3 className="font-serif text-lg tracking-tight">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{cert.issuer}</p>
              </div>
              <ExternalLink
                size={16}
                className="mt-1 shrink-0 text-fg-subtle transition-colors group-hover:text-accent"
              />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}