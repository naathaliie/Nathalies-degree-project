import { User } from "../../types/types";

// Mockdata för users

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
  },
];
