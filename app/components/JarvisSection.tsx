'use client';

import { useEffect, useRef, useState } from 'react';
import { jetbrainsMono } from '@/lib/fonts';

export default function JarvisSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const iconRefs = useRef<HTMLImageElement[]>([]);
    const [scrollY, setScrollY] = useState(0);
    const [opacity, setOpacity] = useState(0);

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

    const jarvisColor = interpolateColor('#ccccdd', '#00052a', scrollY);

    useEffect(() => {
        let animationFrame: number;
        const speed = 1.5;
        const spacing = 64 + 40;

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
            className="relative w-full min-h-screen flex flex-col items-center justify-center px-4"
            style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}
        >
            {/* JARVIS Text */}
            <h1
                className={`${jetbrainsMono.className} font-bold text-center leading-[1.1] tracking-tighter`}
                style={{
                    fontSize: scrollY < 0.5 ? '80px' : 'clamp(60px, 12vw, 180px)',
                    transform: `scale(${0.9 + scrollY * 0.1})`,
                    color: jarvisColor,
                    transition: 'transform 0.3s ease, color 0.3s ease',
                }}
            >
                JARVIS
            </h1>

            {/* Side Texts */}
            <div
                className="mt-6 w-full px-4 md:px-[190px] flex flex-col md:flex-row justify-between gap-6 text-center md:text-left text-[#07082E] text-sm md:text-[18px] tracking-wide uppercase font-mono"
            >
                <div>
                    <p>TECH SOCIETY</p>
                    <p>IIT'M</p>
                </div>
                <div className="md:text-right">
                    <p>JOINT AI, RESEARCH, VIRTUAL NETWORKS</p>
                    <p>IOT & ELECTRONICS</p>
                </div>
            </div>

            {/* Bottom Icons */}
            <div className="absolute bottom-[5vh] w-full flex justify-center">
                <div className="absolute w-[90%] sm:w-[600px] h-full z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />
                <div
                    ref={iconContainerRef}
                    className="relative w-[90%] sm:w-[600px] h-10 bg-white overflow-hidden"
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
