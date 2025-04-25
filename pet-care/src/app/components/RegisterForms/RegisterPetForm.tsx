"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  ChoosablePets,
  choosablePetsArray,
  Pet,
} from "../../../../types/types";
import { addNewPet, setSelectedPet } from "@/lib/features/pets/petsSlice";
import { v4 as uuidv4 } from "uuid";
import { RegisterPetSchema } from "@/zodSchemas/RegisterPetSchema";
import SaveButton from "../Buttons/SaveButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RegisterPetForm = () => {
  const selectedPet = useAppSelector((state) => state.pets.selectedPet);
  const allPets = useAppSelector((state) => state.pets.pets);
  const dispatch = useAppDispatch();
  const [SaveButtonState, setSaveButtonState] = useState<boolean | null>(null);

  //Validering av inputfälten
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [speciesInput, setSpeciesInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [breedInput, setBreedInput] = useState("");
  const [genderInput, setGenderInput] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newPet: Pet = {
      _id: uuidv4(),
      ownerId: "000",
      name: nameInput,
      species: speciesInput as ChoosablePets,
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
      return;
    }

    dispatch(addNewPet(newPet));
    setSaveButtonState(true);
  };

  //Sätter det valda husdjuret i listan som default
  useEffect(() => {
    if (selectedPet) {
      setSpeciesInput(selectedPet);
    }
  }, [selectedPet]);

  return (
    <div className="RegisterPetForm">
      <form className="InputForm flex flex-col gap-3">
        <div>
          <p className=" text-lg font-bold">Typ av husdjur</p>
          <select
            value={speciesInput}
            onChange={(e) => setSpeciesInput(e.target.value)}
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
            onChange={(e) => setNameInput(e.target.value)}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <p className=" text-lg font-bold">Ras</p>
          <input
            className=" border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]"
            type="text"
            onChange={(e) => setBreedInput(e.target.value)}
          />
          {errors.breed && <p className="text-red-500">{errors.breed}</p>}
        </div>

        <div>
          <p className=" text-lg font-bold">Kön</p>
          <select
            onChange={(e) => setGenderInput(e.target.value)}
            className=" border-2 border-petCare-sapphireTeal-dark"
          >
            <option value="">--Välj kön--</option>
            <option value="Hona">Hona</option>
            <option value="Hane">Hane</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>
      </form>
      <SaveButton
        icon={<FavoriteIcon />}
        label="Registrera"
        state={SaveButtonState}
        setState={setSaveButtonState}
        onClick={submit}
      />
      <ul>
        Alla djur
        {allPets.map((p, i) => {
          return <li key={i}>{p.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RegisterPetForm;
