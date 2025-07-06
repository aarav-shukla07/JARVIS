'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FutureWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      src: '/future/future1.png',
      hoverSrc: '/future/future1-hover.png',
      title: 'VR BASED PHOBIA THERAPY',
      subtitle: 'VR + PSYCHOLOGY',
    },
    {
      src: '/future/future2.png',
      hoverSrc: '/future/future2-hover.png',
      title: 'CYBER INTRUSION PATTERN IDENTIFIER',
      subtitle: 'PROJECT',
    },
    {
      src: '/future/future3.png',
      hoverSrc: '/future/future3-hover.png',
      title: 'DEEPFAKE DETECTION SUITE',
      subtitle: 'PROJECT',
    },
    {
      src: '/future/future4.png',
      hoverSrc: '/future/future4-hover.png',
      title: 'AI- BASED NPC EMOTION ENGINE',
      subtitle: 'GAME DEV + AFFECTIVE COMPUTING',
    },
  ];

  return (
    <div className="bg-[#00052a] text-white w-full pt-2">
      <h2 className="text-center text-5xl font-bold tracking-widest py-12">FUTURE WORKS</h2>

      <div className="flex flex-wrap justify-center items-start gap-x-10 gap-y-12 px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start max-w-[600px]"
          >
            <Link href={`/work/${idx +1}`} passHref>
              <div
                className="w-[600px] h-[600px] overflow-hidden"
                style={{
                  cursor: `url('/cursors/eye-cursor.png') 24 24, auto`,
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={hoveredIndex === idx ? project.hoverSrc : project.src}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </Link>
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-sm text-[#bfbfbf] tracking-wider">{project.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="relative group hidden md:flex justify-center py-[20px] mt-6">
        <a
          href="/work"
          className="pl-[24px] pr-[22px] py-[8px] h-[44px] font-normal inline-flex items-center justify-center relative
            text-white bg-transparent rounded-full 
            transition-[background,color,transform] duration-500 ease-in-out
            group-hover:bg-white group-hover:text-black
            [transition-property:background,color,transform,border-radius] [transition-duration:60ms] group-hover:rounded-md"
        >
          <span className="relative flex items-center gap-[2px]">
            <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1">
              More Works
            </span>
            <span className="ml-[1px] transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 opacity-0">
              🡢
            </span>
          </span>
          <span className="absolute bottom-0 left-1/2 w-3 h-3 bg-black rounded-full blur-sm opacity-0 scale-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 -translate-x-1/2 translate-y-2 w-[98px]" />
        </a>
      </div>

      {/* Bottom horizontal line */}
      <div className="w-full h-[2px] bg-white mt-30" />
    </div>
  );
}
