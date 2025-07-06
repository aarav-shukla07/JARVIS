'use client';

import { jetbrainsMono, poppins } from '@/lib/fonts';

export default function ContactPage() {
  return (
    <div className={`${jetbrainsMono.className} bg-[#00052a] text-white min-h-screen px-6 md:px-20 py-3`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-[18px] font-normal">
          <span className={jetbrainsMono.className}>
            <a href="/">JARVIS</a>
          </span>
        </div>
        <nav className={`${poppins.className} hidden md:flex space-x-10 font-medium`}>
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

      {/* Contact Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24 items-start">
        {/* Left Side - Text */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-widest mb-10">
            CONTACT&nbsp;US
          </h1>
          <p className="mb-2 text-lg">Send an email</p>
          <p className="font-mono text-xl tracking-wider break-words">
            JARVIS.SOCIETY@STUDY.IITM.AC.IN
          </p>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded bg-white text-black outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-2 rounded bg-white text-black outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              placeholder="Send a message"
              rows={4}
              className="w-full px-4 py-2 rounded bg-white text-black outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded hover:scale-105 transition-transform duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
            <footer className="flex flex-col md:flex-row justify-between px-6 md:px-20 pb-10 text-sm text-gray-400 pt-20">
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
