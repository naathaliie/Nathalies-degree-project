"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Avatar from "@mui/material/Avatar";
import ArrowForward from "@mui/icons-material/ArrowForward";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { setMarkAsRead } from "@/lib/features/auth/authSlice";
import ErrorNeedToBeLoggedIn from "../components/ErrorNeedToBeLoggedIn";
import Link from "next/link";
import Calendar from "../components/Calendar";
import { Pet } from "../../../types/types";
import QuestionModal from "../components/QuestionModal";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    (state: RootState) => state.auth.currentUser
  );
  const allPets = useAppSelector((state: RootState) => state.pets.pets);

  const selectedPetFromStore: boolean = useAppSelector((state) =>
    state.pets.selectedPet ? true : false
  );

  const [addNewPet, setAddNewPet] = useState<boolean>(false);

  const currentUsersPets: Pet[] | null = allPets.filter((p) => {
    if (p.ownerId === currentUser?._id) {
      return p;
    }
    return null;
  });

  const openMessage = (userID: string, messageIndex: number) => {
    if (currentUser) {
      alert("Här ska meddelande med id: " + messageIndex + " öppnas upp");
      dispatch(setMarkAsRead(messageIndex));
    }
  };

  useEffect(() => {
    if (selectedPetFromStore) {
      setAddNewPet(true);
    }

    return () => {
      setAddNewPet(false);
    };
  }, [selectedPetFromStore]);

  return (
    <>
      {currentUser ? (
        <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center pb-5">
          <div className="w-full sm:w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
            <div className="flex flex-col gap-2 ml-5 sm:ml-10">
              <h1 className=" text-xl font-semibold sm:text-3xl md:text-5xl">
                Välkommen {currentUser.name}!
              </h1>
              <h3 className="text-sm md:text-xl">
                Här kan du se dina husdjur, lägga till ett nytt husdjur och
                massor mer!
              </h3>
            </div>
          </div>
          <div className=" bg-petCare-myWhite rounded-lg p-3 sm:p-10 m-2 w-full sm:w-3/4 h-auto grid gap-5 lg:gap-0 grid-flow-row lg:grid-flow-col lg:grid-cols-2 text-petCare-sapphireTeal-dark ">
            <div className="flex flex-col gap-5">
              <div>
                <h2 className=" p-1 font-bold bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25">
                  Meddelanden
                </h2>
                <div className="flex flex-col gap-3 m-2">
                  {currentUser.messages?.map((message, i) => {
                    return (
                      <button
                        key={i}
                        className="grid grid-flow-col grid-cols-2 border-2 sm:w-2/3 p-1 "
                        onClick={() => openMessage(currentUser._id, i)}
                      >
                        <div className="col-span-2 w-full text-start ">
                          <p className=" truncate overflow-hidden whitespace-nowrap w-full font-bold ">
                            {message.title}
                          </p>
                          <p className=" truncate overflow-hidden whitespace-nowrap w-full italic text-sm">
                            Avsändare: {message.sender}
                          </p>
                        </div>
                        <div className=" ">
                          <p className=" animate-bounceOnce">
                            {message.isUnread ? (
                              <MarkEmailUnreadIcon fontSize="small" />
                            ) : (
                              ""
                            )}
                          </p>
                          <ArrowForward />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className=" p-1 font-bold bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25">
                  Beställningar
                </h2>
                <div className="flex gap-3 m-2"> beställning 1</div>
                <div className="flex gap-3 m-2"> beställning 2</div>
              </div>
              <div>
                <h2 className=" p-1 font-bold bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25">
                  Husdjur
                </h2>
                {currentUsersPets.length < 0 ? (
                  <div className="flex flex-wrap gap-3 my-4 overflow-auto">
                    {currentUsersPets?.map((pet) => {
                      return (
                        <Link
                          href={`/users/myPets/${pet._id}`}
                          key={pet._id}
                          className="transition-transform duration-300 hover:scale-110"
                        >
                          <Avatar
                            sx={{
                              backgroundColor:
                                "var(--petCare-sapphireTeal-dark)",
                            }}
                          >
                            {pet.name[0]}
                          </Avatar>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <p>Du har inga registrerade husdjur ännu.</p>
                    <p>
                      Klicka{" "}
                      <Link href={"/users/myPets/addPet"}>
                        <b>Här</b> för att registrera
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2 className=" p-1 font-bold bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25">
                Kalender
              </h2>
              <Calendar pets={currentUsersPets} />
            </div>
            {addNewPet && <QuestionModal openModal={addNewPet} />}
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

export default UsersPage;
