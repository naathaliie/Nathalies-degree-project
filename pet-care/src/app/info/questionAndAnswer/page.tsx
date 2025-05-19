"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { questionAndAnswerMockData } from "../../../data/questionAndAnswerMockData";
import QAaccordion from "@/app/components/QAaccordion";

const QuestionAndAnswer = () => {
  const questionAndAnswers = questionAndAnswerMockData;
  return (
    <>
      <div className="LogInPage bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex min-h-[70vh] flex-col items-center">
        <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
          <div className="flex flex-col gap-2 ml-10">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
              Vanliga frågor
            </h1>
            <h3 className="text-sm md:text-xl">
              Här kan du få svar på några vanlliga frågor
            </h3>
          </div>
        </div>

        <div className="bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
          <div className="w-full flex flex-col">
            <div>
              <QAaccordion accordionData={questionAndAnswerMockData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAndAnswer;
