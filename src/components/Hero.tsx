import { useEffect, useRef, useState } from 'react';
import { profile } from '../content/profile';

type ReplLine =
  | { kind: 'prompt'; text: string }
  | { kind: 'string'; text: string }
  | { kind: 'plain'; text: string };

const SCRIPT: ReplLine[] = [
  { kind: 'prompt', text: 'import engineer' },
  { kind: 'prompt', text: 'engineer.name' },
  { kind: 'string', text: `'${profile.name}'` },
  { kind: 'prompt', text: 'engineer.role' },
  { kind: 'string', text: `'${profile.tagline}'` },
  { kind: 'prompt', text: 'engineer.location' },
  { kind: 'string', text: `'${profile.location.replace(/,.*$/, '')}, DE'` },
  { kind: 'prompt', text: 'engineer.stack' },
  {
    kind: 'string',
    text: "['Python', 'RAG', 'AI Agents', 'FastAPI', 'LangGraph', 'Angular', 'ASP.NET Core', 'Docker']",
  }
];

const TYPE_DELAY_MS = 22;
const LINE_GAP_MS = 90;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

function classForLine(line: ReplLine): string {
  if (line.kind === 'prompt') return 'text-accent';
  if (line.kind === 'string') return 'text-syntax-string';
  return 'text-fg';
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState<ReplLine[]>(
    reducedMotion ? SCRIPT : [{ kind: 'plain', text: '>>>' }],
  );
  const [done, setDone] = useState(reducedMotion);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(SCRIPT);
      setDone(true);
      return;
    }

    setVisible([{ kind: 'plain', text: '>>>' }]);
    setDone(false);

    let lineIdx = 0;
    let charIdx = 0;
    let timer: number;

    const tick = () => {
      if (lineIdx >= SCRIPT.length) {
        setDone(true);
        return;
      }
      const line = SCRIPT[lineIdx];
      if (charIdx < line.text.length) {
        charIdx += 1;
        setVisible(SCRIPT.slice(0, lineIdx).concat([{ ...line, text: line.text.slice(0, charIdx) }]));
        timer = window.setTimeout(tick, TYPE_DELAY_MS);
      } else {
        lineIdx += 1;
        charIdx = 0;
        timer = window.setTimeout(tick, LINE_GAP_MS);
      }
    };

    timer = window.setTimeout(tick, 350);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <section id="top" className="relative pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container-narrow">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">
          <div className="min-w-0">
            <p className="font-mono text-sm text-syntax-comment">
              // {profile.tagline.toLowerCase()}
            </p>
            <h1 className="mt-3 font-mono text-3xl md:text-4xl leading-[1.1] tracking-tight text-fg">
              {profile.name}
            </h1>
            <p className="mt-2 font-sans text-sm text-fg-muted">
              {profile.location}
            </p>
            <p className="mt-1 font-sans text-sm text-fg-subtle">
              {profile.relocation}
            </p>

            <div
              ref={containerRef}
              className="mt-8 rounded-md border border-border bg-panel p-4 md:p-5 font-mono text-sm leading-relaxed"
              aria-label="Interactive Python REPL introducing the engineer"
            >
              {visible.map((line, i) => (
                <div key={i} className={classForLine(line)}>
                  <pre className="m-0 font-mono whitespace-pre-wrap break-words">
{line.kind === 'prompt' ? `>>> ${line.text}` : line.text}
                  </pre>
                </div>
              ))}
              {!done && (
                <span
                  aria-hidden="true"
                  className="inline-block h-4 w-2 -mb-0.5 bg-accent align-middle"
                  style={{ animation: 'caret-blink 1s steps(1) infinite' }}
                />
              )}
            </div>

            <p className="mt-6 max-w-2xl font-sans text-base md:text-lg text-fg-muted leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-fg-muted border-b border-border hover:text-accent hover:border-accent transition-colors"
              >
                github
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-fg-muted border-b border-border hover:text-accent hover:border-accent transition-colors"
              >
                linkedin
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-fg-muted border-b border-border hover:text-accent hover:border-accent transition-colors"
              >
                email
              </a>
              <a
                href="/resume.pdf"
                className="text-fg-muted border-b border-border hover:text-accent hover:border-accent transition-colors"
              >
                resume.pdf
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/avatar.jpg"
              alt={profile.name}
              width={112}
              height={112}
              className="h-28 w-28 rounded-md border border-border object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes caret-blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}