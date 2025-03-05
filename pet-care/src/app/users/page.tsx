"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const UsersPage = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <>
      <div className="LogInPage flex min-h-[70vh] flex-col items-center ">
        <div className=" bg-petCare-sapphireTeal-main bg-opacity-25 w-full h-36 flex flex-col justify-center mb-5">
          <div className="ml-10">
            <h1 className=" text-xl font-semibold sm:text-3xl md:text-5xl">
              Välkommen {currentUser.username}!
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
            {currentUser.pets.map((pet) => {
              return <li key={pet.id}>{pet.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
