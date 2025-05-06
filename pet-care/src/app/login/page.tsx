"use client";
import React, { useEffect, useRef, useState } from "react";
import "../globals.css";
import LoginForm from "../components/Forms/LoginForm";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import { User } from "../../../types/types";
import { RootState } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { getUsers } from "@/api/users";
import { getTestUsers } from "@/lib/features/users/usersSlice";
import PetCareButton from "../components/Buttons/PetCareButton";

const LogInPage = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users); //Hämta users från storen

  const setLoggedInUser = (user: User) => {
    dispatch(setCurrentUser(user));
    router.push("/users");
  };

  //useEffect är som onMounted, körs en gång när komponenten monteras
  useEffect(() => {
    dispatch(getTestUsers()); // Hämta användarna vid sidladdning
  }, []);

  return (
    <main className="LogInPage flex flex-col justify-center items-center m-5 min-h-[70vh]">
      <h2>Logga in</h2>
      <h3>Användare från redux</h3>
      <h3>Nuvarande inloggad är : {currentUser && currentUser.name}</h3>
      <ul className="flex flex-col gap-2 m-7">
        {users.map((user: User, i) => (
          <PetCareButton
            key={user._id}
            label={user.name}
            onClick={() => setLoggedInUser(user)}
          />
        ))}
      </ul>
      <div></div>
      {/* TA BORT SEDAN */}
      <LoginForm />
    </main>
  );
};

export default LogInPage;
