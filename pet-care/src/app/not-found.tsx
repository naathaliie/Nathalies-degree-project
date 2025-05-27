"use client";
import React from "react";
import "./globals.css";
import PetCareButton from "./components/Buttons/PetCareButton";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-5 justify-center align-middle items-center py-[15%]">
      <h1>Hoppsan sidan hittades inte!</h1>
      <PetCareButton label="Tillbaka" onClick={handleOnClick} />
    </div>
  );
};

export default NotFoundPage;
