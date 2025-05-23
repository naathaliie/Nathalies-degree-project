"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  ChoosablePets,
  choosablePetsArray,
  Pet,
} from "../../../../types/types";
import { setDraftPet, setSelectedPet } from "@/lib/features/pets/petsSlice";
import { v4 as uuidv4 } from "uuid";
import { RegisterPetSchema } from "@/zodSchemas/RegisterPetSchema";
import SaveButton from "../Buttons/SaveButton";
import ArrowForward from "@mui/icons-material/ArrowForward";

type RegisterPetFormProps = {
  setSuccessAddNewPet?: React.Dispatch<SetStateAction<boolean>>;
};

const RegisterPetForm = ({ setSuccessAddNewPet }: RegisterPetFormProps) => {
  const selectedPet = useAppSelector((state) => state.pets.selectedPet);
  const draftPet = useAppSelector((state) => state.pets.draftPet);
  const draftUser = useAppSelector((state) => state.users.draftUser);
  const dispatch = useAppDispatch();
  const [SaveButtonState, setSaveButtonState] = useState<boolean | null>(null);

  //Validering av inputfälten
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [nameInput, setNameInput] = useState("");
  const [breedInput, setBreedInput] = useState("");
  const [genderInput, setGenderInput] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newPet: Pet = {
      _id: uuidv4(),
      ownerId: draftUser?._id || "000",
      name: nameInput,
      species: selectedPet || choosablePetsArray[0],
      breed: breedInput,
      gender: genderInput,
    };

    const validation = RegisterPetSchema.safeParse(newPet);

    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0]] = error.message;
        }
      });
      setErrors(newErrors);
      setSaveButtonState(false);
      if (setSuccessAddNewPet) {
        setSuccessAddNewPet(false);
      }
      return;
    }

    dispatch(setDraftPet(newPet));
    setSaveButtonState(true);
    if (setSuccessAddNewPet) {
      setSuccessAddNewPet(true);
    }
  };

  useEffect(() => {
    if (draftPet) {
      setNameInput(draftPet.name || "");
      setBreedInput(draftPet.breed || "");
      setGenderInput(draftPet.gender || "");
    }
    return () => {
      if (setSuccessAddNewPet) {
        setSuccessAddNewPet(false);
      }
    };
  }, [selectedPet]);

  return (
    <div className="RegisterPetForm">
      <form className="InputForm flex flex-col gap-3">
        <div>
          <p className=" text-lg font-bold">Typ av husdjur</p>
          <select
            value={selectedPet || choosablePetsArray[0]}
            onChange={(e) => setSelectedPet(e.target.value as ChoosablePets)}
            className=" border-2 border-petCare-sapphireTeal-dark"
          >
            {choosablePetsArray.map((pet, i) => {
              return (
                <option key={i} value={pet}>
                  {pet}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <p className=" text-lg font-bold">Namn</p>
          <input
            className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <p className=" text-lg font-bold">Ras</p>
          <input
            className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
            type="text"
            value={breedInput}
            onChange={(e) => setBreedInput(e.target.value)}
          />
          {errors.breed && <p className="text-red-500">{errors.breed}</p>}
        </div>

        <div>
          <p className=" text-lg font-bold">Kön</p>
          <select
            onChange={(e) => setGenderInput(e.target.value)}
            value={genderInput}
            className=" border-2 border-petCare-sapphireTeal-dark"
          >
            <option value="">--Välj kön--</option>
            <option value="Hona">Hona</option>
            <option value="Hane">Hane</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>
        <SaveButton
          icon={<ArrowForward />}
          label="Nästa"
          state={SaveButtonState}
          setState={setSaveButtonState}
          onClick={submit}
        />
      </form>
    </div>
  );
};

export default RegisterPetForm;
