'use client';

import Image from 'next/image';

export default function AboutTextContent() {
  const images = [
    '/about/img1.png',
    '/about/img2.png',
    '/about/img3.png',
  ];

  return (
    <div className="text-[#fff7d1] pt-20 pb-20">
      {/* Desktop Layout */}
      <div className="hidden md:block relative">
        <div className="max-w-7xl mx-auto sticky top-24 z-10 px-4 bg-transparent">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-[60px]">
            <h2 className="text-5xl font-bold w-full md:w-1/2">WHO WE ARE</h2>
            <p className="text-lg leading-relaxed w-full md:w-1/3">
              At JARVIS, we are a team of passionate creatives dedicated to craft our unique journeys to empower and unite students interested in Artificial Intelligence, Robotics, Programming, Innovation, and System Design...
              <br /><br />
              <div className="relative group py-[10px] ml-4">
                <a
                  href="/about"
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
                </a>
              </div>
            </p>
          </div>
        </div>

        {/* Scrollable Image Grid */}
        <div className="max-w-[1600px] mx-auto flex flex-row justify-between gap-[60px] px-0 pt-20">
          <div className="flex flex-col gap-[100px]">
            <div className="relative w-[496px] h-[900px]">
              <Image src="/about/img1.png" alt="About Image 1" fill className="object-cover" priority />
            </div>
            <div className="relative w-[496px] h-[600px]">
              <Image src="/about/img3.png" alt="About Image 3" fill className="object-cover" priority />
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative w-[600px] h-[600px]">
              <Image src="/about/img2.png" alt="About Image 2" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4">
        <div className="sticky top-20 z-10 bg-transparent backdrop-blur-none pb-6">
          <h2 className="text-4xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-base leading-relaxed">
            At JARVIS, we are a team of passionate creatives dedicated to craft our unique journeys to empower and unite students interested in Artificial Intelligence, Robotics, Programming, Innovation, and System Design...
          </p>
          <div className="relative group mt-4">
            <a
              href="/about"
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
            </a>
          </div>
        </div>

        {/* Images scrolling behind text */}
        <div className="flex flex-col gap-8 pt-10">
          {images.map((src, i) => (
            <div key={i} className="relative w-full h-[500px]">
              <Image src={src} alt={`Mobile Image ${i + 1}`} fill className="object-cover" priority />
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-[2px] bg-[#f9f9c8] my-16" />
    </div>
  );
}
