"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EnterButton from "./EnterButton";

type HeroProps = {
  onBegin: () => void;
};

const stars = Array.from({ length: 45 });
const flowers = Array.from({ length: 8 });
const notes = Array.from({ length: 6 });

export default function Hero({ onBegin }: HeroProps) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05030a] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,170,0.18),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(72,201,204,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,190,90,0.1),transparent_35%)]" />

      {stars.map((_, i) => (
        <motion.span
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 61) % 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background:
              i % 3 === 0 ? "#ff8fab" : i % 3 === 1 ? "#48C9CC" : "#ffd166",
            boxShadow:
              i % 3 === 0
                ? "0 0 12px #ff8fab"
                : i % 3 === 1
                ? "0 0 12px #48C9CC"
                : "0 0 12px #ffd166",
          }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2.5 + (i % 5),
            repeat: Infinity,
            delay: i * 0.06,
          }}
        />
      ))}

      {flowers.map((_, i) => (
        <motion.div
          key={`hero-flower-${i}`}
          className="absolute opacity-50"
          style={{
            left: `${8 + ((i * 17) % 84)}%`,
            top: `${12 + ((i * 23) % 76)}%`,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, -8, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          <Image
            src="/flower.png"
            alt=""
            width={80}
            height={80}
            className="h-auto w-[38px] drop-shadow-[0_0_16px_rgba(255,130,180,0.7)]"
          />
        </motion.div>
      ))}

      {notes.map((_, i) => (
        <motion.div
          key={`hero-note-${i}`}
          className="absolute opacity-60"
          style={{
            left: `${14 + ((i * 19) % 72)}%`,
            top: `${18 + ((i * 29) % 64)}%`,
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [0, -10, 10, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 4.5 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        >
          <Image
            src={`/music-note-${(i % 3) + 1}.png`}
            alt=""
            width={70}
            height={70}
            className="h-auto w-[34px] drop-shadow-[0_0_14px_rgba(72,201,204,0.75)]"
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="absolute h-[440px] w-[440px] rounded-full border border-white/10 bg-white/[0.025] shadow-[0_0_120px_rgba(255,80,170,0.16)]"
      />

      <motion.p
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-5 text-xs lowercase tracking-[0.45em] text-cyan-100/70"
      >
        a small garden awaits.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.25, duration: 1.25 }}
        className="relative z-10 max-w-4xl text-5xl font-light lowercase tracking-wide text-white drop-shadow-[0_0_22px_rgba(255,130,180,0.35)] md:text-7xl"
      >
        welcome, athene
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ delay: 0.9, duration: 1.2 }}
        className="relative z-10 mt-8 max-w-md text-sm leading-7 text-white/65"
      >
        there&apos;s something waiting for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="relative z-10 mt-8 h-px w-44 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.55, duration: 1 }}
        className="relative z-10 mt-10"
      >
        <EnterButton onClick={onBegin} />
      </motion.div>
    </section>
  );
}