"use client";

import { useEffect, useRef } from "react";

const SPARKLES = [
  { x: "6%",  y: "10%", delay: "0s",    size: 13, char: "✦" },
  { x: "90%", y: "6%",  delay: "0.8s",  size: 10, char: "★" },
  { x: "92%", y: "55%", delay: "1.5s",  size: 12, char: "✦" },
  { x: "2%",  y: "70%", delay: "2.1s",  size: 9,  char: "✸" },
  { x: "80%", y: "85%", delay: "0.4s",  size: 11, char: "★" },
  { x: "15%", y: "90%", delay: "1.8s",  size: 14, char: "✦" },
  { x: "50%", y: "4%",  delay: "2.6s",  size: 8,  char: "✸" },
];

export default function GoblinMascot({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      wrapRef.current.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    const handleLeave = () => {
      if (!wrapRef.current) return;
      wrapRef.current.style.transition = "transform 0.8s ease";
      wrapRef.current.style.transform  = "perspective(700px) rotateX(0deg) rotateY(0deg)";
      setTimeout(() => { if (wrapRef.current) wrapRef.current.style.transition = ""; }, 800);
    };
    window.addEventListener("mousemove", handleMouse);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 m-auto h-3/4 w-1/2 rounded-full bg-goblin-500/15 blur-3xl glow-goblin"
      />

      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          aria-hidden
          className="goblin-sparkle"
          style={{ left: s.x, top: s.y, fontSize: s.size, animationDelay: s.delay }}
        >
          {s.char}
        </span>
      ))}

      {/* Potion bottle — parallax + float */}
      <div
        ref={wrapRef}
        className="goblin-float relative z-10"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <svg
          viewBox="0 0 260 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="CBD Goblin — poção mágica"
          className="w-full h-full drop-shadow-2xl"
        >
          {/* ── Shadow ── */}
          <ellipse cx="130" cy="392" rx="60" ry="9" fill="rgba(0,0,0,0.25)" />

          {/* ── Cork ── */}
          <rect x="100" y="46" width="60" height="28" rx="8" fill="#92400e" />
          <rect x="104" y="50" width="52" height="20" rx="6" fill="#a16207" />
          <rect x="108" y="56" width="44" height="6" rx="3" fill="#78350f" opacity="0.4" />

          {/* ── Neck ── */}
          <path d="M108 74 L100 108 L160 108 L152 74 Z" fill="#1e3a8a" />
          <path d="M108 74 L104 108 L108 108 L114 74 Z" fill="#3b82f6" opacity="0.3" />

          {/* ── Neck label band ── */}
          <rect x="98" y="93" width="64" height="14" rx="4" fill="#d97706" />
          <text x="130" y="104" textAnchor="middle" fill="#1c1c1c" fontSize="8" fontFamily="system-ui" fontWeight="700">CBD GOBLIN</text>

          {/* ── Bottle body ── */}
          <path
            d="M72 148 Q60 200 62 268 Q64 336 130 348 Q196 336 198 268 Q200 200 188 148 Z"
            fill="#1e3a8a"
          />
          {/* Body shine left */}
          <path
            d="M82 160 Q72 210 74 270 Q76 310 96 330 Q80 300 80 260 Q78 210 90 168 Z"
            fill="#3b82f6"
            opacity="0.25"
          />
          {/* Body glass highlight */}
          <path
            d="M88 155 Q80 185 82 230 L94 225 Q92 185 100 158 Z"
            fill="white"
            opacity="0.12"
          />

          {/* ── Shoulder curve ── */}
          <path
            d="M100 108 Q72 120 72 148 L188 148 Q188 120 160 108 Z"
            fill="#1d4ed8"
          />
          <path
            d="M100 108 Q84 116 80 130 L100 130 Q102 118 112 112 Z"
            fill="#60a5fa"
            opacity="0.2"
          />

          {/* ── Liquid fill ── */}
          <clipPath id="bottle-clip">
            <path d="M72 148 Q60 200 62 268 Q64 336 130 348 Q196 336 198 268 Q200 200 188 148 Z" />
          </clipPath>
          <g clipPath="url(#bottle-clip)">
            {/* Liquid base — bright green */}
            <rect x="60" y="220" width="140" height="140" fill="#16a34a" />
            <rect x="60" y="200" width="140" height="24" fill="#22c55e" opacity="0.8" />
            {/* Bubbles */}
            <circle cx="95"  cy="285" r="7"  fill="#4ade80" opacity="0.5" />
            <circle cx="145" cy="310" r="10" fill="#4ade80" opacity="0.4" />
            <circle cx="118" cy="260" r="5"  fill="#86efac" opacity="0.55" />
            <circle cx="160" cy="275" r="6"  fill="#4ade80" opacity="0.45" />
            <circle cx="80"  cy="310" r="8"  fill="#16a34a" opacity="0.6" />
            {/* Liquid shimmer */}
            <ellipse cx="130" cy="202" rx="60" ry="6" fill="#4ade80" opacity="0.4" />
          </g>

          {/* ── Bottle outline ── */}
          <path
            d="M72 148 Q60 200 62 268 Q64 336 130 348 Q196 336 198 268 Q200 200 188 148 Z"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* ── Front label ── */}
          <rect x="86" y="152" width="88" height="62" rx="10" fill="#0f172a" opacity="0.7" />
          <rect x="90" y="156" width="80" height="54" rx="8" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />

          {/* Cannabis leaf icon on label */}
          <path
            d="M130 162 
               C130 162 120 170 118 180 C122 178 128 178 130 182
               C132 178 138 178 142 180 C140 170 130 162 130 162Z"
            fill="#4ade80"
            opacity="0.9"
          />
          <path
            d="M130 162 
               C130 162 124 172 122 176 
               C125 172 130 172 130 172 Z"
            fill="#86efac"
            opacity="0.5"
          />
          <line x1="130" y1="180" x2="130" y2="196" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />

          {/* Label text */}
          <text x="130" y="207" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="system-ui" fontWeight="800" letterSpacing="1">PREMIUM</text>

          {/* ── Goblin eyes on bottle (subtle decoration) ── */}
          <ellipse cx="108" cy="232" rx="7" ry="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
          <ellipse cx="152" cy="232" rx="7" ry="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
          <circle cx="108" cy="231" r="4" fill="#22c55e" opacity="0.6" />
          <circle cx="152" cy="231" r="4" fill="#22c55e" opacity="0.6" />
          <circle cx="106" cy="229" r="1.5" fill="white" opacity="0.7" />
          <circle cx="150" cy="229" r="1.5" fill="white" opacity="0.7" />

          {/* Small goblin grin */}
          <path d="M118 248 Q130 256 142 248" stroke="#4ade80" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* ── Drip on bottle ── */}
          <path d="M82 184 Q78 195 80 202 Q82 210 84 202 Q86 195 84 184 Z" fill="#22c55e" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

