'use client';

import { JetBrains_Mono } from 'next/font/google';
import ScrollingGallery from './ScrollingGallery';
import HoverImages from './HoverImage';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Join() {
  return (
    <div className={`w-full bg-[#00052a] text-white flex flex-col items-center justify-center py-28 px-4 ${jetbrainsMono.className}`}>

      <div className="relative w-full">
  <HoverImages />
  <h1 id="jarvis-hover" className="text-9xl font-bold tracking-widest text-white text-center z-10 relative">
    JARVIS
  </h1>
</div>


      {/* Tagline */}
      <div className="mt-46 text-center leading-tight">
        <p className="text-4xl md:text-6xl font-bold tracking-wider">TURNING IMAGINATION</p>
        <p className="text-4xl md:text-6xl font-bold tracking-wider mt-4">INTO REALITY</p>
      </div>

      <div className="relative group hidden md:block py-[50px]">
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

        <ScrollingGallery />

    </div>
  );
}
