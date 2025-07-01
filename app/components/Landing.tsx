'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const leftImages = ['/left1.png']
const rightImages = ['/right1.png']

export default function Landing() {
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftIndex((prev) => (prev + 1) % leftImages.length);
            setRightIndex((prev) => (prev + 1) % rightImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full flex relative overflow-hidden">
            {/* Left side */}
            <div className="w-1/2 h-full relative">
                {leftImages.map((src, i) => (
                    <Image
                        key={src}
                        src={src}
                        alt="Left Slide"
                        fill
                        className={`object-cover transition-opacity duration-1000 ${i === leftIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>

            {/* Right side */}
            <div className="w-1/2 h-full relative">
        {rightImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Right Slide"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === rightIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Down Arrow */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 py-[80px]">
  <div className="bg-white rounded-[15px] w-[32px] h-[48px] flex items-center justify-center shadow-md animate-bounce ">
    <span className="text-black text-xl">↓</span>
  </div>
</div>

        </section>
    )
}