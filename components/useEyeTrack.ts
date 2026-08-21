'use client';
import { useEffect, useRef, useState } from 'react';

/** Tracks the mouse and returns a small pupil translate() for an eye element. */
export function useEyeTrack<T extends HTMLElement>(maxDist = 4) {
  const ref = useRef<T | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const dist = Math.min(maxDist, Math.hypot(dx, dy) / 8);
      const angle = Math.atan2(dy, dx);
      setPos({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [maxDist]);

  return { ref, transform: `translate(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px)` };
}
