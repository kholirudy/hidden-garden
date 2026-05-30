"use client";

import { motion } from "framer-motion";

type EnterButtonProps = {
  onClick: () => void;
};

export default function EnterButton({ onClick }: EnterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 40px rgba(255,140,190,0.35)",
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(255,140,190,0)",
          "0 0 25px rgba(255,140,190,0.25)",
          "0 0 0px rgba(255,140,190,0)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-full
        border
        border-white/15
        bg-white/[0.04]
        px-12
        py-4
        text-sm
        uppercase
        tracking-[0.4em]
        text-white/85
        backdrop-blur-xl
      "
    >
      <span className="relative z-10 flex items-center gap-3">
        ✦
        <span>Begin</span>
        ✦
      </span>

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-y-0
          w-20
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
        "
      />
    </motion.button>
  );
}