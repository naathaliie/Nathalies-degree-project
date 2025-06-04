"use client";
import { RootState } from "@/lib/store";
import React from "react";
import { choosablePetsArray } from "../../../../types/types";
import RegistrationTabPanel from "@/app/components/RegistrationTabPanel";
import { useAppSelector } from "@/lib/hooks";

const NewUserPage = () => {
  const currentSelectedPet = useAppSelector(
    (state: RootState) => state.pets.selectedPet
  );
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  return (
    <div className="NewUserPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 p-5 min-h-screen text-petCare-sapphireTeal-dark">
      {currentUser ? (
        <h1>
          Lägga till ett nytt husdjur när du är inloggad gör du via mina sidor
        </h1>
      ) : (
        <>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold">Välkommen till PetCare!</h1>
            {currentSelectedPet === choosablePetsArray[3] ? (
              <h2 className="">
                För att kunna ta hand om dig och ditt {currentSelectedPet} på
                bästa sätt behöver du fylla i några uppgifter
              </h2>
            ) : (
              <h2 className="">
                För att kunna ta hand om dig och din {currentSelectedPet} på
                bästa sätt behöver du fylla i några uppgifter
              </h2>
            )}
          </div>

          <div className="FormBox m-10 p-10 bg-petCare-myWhite">
            <RegistrationTabPanel />
          </div>
        </>
      )}
    </div>
  );
};

export default NewUserPage;
