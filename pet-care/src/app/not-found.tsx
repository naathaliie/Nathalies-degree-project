import React from "react";
import GoBackBtn from "./components/GoBackBtn";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-grow w-full min-h-screen bg-gray-200 p-8">
      <h1>Hoppsan sidan hittades inte</h1>
      <GoBackBtn />
    </main>
  );
};

export default NotFoundPage;
