'use client';
import { useReveal } from './useReveal';
import { useEyeTrack } from './useEyeTrack';

const BASE = process.env.NODE_ENV === 'production' ? '/joy-portfolio' : '';

export default function Hero() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const eye = useEyeTrack<HTMLSpanElement>(9);

  return (
    <section className="relative pt-[150px] px-6 sm:px-10 md:px-20 pb-[90px] bg-accent overflow-hidden border-b-[3px] border-ink">
      <div className="absolute top-10 right-[6%] w-16 h-16 rounded-lg border-[3px] border-ink bg-yellow rotate-12" />

      <div className="absolute bottom-10 left-[8%] w-20 h-9 animate-sprite-patrol">
        <div className="relative w-[34px] h-[34px] rounded-full bg-yellow-pac border-[3px] border-ink shadow-[3px_3px_0_#111827] animate-pacman-chomp">
          <span className="absolute top-[6px] left-[15px] w-1 h-1 rounded-full bg-ink" />
        </div>
        <span className="absolute top-[15px] left-10 w-[5px] h-[5px] rounded-full bg-ink" />
        <span className="absolute top-[15px] left-14 w-[5px] h-[5px] rounded-full bg-ink" />
      </div>

      <div className="max-w-[992px] mx-auto relative z-[2] flex flex-col items-center text-center">
        <div
          ref={ref}
          className="mb-10 rounded-lg max-w-[720px] w-full border-[3px] border-ink shadow-[8px_8px_0_#111827] bg-cream transition-all duration-[900ms] ease-out"
          style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'none' : 'translateY(28px)' }}
        >
          <img src={`${BASE}/assets/hero.webp`} alt="Joy 旅途剪影" className="block w-full h-auto max-h-[420px] object-cover rounded-[5px]" />
        </div>
        <div className="flex items-center gap-[.02em] font-display font-extrabold text-[48px] sm:text-[64px] md:text-[96px] leading-none text-cream tracking-[-.01em] uppercase" style={{ textShadow: '4px 4px 0 #111827' }}>
          <span>Hi, I&apos;m J</span>
          <span ref={eye.ref} className="inline-flex items-center justify-center w-[.72em] h-[.72em] rounded-full border-ink bg-white relative" style={{ borderWidth: '.055em', borderStyle: 'solid', textShadow: 'none' }}>
            <span className="block w-[.32em] h-[.32em] rounded-full bg-ink" style={{ transform: eye.transform }} />
          </span>
          <span>Y</span>
        </div>
      </div>
    </section>
  );
}
