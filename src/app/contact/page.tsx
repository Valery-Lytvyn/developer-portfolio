import React from "react";
import SectionTitle from "@/components/typography/SectionTitle";
import SectionSubtitle from "@/components/typography/SectionSubtitle";
import ContactForm from "@/components/contact_page_using/ContactForm";
import ContactList from "@/components/contactList/ContactList";
import Paragraph from "@/components/typography/Paragraph";
import { paragraphText } from "@/data/contactsData";

export default function Contact() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 p-3">
      <SectionTitle text="get in touch" />
      <SectionSubtitle text="Let's talk about your project" />
      {paragraphText.map((text, index) => (
        <Paragraph text={text} key={index} />
      ))}
      <ContactList />
      <ContactForm />
    </section>
  );
}
