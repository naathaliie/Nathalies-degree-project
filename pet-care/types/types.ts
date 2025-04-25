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
}

export interface UsersState {
  users: User[];
  loading: {
    getUsers: boolean;
    postNewUser: boolean;
  };
  error: string | null;
}

/*****CurrentUser*****/
export interface AuthState {
  currentUser: (User & { isLoggedIn: boolean }) | null;
}

/*****Pet*****/
export interface Pet {
  _id?: string;
  ownerId: string;
  name: string;
  species: ChoosablePets | null;
  breed: string;
  gender: string;
  birthday: Date | string;
}

export interface PetsState {
  pets: Pet[];
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
