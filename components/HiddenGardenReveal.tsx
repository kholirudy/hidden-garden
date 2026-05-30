"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

type HiddenGardenRevealProps = {
  onComplete: () => void;
};

const flowerImages = [
  "/pinkblossom.png",
  "/smalldaisy.png",
  "/whiteblossom.png",
  "/tulip.png",
  "/rose.png",
];

const stars = Array.from({ length: 45 });
const flowers = Array.from({ length: 65 });

const hiddenNotes = [
  { x: 24, y: 42, img: 1 },
  { x: 66, y: 48, img: 2 },
  { x: 43, y: 66, img: 3 },
  { x: 78, y: 68, img: 1 },
];

const hiddenBalls = [
  { x: 72, y: 60 },
  { x: 26, y: 72 },
  { x: 52, y: 78 },
];

export default function HiddenGardenReveal({
  onComplete,
}: HiddenGardenRevealProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 6800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05030a] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,170,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(72,201,204,0.14),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,209,102,0.13),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.72)_88%)]" />

      {stars.map((_, i) => (
        <motion.span
          key={`reveal-star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${(i * 43) % 100}%`,
            top: `${(i * 71) % 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background:
              i % 3 === 0 ? "#ff8fab" : i % 3 === 1 ? "#48C9CC" : "#ffd166",
            boxShadow:
              i % 3 === 0
                ? "0 0 14px #ff8fab"
                : i % 3 === 1
                ? "0 0 14px #48C9CC"
                : "0 0 14px #ffd166",
          }}
          animate={{
            opacity: [0.12, 0.9, 0.12],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2.8 + (i % 5),
            repeat: Infinity,
            delay: i * 0.05,
          }}
        />
      ))}

      {flowers.map((_, i) => {
        const x = 6 + ((i * 17) % 88);
        const y = 12 + ((i * 29) % 80);
        const size = 42 + (i % 7) * 9;

        return (
          <motion.div
            key={`reveal-flower-${i}`}
            className="absolute z-20"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: `${50 - x}vw`,
              y: `${50 - y}vh`,
              rotate: -40,
            }}
            animate={{
              opacity: [0, 1, 0.86],
              scale: [0, 1.05, 0.88],
              x: "0vw",
              y: "0vh",
              rotate: -22 + (i % 12) * 7,
            }}
            transition={{
              opacity: { duration: 1.2, delay: i * 0.014 },
              scale: {
                duration: 1.3,
                delay: i * 0.014,
                ease: "easeOut",
              },
              x: {
                duration: 1.4,
                delay: i * 0.014,
                ease: "easeOut",
              },
              y: {
                duration: 1.4,
                delay: i * 0.014,
                ease: "easeOut",
              },
              rotate: {
                duration: 1.4,
                delay: i * 0.014,
                ease: "easeOut",
              },
            }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [
                  -22 + (i % 12) * 7,
                  -16 + (i % 12) * 7,
                  -22 + (i % 12) * 7,
                ],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={flowerImages[i % flowerImages.length]}
                alt=""
                width={130}
                height={130}
                className="h-auto drop-shadow-[0_0_24px_rgba(255,120,180,0.75)]"
                style={{ width: `${size}px` }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {hiddenNotes.map((note, i) => (
        <motion.div
          key={`hidden-note-${i}`}
          className="absolute z-30"
          style={{ left: `${note.x}%`, top: `${note.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: -25 }}
          animate={{
            opacity: [0, 0.9, 0.72],
            scale: [0, 0.55, 0.46],
            rotate: -12 + i * 18,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { delay: 2.4 + i * 0.28, duration: 1 },
            scale: { delay: 2.4 + i * 0.28, duration: 1, ease: "easeOut" },
            rotate: { delay: 2.4 + i * 0.28, duration: 1 },
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            },
          }}
        >
          <Image
            src={`/music-note-${note.img}.png`}
            alt=""
            width={90}
            height={90}
            className="h-auto w-[58px] opacity-85 drop-shadow-[0_0_20px_rgba(72,201,204,0.9)]"
          />
        </motion.div>
      ))}

      {hiddenBalls.map((ball, i) => (
        <motion.div
          key={`hidden-ball-${i}`}
          className="absolute z-30"
          style={{ left: `${ball.x}%`, top: `${ball.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: -120 }}
          animate={{
            opacity: [0, 0.8, 0.64],
            scale: [0, 0.38, 0.3],
            rotate: 360,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: 3.2 + i * 0.32, duration: 1 },
            scale: { delay: 3.2 + i * 0.32, duration: 1, ease: "easeOut" },
            rotate: { delay: 3.2 + i * 0.32, duration: 1.2 },
            y: {
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            },
          }}
        >
          <Image
            src="/basketball.png"
            alt=""
            width={90}
            height={90}
            className="h-auto w-[54px] opacity-85 drop-shadow-[0_0_20px_rgba(255,180,80,0.8)]"
          />
        </motion.div>
      ))}
    </section>
  );
}