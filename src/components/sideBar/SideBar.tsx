"use client";
import { navigationData } from "@/data/sideBarData";
import React, { memo } from "react";
import NavItem from "./NavItem";
import { SidebarProps } from "@/types";
import useSideBar from "@/hooks/useSideBar";

function SideBar({ selectedNavItem }: SidebarProps) {
  const { isVisible, selectedItem, hoverHandler, clickHandler } =
    useSideBar(selectedNavItem);

  return (
    <nav className="fixed bottom-0 right-0 z-50 flex w-full flex-col items-end justify-around bg-stone-600 md:right-1 md:top-0 md:h-full md:w-32 md:bg-transparent">
      <ul className="flex w-full flex-row justify-end overflow-hidden md:w-auto md:flex-col md:gap-5">
        {navigationData.map(({ icon, label, route }) => (
          <NavItem
            key={label}
            icon={icon}
            label={label}
            route={route}
            hoverHandler={hoverHandler}
            isVisible={isVisible}
            selectedItem={selectedItem}
            clickHandler={clickHandler}
          />
        ))}
      </ul>
    </nav>
  );
}

export default memo(SideBar);
