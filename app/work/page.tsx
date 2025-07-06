'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import { jetbrainsMono, poppins } from '@/lib/fonts';
import { useState } from 'react';

const featuredWorks = [
  {
    src: '/future/future1.png',
    hoverSrc: '/future/future1-hover.png',
    title: 'VR BASED PHOBIA THERAPY',
    subtitle: 'VR + PSYCHOLOGY',
    link: '/work/1',
  },
  {
    src: '/future/future2.avif',
    hoverSrc: '/future/future2-hover.avif',
    title: 'CYBER INTRUSION PATTERN IDENTIFIER',
    subtitle: 'PROJECT',
    link: '/work/2',
  },
  {
    src: '/future/future3.avif',
    hoverSrc: '/future/future3-hover.avif',
    title: 'DEEPFAKE DETECTION SUITE',
    subtitle: 'PROJECT',
    link: '/work/3',
  },
  {
    src: '/future/future4.png',
    hoverSrc: '/future/future4-hover.png',
    title: 'AI-BASED NPC EMOTION ENGINE',
    subtitle: 'GAME DEV + AFFECTIVE COMPUTING',
    link: '/work/4',
  },
];

export default function WorkPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#00052a] text-white min-h-screen w-full">
      {/* Custom Navbar */}
      <div className="flex items-center justify-between pl-[100px] pr-[100px]">
        <div className="text-[18px] md:text-[18px] display font-normal text-lg leading-[1.2] max-w-[40px] py-[21px] transition-all duration-300 hover:-translate-y-1.5">
          <span className={`${jetbrainsMono.className}`} style={{ letterSpacing: "-0.02em" }}>
            <a href="/">JARVIS</a>
          </span>
        </div>

        <nav
          className={`${poppins.className} hidden md:flex space-x-[40px] font-medium py-[18px] pl-[45px]`}
        >
          {["Work", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="hover:-translate-y-1.5 transition-transform duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="relative group hidden md:block py-[10px]">
          <a
            href="#join"
            className="pl-[24px] pr-[22px] py-[8px] h-[44px] font-normal inline-flex items-center justify-center relative
                     text-white bg-transparent rounded-full 
                     transition-[background,color,transform] duration-500 ease-in-out
                     group-hover:bg-white group-hover:text-black
                     [transition-property:background,color,transform,border-radius] [transition-duration:60ms] group-hover:rounded-md"
          >
            <span className="relative flex items-center gap-[2px]">
              <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1">
                Join Us
              </span>
              <span className="ml-[1px] transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 opacity-0">
                🡢
              </span>
            </span>
            <span className="absolute bottom-0 left-1/2 w-3 h-3 bg-black rounded-full blur-sm opacity-0 scale-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 -translate-x-1/2 translate-y-2 w-[98px]" />
          </a>
        </div>
      </div>

      {/* Page Title & Description */}
      <div className="text-center px-6 md:px-20 mt-20 mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-6">FEATURED WORKS</h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
          A showcase of our finest creations—where creativity meets impact. From bold branding to
          immersive digital experiences, each project reflects our passion for design and innovation.
          Explore how we bring ideas to life through thoughtful execution and striking visuals.
        </p>
      </div>

      {/* Works Showcase */}
      <div className="flex flex-col gap-20 px-6 md:px-24 pb-12">
        {featuredWorks.map((work, index) => (
          <Link key={index} href={work.link}>
            <div
              className="flex flex-col gap-4 group cursor-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative w-full h-[500px] md:h-[650px] rounded-md overflow-hidden custom-cursor"
                style={{
                  cursor: hoveredIndex === index
                    ? 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\' fill=\'none\'><path d=\'M29.06 24A5.05 5.05 0 0 1 24 29.05 5.05 5.05 0 0 1 18.94 24a5.06 5.06 0 1 1 10.12 0ZM48 24c0 13.25-10.74 24-24 24S0 37.25 0 24 10.75 0 24 0s24 10.74 24 24Zm-7.25 0S33.25 13.6 24 13.6 7.26 24 7.26 24 14.76 34.39 24 34.39C33.24 34.39 40.75 24 40.75 24Z\' fill=\'%23fff\'/></svg>") 24 24, auto'
                    : 'default',
                }}
              >
                <Image
                  src={hoveredIndex === index ? work.hoverSrc : work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              </div>
              <div className="mt-2">
                <h2 className="text-xl md:text-2xl font-mono tracking-wider">{work.title}</h2>
                <p className="text-sm text-gray-400 mt-1 uppercase">{work.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
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
