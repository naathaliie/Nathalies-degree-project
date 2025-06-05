"use client";
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import logo from "../../../public//petCareLogo.jpg";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <div className="w-full flex justify-around sm:justify-center text-petCare-sapphireTeal-dark px-0 sm:px-16 py-2">
      <div className="w-2/3 flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo-image" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex gap-10">
          {!currentUser ? (
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
    </div>
  );
};

export default TopBar;
