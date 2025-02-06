import React from "react";
import "../globals.css";
import ActionBtn from "../components/ActionBtn";
import LoginForm from "../components/LoginForm";

const LogInPage = () => {


  return (
    <main className="LogInPage flex flex-col justify-center items-center m-5 min-h-[70vh]">
      <h2>Logga in</h2>
      <LoginForm/>
    </main>
  );
};

export default LogInPage;
