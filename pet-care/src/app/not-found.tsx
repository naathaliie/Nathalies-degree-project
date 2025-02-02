import React from "react";
import GoBackBtn from "./components/GoBackBtn";
import "./globals.css";

const NotFoundPage = () => {
  return (
    <div className="mainStyle">
      <h1>Hoppsan sidan hittades inte</h1>
      <GoBackBtn />
    </div>
  );
};

export default NotFoundPage;
