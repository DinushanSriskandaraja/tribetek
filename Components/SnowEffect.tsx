"use client";

import React, { useEffect, useState } from "react";

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<
    { id: number; left: number; duration: number; delay: number; opacity: number }[]
  >([]);

  useEffect(() => {
    // Generate snowflakes only on the client
    const flakeCount = 50;
    const items = [];
    for (let i = 0; i < flakeCount; i++) {
        items.push({
            id: i,
            left: Math.random() * 100, // 0% to 100%
            duration: Math.random() * 3 + 2, // 2s to 5s
            delay: Math.random() * 5, // 0s to 5s
            opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
        });
    }
    setSnowflakes(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <style jsx>{`
            @keyframes fall {
                0% {
                    transform: translateY(-10vh);
                }
                100% {
                    transform: translateY(110vh);
                }
            }
        `}</style>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            top: "-10px",
            left: `${flake.left}%`,
            width: "8px",
            height: "8px",
            opacity: flake.opacity,
            animation: `fall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
