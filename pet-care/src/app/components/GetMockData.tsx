"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setUsers } from "@/lib/features/users/usersSlice";
import { mockPets, mockUsers } from "../../data/mockdata";
import { setPets } from "@/lib/features/pets/petsSlice";

//Komponent endast för att sätta mockdatan vid uppstart av app
export default function GetMockData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsers(mockUsers));
    dispatch(setPets(mockPets));
  }, [dispatch]);

  return null; // Ingenting visas på skärmen
}
