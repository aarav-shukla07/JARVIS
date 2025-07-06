"use client";
import { useEffect, useState } from "react";
import { jetbrainsMono, poppins } from "@/lib/fonts";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 100, 0);
  const translateY = Math.min(scrollY, 100) / 5;

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#003300]/50 to-[#001133]/50 backdrop-blur-md text-black transition-all duration-300 ease-in-out"
      style={{
        opacity,
        transform: `translateY(-${translateY}px)`,
      }}
    >
      <div className="flex items-center justify-between pl-[100px] pr-[100px] md:px-6">
        {/* Logo */}
        <div className="text-[18px] md:text-[18px] display font-normal text-lg leading-[1.2] max-w-[40px] py-[21px] transition-all duration-300 hover:-translate-y-1.5">
          <span
            className={`${jetbrainsMono.className}`}
            style={{ letterSpacing: "-0.02em" }}
          >
            <a href="/">JARVIS</a>
          </span>
        </div>

        {/* Desktop Nav */}
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

        {/* Desktop Join Us Button */}
        <div className="relative group hidden md:block py-[10px]">
          <a
            href="#join"
            className="pl-[24px] pr-[22px] py-[8px] h-[44px] font-normal inline-flex items-center justify-center relative
               text-black bg-transparent rounded-full 
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden pr-4">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-black text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#003300]/90 to-[#001133]/90 backdrop-blur-md text-white px-6 pt-6 pb-10 z-50">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-white focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center space-y-6 mt-6 text-lg font-medium">
            <a href="/work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

            {/* Mobile Join Us Button */}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="mt-4 pl-[24px] pr-[22px] py-[8px] h-[44px] font-normal inline-flex items-center justify-center relative
                 text-white bg-transparent rounded-full 
                 transition-[background,color,transform] duration-500 ease-in-out
                 group-hover:bg-white group-hover:text-black
                 [transition-property:background,color,transform,border-radius] [transition-duration:60ms] hover:bg-white hover:text-black hover:rounded-md"
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
      )}
    </header>
  );
}
