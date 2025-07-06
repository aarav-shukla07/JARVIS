'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import JarvisSection from './JarvisSection';

const leftImages = [
  '/images-left/left1.png',
  '/images-left/left2.png',
  '/images-left/left3.png',
  '/images-left/left4.png',
];
const rightImages = [
  '/images-right/right1.png',
  '/images-right/right2.png',
  '/images-right/right3.png',
];

export default function Landing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const viewportHeight = window.innerHeight;
      const scrollTop = -rect.top;
      const progress = Math.min(Math.max(scrollTop / viewportHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftSlide = `translateX(-${scrollProgress * 50}%)`;
  const rightSlide = `translateX(${scrollProgress * 50}%)`;
  const jarvisTranslateY = 40 - scrollProgress * 40;
  const jarvisVisible = scrollProgress > 0.9;
  const jarvisOpacity = Math.min(scrollProgress / 0.9, 1);

  return (
    <section ref={sectionRef} className="relative h-[200vh] w-full bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Left Image (Top on mobile) */}
        <div
          className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full"
          style={{
            transform: leftSlide,
            transition: 'transform 0.2s linear',
          }}
        >
          {leftImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Left Slide"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                i === leftIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Right Image (Bottom on mobile) */}
        <div
          className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full"
          style={{
            transform: rightSlide,
            transition: 'transform 0.2s linear',
          }}
        >
          {rightImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Right Slide"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                i === rightIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Jarvis Reveal */}
        <div
          id="jarvis"
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${
            jarvisVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${jarvisTranslateY}%)`,
            backgroundColor: 'white',
            zIndex: 10,
          }}
        >
          <JarvisSection />
        </div>

        {/* Scroll Button - Always centered */}
        <div
          className={`absolute bottom-[80px] w-full flex justify-center z-20 transition-opacity duration-300 ${
            scrollProgress > 0 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="bg-white rounded-[15px] w-[32px] h-[48px] flex items-center justify-center shadow-md animate-bounce">
            <span className="text-black text-xl">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
