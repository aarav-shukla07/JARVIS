"use client";

import { useEffect, useRef, useState } from "react";
import { jetbrainsMono } from "@/lib/fonts";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lerpedPos, setLerpedPos] = useState({ x: 0, y: 0 });
  const [showHello, setShowHello] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState("#492701");

  const leftColors = ["#492701", "#f7a241", "#d2edf4"];
  const rightColors = ["#fbfbfb", "#cfb496"];

  const leftIndex = useRef(0);
  const rightIndex = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });

  const jarvisActive = useRef(false);

  // Track mouse position
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      setMousePos(pos);
      mousePosRef.current = pos;

      // check if hovering over #jarvis
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      const inJarvis = el?.closest("#jarvis");

      jarvisActive.current = !!inJarvis;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Lerp animation
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const animate = () => {
      setLerpedPos((prev) => ({
        x: lerp(prev.x, mousePosRef.current.x, 0.2),
        y: lerp(prev.y, mousePosRef.current.y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Show cursor in navbar vs hero
  useEffect(() => {
    const hero = document.querySelector("#hero");
    const nav = document.querySelector("#navbar");

    const enterHero = () => {
      setShowHello(true);
      setShowCircle(false);
    };
    const leaveHero = () => setShowHello(false);

    const enterNav = () => {
      setShowCircle(true);
      setShowHello(false);
    };
    const leaveNav = () => setShowCircle(false);

    hero?.addEventListener("mouseenter", enterHero);
    hero?.addEventListener("mouseleave", leaveHero);
    nav?.addEventListener("mouseenter", enterNav);
    nav?.addEventListener("mouseleave", leaveNav);

    return () => {
      hero?.removeEventListener("mouseenter", enterHero);
      hero?.removeEventListener("mouseleave", leaveHero);
      nav?.removeEventListener("mouseenter", enterNav);
      nav?.removeEventListener("mouseleave", leaveNav);
    };
  }, []);

  // Color changer every 1s (only if not in #jarvis)
  useEffect(() => {
    const interval = setInterval(() => {
      if (jarvisActive.current) {
        setCircleColor("#000000");
        return;
      }

      const screenMiddle = window.innerWidth / 2;
      const currentX = mousePosRef.current.x;

      if (currentX < screenMiddle) {
        setCircleColor(leftColors[leftIndex.current]);
        leftIndex.current = (leftIndex.current + 1) % leftColors.length;
      } else {
        setCircleColor(rightColors[rightIndex.current]);
        rightIndex.current = (rightIndex.current + 1) % rightColors.length;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        transform: `translate3d(${lerpedPos.x}px, ${lerpedPos.y}px, 0)`,
      }}
    >
      {/* HELLO tag */}
      <div
        className={`absolute transition-opacity transition-transform duration-300 ease-in-out px-[6px] py-[4px] rounded-md text-[16px] uppercase border font-mono ${showHello ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        style={{
          transform: "translate(-50%, -50%) translateY(30px)",
          width: "56px",
          height: "24px",
          padding: "4px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: circleColor,
          border: `1px solid ${circleColor}`,
        }}
      >
        <span className={jetbrainsMono.className}>HELLO</span>
      </div>

      {/* Circle */}
      <div
        className={`absolute w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${showCircle ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        style={{
          backgroundColor: circleColor,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
