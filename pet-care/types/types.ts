export interface User {
    id: string
    username: string
    email: string
    isLoggedIn: boolean
    pets: Pet[]
  }

export interface UsersState {
    users: User[]
  }

/*****User*****/

export interface AuthState {
    currentUser: User;
  }

/*****CurrentUser*****/

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  ownerId: string;
}

export interface PetsState {
    pets: Pet[]
}
/*****Pet*****/

