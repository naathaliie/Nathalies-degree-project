"use client";
import React, { useRef } from "react";
import PetCareButton from "../Buttons/PetCareButton";

const LoginForm = () => {
  let userNameRef = useRef<HTMLInputElement>(null);
  let passwordRef = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent) => {
    event.preventDefault(); //Stoppar sidomladdningen
    const userName = userNameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(userName);
    console.log(password);

    // Tömmer input-fälten genom att sätta deras värde till en tom sträng
    if (userNameRef.current) userNameRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  };
  return (
    <div className=" sm:w-[35rem] bg-petCare-myWhite border-2 border-petCare-sapphireTeal-dark rounded-md p-10 m-10 text-petCare-sapphireTeal-dark">
      <form onSubmit={submit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="useName" className="font-bold">
            Användarnamn:
          </label>
          <input
            ref={userNameRef}
            name="userName"
            type="email"
            className="h-8 text-lg border-2 border-petCare-sapphireTeal-dark rounded-md p-4"
          />
          <label htmlFor="password" className="font-bold">
            Lösenord:
          </label>
          <input
            ref={passwordRef}
            name="password"
            className="h-8 text-lg border-2 border-petCare-sapphireTeal-dark rounded-md p-4"
          />
        </div>
        <div className=" self-center">
          <PetCareButton label="Logga in" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
