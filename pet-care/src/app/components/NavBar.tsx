"use client";
import React from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const navItems: string[] = [
    "Alternativ 1",
    "Alternativ 2",
    "Alternativ 3",
    "Alternativ 4",
    "Alternativ 5",
  ];
  return (
    <nav className="relative w-full h-1/3 flex justify-center items-center bg-petCare-sapphireTeal-dark text-white">
      <div className="hidden sm:block">
        <div className=" flex items-center">
          <ul className="flex gap-5">
            {navItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="block sm:hidden absolute right-2 top-[15%] ">
        <HamburgerMenu menuItems={navItems} />
      </div>
    </nav>
  );
};

export default NavBar;
