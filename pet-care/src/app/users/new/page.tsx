"use client";
import React from "react";
import RegistrationTabPanel from "@/app/components/RegistrationTabPanel";

const NewUserPage = () => {
  return (
    <div className="NewUserPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 p-5 text-petCare-sapphireTeal-dark">
      <>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-center">
            Välkommen till PetCare!
          </h1>
        </div>

        <div className="FormBox mt-10 sm:m-10 p-5 sm:p-10 bg-petCare-myWhite">
          <RegistrationTabPanel />
        </div>
      </>
    </div>
  );
};

export default NewUserPage;
