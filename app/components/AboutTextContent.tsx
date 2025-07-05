'use client';

import Image from 'next/image';

export default function AboutTextContent() {
  return (
    <div className="text-[#fff7d1]  pt-20 pb-20">

      {/* Text Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-[60px]">
        <h2 className="text-5xl font-bold w-full md:w-1/2">WHO WE ARE</h2>
        <p className="text-lg leading-relaxed w-full md:w-1/3">
        At JARVIS, we are a team of passionate creatives dedicated to craft our unique journeys to empower and unite students interested in Artificial Intelligence, Robotics, Programming, Innovation, and System Design, fostering collaboration, research, practical skill-building, and interdisciplinary innovation among students of the IITM BS program.
        <br></br><br></br>
        <div className="relative group hidden md:block py-[10px] ml-4">
          <a
            href="#about"
            className="pl-[24px] pr-[22px] py-[8px] h-[44px] font-normal inline-flex items-center justify-center relative
               text-yellow bg-transparent rounded-full 
               transition-[background,color,transform] duration-500 ease-in-out
               group-hover:bg-white group-hover:text-black
               [transition-property:background,color,transform,border-radius] [transition-duration:60ms] group-hover:rounded-md"
          >
            <span className="relative flex items-center gap-[2px]">
              <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1">
                About Us
              </span>
              <span className="ml-[1px] transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 opacity-0">
                🡢
              </span>
            </span>
            <span className="absolute bottom-0 left-1/2 w-3 h-3 bg-black rounded-full blur-sm opacity-0 scale-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100 -translate-x-1/2 translate-y-2 w-[98px]" />
          </a>
        </div>
        </p>
        
      </div>

      {/* Image Grid */}
      <div className="max-w-[1600px] mx-auto flex flex-row justify-between gap-[60px] px-0">

        {/* Left Column — Image 1 and Image 3 */}
        <div className="flex flex-col gap-[100px]">
          <div className="relative w-[496px] h-[900px]">
            <Image
              src="/about/img1.png"
              alt="About Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-[496px] h-[600px]">
            <Image
              src="/about/img3.png"
              alt="About Image 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column — Image 2 */}
        <div className="flex items-center">
          <div className="relative w-[600px] h-[600px]">
            <Image
              src="/about/img2.png"
              alt="About Image 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
      {/* Full-width Separator Line */}
<div className="w-full h-[2px] bg-[#f9f9c8] my-16" />

    </div>
    
  );
}
