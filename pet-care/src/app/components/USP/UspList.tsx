import React from "react";
import UspCard from "./UspCard";

const UspList = () => {
  const uspListItems = [
    {
      title: "Hälsokoll & Påminnelser",
      text: "Håll koll på vaccinationer, veterinärbesök och andra viktiga händelser. Vi hjälper dig att aldrig missa en viktig påminnelse!",
    },
    {
      title: "Boka husdjursvård",
      text: "Behöver ditt husdjur ett veterinärbesök eller pälsvård? Boka enkelt via vår kalender och få full kontroll över tider och påminnelser!",
    },
    {
      title: "Kvalitetsprodukter",
      text: "Köp utvalt kvalitetsfoder och husdjurstillbehör direkt i vår butik. Enkelt, tryggt och anpassat efter ditt husdjurs behov!",
    },
  ];
  return (
    <div className=" w-full py-20 pl-16 pr-16 text-petCare-sapphireTeal-dark flex justify-center items-center gap-12 md:gap-7 flex-col md:flex-row flex-wrap">
      {uspListItems.map((item, index) => {
        return <UspCard key={index} title={item.title} text={item.text} />;
      })}
    </div>
  );
};

export default UspList;
