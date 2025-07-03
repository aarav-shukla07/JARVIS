'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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

  const leftSlide = `translateX(-${scrollProgress * 100}%)`;
  const rightSlide = `translateX(${scrollProgress * 100}%)`;
  const jarvisTranslateY = 40 - scrollProgress * 40; // From 40% to 0%
  const jarvisVisible = scrollProgress > 0.8;
  const jarvisOpacity = scrollProgress;

  return (
    <section ref={sectionRef} className="relative h-[200vh] w-full">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex bg-white">
        {/* Left Image */}
        <div
          className="w-1/2 h-full relative"
          style={{ transform: leftSlide, transition: 'transform 0.1s linear' }}
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

        {/* Right Image */}
        <div
          className="w-1/2 h-full relative"
          style={{ transform: rightSlide, transition: 'transform 0.1s linear' }}
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

        {/* JARVIS reveal — inside sticky area */}
        <div
          className={`absolute top-0 left-0 w-full h-screen flex items-center justify-center transition-opacity duration-300 ${
    jarvisVisible ? "opacity-100" : "opacity-0"
  }`}
  style={{
    transform: `translateY(${jarvisTranslateY}%)`,
    backgroundColor: 'white',
  }}
        >
          <h1 className="text-black text-5xl md:text-7xl font-bold font-mono">
            JARVIS
          </h1>
        </div>

        {/* Down Arrow */}
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-300 ${
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
