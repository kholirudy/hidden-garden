"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const flowers = Array.from({ length: 10 });
const notes = Array.from({ length: 7 });
const balls = Array.from({ length: 2 });

export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      {flowers.map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          className="absolute"
          style={{
            left: `${8 + ((i * 13) % 84)}%`,
            top: `${10 + ((i * 19) % 78)}%`,
          }}
          animate={{
            y: [0, -24, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.45, 0.9, 0.45],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        >
          <Image
            src="/flower.png"
            alt=""
            width={46}
            height={46}
            className="opacity-70"
          />
        </motion.div>
      ))}

      {notes.map((_, i) => (
        <motion.div
          key={`note-${i}`}
          className="absolute"
          style={{
            left: `${12 + ((i * 17) % 76)}%`,
            top: `${16 + ((i * 23) % 70)}%`,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 9 + i,
            repeat: Infinity,
            delay: i * 0.35,
          }}
        >
          <Image
            src={`/music-note-${(i % 3) + 1}.png`}
            alt=""
            width={30}
            height={30}
            className="opacity-50 invert"
          />
        </motion.div>
      ))}

      {balls.map((_, i) => (
        <motion.div
          key={`ball-${i}`}
          className="absolute"
          style={{
            left: i === 0 ? "16%" : "82%",
            top: i === 0 ? "62%" : "28%",
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 16 + i * 3,
            repeat: Infinity,
          }}
        >
          <Image
            src="/basketball.png"
            alt=""
            width={34}
            height={34}
            className="opacity-40"
          />
        </motion.div>
      ))}
    </div>
  );
}