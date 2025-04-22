'use client';
import React, { useRef } from 'react'
import ActionBtn from './ActionButton';

const LoginForm = () => {
    let userNameRef = useRef<HTMLInputElement>(null)
    let passwordRef = useRef<HTMLInputElement>(null)

    const submit = (event: React.FormEvent) => {
        event.preventDefault() //Stoppar sidomladdningen
         const userName = userNameRef.current?.value
         const password = passwordRef.current?.value
         console.log(userName)
         console.log(password)

         // Tömmer input-fälten genom att sätta deras värde till en tom sträng
        if (userNameRef.current) userNameRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";
    }
  return (
    <form onSubmit={submit} className="FormContainer flex flex-col gap-5 bg-zinc-100 border-2 border-petCare-sapphireTeal-dark rounded-md p-10 sm:w-[40%] ">
        <div className="flex flex-col gap-3">
            <label htmlFor="useName">Användarnamn:</label>
            <input ref={userNameRef} name="userName" type="email" className='h-8 text-lg'/>
            <label htmlFor="password">Lösenord:</label>
            <input ref={passwordRef} name="password" className='h-8 text-lg'/>
        </div>
        <div className=" self-center">
            {/* <ActionBtn title="Logga in"/> */}
        </div>
      </form>
  )
}

export default LoginForm
