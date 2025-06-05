"use client";
import { RootState } from "@/lib/store";
import React from "react";
import { choosablePetsArray } from "../../../../types/types";
import RegistrationTabPanel from "@/app/components/RegistrationTabPanel";
import { useAppSelector } from "@/lib/hooks";

const NewUserPage = () => {
  return (
    <div className="NewUserPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 p-5 min-h-screen text-petCare-sapphireTeal-dark">
      <>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold">Välkommen till PetCare!</h1>
        </div>

        <div className="FormBox m-10 p-10 bg-petCare-myWhite">
          <RegistrationTabPanel />
        </div>
      </>
    </div>
  );
};

export default NewUserPage;
