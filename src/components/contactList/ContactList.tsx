"use client";
import { contacts } from "@/data/contactsData";
import React from "react";
import ContactItem from "./ContactItem";
import { motion } from "framer-motion";
import { jumpUpVariant, showUpVariant } from "@/framer_motion_variants";

function ContactList() {
  return (
    <motion.div
      variants={showUpVariant}
      initial="initial"
      animate="simpleAnimate"
      className="mt-6 h-20 w-auto border-t border-primary"
    >
      <motion.ul
        className="flex justify-around gap-6 px-0 pt-2 sm:gap-8 sm:px-5 sm:pt-6"
        variants={jumpUpVariant}
        initial="initial"
        animate="animate"
      >
        {contacts.map((itemData) => (
          <ContactItem key={itemData.label} contactData={itemData} />
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default ContactList;
