"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const text = "for athene.";
const flowers = Array.from({ length: 9 });
const particles = Array.from({ length: 26 });

export default function FinalMessage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070306] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.16),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.92)_82%)]" />

      {particles.map((_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="absolute rounded-full bg-pink-200/40"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 41) % 100}%`,
            top: `${(i * 67) % 100}%`,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.07,
          }}
        />
      ))}

      {flowers.map((_, i) => (
        <motion.div
          key={`final-flower-${i}`}
          className="absolute z-10 opacity-40"
          style={{
            left: `${12 + ((i * 13) % 76)}%`,
            top: `${12 + ((i * 17) % 72)}%`,
          }}
          initial={{ opacity: 0, scale: 0.2, rotate: 0 }}
          animate={{
            opacity: [0, 0.38, 0.22],
            scale: [0.2, 0.55, 0.42],
            y: [0, -22, 0],
            rotate: [0, i * 18, i * 28],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: 1.1 + i * 0.18,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/flower.png"
            alt=""
            width={120}
            height={120}
            className="h-auto w-[70px] drop-shadow-[0_0_24px_rgba(255,120,160,0.55)]"
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute h-[420px] w-[420px] rounded-full border border-pink-200/10 bg-white/[0.02] blur-[0.3px]"
      />

      <h1 className="relative z-20 text-5xl font-light lowercase tracking-[0.08em] text-white md:text-7xl">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.45 + index * 0.08,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.5, scaleX: 1 }}
        transition={{ delay: 1.55, duration: 1.1 }}
        className="relative z-20 mt-7 h-px w-40 bg-gradient-to-r from-transparent via-pink-200/70 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.58, y: 0 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="relative z-20 mt-7 text-xs lowercase tracking-[0.35em] text-white/55"
      >
        thank you for taking the time.
      </motion.p>
    </section>
  );
}