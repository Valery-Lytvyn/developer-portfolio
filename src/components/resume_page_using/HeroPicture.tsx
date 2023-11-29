"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroPhoto from "../../assets/main_photo_big.png";
import { blurVariant, showUpVariant } from "@/framer_motion_variants";

function HeroPicture() {
  return (
    <div className="relative float-right mb-4 flex w-full items-center justify-center md:w-[70%] lg:w-[50%]">
      <motion.div
        className="relative -z-10 flex h-[320px]  flex-col  sm:h-[460px] md:h-[520px]"
        variants={blurVariant}
        initial="initial"
        animate="animate"
      >
        <Image
          src={HeroPhoto}
          alt="hero photo"
          priority
          style={{
            width: "auto",
            height: "100%",
            objectFit: "cover",
            filter: "drop-shadow(0px 1px 2px gray)",
            opacity: 0.5,
          }}
        />
      </motion.div>
      <motion.div
        variants={showUpVariant}
        initial="initial"
        animate="animate"
        className="absolute inset-x-0 bottom-0 h-1 rounded-2xl bg-gradient-to-r from-transparent via-primary"
        aria-hidden="true"
      ></motion.div>
    </div>
  );
}

export default HeroPicture;
