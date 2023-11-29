import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PopupMessageProps } from "@/types";
import { showUpVariant } from "@/framer_motion_variants";

function PopupMessage({ text }: PopupMessageProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center ">
      <AnimatePresence>
        <motion.span
          variants={showUpVariant}
          initial="initial"
          animate="animate"
          className="text-md rounded-md border-2 border-green-600 bg-transparent_gray p-4 font-bold uppercase [text-shadow:_0_0_5px_red]"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default PopupMessage;
