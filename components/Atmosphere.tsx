"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 28 });
const trails = Array.from({ length: 14 });
const glows = Array.from({ length: 4 });

export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {glows.map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${180 + i * 90}px`,
            height: `${180 + i * 90}px`,
            left: `${10 + i * 24}%`,
            top: `${12 + ((i * 29) % 70)}%`,
            background:
              i % 3 === 0
                ? "rgba(255,143,171,0.10)"
                : i % 3 === 1
                ? "rgba(72,201,204,0.08)"
                : "rgba(255,209,102,0.08)",
          }}
          animate={{
            x: [0, i % 2 === 0 ? 40 : -40, 0],
            y: [0, -35, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 9 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {petals.map((_, i) => (
        <motion.span
          key={`petal-${i}`}
          className="absolute rounded-full bg-pink-200/70 blur-[0.3px]"
          style={{
            width: `${6 + (i % 3) * 3}px`,
            height: `${12 + (i % 4) * 4}px`,
            left: `${(i * 37) % 100}%`,
            top: "-8%",
            rotate: `${i * 23}deg`,
            boxShadow: "0 0 14px rgba(255,143,171,0.55)",
          }}
          animate={{
            y: ["0vh", "115vh"],
            x: [0, i % 2 === 0 ? 45 : -45, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.75, 0.35, 0],
          }}
          transition={{
            duration: 7 + (i % 6),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "linear",
          }}
        />
      ))}

      {trails.map((_, i) => (
        <motion.span
          key={`trail-${i}`}
          className="absolute h-px w-20 rounded-full bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 31) % 100}%`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 90 : -90],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3.5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}