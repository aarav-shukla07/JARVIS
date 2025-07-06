'use client';

import Image from 'next/image';
import { jetbrainsMono, poppins } from '@/lib/fonts';
import Link from 'next/link';

export default function VRPhobiaTherapyPage() {
    return (
        <div className="bg-[#00052a] text-white min-h-screen w-full">
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

            {/* Title Section */}
            <div className={`${jetbrainsMono.className} text-center px-6 md:px-20 mt-20 mb-16`}>
                <p className="text-lg text-gray-400 tracking-widest uppercase mb-3">GAME DEV + AFFECTIVE COMPUTING</p>
                <h1 className="text-5xl md:text-8xl font-bold tracking-widest leading-[1.2]">
                    AI - BASED NPC<br /> EMOTION ENGINE
                </h1>
            </div>

            {/* Image Grid */}
            <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20">
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[400px] rounded-xl overflow-hidden">
                    <Image src="/future/future4.png" alt="Phobia Image 1" fill className="object-cover" />
                </div>
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[400px] rounded-xl overflow-hidden">
                    <Image src="/future/future4-hover.png" alt="Phobia Image 2" fill className="object-cover" />
                </div>
            </div>

            {/* Metadata Section */}
            <div className={`${jetbrainsMono.className} text-center mt-20 mb-12 px-6 md:px-20`}>
                <div className="flex flex-col md:flex-row justify-center gap-16 text-sm uppercase text-gray-400 tracking-widest">
                    <div>
                        <p>Industry</p>
                        <p className="mt-2 text-white tracking-normal font-mono">GAME DEVELOPMENT</p>
                    </div>
                    <div>
                        <p>Year</p>
                        <p className="mt-2 text-white tracking-normal font-mono">2025</p>
                    </div>
                    <div>
                        <p>Client</p>
                        <p className="mt-2 text-white tracking-normal font-mono">EXPERIMENTAL </p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className={` px-6 md:px-72 pb-24 text-center text-gray-300 text-[18px] leading-relaxed font-normal`}>
                The AI-Based NPC Emotion Engine is a system designed to make non-player characters (NPCs) in games and simulations more realistic and emotionally responsive. By using AI algorithms to simulate emotions based on player actions, in-game events, and environmental factors, the engine allows NPCs to display dynamic behaviors like happiness, fear, anger, or trust. This creates more engaging, lifelike interactions and enhances the storytelling experience in virtual worlds.      </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 pb-24">
                <div className="relative w-full h-[900px] rounded-lg overflow-hidden md:col-span-2">
                    <Image src="/image5.webp" alt="Extra Image 3" fill className="object-cover" />
                </div>
                <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                    <Image src="/image6.webp" alt="Extra Image 1" fill className="object-cover" />
                </div>
                <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                    <Image src="/image7.webp" alt="Extra Image 2" fill className="object-cover" />
                </div>
                <div className="relative w-full h-[900px] rounded-lg overflow-hidden md:col-span-2">
                    <Image src="/image8.webp" alt="Extra Image 3" fill className="object-cover" />
                </div>
            </div>

            {/* More Projects Section */}
            <div className="text-center mb-20">
                <h2 className="text-3xl font-mono tracking-widest mb-10">MORE PROJECTS</h2>

                <div className="flex flex-col md:flex-row justify-center gap-12">
                    {/* Project 1 */}
                    <Link href="/work/1">
                        <div className="inline-block text-center hover:scale-105 transition-transform duration-300">
                            <div className="relative w-[150px] h-[90px] mx-auto mb-3 rounded overflow-hidden">
                                <Image src="/future/future2.avif" alt="Cyber Intrusion" fill className="object-cover" />
                            </div>
                            <p className="font-mono text-sm tracking-wide">VR BASED PHOBIA THERAPY</p>
                        </div>
                    </Link>

                    {/* Project 2 */}
                    <Link href="/work/3">
                        <div className="inline-block text-center hover:scale-105 transition-transform duration-300">
                            <div className="relative w-[150px] h-[90px] mx-auto mb-3 rounded overflow-hidden">
                                <Image src="/future/future3.avif" alt="AI NPC Emotion Engine" fill className="object-cover" />
                            </div>
                            <p className="font-mono text-sm tracking-wide">DEEPFAKE DETECTION SUITE</p>
                        </div>
                    </Link>
                </div>
            </div>


            {/* Footer */}
            <footer className="flex flex-col md:flex-row justify-between px-6 md:px-20 pb-10 text-sm text-gray-400">
                <div className="flex flex-col gap-2">
                    <p className="text-xs tracking-widest">ABOUT</p>
                    <a href="/work">Works</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xs tracking-widest">SOCIALS</p>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
                <div className="text-xs tracking-widest mt-6 md:mt-0 text-right">2025 © JARVIS</div>
            </footer>

        </div>
    );
}
