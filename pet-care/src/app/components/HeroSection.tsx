"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedPet } from "@/lib/features/pets/petsSlice";
import { ChoosablePets, choosablePetsArray } from "../../../types/types";
import { ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { ForwardIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [pet, setPet] = useState<ChoosablePets | null>(null);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelection: ChoosablePets
  ) => {
    setPet(newSelection);
  };

  const handleRegistration = () => {
    if (pet) {
      dispatch(setSelectedPet(pet));
      router.push("/users/new");
      setPet(null); // Rensar
    }
  };

  return (
    <div className="HeroSection bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 w-full pt-10 pb-10 pl-16 pr-16 text-petCare-sapphireTeal-dark">
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
      <div></div>
    </div>
  );
};

export default HeroSection;
