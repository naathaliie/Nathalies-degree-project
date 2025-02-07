'use client';
import React from "react";
import "../globals.css";
import LoginForm from "../components/LoginForm";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { User } from "../../../types/types";

const LogInPage = () => {

    const users = useSelector((state: RootState) => state.users.users)

  return (
    <main className="LogInPage flex flex-col justify-center items-center m-5 min-h-[70vh]">
      <h2>Logga in</h2>
      <ul>
      {users.map((user: User)=> (
        <li key={user.id}>{user.username}</li>
      ))}
      </ul>
      <LoginForm/>
    </main>
  );
};

export default LogInPage;
