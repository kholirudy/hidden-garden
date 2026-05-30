"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type BloomSceneProps = {
  onComplete: () => void;
};

const notes = Array.from({ length: 14 });
const balls = Array.from({ length: 6 });
const flowers = Array.from({ length: 28 });
const petals = Array.from({ length: 38 });
const particles = Array.from({ length: 45 });

export default function BloomScene({ onComplete }: BloomSceneProps) {
  const [count, setCount] = useState(0);

  const handleTap = () => {
    if (count < 2) {
      setCount((prev) => prev + 1);
    } else {
      setCount(3);
      setTimeout(onComplete, 2600);
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070306] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,110,150,0.18),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.92)_82%)]" />

      {particles.map((_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="absolute rounded-full bg-pink-200/50"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 37) % 100}%`,
            top: `${(i * 61) % 100}%`,
          }}
          animate={{
            opacity: [0.15, 0.75, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.08,
          }}
        />
      ))}

      {petals.map((_, i) => (
        <motion.span
          key={`petal-${i}`}
          className="absolute z-10 h-2 w-5 rounded-full bg-pink-300/70 blur-[0.3px]"
          style={{
            left: `${(i * 29) % 100}%`,
            top: `${(i * 43) % 100}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, i % 2 === 0 ? 16 : -16, 0],
            rotate: [0, 90, 180],
            opacity: count === 3 ? [0.35, 0.9, 0.35] : [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.06,
          }}
        />
      ))}

      {count >= 1 &&
        notes.map((_, i) => {
          const angle = i * 0.46;
          const radiusX = 280 + (i % 4) * 42;
          const radiusY = 115 + (i % 3) * 34;

          return (
            <motion.div
              key={`note-${i}`}
              className="absolute z-30"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: -30 }}
              animate={{
                opacity: [0, 0.9, 0.75],
                scale: [0, 0.55, 0.45],
                x: Math.cos(angle) * radiusX,
                y: Math.sin(angle) * radiusY,
                rotate: [0, i * 22, i * 32],
              }}
              transition={{
                duration: 1.6,
                delay: i * 0.045,
                ease: "easeOut",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 8, -4, 0],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={`/music-note-${(i % 3) + 1}.png`}
                  alt=""
                  width={90}
                  height={90}
                  className="h-auto w-[46px] opacity-80 drop-shadow-[0_0_18px_rgba(255,120,210,0.65)]"
                />
              </motion.div>
            </motion.div>
          );
        })}

      {count >= 2 &&
        balls.map((_, i) => {
          const positions = [
            { x: -330, y: -70 },
            { x: 335, y: -42 },
            { x: -265, y: 125 },
            { x: 285, y: 130 },
            { x: -80, y: -175 },
            { x: 90, y: 175 },
          ];

          return (
            <motion.div
              key={`ball-${i}`}
              className="absolute z-20"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: -120 }}
              animate={{
                opacity: [0, 0.72, 0.55],
                scale: [0, 0.42, 0.34],
                x: positions[i].x,
                y: positions[i].y,
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/basketball.png"
                  alt=""
                  width={95}
                  height={95}
                  className="h-auto w-[54px] opacity-80 drop-shadow-[0_0_18px_rgba(255,130,60,0.45)]"
                />
              </motion.div>
            </motion.div>
          );
        })}

      {count === 3 && (
        <motion.div
          className="absolute z-20 h-[260px] w-[260px] rounded-full bg-pink-300/25 blur-3xl"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.9, 0], scale: [0.4, 2.6, 3.4] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}

      {count === 3 &&
        flowers.map((_, i) => {
          const angle = i * 0.52;
          const distance = 110 + (i % 7) * 48;

          return (
            <motion.div
              key={`flower-${i}`}
              className="absolute z-30"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 0.95, 0.82],
                scale: [0, 0.38, 0.3],
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance * 0.64,
                rotate: i * 21,
              }}
              transition={{
                duration: 1.9,
                delay: i * 0.018,
                ease: "easeOut",
              }}
            >
              <Image
                src="/flower.png"
                alt=""
                width={150}
                height={150}
                className="h-auto w-[95px] drop-shadow-[0_0_22px_rgba(255,130,170,0.75)]"
              />
            </motion.div>
          );
        })}

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.58, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-50 mb-10 text-xs lowercase tracking-[0.45em] text-white/60 sm:text-sm"
      >
        tap gently.
      </motion.p>

      <motion.button
        onClick={handleTap}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.93 }}
        className="relative z-50 flex h-44 w-44 items-center justify-center rounded-full border border-pink-200/20 bg-white/[0.035] shadow-[0_0_90px_rgba(255,140,180,0.16)] backdrop-blur-xl sm:h-48 sm:w-48"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-pink-200/30"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />

        <motion.div
          animate={{
            scale: 1 + count * 0.08,
            rotate: count * 7,
          }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/flower.png"
            alt="flower"
            width={130}
            height={130}
            priority
            className="h-auto w-[115px] drop-shadow-[0_0_28px_rgba(255,120,160,0.75)]"
          />
        </motion.div>
      </motion.button>

      <motion.p
        animate={{ opacity: count > 0 ? 0.58 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-50 mt-9 text-xs lowercase tracking-[0.45em] text-white/55"
      >
        {count === 1 && "once more."}
        {count === 2 && "one last time."}
        {count === 3 && "blooming."}
      </motion.p>

      <p className="relative z-50 mt-3 text-[11px] lowercase tracking-[0.35em] text-white/35">
        tap count: {count}
      </p>
    </section>
  );
}