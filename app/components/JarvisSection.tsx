'use client';

import { useEffect, useRef, useState } from 'react';
import { jetbrainsMono } from '@/lib/fonts';

export default function JarvisSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const iconRefs = useRef<HTMLImageElement[]>([]);
    const [scrollY, setScrollY] = useState(0);
    const [opacity, setOpacity] = useState(0);

    // Track scroll to animate opacity and text color
    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (!rect) return;

            const scrollProgress = Math.min(
                Math.max((window.innerHeight - rect.top) / window.innerHeight, 0),
                1
            );
            setScrollY(scrollProgress);
            setOpacity(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Interpolate between light and dark navy
    const interpolateColor = (start: string, end: string, t: number) => {
        const s = parseInt(start.slice(1), 16);
        const e = parseInt(end.slice(1), 16);

        const sr = (s >> 16) & 0xff;
        const sg = (s >> 8) & 0xff;
        const sb = s & 0xff;

        const er = (e >> 16) & 0xff;
        const eg = (e >> 8) & 0xff;
        const eb = e & 0xff;

        const r = Math.round(sr + (er - sr) * t);
        const g = Math.round(sg + (eg - sg) * t);
        const b = Math.round(sb + (eb - sb) * t);

        return `rgb(${r}, ${g}, ${b})`;
    };

    const jarvisColor = interpolateColor('#ccccdd', '#00052a', scrollY); // from light gray-blue to dark navy

    // Animate bottom icons infinitely from left to right
    useEffect(() => {
        let animationFrame: number;
        const speed = 1.5; // px per frame
        const spacing = 64 + 40; // icon size + gap

        const animate = () => {
            iconRefs.current.forEach((icon) => {
                const left = parseFloat(icon.style.left || '0');
                const newLeft = left + speed;

                if (newLeft > (iconContainerRef.current?.offsetWidth || 0)) {
                    const minLeft = Math.min(
                        ...iconRefs.current.map((el) =>
                            parseFloat(el.style.left || '0')
                        )
                    );
                    icon.style.left = `${minLeft - spacing}px`;
                } else {
                    icon.style.left = `${newLeft}px`;
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        iconRefs.current.forEach((icon, i) => {
            icon.style.position = 'absolute';
            icon.style.left = `${i * spacing}px`;
        });

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center"
            style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}
        >

            {/* JARVIS Text */}
            <h1
                className={`${jetbrainsMono.className} font-bold`}
                style={{
                    width: '1200px',
                    height: '198px',
                    fontSize: '180px',
                    lineHeight: '1.1',
                    letterSpacing: '-0.04em',
                    color: jarvisColor,
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    transform: `scale(${0.9 + scrollY * 0.1})`,
                    marginTop: '2px',
                    textAlign: 'center',
                }}
            >
                JARVIS
            </h1>

            {/* Side Texts */}
            <div
                style={{
                    marginTop: '20px',
                    paddingLeft: '190px',
                    paddingRight: '190px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#07082E',
                    fontSize: '18px',
                    lineHeight: '1.4',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                }}
            >
                <div style={{ textAlign: 'left' }}>
                    <p>TECH SOCIETY</p>
                    <p>IIT'M</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p>JOINT AI, RESEARCH, VIRTUAL NETWORKS</p>
                    <p>IOT & ELECTRONICS</p>
                </div>
            </div>

            {/* Bottom Icons */}
            {/* Bottom Icons */}
            <div className="absolute bottom-[5vh] w-full flex justify-center">
                {/* Faded edges */}
                <div className="absolute w-[600px] h-full z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />

                <div
                    ref={iconContainerRef}
                    className="relative w-[600px] h-10 bg-white overflow-hidden"
                >
                    {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, i) => (
                        <img
                            key={i}
                            ref={(el) => {
                                if (el) iconRefs.current[i] = el;
                            }}
                            src={`/icons/icon${num}.svg`}
                            alt={`icon-${num}`}
                            className="w-[40px] h-[40px]"
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
