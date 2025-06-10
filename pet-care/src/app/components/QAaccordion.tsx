"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { QA } from "../../../types/types";

type AccordionProps = {
  accordionData: QA[];
};

const QAaccordion = ({ accordionData }: AccordionProps) => {
  return (
    <div>
      {accordionData.map((q) => {
        return (
          <Accordion key={q.q}>
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  sx={{
                    color: "var(--petCare-sapphireTeal-dark)",
                  }}
                />
              }
              aria-controls="panel1-content"
              id={q.q}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "1.2rem",
                  color: "var(--petCare-sapphireTeal-dark)",
                  fontWeight: "bold",
                  "@media (max-width: 640px)": {
                    fontSize: "1rem", // Mindre textstorlek för skärmar < sm
                  },
                }}
              >
                {q.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{q.a}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default QAaccordion;
