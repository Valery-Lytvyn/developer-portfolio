"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextProps } from "@/types";
import { showUpVariant } from "@/framer_motion_variants";

function AnimatedTitle({ text }: TextProps) {
  const letterArray = text.split("");

  return (
    <h1 className="animated_title text-4xl font-bold  sm:text-6xl  lg:text-8xl">
      {letterArray.map((letter, index) => {
        return (
          <motion.span
            key={index}
            variants={showUpVariant}
            initial="initial"
            animate="simpleAnimate"
            transition={{
              duration: 0.2,
              delay: index / 8,
            }}
          >
            {letter !== " " ? letter : "\u00A0"}
          </motion.span>
        );
      })}
    </h1>
  );
}

export default AnimatedTitle;
