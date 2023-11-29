"use client";
import React, { useRef, useState, useEffect } from "react";
import ContactInput from "./ContactInput";
import emailjs from "@emailjs/browser";
import SubmitButton from "./SubmitButton";
import PopupMessage from "./PopupMessage";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isShowLoader, setIsShowLoader] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsShowLoader(true);

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
        .then(
          () => {
            setIsFormSubmitted(true);
          },
          (error: any) => {
            console.error("ERROR!", error);
          },
        )
        .finally(() => {
          setIsShowLoader(false);
        });
      formRef.current?.reset();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsFormSubmitted(false), 3000);
    return () => clearTimeout(timer);
  }, [isFormSubmitted]);

  return (
    <form
      className="relative flex w-full flex-col gap-4 text-sm font-light lg:w-[60%] "
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className=" flex flex-col gap-8 md:flex-row md:gap-4">
        <ContactInput inputName="Name" inputType="text" id="userName" />
        <ContactInput inputName="Email" inputType="email" id="userEmail" />
      </div>
      <textarea
        required
        id="message"
        name="message"
        rows={10}
        placeholder="type a message"
        className="w-full  rounded-md border border-primary bg-transparent p-2 outline-none placeholder:text-white valid:border-stone-500"
      />
      <SubmitButton isShowLoader={isShowLoader} />
      {isFormSubmitted && <PopupMessage text="Message is submitted" />}
    </form>
  );
}

export default ContactForm;
