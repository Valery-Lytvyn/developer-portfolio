"use client";
import { ContactInputProps } from "@/types";
import React, { useRef, useState } from "react";

function ContactInput({ inputName, inputType, id }: ContactInputProps) {
  const [isFocusedInput, setIsFocusedInput] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative flex-1">
      <label
        htmlFor={inputName}
        className={`absolute left-2 capitalize ${
          isFocusedInput || (!isFocusedInput && inputRef.current?.value)
            ? "-top-5 left-1 font-extralight"
            : "top-3"
        } transition-all duration-1000`}
      >
        {inputName}
      </label>
      <input
        required
        ref={inputRef}
        id={id}
        type={inputType}
        name={inputName.toLowerCase()}
        autoComplete="off"
        className="h-12 w-full rounded-md border border-primary bg-transparent px-2 outline-none valid:border-stone-500"
        onFocus={() => setIsFocusedInput(true)}
        onBlur={() => setIsFocusedInput(false)}
      />
    </div>
  );
}

export default ContactInput;
