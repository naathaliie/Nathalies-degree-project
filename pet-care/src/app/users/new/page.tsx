'use client'
import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'

const NewUserPage = () => {

    const currentSelectedPet = useSelector((state: RootState) => state.pets.selectedPet)
  return (
    <div>Välkommen att registrera dig nya användare, valt djur var {currentSelectedPet}</div>
  )
}

export default NewUserPage
