'use client';

import { useEffect, useRef, useState } from 'react';

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

  // Set trigger height after full Jarvis scroll — same as Landing height (e.g., 200vh)
  const triggerHeight = 1.2 * window.innerHeight;

  return (
    <div>
      {/* Invisible trigger that pushes content below Landing */}
      <div ref={triggerRef} style={{ height: triggerHeight }}></div>

      {/* Overlay section only starts after Jarvis is fully shown */}
      <div
        className="fixed top-0 left-0 w-full z-30"
        style={{
          transform: scrollY >= triggerHeight ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.6s ease',
        }}
      >
        <div className="h-screen bg-[#00052a] text-white flex items-center justify-center text-4xl">
          OVERLAY SECTION
        </div>
      </div>
    </div>
  );
}
