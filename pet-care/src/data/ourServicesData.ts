import { OneService } from "../../types/types";

export const ourServicesData: OneService[] = [
  // Veterinär
  {
    _id: "1",
    typeOfServive: "Veterinär",
    company: "Djurdoktorn",
    description: "Specialiserad på smådjur, vaccinationer och akutfall.",
    serviceItems: ["Vaccination", "Hälsokontroll", "Akutvård"],
    img: "/images/littleHedgehog.jpg",
  },
  {
    _id: "2",
    typeOfServive: "Veterinär",
    company: "CityVet",
    description: "Modern klinik för både hundar och katter.",
    serviceItems: ["Kastrering", "Röntgen", "Receptförnyelse"],
    img: "/images/dogInVet.jpg",
  },
  {
    _id: "3",
    typeOfServive: "Veterinär",
    company: "Vårdcentral för Djur",
    description: "Helhetshälsa för ditt husdjur i centrala Borås.",
    serviceItems: ["Blodprov", "Ultraljud", "Sårvård"],
    img: "/images/catAtVet.jpg",
  },

  // Pälsvård
  {
    _id: "4",
    typeOfServive: "Pälsvård",
    company: "Fluff & Fjun",
    description: "Skonsam klippning och bad för alla raser.",
    serviceItems: ["Kloklippning", "Bad", "Tovutredning"],
    img: "/images/dogBath.jpg",
  },
  {
    _id: "5",
    typeOfServive: "Pälsvård",
    company: "Salong Ruffsig",
    description: "Gör din hund redo för utställning eller vardag.",
    serviceItems: ["Trimming", "Tandborstning", "Föning"],
    img: "/images/salongRuffsig.jpg",
  },
  {
    _id: "6",
    typeOfServive: "Pälsvård",
    company: "Hund & Hår",
    description: "Personlig vård för hundens päls i alla väder.",
    serviceItems: ["Borsta ur", "Spa-behandling", "Örontvätt"],
    img: "/images/dogBrush.jpg",
  },

  // Kurs
  {
    _id: "7",
    typeOfServive: "Kurs",
    company: "Hundakademin",
    description: "Professionella kurser för valp, vuxen och problemhund.",
    serviceItems: ["Valpkurs", "Inkallning", "Hundmöten"],
    img: "/images/hundakademin.jpg",
  },
  {
    _id: "8",
    typeOfServive: "Kurs",
    company: "Lydnad & Lek",
    description: "Lekfull träning för starkare band mellan dig och hunden.",
    serviceItems: ["Tricks", "Nosarbete", "Balansövningar"],
    img: "/images/agility.jpg",
  },
  {
    _id: "9",
    typeOfServive: "Kurs",
    company: "Pawsitive Training",
    description: "Positiv förstärkning och belöningsbaserad träning.",
    serviceItems: ["Koppelträning", "Hundspråk", "Avancerad lydnad"],
    img: "/images/dogLeash.jpg",
  },
];
