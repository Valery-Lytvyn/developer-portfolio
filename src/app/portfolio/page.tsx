import React from "react";
import PortfolioCard from "@/components/portfolio_page_using/portfolio_card/PortfolioCard";
import SectionTitle from "@/components/typography/SectionTitle";
import { projectsArray } from "@/data/projects";

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-4 p-3 ">
      <SectionTitle text="some of my works" />
      <div className="my-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsArray &&
          projectsArray.map((project) => (
            <PortfolioCard cardData={project} key={project.id} />
          ))}
      </div>
    </section>
  );
}
