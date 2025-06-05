"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setUsers } from "@/lib/features/users/usersSlice";
import { setPets } from "@/lib/features/pets/petsSlice";
import { mockPets } from "@/data/petData";
import { mockUsers } from "@/data/usersData";

//Komponent endast för att sätta mockdatan vid uppstart av app
export default function GetMockData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsers(mockUsers));
    dispatch(setPets(mockPets));
  }, [dispatch]);

  return null; // Ingenting visas på skärmen
}
