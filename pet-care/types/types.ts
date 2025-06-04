/*****User*****/
export interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  street: string;
  city: string;
  postalCode: string;
  phone?: string | undefined;
  pets?: string[]; //Husdjurets id
  messages: Message[];
  isLoggedIn: boolean;
}

export interface UsersState {
  users: User[];
  draftUser: User | null;
  loading: {
    getUsers: boolean;
    postNewUser: boolean;
  };
  error: string | null;
}

/*****Message*****/
export interface Message {
  title: string;
  subTitle?: string;
  message: string;
  sender: string;
  isUnread: boolean;
}

/*****CurrentUser*****/
export interface AuthState {
  currentUser: User | null;
}

/*****Pet*****/

type PetEvent = {
  _id: string;
  date: string;
  title: string;
  information?: string;
  label: "Veterinär" | "Pälsvård" | "Övrigt";
};

export interface Pet {
  _id: string;
  ownerId: string;
  name: string;
  species: ChoosablePets | null;
  breed: string;
  gender: string;
  img?: string;
  events?: PetEvent[];
}

export interface PetsState {
  pets: Pet[];
  draftPet: Pet | null;
  selectedPet: ChoosablePets | null;
  loading: boolean;
  error: string | null;
}

export const choosablePetsArray = ["Hund", "Katt", "Häst", "Smådjur"] as const; // Här lägger vi till fler djur vid behov

export type ChoosablePets = (typeof choosablePetsArray)[number];

/*****HealthInfo*****/

export interface HealthInfo {
  petId: string;
  dateOfRegistration: Date;
  type: "Veterinär" | "Pälsvård" | "Kurs";
  date: Date;
  notes: string;
  place: string;
}

/*****NavBar Menu item*****/

export type NavbarMenuItem = { title: string; route: string };

/*****Question and answer*****/

export type QA = {
  q: string;
  a: string;
};

/*****UspListImgData*****/

export type UspListImgData = {
  category: "FrontPageUsp" | "TipsAndAdviceUsp";
  img: string;
  imageDescription: string;
  title: string;
  informativeText?: string;
  text: {
    subTitle: string;
    subText: string;
  };
};
