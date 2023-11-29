// "use client";
// import { AnimatePresence, animate } from "framer-motion";
// import Image from "next/image";
// import React, { memo } from "react";
// import { motion } from "framer-motion";
// import { CardImageProps } from "@/types";
// import { skewVariant, scaleVariant } from "@/framer_motion_variants";

// function CardImage({
//   isHover,
//   cardPicture,
//   cardMobilePicture,
//   title,
// }: CardImageProps) {
//   return (
//     <div className="flex gap-2 overflow-hidden p-1">
//       <div
//         className={`${
//           isHover
//             ? "z-10  -skew-y-6 pt-6"
//             : "skew-y-0 overflow-hidden rounded-lg"
//         } relative hidden h-full w-full md:block`}
//       >
//         <Image src={cardPicture} alt={title} priority placeholder="blur" />
//       </div>
//       <AnimatePresence>
//         {isHover && cardMobilePicture && (
//           <motion.div
//             variants={scaleVariant}
//             initial="initial"
//             animate="animate"
//             exit="initial"
//             key={title}
//             className="hidden pt-2 md:block"
//           >
//             <Image src={cardMobilePicture} alt={title} height={220} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         <motion.div
//           variants={skewVariant}
//           initial="initial"
//           whileInView="animate"
//           exit="initial"
//           key={title}
//           className="relative z-10 block h-full w-full -skew-y-6 pt-6 md:hidden"
//         >
//           <Image src={cardPicture} alt={title} priority placeholder="blur" />
//         </motion.div>
//         <motion.div
//           variants={scaleVariant}
//           initial="initial"
//           whileInView="animate"
//           exit="initial"
//           key={title}
//           className="block pt-2 md:hidden"
//         >
//           <Image src={cardMobilePicture} alt={title} height={180} />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default memo(CardImage);

"use client";

import { AnimatePresence, animate } from "framer-motion";
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
}: CardImageProps) {
  const [imageSrc, setImageSrc] = useState(cardPicture);
  const [mobileImageSrc, setMobileImageSrc] = useState(cardMobilePicture);

  useEffect(() => {
    setImageSrc(cardPicture);
    setMobileImageSrc(cardMobilePicture);
  }, [cardPicture, cardMobilePicture]);

  return (
    // <div className="h-full">
    <a target="_blank" href={""} rel="noopener noreferrer">
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
    // </div>
  );
}

export default memo(CardImage);
