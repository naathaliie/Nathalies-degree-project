import React from "react";

type UspCardProps = {
  title: string;
  text: string;
};

const UspCard = ({ title, text }: UspCardProps) => {
  return (
    <div
      className="relative border-2 border-petCare-sapphireTeal-dark
    flex flex-col text-center gap-4 py-5 px-2 w-80 min-h-44
    rounded-md   shadow-[8px_8px_15px_rgba(14,76,86,0.50)]"
    >
      <img
        src="/svg/pawByMe.svg"
        width={40}
        alt="paw"
        className="absolute top-[-25px] left-1/2 transform -translate-x-1/2"
      ></img>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className=" text-pretty">{text}</p>
    </div>
  );
};

export default UspCard;
