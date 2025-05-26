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
  const users = useAppSelector((state) => state.users.users);

  const setLoggedInUser = (user: User) => {
    dispatch(setCurrentUser(user));
    router.push("/users");
  };

  useEffect(() => {
    dispatch(getTestUsers());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-[5%]">
      <div>
        <LoginForm />
      </div>
      <div className="flex flex-wrap justify-center gap-2 m-7">
        {users.map((user: User) => (
          <PetCareButton
            key={user._id}
            label={user.name}
            onClick={() => setLoggedInUser(user)}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default LogInPage;
