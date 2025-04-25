"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackBtn = () => {
  const router = useRouter(); // Anropa useRouter() för att få router-objektet

  const handleGoBack = () => {
    router.back(); // Använd router.back() för att gå tillbaka till föregående sida
  };
  return (
    <Button size={"lg"} className="w-20" onClick={handleGoBack}>
      Tillbaka
    </Button>
  );
};

export default GoBackBtn;
