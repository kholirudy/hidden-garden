"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

type HiddenGardenRevealProps = {
  onComplete: () => void;
};

const flowers = Array.from({ length: 26 });
const hiddenNotes = [
  { x: 28, y: 48, img: 1 },
  { x: 68, y: 56, img: 2 },
  { x: 45, y: 72, img: 3 },
];

const hiddenBalls = [
  { x: 75, y: 70 },
  { x: 22, y: 76 },
];

export default function HiddenGardenReveal({
  onComplete,
}: HiddenGardenRevealProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 5200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070306] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,160,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.92)_84%)]" />

      {flowers.map((_, i) => {
        const x = 15 + ((i * 19) % 70);
        const y = 28 + ((i * 23) % 58);

        return (
          <motion.div
            key={`reveal-flower-${i}`}
            className="absolute z-20"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{
              opacity: [0, 1, 0.82],
              scale: [0, 0.52, 0.44],
              rotate: -14 + (i % 8) * 7,
            }}
            transition={{
              duration: 1.2,
              delay: i * 0.035,
              ease: "easeOut",
            }}
          >
            <Image
              src="/flower.png"
              alt=""
              width={130}
              height={130}
              className="h-auto w-[90px] drop-shadow-[0_0_24px_rgba(255,120,160,0.65)]"
            />
          </motion.div>
        );
      })}

      {hiddenNotes.map((note, i) => (
        <motion.div
          key={`hidden-note-${i}`}
          className="absolute z-30"
          style={{ left: `${note.x}%`, top: `${note.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 0.78, scale: 0.48, rotate: i * 18 }}
          transition={{ delay: 1.6 + i * 0.35, duration: 0.9 }}
        >
          <Image
            src={`/music-note-${note.img}.png`}
            alt=""
            width={90}
            height={90}
            className="h-auto w-[62px] opacity-80 drop-shadow-[0_0_18px_rgba(255,180,230,0.65)]"
          />
        </motion.div>
      ))}

      {hiddenBalls.map((ball, i) => (
        <motion.div
          key={`hidden-ball-${i}`}
          className="absolute z-30"
          style={{ left: `${ball.x}%`, top: `${ball.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: -120 }}
          animate={{ opacity: 0.68, scale: 0.34, rotate: 360 }}
          transition={{ delay: 2.2 + i * 0.45, duration: 1 }}
        >
          <Image
            src="/basketball.png"
            alt=""
            width={90}
            height={90}
            className="h-auto w-[58px] opacity-80 drop-shadow-[0_0_16px_rgba(255,130,60,0.5)]"
          />
        </motion.div>
      ))}


    </section>
  );
}