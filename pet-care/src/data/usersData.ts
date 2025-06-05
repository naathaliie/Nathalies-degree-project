import { User } from "../../types/types";

// Mockdata för users

export const mockUsers: User[] = [
  {
    _id: "0",
    email: "elli@example.com",
    password: "password123",
    name: "Elli",
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
  },
  {
    _id: "1",
    email: "Pontus@example.com",
    password: "password456",
    name: "Pontus",
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
      {
        title: "Expo 2025 - Reptilmässa",
        message: "Älskar du reptiler?",
        sender: "Expo Malmö",
        isUnread: true,
      },
    ],
  },
  {
    _id: "2",
    email: "Lillian@example.com",
    password: "password789",
    name: "Lillian",
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
  },
];
