'use client';
import { useEffect, useState } from 'react';

/** Two breakpoints: narrow (<768, tablet/mobile layout) and veryNarrow (<576, compact nav). */
export function useNarrow() {
  const [narrow, setNarrow] = useState(false);
  const [veryNarrow, setVeryNarrow] = useState(false);
  useEffect(() => {
    const onResize = () => {
      setNarrow(window.innerWidth < 768);
      setVeryNarrow(window.innerWidth < 576);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return { narrow, veryNarrow };
}
