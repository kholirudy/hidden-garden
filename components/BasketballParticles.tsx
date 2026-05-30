"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const balls = Array.from({ length: 5 });

type BasketballParticlesProps = {
  show: boolean;
};

export default function BasketballParticles({ show }: BasketballParticlesProps) {
  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {balls.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: "50%", top: "50%" }}
          initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.85, 0.55],
            scale: [0.2, 0.8, 0.55],
            x: i % 2 === 0 ? -300 - i * 25 : 300 + i * 25,
            y: -150 + i * 75,
            rotate: [0, 360],
          }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        >
          <Image
            src="/basketball.png"
            alt=""
            width={48}
            height={48}
            className="opacity-80"
          />
        </motion.div>
      ))}
    </div>
  );
}