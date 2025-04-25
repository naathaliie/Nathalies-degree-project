import React from "react";
import GoBackBtn from "./components/Buttons/GoBackBtn";
import "./globals.css";

const NotFoundPage = () => {
  return (
    <div className="mainStyle !min-h-[80vh]">
      <h1>Hoppsan sidan hittades inte</h1>
      <GoBackBtn />
    </div>
  );
};

export default NotFoundPage;
