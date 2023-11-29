"use client";
import React from "react";
import { motion } from "framer-motion";
import { SubmitButtonProps } from "@/types";

function SubmitButton({ isShowLoader }: SubmitButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      type="submit"
      className="h-12 w-full  rounded-md border border-primary bg-primary text-center uppercase shadow hover:border-white"
    >
      {isShowLoader ? "Sending..." : "Submit"}
    </motion.button>
  );
}

export default SubmitButton;
