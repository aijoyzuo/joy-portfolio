'use client';
import { useReveal } from './useReveal';
import { useNarrow } from './useNarrow';
import { OTHERS, OtherItem } from '@/lib/data';

function Circle({ o, width }: { o: OtherItem; width: number }) {
  return (
    <div className="flex flex-col items-center text-center flex-none" style={{ width }}>
      <div className="w-full aspect-square rounded-full overflow-hidden border-[3px] border-ink shadow-[5px_5px_0_#111827] mb-4 bg-yellow" style={{ maxWidth: 172 }}>
        {o.thumbSrc ? (
          <img src={o.thumbSrc} alt={o.title} className="block w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-bold text-ink px-3">{o.title}</div>
        )}
      </div>
      <div className="text-[15px] font-extrabold text-ink mb-1">{o.title}</div>
      {o.sub && <div className="text-sm text-ink">{o.sub}</div>}
    </div>
  );
}

export default function Others() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const { narrow } = useNarrow();
  const itemWidth = narrow ? 142 : 172;
  const duration = narrow ? '18s' : '28s';

  const rowFull = narrow ? [...OTHERS.slice(0, 3), ...OTHERS.slice(0, 3)] : [...OTHERS, ...OTHERS];
  const row2 = [...OTHERS.slice(3, 6), ...OTHERS.slice(3, 6)];

  return (
    <section id="others" className="py-28 px-6 sm:px-10 md:px-20 bg-cream">
      <div
        ref={ref}
        className="max-w-[992px] mx-auto transition-all duration-700 ease-out"
        style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'none' : 'translateY(28px)' }}
      >
        <div className="font-display font-extrabold text-[36px] sm:text-[44px] md:text-[52px] text-ink uppercase mb-14">
          What&apos;s more
        </div>

        <div className="overflow-hidden w-full">
          <div className="flex gap-8 w-max animate-marquee-l" style={{ ['--marquee-duration' as any]: duration }}>
            {rowFull.map((o, i) => (
              <Circle key={i} o={o} width={itemWidth} />
            ))}
          </div>
        </div>

        {narrow && (
          <div className="overflow-hidden w-full mt-8">
            <div className="flex gap-8 w-max animate-marquee-r" style={{ ['--marquee-duration' as any]: duration }}>
              {row2.map((o, i) => (
                <Circle key={i} o={o} width={itemWidth} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
