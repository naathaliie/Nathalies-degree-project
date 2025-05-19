import React from "react";
import PetCareButton from "../Buttons/PetCareButton";
import ArrowForward from "@mui/icons-material/ArrowForward";

type UspCardImgProps = {
  img: string;
  imgDescription: string;
  title: string;
  text: string;
};

const UspCardImg = ({ img, imgDescription, title, text }: UspCardImgProps) => {
  return (
    <div className=" overflow-hidden flex flex-col justify-center items-center text-center gap-4 py-5 px-2 w-80 h-[30rem] rounded-md shadow-[8px_8px_15px_rgba(14,76,86,0.20)]">
      <img
        src={img}
        width={40}
        alt={imgDescription}
        className=" h-52 w-72 object-cover"
      ></img>
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className=" text-pretty truncate">{text}</p>
      </div>
      <PetCareButton icon={<ArrowForward />} label="Läs mer" size="small" />
    </div>
  );
};

export default UspCardImg;
