"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const notes = Array.from({ length: 10 });

type MusicParticlesProps = {
  show: boolean;
};

export default function MusicParticles({ show }: MusicParticlesProps) {
  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {notes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: "50%", top: "50%" }}
          initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0.75],
            scale: [0.2, 0.9, 0.65],
            x: Math.cos(i * 0.75) * (190 + i * 16),
            y: Math.sin(i * 0.75) * (140 + i * 12),
            rotate: i * 35,
          }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        >
          <Image
            src={`/music-note-${(i % 3) + 1}.png`}
            alt=""
            width={42}
            height={42}
            className="opacity-90 invert"
          />
        </motion.div>
      ))}
    </div>
  );
}