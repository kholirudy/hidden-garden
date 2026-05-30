"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const backgroundFlowers = Array.from({ length: 130 });
const middleFlowers = Array.from({ length: 70 });
const frontFlowers = Array.from({ length: 25 });

function FlowerLayer({
  amount,
  layer,
}: {
  amount: unknown[];
  layer: "back" | "middle" | "front";
}) {
  return (
    <>
      {amount.map((_, i) => {
        const size =
          layer === "back"
            ? 24 + (i % 5) * 4
            : layer === "middle"
            ? 42 + (i % 6) * 5
            : 72 + (i % 5) * 8;

        const opacity =
          layer === "back" ? 0.18 : layer === "middle" ? 0.38 : 0.68;

        const blur =
          layer === "back"
            ? "blur-[1.5px]"
            : layer === "middle"
            ? "blur-[0.4px]"
            : "";

        const zIndex =
          layer === "back" ? "z-10" : layer === "middle" ? "z-20" : "z-30";

        return (
          <motion.div
            key={`${layer}-flower-${i}`}
            className={`absolute ${zIndex}`}
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -40,
              y: 40,
            }}
            animate={{
              opacity,
              scale: 1,
              rotate: -25 + (i % 12) * 8,
              y: [0, -18 - (i % 8), 0],
              x: [0, i % 2 === 0 ? 8 : -8, 0],
            }}
            transition={{
              opacity: {
                duration: 1.4,
                delay:
                  layer === "back"
                    ? i * 0.004
                    : layer === "middle"
                    ? 0.4 + i * 0.006
                    : 0.9 + i * 0.012,
              },
              scale: {
                duration: 1.4,
                delay:
                  layer === "back"
                    ? i * 0.004
                    : layer === "middle"
                    ? 0.4 + i * 0.006
                    : 0.9 + i * 0.012,
                ease: "easeOut",
              },
              rotate: {
                duration: 1.4,
                delay:
                  layer === "back"
                    ? i * 0.004
                    : layer === "middle"
                    ? 0.4 + i * 0.006
                    : 0.9 + i * 0.012,
              },
              y: {
                duration: 4 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 5 + (i % 6),
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/flower.png"
              alt=""
              width={120}
              height={120}
              className={`h-auto ${blur} drop-shadow-[0_0_20px_rgba(255,120,170,0.55)]`}
              style={{ width: `${size}px` }}
            />
          </motion.div>
        );
      })}
    </>
  );
}

export default function FinalMessage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070306] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,130,170,0.24),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.82)_88%)]" />

      <FlowerLayer amount={backgroundFlowers} layer="back" />
      <FlowerLayer amount={middleFlowers} layer="middle" />
      <FlowerLayer amount={frontFlowers} layer="front" />

      <div className="absolute inset-0 z-40 bg-black/25 backdrop-blur-[1px]" />

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 2.1, duration: 1.2 }}
        className="relative z-50 flex max-w-3xl flex-col items-center"
      >
        <h1 className="text-5xl font-light lowercase tracking-[0.08em] md:text-7xl">
          for athene.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-8 text-xs lowercase leading-7 tracking-[0.35em] text-white/70 md:text-sm"
        >
          thank you for helping the garden grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 4.4,
            duration: 1.2,
            ease: "easeOut",
          }}
          className="relative z-50 mt-10"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/dog.png"
              alt="bouquet"
              width={300}
              height={300}
              className="h-auto w-[210px] drop-shadow-[0_0_35px_rgba(255,190,210,0.5)] md:w-[290px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}