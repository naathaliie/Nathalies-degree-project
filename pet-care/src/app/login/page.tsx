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
import { getTestUsers } from "@/lib/features/users/usersSlice";
import PetCareButton from "../components/Buttons/PetCareButton";
import { useBreakpoints } from "@/hooks/useBreakpoints";

const LogInPage = () => {
  const router = useRouter();
  const { isLargeScreen } = useBreakpoints();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const setLoggedInUser = (user: User) => {
    dispatch(setCurrentUser(user));
    router.push("/users");
  };

  useEffect(() => {
    dispatch(getTestUsers());
  }, []);

  return (
    <div className="  relative flex items-center justify-center mt-24 mb-5">
      {isLargeScreen && (
        <div className="absolute lg:left-[-100] xl:left-[-50] h-full flex justify-center items-center">
          <img
            src="/images/8630162.png"
            alt="dog"
            className=" h-[15rem] md:h-[20rem] w-auto"
          />
        </div>
      )}

      <div className="  h-full flex flex-col items-center justify-center">
        <div>
          <LoginForm />
        </div>
        <div className="flex flex-wrap  gap-2">
          {users.map((user: User) => (
            <PetCareButton
              key={user._id}
              label={user.name}
              onClick={() => setLoggedInUser(user)}
            />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
