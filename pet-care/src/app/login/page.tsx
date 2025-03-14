'use client';
import React, { useEffect, useRef } from "react";
import "../globals.css";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { User } from "../../../types/types";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { getUsers } from "@/api/users";

const LogInPage = () => {
    const currentUser = useSelector((state: RootState)=>state.auth.currentUser)
    const choosenUser = useRef<User | null>(null)
    const router = useRouter()


    const dispatch = useAppDispatch();
    const users = useSelector((state: RootState) => state.users.users) //Hämta users från storen


    const setLoggedInUser = (user:User) => {
       dispatch(setCurrentUser(user))
       router.push("/users")
    }

    //useEffect är som onMounted, körs en gång när komponenten monteras och sedan varje gång users.length förändras
    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsers()); // Hämta användarna vid sidladdning
        }

      }, [dispatch, users.length]);


  return (
    <main className="LogInPage flex flex-col justify-center items-center m-5 min-h-[70vh]">
      <h2>Logga in</h2>
      <h3>Användare från redux</h3>
      <h3>Nuvarande inloggad är : {currentUser.name}</h3>
      <ul className="flex flex-col gap-2 m-7">
      {users.map((user: User)=> (
        <li key={user._id}>
            <Button onClick={()=> {choosenUser.current = user; console.log("Du klickade på: ", choosenUser)}}>{user.name}</Button>
        </li>
      ))}
      </ul>
     <Button onClick={()=> choosenUser.current ? setLoggedInUser(choosenUser.current) : alert("Du måste välja en användare")} className="mb-5">Tillfällig logga in</Button> {/* TA BORT SEDAN */}
      <LoginForm/>
    </main>
  );
};

export default LogInPage;
