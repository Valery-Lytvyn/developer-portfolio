"use client";
import React, { useState } from "react";
import { PortfolioCardProps } from "@/types";
import CardImage from "./CardImage";
import CardDescription from "./CardDescription";

function PortfolioCard({
  cardData: { id, cardPicture, cardMobilePicture, title, pageUrl, gitHubUrl },
}: PortfolioCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="group flex  flex-col justify-between rounded-lg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CardImage
        isHover={isHover}
        cardPicture={cardPicture}
        cardMobilePicture={cardMobilePicture}
        title={title}
        id={id}
      />
      <CardDescription
        title={title}
        isHover={isHover}
        pageUrl={pageUrl}
        gitHubUrl={gitHubUrl}
      />
    </div>
  );
}

export default PortfolioCard;
