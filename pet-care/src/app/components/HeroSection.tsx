"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedPet } from "@/lib/features/pets/petsSlice";
import { ChoosablePets, choosablePetsArray } from "../../../types/types";
import { ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useAppSelector } from "@/lib/hooks";

const HeroSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [pet, setPet] = useState<ChoosablePets | null>(null);
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelection: ChoosablePets
  ) => {
    setPet(newSelection);
  };

  const handleRegistration = () => {
    if (pet) {
      dispatch(setSelectedPet(pet));
      if (currentUser) {
        router.push("/users/myPets/addPet");
        return;
      }

      router.push("/login");
      setPet(null); // Rensar
    }
  };

  const pawPrint = () => {
    switch (pet) {
      case "Hund":
        return "dog";
      case "Katt":
        return "cat";
      case "Häst":
        return "horse";
      case "Smådjur":
        return "mixPrints";
      default:
        return "dog";
    }
  };

  return (
    <div className=" bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 w-full py-10 px-16 text-petCare-sapphireTeal-dark flex justify-center items-center">
      <div className=" relative w-2/3 flex flex-col">
        <img
          src={`/pawPrints/${pawPrint()}.svg`}
          alt="pawPrint"
          className="absolute  md:right-[-160] lg:right-[-100] xl:right-[-10] w-56 h-56 hidden md:block"
        />

        <div>
          <h1 className="text-4xl font-bold ">Ta hand om din bästa vän!</h1>
          <p className="text-xl">
            Registrera ditt husdjur och få hjälp med vård och inköp
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <ToggleButtonGroup
            value={pet}
            exclusive
            onChange={handleChange}
            className="bg-petCare-sapphireTeal-dark"
          >
            {choosablePetsArray.map((p, i) => {
              return (
                <ToggleButton
                  key={i}
                  value={p}
                  className={`${
                    pet === p && "!bg-petCare-sapphireTeal-light"
                  } !text-petCare-myWhite !font-bold rounded-sm !text-sm`}
                >
                  {p}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>

        <div className="mt-5">
          {pet && (
            <Button
              endIcon={<ArrowForward />}
              variant="contained"
              size="large"
              className={`${
                pet ? "!bg-petCare-sapphireTeal-dark " : "bg-slate-300"
              } !font-bold !text-lg`}
              disabled={!pet}
              onClick={handleRegistration}
            >
              Registrera
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
