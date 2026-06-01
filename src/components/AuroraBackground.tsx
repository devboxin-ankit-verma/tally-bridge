"use client";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ background: "var(--bg-deep)" }}
      />
      <div
        className="aurora-blob absolute -left-[20%] top-[-10%] h-[60vh] w-[60vw] opacity-60"
        style={{
          background: `radial-gradient(circle, var(--aurora-1), transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animation-delay-2 absolute -right-[15%] top-[20%] h-[50vh] w-[55vw] opacity-50"
        style={{
          background: `radial-gradient(circle, var(--aurora-2), transparent 70%)`,
        }}
      />
      <div
        className="aurora-blob animation-delay-4 absolute bottom-[-20%] left-[25%] h-[45vh] w-[50vw] opacity-40"
        style={{
          background: `radial-gradient(circle, var(--glow), transparent 70%)`,
        }}
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
