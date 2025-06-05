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
    name: "Belladonna",
    species: choosablePetsArray[1],
    breed: "Siames",
    gender: "Hona",
    img: "/images/siames.jpg",
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
    _id: "75",
    ownerId: "0",
    name: "Lennart",
    species: choosablePetsArray[3],
    breed: "Vädur",
    gender: "Hane",
    img: "/images/lennart.jpg",
    events: [
      {
        _id: "007",
        date: "2025-06-10",
        title: "Vaccination",
        information: "Kloklippning",
        label: "Pälsvård",
      },
    ],
  },
  {
    _id: "76",
    ownerId: "0",
    name: "Majsan",
    species: choosablePetsArray[3],
    breed: "Undulat",
    gender: "Hona",
    img: "/images/majsan.jpg",
    events: [
      {
        _id: "007",
        date: "2025-06-25",
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
    img: "/images/bella.jpg",
    events: [
      {
        _id: "008",
        date: "2025-06-02",
        title: "Vaccination",
        information: "Kloklippning",
        label: "Pälsvård",
      },
    ],
  },
  {
    _id: "25",
    ownerId: "1",
    name: "Conrad",
    species: choosablePetsArray[3],
    breed: "Majsorm",
    gender: "Hane",
    img: "/images/conrad.jpg",
    events: [
      {
        _id: "008",
        date: "2025-06-18",
        title: "Vaccination",
        information: "Kloklippning",
        label: "Pälsvård",
      },
    ],
  },
  {
    _id: "14",
    ownerId: "2",
    name: "Luna",
    species: choosablePetsArray[0],
    breed: "Pappillon/Chihuahua",
    gender: "Hona",
    img: "/images/luna.jpg",
    events: [
      {
        _id: "054",
        date: "2025-06-18",
        title: "Vaccination",
        information: "Kloklippning",
        label: "Pälsvård",
      },
    ],
  },
  {
    _id: "15",
    ownerId: "2",
    name: "Ivy",
    species: choosablePetsArray[0],
    breed: "Chihuahua/Pomerian",
    gender: "Hona",
    img: "/images/ivy.jpg",
    events: [
      {
        _id: "055",
        date: "2025-06-20",
        title: "Vaccination",
        information: "Kloklippning",
        label: "Pälsvård",
      },
    ],
  },
];
