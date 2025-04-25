"use client";
import RegisterPetForm from "@/app/components/Forms/RegisterPetForm";
import RegisterUserForm from "@/app/components/Forms/RegisterUserForm";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";
import { choosablePetsArray } from "../../../../types/types";
import RegistrationTabPanel from "@/app/components/RegistrationTabPanel";

const NewUserPage = () => {
  const currentSelectedPet = useSelector(
    (state: RootState) => state.pets.selectedPet
  );
  return (
    <div className="NewUserPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 p-5 min-h-[70vh] text-petCare-sapphireTeal-dark">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Välkommen till PetCare!</h1>
        {currentSelectedPet === choosablePetsArray[3] ? (
          <h2 className="">
            För att kunna ta hand om dig och ditt {currentSelectedPet} på bästa
            sätt behöver du fylla i några uppgifter
          </h2>
        ) : (
          <h2 className="">
            För att kunna ta hand om dig och din {currentSelectedPet} på bästa
            sätt behöver du fylla i några uppgifter
          </h2>
        )}
      </div>

      <div className="FormBox m-10 p-10 bg-petCare-myWhite">
        <RegistrationTabPanel />
      </div>
    </div>
  );
};

export default NewUserPage;
