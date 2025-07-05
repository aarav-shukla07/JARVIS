'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './scrollingGallery.css';

const images = [
  '/scrolls/scroll1.png',
  '/scrolls/scroll2.png',
  '/scrolls/scroll3.png',
  '/scrolls/scroll4.png',
  '/scrolls/scroll5.png',
  '/scrolls/scroll6.png',
];

export default function ScrollingGallery() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let offset = 0;
    const speed = 0.8;
    const animate = () => {
      offset += speed; // move LEFT ➜ RIGHT
      if (offset >= strip.scrollWidth / 2) {
        offset = 0;
      }
      strip.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="strip-wrapper">
      <div className="fade-left" />
      <div className="fade-right" />
      
      {/* Tilted wrapper */}
      <div className="tilt-container">
        <div className="strip-track" ref={stripRef}>
          {[...images, ...images].map((src, idx) => (
            <div className="strip-image" key={idx}>
              <Image
                src={src}
                alt={`strip-${idx}`}
                width={150}
                height={150}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom horizontal line */}
      <div className="w-full h-[2px] bg-white mt-50" />
    </div>
  );
}
