import { useRouter } from "next/navigation";
import React from "react";

const ErrorNeedToBeLoggedIn = () => {
  const router = useRouter();

  return (
    <>
      <div className="LogInPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex min-h-[70vh] flex-col items-center ">
        <h1>Hoppsan, du behöver logga in för att se något här</h1>
        <button onClick={() => router.push("/login")}>Logga in</button>
      </div>
    </>
  );
};

export default ErrorNeedToBeLoggedIn;
