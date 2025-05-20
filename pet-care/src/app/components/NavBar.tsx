"use client";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { NavbarMenuItem } from "../../../types/types";

const NavBar = () => {
  const navItemss: string[] = ["Tips & råd", "Vanliga frågor", "Om oss"];
  const navItems: NavbarMenuItem[] = [
    {
      title: "Tips & råd",
      route: "tipsAndAdvice",
    },
    {
      title: "Vanliga frågor",
      route: "questionAndAnswer",
    },
    {
      title: "Om oss",
      route: "about",
    },
  ];

  return (
    <nav className="relative w-full h-11 flex justify-center items-center bg-petCare-sapphireTeal-dark text-white">
      <div className="hidden sm:block">
        <div className=" flex items-center gap-5">
          {navItems.map((item, index) => {
            return (
              <Link href={`/info/${item.route}`} key={index}>
                <div className=" hover:underline underline-offset-8 decoration-2 font-bold">
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="block sm:hidden absolute right-2  ">
        <HamburgerMenu menuItems={navItems} />
      </div>
    </nav>
  );
};

export default NavBar;
