"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { logout } from "@/lib/features/auth/authSlice";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import SaveButton from "./Buttons/SaveButton";
import PetCareButton from "./Buttons/PetCareButton";
import { Button } from "@mui/material";

const MyPageNav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

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
  ];

  const handleLogOut = () => {
    setTimeout(() => {
      router.push("/");
      dispatch(logout());
    }, 1500);
  };

  return (
    <>
      {currentUser && (
        <nav className="NavBar w-full p-2 flex justify-center bg-petCare-sapphireTeal-light text-white">
          <div className=" flex items-center">
            <div className="flex gap-5">
              {navItems.map((item, index) => {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className=" hover:text-petCare-sapphireTeal-dark text-xs sm:text-base"
                  >
                    {item.titel}
                  </Link>
                );
              })}
              <button
                className="flex items-center text-petCare-sapphireTeal-dark hover:text-petCare-myWhite"
                onClick={() => handleLogOut()}
              >
                <p className=" text-xs sm:text-base">Logga ut</p>
                <ArrowRightStartOnRectangleIcon className="size-5 sm:size-6 " />
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default MyPageNav;
