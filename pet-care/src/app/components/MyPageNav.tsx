"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { logout } from "@/lib/features/auth/authSlice";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

const MyPageNav = () => {
  const dispatch = useAppDispatch();

  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const navItems = [
    {
      titel: "Mina sidor",
      href: "/users/",
    },
    {
      titel: "Mina husdjur",
      href: "/users/myPets",
    },
    {
      titel: "Redigera profil",
      href: "/users/editProfile",
    },
    {
      titel: "Logga ut",
      href: "",
    },
  ];

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      {currentUser && (
        <nav className="NavBar w-full p-2 flex justify-center bg-petCare-sapphireTeal-light text-white">
          <div className=" flex items-center">
            <div className="flex gap-5">
              {navItems.map((item, index) => {
                if (item.titel === "Logga ut") {
                  return (
                    <Link
                      href={"/"}
                      key={index}
                      onClick={() => handleLogOut()}
                      className="flex items-center text-petCare-sapphireTeal-dark hover:text-petCare-myWhite"
                    >
                      <p>Logga ut</p>
                      <ArrowRightStartOnRectangleIcon className="size-6 " />
                    </Link>
                  );
                }
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className=" hover:text-petCare-sapphireTeal-dark"
                  >
                    {item.titel}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default MyPageNav;
