"use client";
import React from "react";
import { questionAndAnswerMockData } from "../../../data/questionAndAnswerMockData";
import QAaccordion from "@/app/components/QAaccordion";

const QuestionAndAnswer = () => {
  const questionAndAnswers = questionAndAnswerMockData;
  return (
    <>
      <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center">
        <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
          <div className="flex flex-col gap-2 ml-2 sm:ml-10">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
              Vanliga frågor
            </h1>
            <h3 className="text-sm md:text-xl">
              Här hittar du svar på några vanliga frågor
            </h3>
          </div>
        </div>

        <div className="bg-petCare-myWhite rounded-lg sm:px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
          <div className="w-full flex flex-col">
            <div>
              <QAaccordion accordionData={questionAndAnswers} />
            </div>
          </div>
        </div>
        <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
          <div className="flex flex-col gap-2 ml-10">
            <h3 className="text-sm md:text-xl text-center">
              Hittar du inte svaret på din fråga? <br /> Ring oss så hjälper vi
              dig <b>0707-12 34 56</b>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAndAnswer;
