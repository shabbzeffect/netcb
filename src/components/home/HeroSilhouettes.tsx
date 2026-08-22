"use client";

const silhouettes = [
  // Server rack
  { path: "M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 4h16v4H4V6zm0 6h16v4H4v-4zm0 6h16v2H4v-2z", size: 80, x: "85%", y: "15%", delay: 0, rotation: 12 },
  // Shield
  { path: "M12 2l8 4v6c0 5.25-3.5 10-8 11C7.5 22 4 17.25 4 12V6l8-4z", size: 64, x: "10%", y: "20%", delay: 1.5, rotation: -8 },
  // Cloud
  { path: "M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z", size: 90, x: "75%", y: "65%", delay: 3, rotation: 5 },
  // Lock
  { path: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z", size: 56, x: "20%", y: "70%", delay: 2, rotation: -15 },
  // Database
  { path: "M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 17v-2.42c1.32.85 3.54 1.42 6 1.42s4.68-.57 6-1.42V17c0 .5-2.13 2-6 2s-6-1.5-6-2zm0-5v-2.42c1.32.85 3.54 1.42 6 1.42s4.68-.57 6-1.42V12c0 .5-2.13 2-6 2s-6-1.5-6-2z", size: 70, x: "90%", y: "40%", delay: 4, rotation: 10 },
  // Code brackets
  { path: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z", size: 60, x: "5%", y: "45%", delay: 1, rotation: -5 },
  // Network nodes
  { path: "M12 2a2 2 0 110 4 2 2 0 010-4zm-6 8a2 2 0 110 4 2 2 0 010-4zm12 0a2 2 0 110 4 2 2 0 010-4zm-6 6a2 2 0 110 4 2 2 0 010-4z", size: 50, x: "50%", y: "10%", delay: 2.5, rotation: 0 },
];

export function HeroSilhouettes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {silhouettes.map((s, i) => (
        <div
          key={i}
          className="absolute opacity-[0.04] animate-float"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            transform: `rotate(${s.rotation}deg)`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-[var(--netcb-accent)]"
          >
            <path d={s.path} />
          </svg>
        </div>
      ))}
    </div>
  );
}
