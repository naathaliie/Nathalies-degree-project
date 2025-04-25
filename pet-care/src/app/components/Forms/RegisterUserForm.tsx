"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { User } from "../../../../types/types";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { RegisterUserSchema } from "@/zodSchemas/RegisterUserSchema";
import SaveButton from "../Buttons/SaveButton";
import {
  addNewUser,
  getDraftUser,
  setDraftUser,
} from "@/lib/features/users/usersSlice";
import { v4 as uuidv4 } from "uuid";
//setSuccessAddNewUser kan skickas med om man från föräldrakomponenten vill veta om en ny user sparades eller inte
//Skapa i så fall nedan i föräldra komponenten
//const [successAddNewUser, setSuccessAddNewUser] = useState<boolean>(false);

type RegisterUserFormProps = {
  setSuccessAddNewUser?: React.Dispatch<SetStateAction<boolean>>;
};

const RegisterUserForm = ({ setSuccessAddNewUser }: RegisterUserFormProps) => {
  const dispatch = useAppDispatch();
  const [saveButtonState, setSaveButtonState] = useState<boolean | null>(null);
  const draftUser = useAppSelector((state) => state.users.draftUser);

  //Validering av inputfält
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState(draftUser ? draftUser.name : "");
  const [surnameInput, setSurnameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [cityInput, setCityInput] = useState(draftUser ? draftUser.city : "");
  const [phoneInput, setPhoneInput] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); //Stoppar att sidan laddas om
    setErrors({}); // Töm gamla fel BÖR DENNA LIGGA LÄNGST UPP I SUBMIT?

    //Fält som skall valideras
    const newUser: User = {
      _id: uuidv4(),
      email: emailInput,
      password: passwordInput,
      name: nameInput,
      surname: surnameInput,
      street: adressInput,
      postalCode: postalCodeInput,
      city: cityInput,
      phone: phoneInput,
    };
    //Validera
    const validation = RegisterUserSchema.safeParse(newUser);

    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0]] = error.message;
        }
      });
      setErrors(newErrors);
      setSaveButtonState(false);
      if (setSuccessAddNewUser) {
        setSuccessAddNewUser(false);
      }
      return;
    }

    console.log("ny användare: ", newUser);

    dispatch(setDraftUser(newUser));
    setSaveButtonState(true);
    if (setSuccessAddNewUser) {
      setSuccessAddNewUser(true);
    }
  };

  useEffect(() => {
    if (draftUser) {
      setEmailInput(draftUser.email || "");
      setPasswordInput(draftUser.password || "");
      setNameInput(draftUser.name || "");
      setSurnameInput(draftUser.surname || "");
      setAdressInput(draftUser.street || "");
      setPostalCodeInput(draftUser.postalCode || "");
      setCityInput(draftUser.city || "");
      setPhoneInput(draftUser.phone || "");
    }
  }, [draftUser]);

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
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <p className=" text-lg font-bold">Lösenord</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%] "
              type="text"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
        </div>

        <div>
          <h2>Personuppgifter</h2>
          <div>
            <p className=" text-lg font-bold">Namn</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <p className=" text-lg font-bold">Efternamn</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={surnameInput}
              onChange={(e) => setSurnameInput(e.target.value)}
            />
            {errors.surname && <p className="text-red-500">{errors.surname}</p>}
          </div>

          <div>
            <p className=" text-lg font-bold">Adress</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={adressInput}
              onChange={(e) => setAdressInput(e.target.value)}
            />
            {errors.street && <p className="text-red-500">{errors.street}</p>}
          </div>
          <div>
            <p className=" text-lg font-bold">Postnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-20"
              type="text"
              value={postalCodeInput}
              onChange={(e) => setPostalCodeInput(e.target.value)}
            />
            {errors.postalCode && (
              <p className="text-red-500">{errors.postalCode}</p>
            )}
          </div>
          <div>
            <p className=" text-lg font-bold">Stad</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
          <div>
            <p className=" text-lg font-bold">Telefonnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        </div>
        {/* Nu måste man klicka på knappen för att fälten skall sparas, byta till att de sparas vid klick utanför? SELFSAVE? */}
        <SaveButton
          icon={<ArrowForward />}
          label="Nästa"
          state={saveButtonState}
          setState={setSaveButtonState}
          onClick={submit}
        ></SaveButton>
      </form>
      {draftUser?.name ? "true" : "false"}
    </div>
  );
};

export default RegisterUserForm;
