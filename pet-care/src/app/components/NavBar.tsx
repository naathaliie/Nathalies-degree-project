"use client"; // TA BORT SEN, BARA FÖR ATT VISA CURRENTUSER
import React from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const NavBar = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const navItems: String[] = [
    "Alternativ 1",
    "Alternativ 2",
    "Alternativ 3",
    "Alternativ 4",
    "Alternativ 5",
  ];
  return (
    <nav className="NavBar w-full h-1/3 flex justify-center bg-petCare-darkBlue text-white">
      <div className="self-center mr-10">
        <p className="text-xs">Current user: {currentUser.username}</p>
      </div>
      <div className=" flex items-center">
        <ul className="flex gap-5">
          {navItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
