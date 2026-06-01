"use client";

import { useId } from "react";

/** Responsive hero SVG — mobile, tablet, desktop-safe */
export default function HeroMobileSvg() {
  const uid = useId().replace(/:/g, "");
  const phoneBody = `phone-body-${uid}`;
  const screenGlow = `screen-glow-${uid}`;
  const glowFilter = `glow-${uid}`;

  return (
    <div className="hero-svg-container relative mx-auto w-full min-w-0">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] max-h-[320px] max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-3xl lg:max-h-[480px] lg:max-w-[480px]"
        style={{ background: "var(--glow)" }}
        aria-hidden
      />
      <div className="hero-svg-aspect relative mx-auto w-full">
        <svg
          viewBox="0 0 360 400"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="TallyBridge mobile accounting dashboard illustration"
          className="hero-svg-element relative z-10 block drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={phoneBody} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </linearGradient>
            <linearGradient id={screenGlow} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--accent-dark)" stopOpacity="0.25" />
            </linearGradient>
            <filter id={glowFilter}>
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M40 200 Q180 80 320 200"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <circle cx="40" cy="200" r="8" fill="var(--accent)" filter={`url(#${glowFilter})`} />
          <circle cx="320" cy="200" r="8" fill="var(--accent)" filter={`url(#${glowFilter})`} />

          <g opacity="0.9">
            <rect
              x="24"
              y="120"
              width="72"
              height="48"
              rx="8"
              fill="rgba(255,255,255,0.12)"
              stroke="rgba(255,255,255,0.25)"
            />
            <rect x="32" y="132" width="40" height="6" rx="2" fill="white" fillOpacity="0.7" />
            <rect x="32" y="144" width="52" height="4" rx="2" fill="var(--accent)" fillOpacity="0.8" />
            <rect
              x="264"
              y="100"
              width="72"
              height="48"
              rx="8"
              fill="rgba(255,255,255,0.12)"
              stroke="rgba(255,255,255,0.25)"
            />
            <rect x="272" y="112" width="48" height="24" rx="4" fill="var(--accent)" fillOpacity="0.35" />
          </g>

          <rect
            x="118"
            y="48"
            width="124"
            height="280"
            rx="28"
            fill={`url(#${phoneBody})`}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
          />
          <rect x="148" y="64" width="64" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
          <rect
            x="130"
            y="88"
            width="100"
            height="200"
            rx="12"
            fill={`url(#${screenGlow})`}
            stroke="rgba(255,255,255,0.15)"
          />

          <rect x="142" y="100" width="76" height="8" rx="2" fill="white" fillOpacity="0.85" />
          <rect x="142" y="118" width="36" height="36" rx="6" fill="var(--accent)" fillOpacity="0.5" />
          <rect x="184" y="118" width="34" height="16" rx="4" fill="white" fillOpacity="0.25" />
          <rect x="184" y="138" width="34" height="16" rx="4" fill="white" fillOpacity="0.15" />
          <path
            d="M142 175 L162 165 L178 172 L210 148 L226 155"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <rect x="142" y="188" width="76" height="6" rx="2" fill="white" fillOpacity="0.4" />
          <rect x="142" y="202" width="56" height="6" rx="2" fill="white" fillOpacity="0.3" />
          <rect x="142" y="216" width="64" height="6" rx="2" fill="white" fillOpacity="0.3" />
          <rect x="148" y="248" width="10" height="28" rx="2" fill="var(--accent)" fillOpacity="0.9" />
          <rect x="164" y="238" width="10" height="38" rx="2" fill="white" fillOpacity="0.6" />
          <rect x="180" y="252" width="10" height="24" rx="2" fill="var(--accent)" fillOpacity="0.7" />
          <rect x="196" y="230" width="10" height="46" rx="2" fill="white" fillOpacity="0.5" />
          <rect x="148" y="328" width="64" height="10" rx="5" fill="rgba(255,255,255,0.25)" />
        </svg>
      </div>
    </div>
  );
}
