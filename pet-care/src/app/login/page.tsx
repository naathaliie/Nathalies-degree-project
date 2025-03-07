'use client';
import React, { useRef } from "react";
import "../globals.css";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { User } from "../../../types/types";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { setCurrentUser } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";

const LogInPage = () => {
    const router = useRouter()
    const users = useSelector((state: RootState) => state.users.users)
    const currentUser = useSelector((state: RootState)=>state.auth.currentUser)
    const choosenUser = useRef<User | null>(null)

    const dispatch = useAppDispatch();

    const setLoggedInUser = (user:User) => {
       dispatch(setCurrentUser(user))
       router.push("/users")
    }

  return (
    <main className="LogInPage flex flex-col justify-center items-center m-5 min-h-[70vh]">
      <h2>Logga in</h2>
      <h3>Användare från redux</h3>
      <h3>Nuvarande inloggad är : {currentUser.username}</h3>

      <ul className="flex flex-col gap-2 m-7">
      {users.map((user: User)=> (
        <li key={user.id}>
            <Button onClick={()=> {choosenUser.current = user; console.log("Du klickade på: ", choosenUser)}}>{user.username}</Button>
        </li>
      ))}
      </ul>
     <Button onClick={()=> choosenUser.current ? setLoggedInUser(choosenUser.current) : alert("Du måste välja en användare")} className="mb-5">Tillfällig logga in</Button> {/* TA BORT SEDAN */}
      <LoginForm/>
    </main>
  );
};

export default LogInPage;
