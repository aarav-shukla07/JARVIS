'use client';

import { useEffect, useRef, useState } from 'react';

export default function PostJarvisCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lerpedPos, setLerpedPos] = useState({ x: 0, y: 0 });
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      setMousePos(pos);
      mousePosRef.current = pos;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isInteractive =
          el.tagName === 'IMG' || el.closest('a, button, p, h1, h2, h3, h4, span');
        setHoveringInteractive(!!isInteractive);
      }
    };

    const handleScroll = () => {
      const jarvis = document.querySelector('#jarvis');
      if (jarvis) {
        const rect = jarvis.getBoundingClientRect();
        // Show only if Jarvis has fully left the screen
        setShowCursor(rect.bottom <= 0);
      } else {
        setShowCursor(true); // fallback to always show
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    handleScroll(); // check on load

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const animate = () => {
      setLerpedPos((prev) => ({
        x: lerp(prev.x, mousePosRef.current.x, 0.2),
        y: lerp(prev.y, mousePosRef.current.y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!showCursor) return null;

  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        transform: `translate3d(${lerpedPos.x}px, ${lerpedPos.y}px, 0)`,
      }}
    >
      <div
        className="rounded-full transition-all duration-300"
        style={{
          width: '15px',
          height: '15px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: hoveringInteractive
            ? 'rgba(248, 246, 246, 0.84)'
            : '#fffec4',
          mixBlendMode: 'difference',
        }}
      />
    </div>
  );
}
