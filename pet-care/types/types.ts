/*****User*****/
export interface User {
    _id: string
    password: string
    dateOfRegistration: Date | string
    ssn: string
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
    _id: string
    ownerId: string
    dateOfRegistration: Date | string
    name: string
    species: string
    breed: string
    sex: string
    birthday: Date | string
    description?: string[],
    healthInfo?: HealthInfo[]
}

export interface PetsState {
    pets: Pet[]
    loading: boolean
    error: string | null
}

export interface PartialPetFirst {
    name: string
    species: string
    breed: string
    sex: string
    birthday: Date | string
}

export interface PartialPetSecond {
    ownerId: string
    dateOfRegistration: Date | string
    description?: string[],
    healthInfo?: HealthInfo[]
}

/*****HealthInfo*****/

export interface HealthInfo {
    petId: string
    dateOfRegistration: Date
    type: "Veterinär" | "Pälsvård" | "Kurs"
    date: Date
    notes: string
    place: string,
}
