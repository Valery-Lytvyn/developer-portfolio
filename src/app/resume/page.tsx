"use client";
import React from "react";
import SkillList from "@/components/resume_page_using/SkillList";
import { skillsData } from "@/data/skills";
import SectionTitle from "@/components/typography/SectionTitle";
import { summary } from "@/data/summary";
import HeroPicture from "@/components/resume_page_using/HeroPicture";
import Paragraph from "@/components/typography/Paragraph";
import SectionSubtitle from "@/components/typography/SectionSubtitle";

export default function Resume() {
  return (
    <section className="flex flex-col gap-4 p-3 ">
      <SectionTitle text="a few words about me" />
      <div>
        <HeroPicture />
        {summary.map((text, index) => (
          <Paragraph text={text} key={index} />
        ))}
      </div>
      <div className="my-12 border-l-4 border-primary p-2">
        <SectionSubtitle text="in my projects I use:" />
        <SkillList skills={skillsData} />
      </div>
    </section>
  );
}
