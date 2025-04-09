'use client'
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { ChoosablePets, choosablePetsArray, Pet } from '../../../../types/types'
import { addSelectedPet } from '@/lib/features/pets/petsSlice'


const RegisterPetForm = () => {
    const selectedPet = useAppSelector((state) => state.pets.selectedPet)
    const dispatch = useAppDispatch()

    const [birthdayInput, setBirthdayInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [breedInput, setBreedInput] = useState('')
    const [genderInput, setGenderInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')


    const [newPet, setNewPet] = useState<Pet>(
        {
                ownerId: '',
                dateOfRegistration: '',
                name: '',
                species: null,
                breed: '',
                sex: '',
                birthday: '',
                description: [],
        }
    )


    //Validering på inputfälten!?
    const submitForm = () => {
        setNewPet({
            ownerId: '',
                dateOfRegistration: '',
                name: '',
                species: selectedPet,
                breed: '',
                sex: '',
                birthday: '',
        })

        //Skicka med userns ssn

        //Sedan ska jag väl skicka newPet till storen för pet och userns id till userstore för att komma åt datan i nästa sida där jag kommer få mer info
        //På den sidan ska jag kolla om en user finns, får den logga in, annars fortsätta fylla i resten av all info

        //Givetvis bli omdirigerad till den andra vyn också som inte är skapad ännu

        //Rensa alla inputfält
}

  return (
    <div className='RegisterPetForm'>
        <form className='InputForm flex flex-col gap-3'>
            <div>
                <p className=' text-lg font-bold'>Typ av husdjur</p>
                <select
                value={selectedPet || ''}
                onChange={(e) => dispatch(addSelectedPet(e.target.value as ChoosablePets))}
                className=' border-2 border-petCare-sapphireTeal-dark'
                >
                    {choosablePetsArray.map((pet, i) => {
                        return <option key={i} value={pet}>{pet}</option>
                    })}
                </select>
            </div>

            <div>
                <p className=' text-lg font-bold'>Födelsedatum</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="date"  onChange={(e) => setBirthdayInput(e.target.value)}/>
            </div>

            <div>
                <p className=' text-lg font-bold'>Namn</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => setNameInput(e.target.value)} />
            </div>

            <div>
                <p className=' text-lg font-bold'>Ras</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => setBreedInput(e.target.value)}/>
            </div>

            <div>
                <p className=' text-lg font-bold'>Kön</p>
                <select onChange={(e) => setGenderInput(e.target.value)}
                    className=' border-2 border-petCare-sapphireTeal-dark'
                >
                    <option value="">--Välj kön--</option>
                    <option value="Hona">Hona</option>
                    <option value="Hane">Hane</option>
                </select>
            </div>

            <div>
                <p className=' text-lg font-bold'>Beskrivning</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="text" onChange={(e) => setDescriptionInput(e.target.value)}/>
            </div>

        </form>
    </div>
  )
}

export default RegisterPetForm;