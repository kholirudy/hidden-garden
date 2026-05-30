"use client";

import { motion } from "framer-motion";

type EnterButtonProps = {
  onClick: () => void;
};

export default function EnterButton({ onClick }: EnterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl transition hover:border-red-400/50 hover:bg-red-500/10 hover:text-white"
    >
      Begin
    </motion.button>
  );
}