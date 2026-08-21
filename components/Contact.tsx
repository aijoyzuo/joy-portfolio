'use client';
import { useReveal } from './useReveal';

export default function Contact() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-32 px-6 sm:px-10 md:px-20 bg-accent overflow-hidden border-t-[3px] border-ink">
      <div className="absolute top-[50px] right-[10%] w-14 h-14 rounded-lg border-[3px] border-ink bg-yellow -rotate-[8deg]" />
      <div
        ref={ref}
        className="max-w-[992px] mx-auto flex flex-wrap gap-10 items-center justify-between transition-all duration-700 ease-out"
        style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'none' : 'translateY(28px)' }}
      >
        <div>
          <div className="font-display font-extrabold text-[34px] sm:text-[44px] md:text-[54px] leading-[1.15] text-cream uppercase mb-7" style={{ textShadow: '3px 3px 0 #111827' }}>
            Can&apos;t wait to<br />collaborate!
          </div>
          <a
            href="mailto:cctaijoy@gmail.com"
            className="inline-block px-8 py-[13px] rounded-lg border-[3px] border-ink bg-yellow text-ink text-sm font-extrabold tracking-[.02em] cursor-pointer whitespace-nowrap shadow-[4px_4px_0_#111827] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111827] no-underline"
          >
            Work with me
          </a>
        </div>
        <div className="text-[15px] leading-[2.1] text-cream font-semibold">
          <div>Email：<a href="mailto:cctaijoy@gmail.com" className="text-cream font-extrabold underline">cctaijoy@gmail.com</a></div>
          <div>GitHub：<a href="https://github.com/aijoyzuo" target="_blank" rel="noreferrer" className="text-cream font-extrabold underline">github.com/aijoyzuo</a></div>
        </div>
      </div>
    </section>
  );
}
