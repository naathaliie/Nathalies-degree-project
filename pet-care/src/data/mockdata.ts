import { choosablePetsArray, Pet } from "../../types/types";

// Mockdata för djur
export const mockPets: Pet[] = [
  {
    _id: "11",
    ownerId: "0",
    name: "Fido",
    species: choosablePetsArray[0],
    breed: "Labrador",
    gender: choosablePetsArray[0],
    img: "/images/dogspa.jpg",
    events: [
      {
        _id: "001",
        date: "2025-06-13",
        title: "Vaccination",
        information: "Vaccination mot valpsjukan",
        label: "Veterinär",
      },
    ],
  },
  {
    _id: "12",
    ownerId: "0",
    name: "Whiskers",
    species: choosablePetsArray[1],
    breed: "Siames",
    gender: "Hona",
    events: [
      {
        _id: "002",
        date: "2025-06-01",
        title: "Vaccination",
        information: "Kloklippning",
        label: "Pälsvård",
      },
    ],
  },
  {
    _id: "13",
    ownerId: "1",
    name: "Bella",
    species: choosablePetsArray[0],
    breed: "Beagle",
    gender: "Hona",
  },
  {
    _id: "14",
    ownerId: "2",
    name: "Max",
    species: choosablePetsArray[0],
    breed: "Rottweiler",
    gender: "Hane",
  },
  {
    _id: "15",
    ownerId: "2",
    name: "Luna",
    species: choosablePetsArray[1],
    breed: "Maine Coon",
    gender: "Hona",
  },
  {
    _id: "16",
    ownerId: "2",
    name: "Rocky",
    species: choosablePetsArray[0],
    breed: "Pitbull",
    gender: "Hane",
  },
];
