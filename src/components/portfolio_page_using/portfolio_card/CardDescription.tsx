import React from "react";
import WebLinkIcon from "../../../assets/icons/icons8-link-64.png";
import GitHubIcon from "../../../assets/icons/icons8-github-64.png";
import { CardDescriptionProps, LinkIconProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

const LinkIcon = ({ src, alt, url }: LinkIconProps) => {
  return (
    <div className="h-10 w-10 rounded-lg border border-primary bg-transparent_gray p-2 hover:scale-110 hover:bg-black">
      <a target="_blank" href={url} rel="noopener noreferrer">
        <Image src={src} alt={alt} />
      </a>
    </div>
  );
};

function CardDescription({
  title,
  isHover,
  pageUrl,
  gitHubUrl,
}: CardDescriptionProps) {
  return (
    <div className="group relative z-20 w-full  rounded-lg border border-transparent bg-transparent_gray py-2 group-hover:border-primary group-hover:bg-black">
      <p className="z-10 h-14 px-2 text-center tracking-widest  group-hover:text-primary">
        {title}
      </p>
      {isHover && (
        <motion.div
          className="absolute top-4 z-0 hidden  w-full justify-between px-2 md:flex"
          initial={{ y: 0 }}
          animate={{ y: [null, -60, 0] }}
          transition={{ duration: 3, times: [0, 0.1, 0.4] }}
        >
          <LinkIcon src={WebLinkIcon} alt="web page link" url={pageUrl} />
          <LinkIcon src={GitHubIcon} alt="github page link" url={gitHubUrl} />
        </motion.div>
      )}

      <div className="absolute top-4 z-0 flex  w-full justify-between px-2 md:hidden">
        <LinkIcon src={WebLinkIcon} alt="web page link" url={pageUrl} />
        <LinkIcon src={GitHubIcon} alt="github page link" url={gitHubUrl} />
      </div>
    </div>
  );
}

export default CardDescription;
