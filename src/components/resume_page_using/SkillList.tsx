"use client";
import { skillListProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";

function SkillList({ skills }: skillListProps) {
  return (
    <ul className="flex flex-col flex-wrap items-start gap-10 py-4 sm:flex-row">
      {skills.map(({ name, icon }, index) => {
        const fadeIn: Variants = {
          initial: {
            opacity: 0,
            y: 20,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              delay: index / 8,
            },
          },
        };
        return (
          <motion.li
            key={name}
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            className="group flex items-center justify-center gap-2 "
          >
            <Image
              src={icon}
              alt={name}
              width={48}
              className="group-hover:scale-125"
            />
            <span className="group-hover:text-primary">{name}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default SkillList;
