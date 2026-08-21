'use client';
import { useReveal } from './useReveal';
import { useNarrow } from './useNarrow';
import { FEATURED, SMALL } from '@/lib/data';

function FeaturedRow({ p, index, narrow }: { p: (typeof FEATURED)[number]; index: number; narrow: boolean }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const reversed = !narrow && index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`flex flex-wrap gap-12 items-center mb-24 transition-all duration-700 ease-out ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col`}
      style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'none' : 'translateY(28px)' }}
    >
      <div className="flex-1 min-w-[280px] basis-full lg:basis-[420px] bg-cream border-[3px] border-ink rounded-lg p-7 shadow-[6px_6px_0_#111827]">
        <div className="font-serifTC font-bold text-[26px] sm:text-[30px] md:text-[34px] text-ink">{p.title}</div>
        <div className="w-16 h-[5px] bg-accent border-[1.5px] border-ink rounded mt-3.5 mb-5.5" />
        <div className="text-xs font-bold tracking-[.06em] text-ink leading-[1.9] mb-5">{p.tags}</div>
        {p.bullets.map((b, i) => (
          <div key={i} className="flex gap-2.5 text-[15px] leading-[1.8] text-ink mb-2">
            <span className="text-accent flex-shrink-0 font-extrabold">▸</span>
            <span>{b}</span>
          </div>
        ))}
        <div className="flex gap-7 mt-5.5 flex-wrap">
          <div className="text-sm text-ink">
            <span className="font-extrabold">DEMO：</span>
            <a href={p.demo} target="_blank" rel="noreferrer" className="font-bold underline">{p.demoLabel}</a>
          </div>
          <div className="text-sm text-ink">
            <span className="font-extrabold">GITHUB：</span>
            <a href={p.github} target="_blank" rel="noreferrer" className="font-bold underline break-all">{p.githubLabel}</a>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[280px] max-w-[460px] w-full lg:w-auto mx-auto lg:mx-0 rounded-lg border-[3px] border-ink shadow-[6px_6px_0_#111827] bg-cream">
        <img src={p.thumbSrc} alt={p.title} className="block w-full h-auto rounded-[5px]" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headRef, revealed: headRevealed } = useReveal<HTMLDivElement>();
  const { ref: gridRef, revealed: gridRevealed } = useReveal<HTMLDivElement>();
  const { narrow } = useNarrow();

  return (
    <section id="projects" className="py-28 px-6 sm:px-10 md:px-20 bg-yellow border-y-[3px] border-ink">
      <div className="max-w-[992px] mx-auto">
        <div ref={headRef} className="font-display font-extrabold text-[36px] sm:text-[44px] md:text-[52px] text-ink uppercase mb-16">
          Side Project
        </div>

        {FEATURED.map((p, i) => (
          <FeaturedRow key={p.title} p={p} index={i} narrow={narrow} />
        ))}

        <div
          ref={gridRef}
          className="grid gap-7 transition-all duration-700 ease-out grid-cols-2 sm:grid-cols-4"
          style={{ opacity: gridRevealed ? 1 : 0, transform: gridRevealed ? 'none' : 'translateY(28px)' }}
        >
          {SMALL.map((sp) => (
            <div
              key={sp.title}
              onClick={sp.demo ? () => window.open(sp.demo, '_blank', 'noreferrer') : undefined}
              className={`bg-cream rounded-lg overflow-hidden border-[3px] border-ink shadow-[5px_5px_0_#111827] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#111827] ${sp.demo ? 'cursor-pointer' : ''}`}
            >
              {sp.thumbSrc && <img src={sp.thumbSrc} alt={sp.title} className="block w-full h-[150px] object-cover border-b-[3px] border-ink" />}
              <div className="pl-[10px] pr-5.5 pt-5 pb-6">
                <div className="font-serifTC font-bold text-xl text-ink mb-1.5">{sp.title}</div>
                <div className="text-xs text-ink leading-[1.7] mb-3.5">{sp.tags}</div>
                <div className="flex gap-4 text-[13px]">
                  {sp.demo && <a href={sp.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="font-bold underline">DEMO</a>}
                  {sp.github && <a href={sp.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="font-bold underline">GITHUB</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
