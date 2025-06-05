"use client";
import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useAppSelector } from "@/lib/hooks";
import { User } from "../../../types/types";
import { useAppDispatch } from "@/lib/hooks";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import PetCareButton from "../components/Buttons/PetCareButton";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import Link from "next/link";

const LogInPage = () => {
  const router = useRouter();
  const { isLargeScreen } = useBreakpoints();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  const setLoggedInUser = (user: User) => {
    dispatch(setCurrentUser(user));
    router.push("/users");
  };

  return (
    <div className=" relative flex items-center justify-center sm:mt-24 p-16 sm:p-0">
      {isLargeScreen && (
        <div className="absolute lg:left-[-100px] xl:left-[-50px] h-full flex justify-center items-center">
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
        <div className="flex flex-col gap-3 ">
          <div className="text-center">
            Har du inget konto? Registrera dig
            <Link href={"/users/new"}>
              <b> här</b>
            </Link>
          </div>
          <p className="text-center mt-7 sm:mt-0 font-bold">Testanvändare</p>
          <div className="flex flex-wrap align-middle justify-center gap-2 mx-5 sm:mx-0 ">
            {users.map((user: User) => (
              <PetCareButton
                key={user._id}
                label={user.name}
                onClick={() => setLoggedInUser(user)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
