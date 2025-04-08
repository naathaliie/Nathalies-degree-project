"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const pets = ["Hund", "Katt", "Häst", "Smådjur"];
  const router = useRouter() // För att kunna navigera med routern

  const [selectedPet, setSelectedPet] = useState<string>("Hund");

  const handleSelectedPet = (pet: string) => {
    setSelectedPet(pet);
    console.log("Du valde: ", selectedPet)
  };

  return (
    <div className="HeroSection bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 w-full pt-10 pb-10 pl-16 pr-16 text-petCare-sapphireTeal-dark">
      <div>
        <h1 className="text-4xl font-bold ">Ta hand om din bästa vän!</h1>
        <p className="text-xl">
          Lägg till ditt husdjur och få hjälp med vård och inköp!
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        {pets.map((pet, index) => {
          return (
            <Button
              key={index}
              variant={"primary"}
              size={"default"}
              className=" font-bold shadow-md shadow-gray-400"
              onClick={() => handleSelectedPet(pet)}
            >
              {pet}
            </Button>
          );
        })}
      </div>

      <div className="mt-5">
        {/* Denna knapp vill jag ska ta oss till RegistrateNewUser och att valt djur skall skickas med/sparas lokalt ? */}
        <Button
          variant={"primary"}
          size={"lg"}
          className="font-bold text-xl shadow-md shadow-gray-400"
          onClick={() => {router.push("/users/new")}}
        >
          Registrera
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
