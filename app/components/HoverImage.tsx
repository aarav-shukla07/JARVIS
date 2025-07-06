'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  '/hover/image1.png',
  '/hover/image2.png',
  '/hover/image3.png',
  '/hover/image4.png',
  '/hover/image5.png',
  '/hover/image6.png',
  '/hover/image7.png',
];

export default function HoverImages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoverImage, setHoverImage] = useState<{
    src: string;
    x: number;
    y: number;
    key: number;
  } | null>(null);
  const imageIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const keyRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const bounds = sectionRef.current.getBoundingClientRect();
      const inBounds =
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom;

      if (!inBounds) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      setHoverImage({
        src: images[imageIndex.current],
        x: e.clientX,
        y: e.clientY,
        key: keyRef.current++,
      });

      imageIndex.current = (imageIndex.current + 1) % images.length;

      // Remove after animation
      timeoutRef.current = setTimeout(() => {
        setHoverImage(null);
      }, 1000); // same as fade duration
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 z-30 pointer-events-none">
      {hoverImage && (
        <div
          key={hoverImage.key}
          style={{
            position: 'absolute',
            left: hoverImage.x,
            top: hoverImage.y,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.4s ease-in-out',
            opacity: 1,
          }}
          className="animate-fade-out"
        >
          <Image
            src={hoverImage.src}
            alt="hover-img"
            width={160}
            height={90}
            className="rounded-md object-cover shadow-md"
          />
        </div>
      )}
    </div>
  );
}
