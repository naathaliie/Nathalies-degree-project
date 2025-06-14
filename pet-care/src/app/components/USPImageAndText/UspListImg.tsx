import React from "react";
import UspCardImg from "./UspCardImg";
import { UspListImgData } from "../../../../types/types";

type UspListImgProps = {
  uspListImgData: UspListImgData[];
};

const UspListImg = ({ uspListImgData }: UspListImgProps) => {
  return (
    <div className=" w-full bg-petCare-myWhite py-10 px-5 sm:px-16 text-petCare-sapphireTeal-dark flex justify-center items-center gap-12 md:gap-7 flex-col md:flex-row flex-wrap">
      {uspListImgData.map((item, index) => {
        return (
          <UspCardImg
            key={index}
            img={item.img}
            imgDescription={item.imageDescription}
            title={item.title}
            informativeText={item.informativeText ? item.informativeText : ""}
          />
        );
      })}
    </div>
  );
};

export default UspListImg;
