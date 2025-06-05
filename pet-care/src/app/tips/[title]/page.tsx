"use client";
import { useParams } from "next/navigation";
import React from "react";
import { uspListMockData } from "@/data/uspListData";

const TipsPage = () => {
  const params = useParams();
  const rawTitle = params.title;
  const decodedTitle = decodeURIComponent(rawTitle as string); // 👈 avkoda

  const foundTitle = uspListMockData.find((item) => {
    return item.title === decodedTitle || null;
  });

  return (
    <>
      {foundTitle ? (
        <div>
          <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center pb-5">
            <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
              <div className="flex flex-col sm:ml-10">
                <h1 className="font-semibold text-2xl sm:text-3xl ">
                  {foundTitle.title}
                </h1>
              </div>
            </div>

            <div className="bg-petCare-myWhite rounded-lg px-2 pt-0 sm:px-10 pb-10 sm:pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
              <div className="w-full flex flex-col">
                <div className="flex flex-col gap-5">
                  <div>
                    <img
                      src={foundTitle.img}
                      alt={foundTitle.imageDescription}
                      className="w-full h-full md:h-[30rem] object-scale-down mt-5"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-2xl text-center">
                      {foundTitle.text.subTitle}
                    </h1>
                    <p className="text-lg px-2 md:px-16">
                      {foundTitle.text.subText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Hittade ingen titel, något gick fel</div>
      )}
    </>
  );
};

export default TipsPage;
