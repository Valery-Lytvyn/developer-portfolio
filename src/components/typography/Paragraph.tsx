"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextProps } from "@/types";
import { showUpVariant } from "@/framer_motion_variants";

function Paragraph({ text }: TextProps) {
  return (
    <motion.p
      className="py-1 text-sm font-extralight tracking-wider md:text-lg md:font-normal"
      variants={showUpVariant}
      initial="initial"
      whileInView="animate"
    >
      {text}
    </motion.p>
  );
}

export default Paragraph;
