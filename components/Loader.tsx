'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hide = () => setTimeout(() => setShow(false), 300);
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide);
    return () => window.removeEventListener('load', hide);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-cream flex flex-col items-center justify-center gap-5">
      <div className="relative w-[42px] h-[42px] rounded-full bg-yellow-pac border-[3px] border-ink shadow-[3px_3px_0_#111827] animate-pacman-chomp">
        <span className="absolute top-2 left-[19px] w-[5px] h-[5px] rounded-full bg-ink" />
      </div>
      <div className="flex gap-2">
        <span className="w-2 h-2 rounded-full bg-ink animate-sprite-bob" style={{ animationDelay: '0s' }} />
        <span className="w-2 h-2 rounded-full bg-ink animate-sprite-bob" style={{ animationDelay: '.15s' }} />
        <span className="w-2 h-2 rounded-full bg-ink animate-sprite-bob" style={{ animationDelay: '.3s' }} />
      </div>
      <div className="font-display font-extrabold text-sm tracking-[.1em] text-ink">LOADING...</div>
    </div>
  );
}
