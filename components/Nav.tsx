'use client';
import { useNarrow } from './useNarrow';
import { useEyeTrack } from './useEyeTrack';

function scrollToEl(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 56;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Nav() {
  const { narrow, veryNarrow } = useNarrow();
  const eye = useEyeTrack<HTMLSpanElement>(4);
  const linkSize = veryNarrow ? 'text-[11px]' : 'text-sm';
  const navGap = veryNarrow ? 'gap-2' : 'gap-4 sm:gap-8 md:gap-8';
  const btnPad = veryNarrow ? 'px-3 py-[9px]' : 'px-[22px] py-[9px]';

  return (
    <nav className="fixed top-0 left-0 right-0 min-h-[66px] flex flex-wrap items-center justify-between gap-y-2 px-4 sm:px-10 md:px-16 py-3 z-[100] border-b-[3px] border-ink bg-yellow">
      <div className="flex items-baseline gap-3.5">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-[1px] font-display font-extrabold text-[22px] text-ink tracking-[.02em] uppercase cursor-pointer"
        >
          <span>J</span>
          <span ref={eye.ref} className="inline-flex items-center justify-center w-5 h-5 rounded-full border-[2.5px] border-ink bg-white relative mx-[1px]">
            <span className="block w-2 h-2 rounded-full bg-ink" style={{ transform: eye.transform }} />
          </span>
          <span>Y</span>
        </div>
        {!narrow && (
          <div className="text-[11px] font-bold tracking-[.14em] text-ink whitespace-nowrap px-2 py-[3px] border-2 border-ink rounded-lg bg-white">
            FRONTEND DEVELOPER
          </div>
        )}
      </div>
      <div className={`flex flex-wrap items-center justify-end ${navGap} ml-auto flex-1`}>
        <div onClick={() => scrollToEl('about')} className={`${linkSize} font-bold tracking-[.02em] cursor-pointer whitespace-nowrap hover:text-accent`}>About me</div>
        <div onClick={() => scrollToEl('projects')} className={`${linkSize} font-bold tracking-[.02em] cursor-pointer whitespace-nowrap hover:text-accent`}>Side Project</div>
        <div onClick={() => scrollToEl('others')} className={`${linkSize} font-bold tracking-[.02em] cursor-pointer whitespace-nowrap hover:text-accent`}>Others</div>
        <a
          href="mailto:cctaijoy@gmail.com"
          className={`${btnPad} rounded-lg border-[3px] border-ink bg-accent text-white ${veryNarrow ? 'text-[20px]' : 'text-[13px]'} font-extrabold tracking-[.02em] cursor-pointer whitespace-nowrap shadow-[4px_4px_0_#111827] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111827] no-underline`}
        >
          {veryNarrow ? '✉' : 'Work with me'}
        </a>
      </div>
    </nav>
  );
}
