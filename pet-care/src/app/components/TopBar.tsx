"use client";
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import logo from "../../../public/petCareLogo.png";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/lib/hooks";
import { logout } from "@/lib/features/auth/authSlice";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  const dispatch = useAppDispatch();

  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className=" w-full h-2/3 flex items-center justify-between px-1 md:px-32 3xl:px-10 text-petCare-sapphireTeal-dark xl:w-4/5">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo-image" className="w-20 h-20" />
        </Link>
      </div>
      <div className="flex gap-10">
        {!currentUser?.isLoggedIn ? (
          <div>
            <Link
              href={"/login"}
              className="flex flex-col items-center active:text-petCare-sapphireTeal-main"
            >
              <UserIcon className="size-6 " />
              <p>Logga in</p>
            </Link>
          </div>
        ) : (
          <div>
            <Link
              href={"/users/"}
              className="flex flex-col items-center active:text-petCare-sapphireTeal-main"
            >
              <UserCircleIcon className="size-6" />
              <p>Mina sidor</p>
            </Link>
          </div>
        )}
        <Link
          href={"/contactUs"}
          className="flex flex-col items-center active:text-petCare-sapphireTeal-main"
        >
          <PhoneIcon className="size-6" />
          <p>Kontakt</p>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
