import React from "react";
import UspCardImg from "./UspCardImg";

const UspListImg = () => {
  const UspListImgItems = [
    {
      img: "/images/dogOnRock.jpg",
      imageDescription: "Hund",
      title: "Receptförskrivning",
      text: "När du behöver recept för festingmedel till din hund och katt kan du få hjälp via PetCare. Här kan du läsa mer om hur det fungerar",
    },
    {
      img: "/images/catInSummer.jpg",
      imageDescription: "Katt i solen",
      title: "Ormbett på katt- tänk på det här",
      text: "Vanligast, och farligast, är att katter blir bitna i framtassarna. Här berättar vi mer om hur du gör om din katt blivit huggormsbiten.",
    },
    {
      img: "/images/horseWitheBlaze.jpg",
      imageDescription: "Bunny",
      title: "Fång hos häst",
      text: "Fång hos häst är en vanlig sjukdom speciellt på somrarna, där inflammation i hovens lamellager leder till stor smärta. Läs mer om fång här.",
    },
  ];
  return (
    <div className=" w-full py-20 pl-16 pr-16 text-petCare-sapphireTeal-dark flex justify-center items-center gap-12 md:gap-7 flex-col md:flex-row flex-wrap">
      {UspListImgItems.map((item, index) => {
        return (
          <UspCardImg
            key={index}
            img={item.img}
            imgDescription={item.imageDescription}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default UspListImg;
