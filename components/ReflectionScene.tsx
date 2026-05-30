"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ReflectionSceneProps = {
  onComplete: () => void;
};

const messages = [
  "oh.",
  "you grew quite a garden.",
  "most people would've stopped.",
  "but you're still here.",
  "so there's one more thing.",
];

export default function ReflectionScene({ onComplete }: ReflectionSceneProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < messages.length - 1) {
      const timer = setTimeout(() => setStep((prev) => prev + 1), 1700);
      return () => clearTimeout(timer);
    }

    const finalTimer = setTimeout(onComplete, 2300);
    return () => clearTimeout(finalTimer);
  }, [step, onComplete]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050305] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.09),transparent_38%)]" />

      <AnimatePresence mode="wait">
        <motion.h1
          key={step}
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-xl text-3xl font-light lowercase leading-tight tracking-wide md:text-5xl"
        >
          {messages[step]}
        </motion.h1>
      </AnimatePresence>
    </section>
  );
}