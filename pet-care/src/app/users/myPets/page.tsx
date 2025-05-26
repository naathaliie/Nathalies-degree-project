"use client";
import React from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";
import ErrorNeedToBeLoggedIn from "@/app/components/ErrorNeedToBeLoggedIn";

const MyPetsPage = () => {
  const currentUser = useAppSelector(
    (state: RootState) => state.auth.currentUser
  );
  const allPets = useAppSelector((state: RootState) => state.pets.pets);

  const currentUsersPets = allPets.filter((p) => {
    if (p.ownerId === currentUser?._id) {
      return p;
    }
  });

  const handleClickOnPet = (id: string, name: string) => {
    alert("Du klickade på husdjur med id: " + id + " Med namn: " + name);
  };

  return (
    <>
      {currentUser ? (
        <div className=" bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center ">
          <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
            <div className="flex flex-col gap-2 ml-10">
              <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
                Mina husdjur
              </h1>
              <h3 className="text-sm md:text-xl">
                Här kan du se alla dina registrerade husdjur
              </h3>
            </div>
          </div>

          <div className="bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
            <div className="w-full flex gap-5 flex-wrap ">
              {currentUsersPets.map((pet) => {
                return (
                  <div
                    key={pet._id}
                    className="border-2 p-4 w-36  flex flex-col justify-between items-center gap-5 transition-transform duration-300 hover:scale-110"
                    onClick={() => handleClickOnPet(pet._id, pet.name)}
                  >
                    <p className=" flex items-center justify-center bg-petCare-sapphireTeal-superLight rounded-full w-20 h-20 ">
                      Bild
                    </p>
                    <p>{pet.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ErrorNeedToBeLoggedIn />
        </div>
      )}
    </>
  );
};

export default MyPetsPage;
