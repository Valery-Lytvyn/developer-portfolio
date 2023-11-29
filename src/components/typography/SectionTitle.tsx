"use client";
import React from "react";
import { TextProps } from "@/types";
import { motion } from "framer-motion";
import { jumpUpVariant } from "@/framer_motion_variants";

function SectionTitle({ text }: TextProps) {
  return (
    <motion.h2
      variants={jumpUpVariant}
      initial="initial"
      animate="animate"
      className="py-2 text-2xl sm:py-4 sm:text-3xl  lg:text-5xl "
    >
      <span className="pr-5 font-bold text-primary ">&#35;</span>
      {text}
    </motion.h2>
  );
}

export default SectionTitle;
