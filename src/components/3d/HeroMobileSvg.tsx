"use client";

/** Premium SVG hero visual — visible on all devices (mobile/tablet) and reduced-motion */
export default function HeroMobileSvg() {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[min(100%,340px)] items-center justify-center px-2 sm:max-w-md"
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--glow)" }}
      />
      <svg
        viewBox="0 0 360 400"
        className="relative z-10 h-auto w-full max-h-[min(52vh,380px)] drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="phone-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="screen-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent-dark)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection arcs */}
        <path
          d="M40 200 Q180 80 320 200"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <circle cx="40" cy="200" r="8" fill="var(--accent)" filter="url(#glow)" />
        <circle cx="320" cy="200" r="8" fill="var(--accent)" filter="url(#glow)" />

        {/* Floating cards */}
        <g opacity="0.9">
          <rect x="24" y="120" width="72" height="48" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
          <rect x="32" y="132" width="40" height="6" rx="2" fill="white" fillOpacity="0.7" />
          <rect x="32" y="144" width="52" height="4" rx="2" fill="var(--accent)" fillOpacity="0.8" />
          <rect x="264" y="100" width="72" height="48" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
          <rect x="272" y="112" width="48" height="24" rx="4" fill="var(--accent)" fillOpacity="0.35" />
        </g>

        {/* Phone */}
        <rect x="118" y="48" width="124" height="280" rx="28" fill="url(#phone-body)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <rect x="148" y="64" width="64" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="130" y="88" width="100" height="200" rx="12" fill="url(#screen-glow)" stroke="rgba(255,255,255,0.15)" />

        {/* Dashboard UI on screen */}
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

        {/* Chart bars */}
        <rect x="148" y="248" width="10" height="28" rx="2" fill="var(--accent)" fillOpacity="0.9" />
        <rect x="164" y="238" width="10" height="38" rx="2" fill="white" fillOpacity="0.6" />
        <rect x="180" y="252" width="10" height="24" rx="2" fill="var(--accent)" fillOpacity="0.7" />
        <rect x="196" y="230" width="10" height="46" rx="2" fill="white" fillOpacity="0.5" />

        <rect x="148" y="328" width="64" height="10" rx="5" fill="rgba(255,255,255,0.25)" />
      </svg>
    </div>
  );
}
