"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";
import UpdateUserForm from "@/app/components/Forms/UpdateUserForm";
import ErrorNeedToBeLoggedIn from "@/app/components/ErrorNeedToBeLoggedIn";
import PetCareButton from "@/app/components/Buttons/PetCareButton";
import SaveButton from "@/app/components/Buttons/SaveButton";

const EditProfile = () => {
  const [SaveButtonState, setSaveButtonState] = useState<boolean | null>(null);
  const currentUser = useAppSelector(
    (state: RootState) => state.auth.currentUser
  );
  const allPets = useAppSelector((state: RootState) => state.pets.pets);
  const [edit, setEdit] = useState<Boolean>(false);

  const currentUsersPets = allPets.filter(
    (p) => p.ownerId === currentUser?._id
  );

  const toggleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    return () => {
      setEdit(false);
    };
  }, [currentUser]);

  return (
    <>
      {currentUser ? (
        <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center pb-5">
          <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
            <div className="flex flex-col gap-2 ml-10">
              <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
                Redigera profil
              </h1>
              <h3 className="text-sm md:text-xl">
                Här kan du uppdatera dina uppgifter
              </h3>
            </div>
          </div>

          <div className="bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
            <div className="w-full flex flex-col">
              <div>
                {edit ? (
                  <div>
                    <UpdateUserForm currentUser={currentUser} />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 ">
                    <h2 className="font-bold text-xl ">Personuppgifter</h2>
                    <div>
                      <h2 className="font-bold">Namn</h2>
                      <p>{currentUser.name}</p>
                    </div>
                    <div>
                      <h2 className="font-bold">Efternamn</h2>
                      <p>{currentUser.surname}</p>
                    </div>
                    <div>
                      <h2 className="font-bold">Adress</h2>
                      <p>{currentUser.street}</p>
                    </div>
                    <div>
                      <h2 className="font-bold">Postnummer</h2>
                      <p>{currentUser.postalCode}</p>
                    </div>
                    <div>
                      <h2 className="font-bold">Stad</h2>
                      <p>{currentUser.city}</p>
                    </div>
                    <div>
                      <h2 className="font-bold">Telefonnummer</h2>
                      <p>{currentUser.phone}</p>
                    </div>
                    <h2 className="font-bold text-xl mt-10">
                      Inloggningsuppgifter
                    </h2>
                    <div>
                      <h2 className="font-bold">Email</h2>
                      <p>{currentUser.email}</p>
                    </div>
                    <div>
                      <h2 className="font-bold">Lösenord</h2>
                      <p>{currentUser.password}</p>
                    </div>
                    <div className="flex justify-center">
                      <PetCareButton
                        label="Redigera uppgifter"
                        onClick={() => toggleEdit()}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorNeedToBeLoggedIn />
      )}
    </>
  );
};

export default EditProfile;
