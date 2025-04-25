"use client";
import RegisterPetForm from "@/app/components/RegisterForms/RegisterPetForm";
import RegisterUserForm from "@/app/components/RegisterForms/RegisterUserForm";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";
import { choosablePetsArray } from "../../../../types/types";

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
        <div className="flex flex-col gap-10 md:flex-row justify-evenly">
          <div className="md:w-1/2">
            <h1 className=" text-2xl font-bold mb-5">Uppgifter om dig</h1>
            <RegisterUserForm />
          </div>
          <div className="md:w-1/2">
            <h1 className=" text-2xl font-bold mb-5">
              Uppgifter om ditt husdjur
            </h1>
            <RegisterPetForm />
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <Button
            variant={"primary"}
            size={"lg"}
            className="font-bold text-xl shadow-md shadow-gray-400"
            onClick={() => console.log("hej")}
          >
            Registrera
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewUserPage;
