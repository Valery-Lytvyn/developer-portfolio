"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, memo, useEffect } from "react";
import { motion } from "framer-motion";
import { CardImageProps } from "@/types";
import { skewVariant, scaleVariant } from "@/framer_motion_variants";

function CardImage({
  isHover,
  cardPicture,
  cardMobilePicture,
  title,
  id,
  pageUrl,
}: CardImageProps) {
  const [imageSrc, setImageSrc] = useState(cardPicture);
  const [mobileImageSrc, setMobileImageSrc] = useState(cardMobilePicture);

  useEffect(() => {
    setImageSrc(cardPicture);
    setMobileImageSrc(cardMobilePicture);
  }, [cardPicture, cardMobilePicture]);

  return (
    <a target="_blank" href={pageUrl} rel="noopener noreferrer">
      <div className="flex h-full flex-1 gap-2">
        <div
          className={`${
            isHover ? "z-10  -skew-y-6 pt-6" : "skew-y-0 rounded-lg"
          } relative hidden h-full w-full overflow-hidden md:block`}
        >
          <Image src={imageSrc} alt={title} priority placeholder="blur" />
        </div>
        <AnimatePresence>
          {isHover && mobileImageSrc && (
            <motion.div
              variants={scaleVariant}
              initial="initial"
              animate="animate"
              exit="initial"
              key={id}
              className="hidden pt-2 md:block"
            >
              <Image src={mobileImageSrc} alt={title} height={220} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            variants={skewVariant}
            initial="initial"
            whileInView="animate"
            exit="initial"
            key={title}
            className="relative z-10 block h-full w-full -skew-y-6 pt-6 md:hidden"
          >
            <Image src={imageSrc} alt={title} priority placeholder="blur" />
          </motion.div>
          <motion.div
            variants={scaleVariant}
            initial="initial"
            whileInView="animate"
            exit="initial"
            key={id}
            className="block pt-2 md:hidden"
          >
            <Image src={mobileImageSrc} alt={title} height={180} />
          </motion.div>
        </AnimatePresence>
      </div>
    </a>
  );
}

export default memo(CardImage);
