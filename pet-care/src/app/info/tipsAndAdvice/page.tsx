"use client";
import UspListImg from "@/app/components/USPImageAndText/UspListImg";
import { tipsAndAdviceUspListMockData } from "@/data/uspListData";
import React from "react";

const TipsAndAdvice = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center pb-5">
        <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
          <div className="flex flex-col gap-2 ml-10">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
              Tips & råd
            </h1>
            <h3 className="text-sm md:text-xl">
              Här har vi listat våra mest värdefulla tips och råd på ett och
              samma ställe
            </h3>
          </div>
        </div>

        <div className="bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
          <div className="w-full flex flex-col">
            <div className="">
              <UspListImg uspListImgData={tipsAndAdviceUspListMockData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsAndAdvice;
