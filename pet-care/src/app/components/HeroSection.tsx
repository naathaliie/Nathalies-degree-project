'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const HeroSection = () => {
const [selectedPet, setSelectedPet] = useState<string>("Hund")
const pets = ["Hund", "Katt", "Häst", "Smådjur"]

const handleSelectedPet = (pet:string) => {

    setSelectedPet(pet)
    console.log("selectedPet är:", selectedPet)
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
        <div className='grid grid-cols-2 gap-2 mt-7 max-w-xl'>
            <div>
                <p className=' text-lg font-bold'>{selectedPet === "Smådjur" ? selectedPet + "ets" : selectedPet + "ens"} födelsedatum</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="date" />
            </div>
            <div>
            <p className=' text-lg font-bold'>{selectedPet === "Smådjur" ? selectedPet + "ets" : selectedPet + "ens"} namn</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="text" />
                </div>
            <div>
                <p className=' text-lg font-bold'>Personnummer</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="date" />
            </div>
            <div>
                <p className=' text-lg font-bold'>{selectedPet === "Smådjur" ? selectedPet + "ets" : selectedPet + "ens"} ras</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark' type="text" />
            </div>
            <div>
                <p className=' text-lg font-bold'>Kön</p>
                <select className=' border-2 border-petCare-sapphireTeal-dark'>
                    <option value="" disabled>Välj kön</option>
                    <option value="Hona">Hona</option>
                    <option value="Hane">Hane</option>
                </select>
            </div>
        </div>
        <div className='mt-5 fo'><Button variant={"primary"} size={"lg"} className='font-bold text-xl shadow-md shadow-gray-400'>Registrera</Button></div>
    </div>
  )
}

export default HeroSection
