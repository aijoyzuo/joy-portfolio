'use client';
import { useReveal } from './useReveal';
import { SKILLS } from '@/lib/data';

export default function About() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-28 px-6 sm:px-10 md:px-20 bg-cream">
      <div className="max-w-[992px] mx-auto" ref={ref}>
        <div
          className="flex flex-wrap gap-12 items-start transition-all duration-700 ease-out"
          style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'none' : 'translateY(28px)' }}
        >
          <div className="font-display font-extrabold text-[40px] sm:text-[52px] md:text-[64px] text-ink uppercase flex-none">
            About me
          </div>
          <div className="text-[17px] leading-[2] text-ink flex-1 min-w-[280px] pt-2">
            前端工程師，主要使用 React、Next.js 與 TypeScript 開發互動式網頁應用。具備 REST API 串接、狀態管理、RWD 及後台系統開發經驗，目前持續深化資料庫與全端開發能力。
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-11 justify-center sm:justify-start">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="px-4 py-[7px] rounded-lg border-[2.5px] border-ink text-sm font-bold text-ink bg-yellow shadow-[3px_3px_0_#111827] transition-all duration-150 hover:bg-accent hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#111827]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
