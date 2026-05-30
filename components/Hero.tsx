"use client";

import { motion } from "framer-motion";
import EnterButton from "./EnterButton";

type HeroProps = {
  onBegin: () => void;
};

const particles = Array.from({ length: 28 });

export default function Hero({ onBegin }: HeroProps) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070306] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.14),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.92)_82%)]" />

      {particles.map((_, i) => (
        <motion.span
          key={`hero-particle-${i}`}
          className="absolute rounded-full bg-pink-200/40"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 47) % 100}%`,
            top: `${(i * 59) % 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.08,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute h-[420px] w-[420px] rounded-full border border-pink-200/10 bg-white/[0.025] shadow-[0_0_120px_rgba(255,120,160,0.12)]"
      />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 mb-5 text-xs lowercase tracking-[0.45em] text-white/45"
      >
        an interactive note
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.25, duration: 1.25, ease: "easeOut" }}
        className="relative z-10 text-5xl font-light tracking-wide md:text-7xl"
      >
        Welcome, Athene
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ delay: 0.9, duration: 1.2 }}
        className="relative z-10 mt-6 max-w-md text-xs lowercase leading-7 tracking-[0.32em] text-white/50 md:text-sm"
      >
        a small experience,
        <br />
        made with intention.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.5, scaleX: 1 }}
        transition={{ delay: 1.35, duration: 1.1 }}
        className="relative z-10 mt-8 h-px w-40 bg-gradient-to-r from-transparent via-pink-200/70 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.65, duration: 1 }}
        className="relative z-10 mt-10"
      >
        <EnterButton onClick={onBegin} />
      </motion.div>
    </section>
  );
}