// src/data/mockdata.js

import { ObjectId } from "mongoose";

// Mockdata för användare
export const mockUsers = [
  {
    _id: new ObjectId(), // Genererar ett nytt ObjectId
    email: "anna@example.com",
    password: "password123",
    dateOfRegistration: new Date("2023-01-15"),
    name: "Anna",
    surname: "Johansson",
    street: "Storgatan 1",
    city: "Stockholm",
    postalCode: "11122",
    phone: "0701234567",
    pets: [new ObjectId(), new ObjectId()],
  },
  {
    _id: new ObjectId(),
    email: "lars@example.com",
    password: "password456",
    dateOfRegistration: new Date("2023-02-20"),
    name: "Lars",
    surname: "Svensson",
    street: "Lilla vägen 3",
    city: "Göteborg",
    postalCode: "41345",
    phone: "0702345678",
    pets: [new ObjectId()],
  },
  {
    _id: new ObjectId(),
    email: "maria@example.com",
    password: "password789",
    dateOfRegistration: new Date("2023-03-10"),
    name: "Maria",
    surname: "Andersson",
    street: "Bergvägen 7",
    city: "Malmö",
    postalCode: "21137",
    phone: "0703456789",
    pets: [new ObjectId(), new ObjectId(), new ObjectId()],
  }
];

// Mockdata för djur
export const mockPets = [
  {
    _id: new ObjectId(),
    ownerId: mockUsers[0]._id,
    dateOfRegistration: new Date("2023-01-18"),
    name: "Fido",
    species: "Hund",
    breed: "Labrador",
    gender: "Hane",
    birthday: new Date("2020-05-01"),
  },
  {
    _id: new ObjectId(),
    ownerId: mockUsers[0]._id,
    dateOfRegistration: new Date("2023-01-18"),
    name: "Whiskers",
    species: "Katt",
    breed: "Siames",
    gender: "Hona",
    birthday: new Date("2021-08-15"),
  },
  {
    _id: new ObjectId(),
    ownerId: mockUsers[1]._id,
    dateOfRegistration: new Date("2023-02-22"),
    name: "Bella",
    species: "Hund",
    breed: "Beagle",
    gender: "Hona",
    birthday: new Date("2022-04-10"),
  },
  {
    _id: new ObjectId(),
    ownerId: mockUsers[2]._id,
    dateOfRegistration: new Date("2023-03-12"),
    name: "Max",
    species: "Hund",
    breed: "Rottweiler",
    gender: "Hane",
    birthday: new Date("2021-12-20"),
  },
  {
    _id: new ObjectId(),
    ownerId: mockUsers[2]._id,
    dateOfRegistration: new Date("2023-03-12"),
    name: "Luna",
    species: "Katt",
    breed: "Maine Coon",
    gender: "Hona",
    birthday: new Date("2022-01-10"),
  },
  {
    _id: new ObjectId(),
    ownerId: mockUsers[2]._id,
    dateOfRegistration: new Date("2023-03-12"),
    name: "Rocky",
    species: "Hund",
    breed: "Pitbull",
    gender: "Hane",
    birthday: new Date("2022-09-30"),
  }
];
