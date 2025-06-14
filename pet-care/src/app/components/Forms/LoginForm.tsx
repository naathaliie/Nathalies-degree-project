"use client";
import React, { useRef } from "react";
import PetCareButton from "../Buttons/PetCareButton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const allUsers = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();

    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    const foundUser = allUsers.find((u) => {
      return u.email === username ? u : null;
    });
    const foundPassword = allUsers.some((u) => {
      return u.password === password;
    });

    if (!foundUser) {
      return alert("Användarnamnet hittades inte, försök igen");
    }

    if (!foundPassword) {
      return alert("Fel lösenord, försök igen");
    }

    dispatch(setCurrentUser(foundUser));
    router.push("/users");
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
            type="string"
            name="password"
            className="h-8 text-lg border-2 border-petCare-sapphireTeal-dark rounded-md p-4"
          />
        </div>
        <div className=" self-center">
          <PetCareButton type="submit" label="Logga in" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
