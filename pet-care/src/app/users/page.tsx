"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getPets } from "@/api/pets";
import { useAppDispatch } from "@/lib/hooks";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const allPets = useSelector((state: RootState) => state.pets.pets)
  console.log("Vilka husdjur får vi ut?", allPets)

  const currentUsersPets = allPets.filter((p) => {
     if (p.ownerId === currentUser._id) {
        return p
    }
  })
  console.log("Nuvarande användares husdjur: ", currentUsersPets )

  //Hämta alla husdjur när komponenten monteras
  useEffect(() => {
   if (allPets.length === 0) {
               dispatch(getPets()); // Hämta användarna vid sidladdning
           }

         }, [dispatch, allPets.length]);

  return (
    <>
      <div className="LogInPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex min-h-[70vh] flex-col items-center ">
        <div className=" bg-petCare-sapphireTeal-main bg-opacity-25 w-full h-36 flex flex-col justify-center mb-5">
          <div className="ml-10">
            <h1 className=" text-xl font-semibold sm:text-3xl md:text-5xl">
              Välkommen {currentUser.name}!
            </h1>
            <h3 className="text-sm md:text-xl">
              Här kan du se dina husdjur, lägga till ett nytt husdjur och följa
              dina blablabla...
            </h3>
          </div>
        </div>
        <div>
          <p>Dina registrerade husdjur</p>
          <ul>
            {currentUsersPets?.map((pet) => {
              return <li key={pet._id}>{pet.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
