"use client";
import React, { useEffect } from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

const UsersPage = () => {
  const router = useRouter();
  const currentUser = useAppSelector(
    (state: RootState) => state.auth.currentUser
  );
  const allPets = useAppSelector((state: RootState) => state.pets.pets);

  const currentUsersPets = allPets.filter((p) => {
    if (p.ownerId === currentUser?._id) {
      return p;
    }
  });

  return (
    <>
      {currentUser ? (
        <div className="LogInPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex min-h-[70vh] flex-col items-center ">
          <div className=" bg-petCare-sapphireTeal-main bg-opacity-25 w-full h-36 flex flex-col justify-center mb-5">
            <div className="ml-10">
              <h1 className=" text-xl font-semibold sm:text-3xl md:text-5xl">
                Välkommen {currentUser?.name}!
              </h1>
              <h3 className="text-sm md:text-xl">
                Här kan du se dina husdjur, lägga till ett nytt husdjur och
                följa dina blablabla...
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
      ) : (
        <div>
          {/* SNYGGA TILL! */}
          <h1>Hoppsan, du behöver logga in för att se något här</h1>
          <button onClick={() => router.push("/login")}>Logga in</button>
        </div>
      )}
    </>
  );
};

export default UsersPage;
