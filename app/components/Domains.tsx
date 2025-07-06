'use client';

import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const domainData = [
  {
    title: 'ELECTRONICS AND IOT',
    columns: [
      ['EMBEDDED SYSTEMS', 'WIRELESS COMMUNICATION', 'AUTOMATION AND CONTROL SYSTEMS'],
      ['SENSOR NETWORKS', 'HARDWARE PROTOTYPING'],
    ],
  },
  {
    title: 'CYBER FORENSICS\n& BLOCKCHAIN', // force line break
    columns: [
      ['NETWORK FORENSICS', 'DIGITAL EVIDENCE RECOVERY', 'BLOCKCHAIN SECURITY & AUDITING'],
      ['MALWARE ANALYSIS', 'SMART CONTRACT DEVELOPMENT', 'BLOCKCHAIN FORENSICS'],
    ],
  },
  {
    title: 'GAME DEVELOPMENT & DESIGNING',
    columns: [
      ['GAME ART & ANIMATION', 'SOUND DESIGN & MUSIC PRODUCTION', 'GAME STORYTELLING'],
      ['LEVEL DESIGN', 'UI/UX DESIGN FOR GAMES', 'NARRATIVE DESIGN'],
    ],
  },
  {
    title: 'INFORMATICS',
    columns: [
      ['BIOINFORMATICS', 'USINESS INFORMATICS', 'EDUCATIONAL INFORMATICS'],
      ['HEALTH INFORMATICS', 'DATA SCIENCE & ANALYTICSGI INTEGRATION', 'ENVIRONMENTAL INFORMATICS'],
    ],
  },
];

export default function Domains() {
  return (
    <>
      <div className={`bg-[#00052a] text-white w-full px-4 md:px-10 ${jetbrainsMono.className}`}>
        {/* Sticky OUR DOMAINS heading */}
        <div className="h-[60vh] sticky top-0 z-0 flex items-center justify-center bg-[#00052a]">
          <h2 className="text-center text-4xl md:text-7xl font-bold tracking-widest">OUR DOMAINS</h2>
        </div>

        {/* Scrollable Sections */}
        {domainData.map((domain, index) => (
          <div
            key={index}
            className="h-[auto] md:h-[50vh] sticky top-0 z-0 flex flex-col justify-center bg-[#00052a] border-t border-white py-10 md:py-0"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start px-4 md:px-10">
              {/* Domain title */}
              <h3 className="text-2xl md:text-4xl font-bold tracking-widest whitespace-pre-line min-w-[300px]">
                {domain.title}
              </h3>

              {/* Right Columns */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                {domain.columns.map((col, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-2">
                    {col.map((item, itemIdx) => (
                      <p key={itemIdx}>{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="w-full h-[2px] bg-white mt-10" />
    </>
  );
}
