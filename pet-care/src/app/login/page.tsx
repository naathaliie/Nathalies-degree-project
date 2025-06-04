"use client";
import React, { useEffect } from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useAppSelector } from "@/lib/hooks";
import { User } from "../../../types/types";
import { useAppDispatch } from "@/lib/hooks";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { getTestUsers } from "@/lib/features/users/usersSlice";
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
        <div className="flex flex-col gap-3">
          <div>
            Har du inget konto? Registrera dig{" "}
            <Link href={"/users/new"}>
              <b>här</b>
            </Link>
          </div>
          <div className="flex flex-wrap  gap-2">
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
