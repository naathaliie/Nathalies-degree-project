"use client";
import React, { useReducer, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { User } from "../../../../types/types";
import { postNewUser } from "@/api/users";
import Favorite from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { RegisterUserSchema } from "@/zodSchemas/RegisterUserSchema";
import ActionButton from "../ActionButton";

const RegisterUserForm = () => {
  const users = useAppSelector((state) => state.users.users);
  /* const isLoading = useAppSelector((state) => state.users.loading.postNewUser); */
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const selectedPet = useAppSelector((state) => state.pets.selectedPet);
  const dispatch = useAppDispatch();

  //Validering
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  //Validering på inputfälten!?
  const submit = (e: React.FormEvent) => {
    e.preventDefault(); //Stoppar att sidan laddas om

    //Fält som skall valideras
    const formData = {
      email: emailInput,
      password: passwordInput,
      name: nameInput,
      surname: surnameInput,
      street: adressInput,
      postalCode: postalCodeInput,
      city: cityInput,
      phone: phoneInput,
    };

    const validation = RegisterUserSchema.safeParse(formData);

    if (!validation.success) {
      // Om fel: sätt felmeddelanden
      const newErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0]] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    // Om ingen fel: fortsätt skapa användare
    setErrors({}); // Töm gamla fel

    //Logik för att skapa ny användare
    const newUser: User = {
        ...formData,
        dateOfRegistration: new Date().toISOString(), // För att få dagens datum
        pets: [],
        messages: [],
        favorites: [],
        orders: [],
      };
    //skicka till db

    console.log("Detta skickas till db", newUser);
     dispatch(postNewUser(newUser));

     /* postNewUser() */

  };

  const postNewUser = () => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)

    }, 500);
  }

  return (
    <div className="RegisterUserForm">
      <form onSubmit={submit} className="InputForm flex flex-col gap-3">
        <div>
          <h2>Inloggningsuppgifter</h2>
          <div>
            <p className=" text-lg font-bold">Epost</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setEmailInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.email}</p>}

          </div>
          <div>
            <p className=" text-lg font-bold">Lösenord</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%] "
              type="text"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.password}</p>}

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
              {errors.email && <p className="text-red-500">{errors.name}</p>}

          </div>
          <div>
            <p className=" text-lg font-bold">Efternamn</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setSurnameInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.surname}</p>}

          </div>

          <div>
            <p className=" text-lg font-bold">Adress</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setAdressInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.street}</p>}

          </div>
          <div>
            <p className=" text-lg font-bold">Postnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-20"
              type="text"
              onChange={(e) => setPostalCodeInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.postalCode}</p>}

          </div>
          <div>
            <p className=" text-lg font-bold">Stad</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setCityInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.city}</p>}

          </div>
          <div>
            <p className=" text-lg font-bold">Telefonnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              onChange={(e) => setPhoneInput(e.target.value)}
            />
              {errors.email && <p className="text-red-500">{errors.phone}</p>}

          </div>
          <p>{isLoading.toString()}</p>
        </div>
        <ActionButton icon={<Favorite/>} label="Test" onClick={submit} loading={isLoading}></ActionButton>
        <ActionButton icon={<Favorite/>} label="NYTEST" onClick={postNewUser} loading={isLoading}></ActionButton>
      </form>
    </div>
  );
};

export default RegisterUserForm;
