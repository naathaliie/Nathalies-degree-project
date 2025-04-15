'use client'
import React, { useState } from 'react'
import { useAppSelector } from '@/lib/hooks'
import { User } from '../../../../types/types'


const RegisterUserForm = () => {
    const users = useAppSelector((state) => state.users.users)
    const selectedPet = useAppSelector((state) => state.pets.selectedPet)

    const [userEmailInput, setuserEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [surnameInput, setSurnameInput] = useState('')
    const [adressInput, setAdressInput] = useState('')
    const [postalCodeInput, setPostalCodeInput] = useState('')
    const [cityInput, setCityInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')

    const [newUser, setNewUser] = useState<User>(
        {
                password: '',
                dateOfRegistration: '',
                name: '',
                surname: '',
                street: '',
                city: '',
                postalCode: '',
                phone: '',
        }
    )


    //Validering på inputfälten!?
    const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //Stoppar att sidan laddas om
        console.log("Click Click");

        //Logik för att skapa ny användare

        setNewUser({
            password: passwordInput,
            dateOfRegistration: new Date().toISOString(),
            name: nameInput,
            surname: surnameInput,
            street: adressInput,
            city: cityInput,
            postalCode: postalCodeInput,
            phone: phoneInput,
        })
}

  return (
    <div className='RegisterUserForm'>
        <form
            onSubmit={submitForm}
            className='InputForm flex flex-col gap-3'>
            <div>
            <h2>Inloggningsuppgifter</h2>
            <div>
                <p className=' text-lg font-bold'>Epost</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text"  onChange={(e) => setuserEmailInput(e.target.value)}/>
            </div>
            <div>
                <p className=' text-lg font-bold'>Lösenord</p>
                <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%] ' type="text" onChange={(e) => setPasswordInput(e.target.value)} />
            </div>
            </div>

            <div>
            <h2>Personuppgifter</h2>
            <div>
                <p className=' text-lg font-bold'>Namn</p>
                    <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => {setNameInput(e.target.value)}}/>
                </div>
                <div>
                    <p className=' text-lg font-bold'>Efternamn</p>
                    <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => setSurnameInput(e.target.value)}/>
                </div>

                <div>
                    <p className=' text-lg font-bold'>Adress</p>
                    <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => setAdressInput(e.target.value)}/>
                </div>
                <div>
                    <p className=' text-lg font-bold'>Postnummer</p>
                    <input className=' border-2 border-petCare-sapphireTeal-dark w-20' type="number" onChange={(e) => setPostalCodeInput(e.target.value)}/>
                </div>
                <div>
                    <p className=' text-lg font-bold'>Stad</p>
                    <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => setCityInput(e.target.value)}/>
                </div>
                <div>
                    <p className=' text-lg font-bold'>Telefonnummer</p>
                    <input className=' border-2 border-petCare-sapphireTeal-dark w-[90%] sm:w-[60%] md:w-[90%] lg:w-[60%] xl:max-w-[50%]' type="text" onChange={(e) => setPhoneInput(e.target.value)}/>
                </div>
            </div>
            <button type='submit' className='bg-pink-300'>test-knapp</button>
        </form>
        <p>Du försöker lägga till: </p>
        <ul>
            <li>Namn: {newUser.name}</li>
            <li>Efternamn: {newUser.surname}</li>
            <li>Registreringsdatum: {newUser.dateOfRegistration as string}</li>
            <li>Adress: {newUser.street}</li>
            <li>Stad: {newUser.city}</li>
            <li>Postnummer: {newUser.postalCode}</li>
            <li>Telefon: {newUser.phone}</li>
            <li>Lösenord: {newUser.password}</li>
        </ul>
    </div>
  )
}

export default RegisterUserForm;