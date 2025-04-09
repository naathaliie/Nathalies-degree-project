/*****User*****/
export interface User {
    _id?: string
    password: string
    dateOfRegistration: Date | string
    name: string
    surname: string
    street: string
    city: string
    postalCode: string
    phone?: string | undefined
    pets?: Pet[]
    orders?: any[] | undefined
    favorites?: any[] | undefined
    messages?: any[] | undefined
  }

export interface UsersState {
    users: User[]
    loading: boolean
    error: string | null
  }


/*****CurrentUser*****/
export interface AuthState {
    currentUser: User & {isLoggedIn: boolean};
  }

/*****Pet*****/
export interface Pet {
    _id?: string //Skapas först när man skickat in till DB och finns inte innan
    ownerId: string
    dateOfRegistration: Date | string
    name: string
    species: ChoosablePets | null
    breed: string
    sex: string
    birthday?: Date | string
    description?: string[],
    healthInfo?: HealthInfo[]
}

export interface PetsState {
    pets: Pet[]
    selectedPet: ChoosablePets | null
    loading: boolean
    error: string | null
}


export const choosablePetsArray = ["Hund", "Katt", "Häst", "Smådjur"] as const; // Här lägger vi till fler djur vid behov

export type ChoosablePets = typeof choosablePetsArray[number];


/*****HealthInfo*****/

export interface HealthInfo {
    petId: string
    dateOfRegistration: Date
    type: "Veterinär" | "Pälsvård" | "Kurs"
    date: Date
    notes: string
    place: string,
}
