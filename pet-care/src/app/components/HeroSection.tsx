'use client'
import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'
import { PartialPetFirst } from '../../../types/types'

const HeroSection = () => {
const pets = ["Hund", "Katt", "Häst", "Smådjur"]

const [selectedPet, setSelectedPet] = useState<string>("Hund")

const [petBirthdayInput, setPetBirthdayInput] = useState('')
const [petNameInput, setPetNameInput] = useState('')
const [petBreedInput, setPetBreedInput] = useState('')
const [petGenderInput, setPetGenderInput] = useState('')
const [userSecurityNumbInput, setUserSecurityNumbInput] = useState('')

const [newPet, setNewPet] = useState<PartialPetFirst>(
    {
        name: '',
        species: '',
        breed: '',
        sex: '',
        birthday: '',
    }
)

const handleSelectedPet = (pet:string) => {
    setSelectedPet(pet)
}

//Validering på inputfälten!

const submitForm = () => {
    setNewPet({
        name: petNameInput,
        species: selectedPet,
        breed: petBreedInput,
        sex: petGenderInput,
        birthday: petBirthdayInput,
    })

    //Skicka med userns ssn

    //Sedan ska jag väl skicka newPet till storen för pet och userns id till userstore för att komma åt datan i nästa sida där jag kommer få mer info
    //På den sidan ska jag kolla om en user finns, får den logga in, annars fortsätta fylla i resten av all info

    //Givetvis bli omdirigerad till den andra vyn också som inte är skapad ännu

    //Rensa alla inputfält
}


  return (
    <div className='HeroSection bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 w-full pt-10 pb-10 pl-16 pr-16 text-petCare-sapphireTeal-dark'>
        <div>
            <h1 className='text-4xl font-bold '>Ta hand om din bästa vän!</h1>
            <p className='text-xl'>Lägg till ditt husdjur och få hjälp med vård och inköp!</p>
        </div>
        <div className='flex gap-2 mt-4'>
           {pets.map((pet, index) => {
            return <Button key={index} variant={'primary'} size={"default"} className=' font-bold shadow-md shadow-gray-400' onClick={() => handleSelectedPet(pet)}>{pet}</Button>
           })}
        </div>
        <form className='InputForm grid grid-cols-2 gap-2 mt-7 max-w-2xl'>
            <div>
                <p className=' text-lg font-bold'>{selectedPet === "Smådjur" ? selectedPet + "ets" : selectedPet + "ens"} födelsedatum</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="date"  onChange={(e) => setPetBirthdayInput(e.target.value)}/>
            </div>
            <div>
            <p className=' text-lg font-bold'>{selectedPet === "Smådjur" ? selectedPet + "ets" : selectedPet + "ens"} namn</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="text" onChange={(e) => setPetNameInput(e.target.value)} />
                </div>
            <div>
                <p className=' text-lg font-bold'>Personnummer registrerad ägare</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="date" onChange={(e) => {setUserSecurityNumbInput(e.target.value)}}/>
            </div>
            <div>
                <p className=' text-lg font-bold'>{selectedPet === "Smådjur" ? selectedPet + "ets" : selectedPet + "ens"} ras</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="text" onChange={(e) => setPetBreedInput(e.target.value)}/>
            </div>
            <div>
                <p className=' text-lg font-bold'>Kön</p>
                <select
                onChange={(e) => setPetGenderInput(e.target.value)}
                className=' border-2 border-petCare-sapphireTeal-dark'
                >
                    <option value="">--Välj kön--</option>
                    <option value="Hona">Hona</option>
                    <option value="Hane">Hane</option>
                </select>
            </div>
        </form>
        <div className='mt-5'>
            <Button
            onClick={() => submitForm()}
            variant={"primary"}
            size={"lg"}
            className='font-bold text-xl shadow-md shadow-gray-400'>Registrera</Button>
        </div>
        <div>
  <p>Du vill lägga till:</p>
  <ul>
    <li>Namn: {newPet.name}</li>
    <li>Art: {newPet.species}</li>
    <li>Ras: {newPet.breed}</li>
    <li>Kön: {newPet.sex}</li>
    <li>Födelsedag: {newPet.birthday.toLocaleString()}</li>
    <li>User: {userSecurityNumbInput}</li>
  </ul>
</div>
    </div>
  )
}

export default HeroSection
