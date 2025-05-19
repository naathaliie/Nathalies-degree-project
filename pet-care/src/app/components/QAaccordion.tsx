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
          <Accordion>
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
              <Typography component="span" sx={{ fontSize: "1.5rem" }}>
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
