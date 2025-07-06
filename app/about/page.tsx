'use client';

import React from 'react';
import { JetBrains_Mono, Poppins } from 'next/font/google';
import { jetbrainsMono, poppins } from '@/lib/fonts';

export default function AboutPage() {
  return (
    <div className="bg-[#00052a] text-white min-h-screen flex flex-col justify-between">
      {/* Navbar */}
            <div className="flex items-center justify-between pl-[100px] pr-[100px]">
              <div className="text-[18px] font-normal py-[21px]">
                <span className={`${jetbrainsMono.className}`}>
                  <a href="/">JARVIS</a>
                </span>
              </div>
              <nav className={`${poppins.className} hidden md:flex space-x-[40px] font-medium py-[18px]`}>
                {["Works", "About", "Contact"].map((link) => (
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
                    text-white bg-transparent rounded-full transition-all duration-500 ease-in-out
                    group-hover:bg-white group-hover:text-black
                    group-hover:rounded-md"
                >
                  <span className="flex items-center gap-[2px]">
                    <span className="transition-transform duration-500 group-hover:-translate-x-1">
                      Join Us
                    </span>
                    <span className="ml-[1px] transition-all duration-500 group-hover:translate-x-1 opacity-0 group-hover:opacity-100">
                      🡢
                    </span>
                  </span>
                </a>
              </div>
            </div>

      {/* About Content */}
      <main className="flex-1 px-8 md:px-24 pt-10 pb-20">
        <h2 className="text-5xl font-bold font-mono tracking-widest text-center mb-12">
          ABOUT US
        </h2>

        <div className="max-w-4xl mx-auto text-lg leading-relaxed font-sans text-gray-200">
          <p className="mb-6">
            <strong className="text-white">JARVIS</strong> is a multidisciplinary innovation group that merges technology with real-world applications.
            Our aim is to build cutting-edge solutions in fields like AI, cyber forensics, extended reality (XR), electronics, and blockchain.
          </p>

          <p className="mb-6">
            We are a diverse team of thinkers, developers, and designers passionate about blending creativity with computation.
            From virtual reality therapy to deepfake detection engines, our projects are grounded in research and impact.
          </p>

          <p className="mb-6">
            Our approach focuses on rapid prototyping, deep technical exploration, and cross-domain collaborations.
            Whether it's solving security challenges or making emotionally intelligent NPCs in games, we do it all with a hacker spirit and a researcher’s depth.
          </p>

          <p>
            Join us on our journey to shape the future — one innovative project at a time.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#00052a] text-white py-12 px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20">
        <div className="space-y-2">
          <h4 className="font-mono text-sm text-[#bfbfbf]">ABOUT</h4>
          <a href="/work" className="block hover:underline">Works</a>
          <a href="/about" className="block hover:underline">About</a>
          <a href="/contact" className="block hover:underline">Contact</a>
        </div>

        <div className="space-y-2">
          <h4 className="font-mono text-sm text-[#bfbfbf]">SOCIALS</h4>
          <a href="https://instagram.com" className="block hover:underline">Instagram</a>
          <a href="https://linkedin.com" className="block hover:underline">LinkedIn</a>
          <a href="https://twitter.com" className="block hover:underline">Twitter</a>
        </div>

        <div className="text-sm text-right md:text-left text-[#bfbfbf]">
          2025 © JARVIS
        </div>
      </footer>
    </div>
  );
}
