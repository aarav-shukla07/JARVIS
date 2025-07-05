'use client';

import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Domains() {
  return (
    <>
    <div className={`bg-[#00052a] text-white w-full py-20 px-25 ${jetbrainsMono.className}`}>
      {/* Heading */}
      <h2 className="text-center text-7xl font-bold tracking-widest mb-19">OUR DOMAINS</h2>

      {/* Electronics and IoT Section */}
      <div className="mb-20 border-t border-white pt-10">
        <div className="flex gap-16 items-start">
          {/* Left side: Main domain title */}
          <h3 className="text-4xl font-bold tracking-widest whitespace-nowrap min-w-[300px]">
            ELECTRONICS AND IOT
          </h3>

          {/* Right side: Two columns */}
          <div className="flex gap-16">
            {/* First Column */}
            <div className="flex flex-col gap-2">
              <p>EMBEDDED SYSTEMS</p>
              <p>WIRELESS COMMUNICATION</p>
              <p>AUTOMATION AND CONTROL SYSTEMS</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2">
              <p>SENSOR NETWORKS</p>
              <p>HARDWARE PROTOTYPING</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Forensics & blockchain */}
      <div className="mb-20 border-t border-white pt-10">
        <div className="flex gap-29 items-start">
          {/* Left side: Main domain title */}
          <h3 className="text-4xl font-bold tracking-widest whitespace-nowrap min-w-[300px]">
            CYBER FORENSICS & <br></br>BLOCKCHAIN
          </h3>

          {/* Right side: Two columns */}
          <div className="flex gap-16">
            {/* First Column */}
            <div className="flex flex-col gap-2">
              <p>NETWORK FORENSICS</p>
              <p>DIGITAL EVIDENCE RECOVERY</p>
              <p>BLOCKCHAIN SECURITY & AUDITING</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2">
              <p>MALWARE ANALYSIS</p>
              <p>SMART CONTRACT DEVELOPMENT</p>
              <p>BLOCKCHAIN FORENSICS</p>
            </div>
          </div>
        </div>
      </div>

      {/* GAME DEVELOPMENT & DESIGNING */}
      <div className="mb-20 border-t border-white pt-10">
        <div className="flex gap-24 items-start">
          {/* Left side: Main domain title */}
          <h3 className="text-4xl font-bold tracking-widest whitespace-nowrap min-w-[300px]">
            GAME DEVELOPMENT & <br></br>DESIGNING
          </h3>

          {/* Right side: Two columns */}
          <div className="flex gap-16">
            {/* First Column */}
            <div className="flex flex-col gap-2">
              <p>GAME ART & ANIMATION</p>
              <p>SOUND DESIGN & MUSIC PRODUCTION</p>
              <p>GAME STORYTELLING</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2">
              <p>LEVEL DESIGN</p>
              <p>UI/UX DESIGN FOR GAMES</p>
              <p>NARRATIVE DESIGN</p>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMATICS */}
      <div className="mb-20 border-t border-white pt-10">
        <div className="flex gap-65 items-start">
          {/* Left side: Main domain title */}
          <h3 className="text-4xl font-bold tracking-widest whitespace-nowrap min-w-[300px]">
            INFORMATICS
          </h3>

          {/* Right side: Two columns */}
          <div className="flex gap-16">
            {/* First Column */}
            <div className="flex flex-col gap-2">
              <p>BIOINFORMATICS</p>
              <p>USINESS INFORMATICS</p>
              <p>EDUCATIONAL INFORMATICS</p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-2">
              <p>HEALTH INFORMATICS</p>
              <p>DATA SCIENCE & ANALYTICSGI INTEGRATION</p>
              <p>ENVIRONMENTAL INFORMATICS</p>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
    {/* Bottom horizontal line */}
      <div className="w-full h-[2px] bg-white mt-10" />
    </>
  );
}
