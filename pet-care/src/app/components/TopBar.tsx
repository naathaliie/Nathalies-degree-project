'use client';
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

const TopBar = () => {
    const dispatch = useAppDispatch()

    const currentUser = useSelector((state: RootState) => state.auth.currentUser);

    const handleLogOut = () => {
        dispatch(logout())
    }


  return (
    <div className="TopBar w-full h-2/3 flex items-center justify-between px-7 text-petCare-darkBlue xl:w-4/5 p-4">
      <div>
        <Link href={"/"}>
        <Image src={logo} alt="logo-image" className="w-[40%] h-[40%]"/>
        </Link>
        <div className="flex gap-2">
            <p className="text-xs">Current user: {currentUser.username}</p>
        </div>
      </div>
      <div className="flex gap-10">
        <pre>inloggad?: {currentUser.isLoggedIn ? "true" : "false"}</pre>
       {!currentUser.isLoggedIn? (
        <div>
         <Link href={"/login"} className="flex flex-col items-center active:text-petCare-mainBlue">
         <UserIcon className="size-6 " />
         <p>Logga in</p>
       </Link>
       </div>
        ) : (
        <Link href={"/"} onClick={() => handleLogOut()} className="flex flex-col items-center active:text-petCare-mainBlue">
            <ArrowRightStartOnRectangleIcon className="size-6 " />
            <p>Logga ut</p>
        </Link>
         )}
        <Link href={"/contactUs"} className="flex flex-col items-center active:text-petCare-mainBlue">
          <PhoneIcon className="size-6" />
          <p>Kontakta oss</p>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
