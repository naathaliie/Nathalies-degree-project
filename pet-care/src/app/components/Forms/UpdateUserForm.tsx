"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { User } from "../../../../types/types";
import SaveIcon from "@mui/icons-material/Save";
import { RegisterUserSchema } from "@/zodSchemas/RegisterUserSchema";
import SaveButton from "../Buttons/SaveButton";
import { updateCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/features/users/usersSlice";

type UpdateUserFormProps = {
  currentUser?: User;
};

const UpdateUserForm = ({ currentUser }: UpdateUserFormProps) => {
  const dispatch = useAppDispatch();
  const [saveButtonState, setSaveButtonState] = useState<boolean | null>(null);
  const router = useRouter();

  //Validering av inputfält
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (currentUser) {
      //Fält som skall valideras
      const updatedUser: User = {
        _id: currentUser._id,
        email: emailInput,
        password: passwordInput,
        name: nameInput,
        surname: surnameInput,
        street: adressInput,
        postalCode: postalCodeInput,
        city: cityInput,
        phone: phoneInput,
        messages: currentUser.messages,
        isLoggedIn: true,
      };
      //Validera
      const validation = RegisterUserSchema.safeParse(updatedUser);

      if (!validation.success) {
        const newErrors: { [key: string]: string } = {};
        validation.error.errors.forEach((error) => {
          if (error.path[0]) {
            newErrors[error.path[0]] = error.message;
          }
        });
        setErrors(newErrors);
        setSaveButtonState(false);
        return;
      }

      console.log("uppdaterad användare: ", updatedUser);

      dispatch(updateCurrentUser(updatedUser));
      dispatch(updateUser(updatedUser));
      setSaveButtonState(true);
      router.push("/users/editProfile");
    }
  };

  useEffect(() => {
    if (currentUser) {
      setNameInput(currentUser.name);
      setSurnameInput(currentUser.surname);
      setAdressInput(currentUser.street);
      setPostalCodeInput(currentUser.postalCode);
      setCityInput(currentUser.city);
      setPhoneInput(currentUser.phone || "");
      setEmailInput(currentUser.email);
      setPasswordInput(currentUser.password);
    }
    return () => {};
  }, [currentUser]);

  return (
    <div className="UpdateUserForm">
      <form onSubmit={submit} className="InputForm flex flex-col gap-3">
        <div>
          <h2 className="font-bold text-xl ">Personuppgifter</h2>

          <div>
            <p className=" font-bold">Namn</p>
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
            <p className=" font-bold">Efternamn</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={surnameInput}
              onChange={(e) => setSurnameInput(e.target.value)}
            />
            {errors.surname && <p className="text-red-500">{errors.surname}</p>}
          </div>
          <div>
            <p className=" font-bold">Adress</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={adressInput}
              onChange={(e) => setAdressInput(e.target.value)}
            />
            {errors.street && <p className="text-red-500">{errors.street}</p>}
          </div>
          <div>
            <p className=" font-bold">Postnummer</p>
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
            <p className=" font-bold">Stad</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
          <div>
            <p className=" font-bold">Telefonnummer</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          <h2 className="font-bold text-xl mt-10">Inloggningsuppgifter</h2>
          <div>
            <p className=" font-bold">Epost</p>
            <input
              className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
              type="text"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <p className=" font-bold">Lösenord</p>
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
        <SaveButton
          endIcon={<SaveIcon fontSize="small" />}
          label="Spara"
          state={saveButtonState}
          setState={setSaveButtonState}
          onClick={submit}
        ></SaveButton>
      </form>
    </div>
  );
};

export default UpdateUserForm;
