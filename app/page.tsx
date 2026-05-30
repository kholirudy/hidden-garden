"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FloatingElements from "../components/FloatingElements";
import Hero from "../components/Hero";
import GardenScene from "../components/GardenScene";
import ReflectionScene from "../components/ReflectionScene";
import HiddenGardenReveal from "../components/HiddenGardenReveal";
import FinalMessage from "../components/FinalMessage";

export default function Home() {
  const [scene, setScene] = useState<
    "home" | "garden" | "reflection" | "reveal" | "final"
  >("home");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {scene === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1 }}
          >
            <Hero onBegin={() => setScene("garden")} />
          </motion.div>
        )}

        {scene === "garden" && (
          <motion.div
            key="garden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <GardenScene onComplete={() => setScene("reflection")} />
          </motion.div>
        )}

        {scene === "reflection" && (
          <motion.div
            key="reflection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ReflectionScene onComplete={() => setScene("reveal")} />
          </motion.div>
        )}

        {scene === "reveal" && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <HiddenGardenReveal onComplete={() => setScene("final")} />
          </motion.div>
        )}

        {scene === "final" && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <FinalMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}