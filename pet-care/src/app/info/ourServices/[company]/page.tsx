"use client";
import SaveButton from "@/app/components/Buttons/SaveButton";
import { useParams } from "next/navigation";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Calendar from "@/app/components/Calendar";
import { ourServicesData } from "@/data/ourServicesData";

const CompanyDetails = () => {
  const { company } = useParams() as { company: string };
  const rawTitle = company;
  const decodedTitle = decodeURIComponent(rawTitle as string); // avkoda

  console.log("Vad är params?:", company);
  const [bookEvent, setBookEvent] = useState<boolean | null>(null);

  const foundCompany = ourServicesData.find((s) => s.company === decodedTitle);

  return (
    <div className="md:m-5">
      <div>
        <div className=" flex text-petCare-sapphireTeal-dark py-2 md:py-5">
          <div className="flex flex-col ml-10 my-5 md:mb-14">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
              {foundCompany?.company}
            </h1>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row bg-petCare-myWhite rounded-lg px-10 py-5 mx-3 mb-5  md:mx-7 text-petCare-sapphireTeal-dark">
          <div className="lg:w-1/2 border-b-2 lg:border-r-2 lg:border-b-0 border-petCare-sapphireTeal-superLight pb-7 md:mr-10 flex flex-col gap-7 ">
            <div>
              <h2 className=" font-bold text-lg">
                Välkommen till {foundCompany?.company}
              </h2>
              <p>{foundCompany?.description}</p>
            </div>
            <div>
              <h2 className=" font-bold text-lg">Vi erbjuder: </h2>
              <ul className="flex flex-col gap-1">
                {foundCompany?.serviceItems.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 mt-5 lg:mt-0">
            <h2 className=" font-bold text-lg">Tillgängliga tider</h2>
            <Calendar />
            <Tooltip title="Välj datum för att se lediga tider">
              <SaveButton
                label="Boka tid "
                icon={<EventAvailableIcon fontSize="small" />}
                state={bookEvent}
                setState={setBookEvent}
                size="small"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyDetails;
