"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GardenSceneProps = {
  onComplete: () => void;
};

const MAX_FLOWERS = 20;

const flowerPositions = [
  { x: 50, y: 54 }, { x: 42, y: 58 }, { x: 58, y: 58 },
  { x: 35, y: 64 }, { x: 65, y: 64 }, { x: 48, y: 68 },
  { x: 55, y: 70 }, { x: 28, y: 72 }, { x: 72, y: 72 },
  { x: 40, y: 76 }, { x: 60, y: 77 }, { x: 50, y: 80 },
  { x: 24, y: 82 }, { x: 76, y: 82 }, { x: 34, y: 86 },
  { x: 66, y: 86 }, { x: 45, y: 90 }, { x: 55, y: 90 },
  { x: 18, y: 91 }, { x: 82, y: 91 },
];

export default function GardenScene({ onComplete }: GardenSceneProps) {
  const [flowers, setFlowers] = useState(0);

  const handleTap = () => {
    if (flowers >= MAX_FLOWERS) return;

    const next = flowers + 1;
    setFlowers(next);

    if (next === MAX_FLOWERS) {
      setTimeout(onComplete, 1300);
    }
  };

  const message =
    flowers < 8
      ? "let's grow something."
      : flowers < 14
      ? "still going?"
      : flowers < 20
      ? "almost there."
      : "look what you made.";

  return (
    <section
      onClick={handleTap}
      className="relative flex min-h-screen cursor-pointer items-center justify-center overflow-hidden bg-[#070306] px-6 text-center text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.14),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.92)_84%)]" />

      <motion.p
        key={message}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 0.62, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-[18%] z-30 text-xs lowercase tracking-[0.4em] text-white/60"
      >
        {message}
      </motion.p>

      <AnimatePresence>
        {flowerPositions.slice(0, flowers).map((pos, i) => (
          <motion.div
            key={`garden-flower-${i}`}
            className="absolute z-20"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0, y: -40, rotate: -20 }}
            animate={{
              opacity: 1,
              scale: 0.45 + (i % 4) * 0.08,
              y: 0,
              rotate: -12 + (i % 7) * 6,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          >
           <Image
  src={
    [
      "/pinkblossom.png",
      "/smalldaisy.png",
      "/whiteblossom.png",
      "/tulip.png",
      "/rose.png",
    ][i % 5]
  }
              alt=""
              width={130}
              height={130}
              className="h-auto w-[95px] drop-shadow-[0_0_22px_rgba(255,120,160,0.65)]"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{ duration: 2.6, repeat: Infinity }}
        className="absolute bottom-[10%] z-10 h-40 w-[78%] rounded-full bg-pink-300/10 blur-3xl"
      />

      <motion.p
        animate={{ opacity: flowers === 0 ? 0.42 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-[14%] z-30 text-[11px] lowercase tracking-[0.35em] text-white/40"
      >
        tap anywhere.
      </motion.p>
    </section>
  );
}