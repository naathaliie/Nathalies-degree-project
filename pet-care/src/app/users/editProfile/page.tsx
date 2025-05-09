"use client";
import React, { useState } from "react";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import ArrowForward from "@mui/icons-material/ArrowForward";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { setMessageMarkAsRead } from "@/lib/features/users/usersSlice";
import { setMarkAsRead } from "@/lib/features/auth/authSlice";
import UpdateUserForm from "@/app/components/Forms/UpdateUserForm";
import ErrorNeedToBeLoggedIn from "@/app/components/ErrorNeedToBeLoggedIn";
import PetCareButton from "@/app/components/Buttons/PetCareButton";

const EditProfile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    (state: RootState) => state.auth.currentUser
  );
  const allPets = useAppSelector((state: RootState) => state.pets.pets);

  const [edit, setEdit] = useState<Boolean>(false);

  const currentUsersPets = allPets.filter((p) => {
    if (p.ownerId === currentUser?._id) {
      return p;
    }
  });

  const toggleEdit = () => {
    setEdit(!edit);
  };

  //Fortsätt med denna funktion så att man ser infon eller kan välja att redigera den

  return (
    <>
      {currentUser ? (
        <div className="LogInPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex min-h-[70vh] flex-col items-center ">
          <div className=" w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
            <div className=" flex flex-col gap-2 ml-10">
              <h1 className=" text-xl font-semibold sm:text-3xl md:text-5xl">
                Redigera profil
              </h1>
              <h3 className="text-sm md:text-xl">
                Här kan du uppdatera dina uppgifter
              </h3>
            </div>
          </div>
          <div className=" bg-petCare-myWhite rounded-lg p-10 m-2 w-3/4 h-auto grid gap-5 lg:gap-0 grid-flow-row lg:grid-flow-col lg:grid-cols-2 text-petCare-sapphireTeal-dark ">
            {edit ? (
              <div>Redigera</div>
            ) : (
              <div>
                <div>
                  <h1>inte redigera</h1>
                </div>
                <div>
                  <PetCareButton
                    label="Redigera"
                    onClick={() => toggleEdit()}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <ErrorNeedToBeLoggedIn />
        </div>
      )}
    </>
  );
};

export default EditProfile;
