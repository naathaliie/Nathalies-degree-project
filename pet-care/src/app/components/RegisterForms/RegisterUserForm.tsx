"use client";
import React, { useReducer, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { User } from "../../../../types/types";
import { postNewUser } from "@/api/users";
import ActionBtn from "../ActionBtn";
import Favorite from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'

const RegisterUserForm = () => {
  const users = useAppSelector((state) => state.users.users);
  const isLoading = useAppSelector((state) => state.users.loading);
  const selectedPet = useAppSelector((state) => state.pets.selectedPet);
  const dispatch = useAppDispatch();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  //Validering på inputfälten!?
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Stoppar att sidan laddas om

    //Logik för att skapa ny användare
    const newUser: User = {
      email: emailInput,
      password: passwordInput,
      dateOfRegistration: new Date().toISOString(),
      name: nameInput,
      surname: surnameInput,
      street: adressInput,
      city: cityInput,
      postalCode: postalCodeInput,
      phone: phoneInput,
      pets: [],
      messages: [],
      favorites: [],
      orders: [],
    };
    //skicka till db

    console.log("Detta skickas till db", newUser);
    /*  dispatch(postNewUser(newUser)) */
  };


  return (
    <div className="RegisterUserForm">
      <form onSubmit={submitForm} className="InputForm flex flex-col gap-3">
        <div>
          <h2>Inloggningsuppgifter</h2>
          <div>
            <p className=" text-lg font-bold">Epost</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div>
            <p className=" text-lg font-bold">Lösenord</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%] "
              type="text"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2>Personuppgifter</h2>
          <div>
            <p className=" text-lg font-bold">Namn</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" text-lg font-bold">Efternamn</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setSurnameInput(e.target.value)}
            />
          </div>

          <div>
            <p className=" text-lg font-bold">Adress</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setAdressInput(e.target.value)}
            />
          </div>
          <div>
            <p className=" text-lg font-bold">Postnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-20"
              type="number"
              onChange={(e) => setPostalCodeInput(e.target.value)}
            />
          </div>
          <div>
            <p className=" text-lg font-bold">Stad</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </div>
          <div>
            <p className=" text-lg font-bold">Telefonnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setPhoneInput(e.target.value)}
            />
          </div>
        </div>
        <Button
            endIcon={<Favorite/>}
            variant="contained"
            size="large"
/*             loading={test}
             loadingPosition="end"
            disabled={disabled}*/
            className="w-fit !font-bold !bg-petCare-sapphireTeal-dark !text-white disabled:!bg-gray-400 disabled:!text-gray-200"
            onClick={() => {console.log("knappen funkar?")}}
            >
                Registrera
        </Button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
