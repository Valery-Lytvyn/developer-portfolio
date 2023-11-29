import React, { memo, useMemo } from "react";
import Image from "next/image";
import { NavItemProps } from "@/types";
import { motion } from "framer-motion";

function NavItem({
  icon,
  label,
  route,
  hoverHandler,
  isVisible,
  selectedItem,
  clickHandler,
}: NavItemProps) {
  const { visible, label: name } = isVisible;

  const memoizedIcon = useMemo(
    () => <Image src={icon} alt={label} width={32} height={32} priority />,
    [icon, label],
  );

  return (
    <>
      <motion.li
        key={label}
        whileTap={{ scale: 0.9 }}
        whileHover={{ width: name === label ? 200 : 32 }}
        transition={{ duration: 0.5 }}
        className={`hidden cursor-pointer items-center justify-between self-end rounded-md md:flex hover:md:bg-transparent_gray
        ${selectedItem === label ? "bg-primary" : ""}
                `}
        onMouseEnter={() => hoverHandler(label)}
        onMouseLeave={() => hoverHandler(label)}
        onClick={() => {
          clickHandler(label, route);
        }}
      >
        {name === label && visible && (
          <p className="pl-4 capitalize">{label}</p>
        )}
        <div className=" flex h-16 w-16 items-center justify-center">
          {memoizedIcon}
        </div>
      </motion.li>
      <li
        className={`min-w-16 flex h-16 rounded-md md:hidden  ${
          selectedItem === label ? "flex-1 bg-primary duration-500" : ""
        }`}
      >
        <div
          className={`flex w-full items-center justify-center  p-4         
          `}
          onClick={() => {
            clickHandler(label, route);
          }}
        >
          {memoizedIcon}
        </div>
      </li>
    </>
  );
}

export default memo(NavItem);
