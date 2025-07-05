'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#00052a] text-white px-8 md:px-24 py-12">
      {/* Main footer content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-8">
        {/* Left side - Logo or Title */}
        <div className="text-2xl font-bold tracking-wide">
          TECH SOCIETY | IITM
        </div>

        {/* Middle - Nav links */}
        <div className="flex gap-8 text-sm md:text-base">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#events" className="hover:underline">Events</Link>
          <Link href="#team" className="hover:underline">Team</Link>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex gap-6 text-lg">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300" />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Tech Society, IIT Madras. All rights reserved.
      </div>
    </footer>
  );
}
