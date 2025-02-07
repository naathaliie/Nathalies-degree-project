'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { setUsers } from '@/lib/features/users/usersSlice'
import { User } from '../../types/types'

export default function StoreProvider({
  users, // Här tar du emot användardata från föräldrakomponenten (i det här fallet från layout.tsx)
  children
}: {
  users: User[], // users är en array av User-objekt som skickas in som prop
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(setUsers(users)) // Dispatchar den mottagna användardatan till Redux store
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
