'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import './scrollingGallery.css';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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
      if (offset >= strip.scrollWidth / 5) {
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

      {/*Footer Section */}
      <footer className={`bg-[#00052a] text-white px-10 sm:px-12 py-10 ${jetbrainsMono.className}`}>
      {/* Grid without max-width to stretch full screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-normal text-gray-400 mb-4">ABOUT</h3>
          <ul className="space-y-2">
            <li><Link href="/work" className="hover:text-[#fffec4] transition">Works</Link></li>
            <li><Link href="/about" className="hover:text-[#fffec4] transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#fffec4] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-xl font-normal text-gray-700 mb-4">SOCIALS</h3>
          <ul className="space-y-2">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fffec4] transition">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fffec4] transition">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fffec4] transition">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Right Text */}
      <div className="mt-12 text-sm text-gray-500 text-right pr-1 sm:pr-4">
        2025 © JARVIS
      </div>
    </footer>
    </div>
  );
}
