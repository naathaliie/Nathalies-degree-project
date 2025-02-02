import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

const TopBar = () => {
  return (
    <div className="TopBar w-full h-2/3 flex items-center justify-between px-7 text-petCare-darkBlue xl:w-4/5 p-4">
      <div>
        <h1 className="font-extrabold text-3xl">Pet-Care</h1>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <UserIcon className="size-6 " />
          <p>Logga in</p>
        </div>
        <div className="flex flex-col items-center">
          <PhoneIcon className="size-6" />
          <p>Kontakta oss</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
