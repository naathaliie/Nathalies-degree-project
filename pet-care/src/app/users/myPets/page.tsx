"use client";
import React from "react";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import ArrowForward from "@mui/icons-material/ArrowForward";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { setMessageMarkAsRead } from "@/lib/features/users/usersSlice";
import { setMarkAsRead } from "@/lib/features/auth/authSlice";
import ErrorNeedToBeLoggedIn from "@/app/components/ErrorNeedToBeLoggedIn";

const MyPetsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
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
          MyPetsPage
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
