import { TextProps } from "@/types";
import React from "react";

function SectionSubtitle({ text }: TextProps) {
  return <h3 className="text-xl md:text-2xl text-primary">{text}</h3>;
}

export default SectionSubtitle;
