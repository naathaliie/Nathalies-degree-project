"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const MyPageNav = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const navItems: String[] = [
    "Mina sidor",
    "Profil",
    "Mina djur",
    "Alternativ 4",
    "Alternativ 5",
  ];

  return (
    <>
      {currentUser?.isLoggedIn && (
        <nav className="NavBar w-full p-2 flex justify-center bg-petCare-sapphireTeal-light text-white">
          <div className=" flex items-center">
            <div className="self-center">
              <p className="text-xs">inloggad:{currentUser?.name}</p>
            </div>

            <ul className="flex gap-5">
              {navItems.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default MyPageNav;
