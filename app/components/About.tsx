'use client';

import { useEffect, useRef, useState } from 'react';
import AboutTextContent from './AboutTextContent'; // ⬅️ Import the content component

export default function OverlayNext() {
  const [scrollY, setScrollY] = useState(0);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerHeight = 1.2 * window.innerHeight;

  const translateY = scrollY >= triggerHeight
    ? 0
    : 100 - (scrollY / triggerHeight) * 100;

  return (
    <div>
      <div ref={triggerRef} style={{ height: triggerHeight }} />

      <div
        className="w-full min-h-screen bg-[#00052a] text-white transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(${translateY}%)`,
        }}
      >
        <AboutTextContent />
      </div>
    </div>
  );
}
