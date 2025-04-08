'use client'
import React, { useState } from 'react'
import { Pet } from '../../../types/types'

const [petBirthdayInput, setPetBirthdayInput] = useState('')
const [petNameInput, setPetNameInput] = useState('')
const [petBreedInput, setPetBreedInput] = useState('')
const [petGenderInput, setPetGenderInput] = useState('')
const [userSecurityNumbInput, setUserSecurityNumbInput] = useState('')

const [newPet, setNewPet] = useState<Pet>(
    {
            ownerId: '',
            dateOfRegistration: '',
            name: '',
            species: '',
            breed: '',
            sex: '',
            birthday: '',
    }
)



//Validering på inputfälten!

const submitForm = () => {
    setNewPet({
        ownerId: '',
            dateOfRegistration: '',
            name: '',
            species: '',
            breed: '',
            sex: '',
            birthday: '',
    })

    //Skicka med userns ssn

    //Sedan ska jag väl skicka newPet till storen för pet och userns id till userstore för att komma åt datan i nästa sida där jag kommer få mer info
    //På den sidan ska jag kolla om en user finns, får den logga in, annars fortsätta fylla i resten av all info

    //Givetvis bli omdirigerad till den andra vyn också som inte är skapad ännu

    //Rensa alla inputfält

const NewUserForm = () => {
  return (
    <div>NewUserForm
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
        <p>Du vill lägga till:</p>
  <ul>
    <li>Namn: {newPet.name}</li>
    <li>Art: {newPet.species}</li>
    <li>Ras: {newPet.breed}</li>
    <li>Kön: {newPet.sex}</li>
    <li>Födelsedag: {newPet.birthday?.toLocaleString()}</li>
    <li>User: {userSecurityNumbInput}</li>
  </ul>
    </div>
  )
}

export default NewUserForm