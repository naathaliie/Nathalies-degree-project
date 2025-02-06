'use client';
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import logo from "../../../public/petCareLogo.png";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="TopBar w-full h-2/3 flex items-center justify-between px-7 text-petCare-darkBlue xl:w-4/5 p-4">
      <div>
        <Link href={"/"}>
        <Image src={logo} alt="logo-image" className="w-[40%] h-[40%]"/>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href={"/login"} className="flex flex-col items-center active:text-petCare-mainBlue">
          <UserIcon className="size-6 " />
          <p>Logga in</p>
        </Link>
        <Link href={"/contactUs"} className="flex flex-col items-center active:text-petCare-mainBlue">
          <PhoneIcon className="size-6" />
          <p>Kontakta oss</p>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
