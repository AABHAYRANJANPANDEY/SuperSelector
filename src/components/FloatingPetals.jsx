import React, { useMemo } from 'react';

export default function FloatingPetals({ count = 22 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * (100 / count) + Math.random() * 8) % 100}%`,
      delay: `${(i * 0.7 + Math.random() * 3).toFixed(1)}s`,
      duration: `${(7 + Math.random() * 8).toFixed(1)}s`,
      size: `${(10 + Math.random() * 14).toFixed(0)}px`,
      rotation: `${(Math.random() * 360).toFixed(0)}deg`,
      opacity: (0.4 + Math.random() * 0.45).toFixed(2),
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal"
          style={{
            left: petal.left,
            top: '-40px',
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            opacity: petal.opacity,
          }}
        >
          {/* Stylized Rose/Bougainvillea Petal SVG */}
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 30 30"
            style={{ transform: `rotate(${petal.rotation})` }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 15 2 C 22 2, 28 8, 28 16 C 28 23, 20 28, 15 28 C 10 28, 2 23, 2 16 C 2 8, 8 2, 15 2 Z"
              fill="url(#petalPinkGrad)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="petalPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5C98" />
                <stop offset="60%" stopColor="#EB1460" />
                <stop offset="100%" stopColor="#9B0739" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}

