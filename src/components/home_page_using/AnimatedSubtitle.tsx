"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextProps } from "@/types";
import { showUpVariant } from "@/framer_motion_variants";

function AnimatedSubtitle({ text }: TextProps) {
  return (
    <motion.h2
      variants={showUpVariant}
      initial="initial"
      animate="animate"
      className="text-center text-3xl  sm:text-5xl"
    >
      {text}
    </motion.h2>
  );
}

export default AnimatedSubtitle;
