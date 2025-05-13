// Mockdata för användare

import { choosablePetsArray, User, Pet } from "../../types/types";

export const mockUsers: User[] = [
  {
    _id: "0",
    email: "anna@example.com",
    password: "password123",
    name: "Anna",
    surname: "Johansson",
    street: "Storgatan 1",
    city: "Stockholm",
    postalCode: "11122",
    phone: "0701234567",
    pets: ["11", "12"],
    messages: [
      {
        title: "Välkommen",
        subTitle: "Hej och varmt välkommen till oss på PetCare!",
        message:
          "Här kommer lite information som kan vara bra att känna till...",
        sender: "PetCare",
        isUnread: true,
      },
      {
        title: "Glöm inte bort din rabatt på kloklipp",
        message: "Glöm inte bort att använda din intjänade rabatt hos oss...",
        sender: "Hundens Hälsa AB",
        isUnread: true,
      },
    ],
    isLoggedIn: false,
  },
  {
    _id: "1",
    email: "lars@example.com",
    password: "password456",
    name: "Lars",
    surname: "Svensson",
    street: "Lilla vägen 3",
    city: "Göteborg",
    postalCode: "41345",
    phone: "0702345678",
    pets: ["13"],
    messages: [
      {
        title: "Välkommen",
        subTitle: "Hej och varmt välkommen till oss på PetCare!",
        message:
          "Här kommer lite information som kan vara bra att känna till...",
        sender: "PetCare",
        isUnread: true,
      },
    ],
    isLoggedIn: false,
  },
  {
    _id: "2",
    email: "maria@example.com",
    password: "password789",
    name: "Maria",
    surname: "Andersson",
    street: "Bergvägen 7",
    city: "Malmö",
    postalCode: "21137",
    phone: "0703456789",
    pets: ["14", "15", "16"],
    messages: [
      {
        title: "Välkommen",
        subTitle: "Hej och varmt välkommen till oss på PetCare!",
        message:
          "Här kommer lite information som kan vara bra att känna till...",
        sender: "PetCare",
        isUnread: true,
      },
    ],
    isLoggedIn: false,
  },
];

// Mockdata för djur
export const mockPets: Pet[] = [
  {
    _id: "11",
    ownerId: "0",
    name: "Fido",
    species: choosablePetsArray[0],
    breed: "Labrador",
    gender: choosablePetsArray[0],
  },
  {
    _id: "12",
    ownerId: "0",
    name: "Whiskers",
    species: choosablePetsArray[1],
    breed: "Siames",
    gender: "Hona",
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
