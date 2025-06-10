"use client";
import SaveButton from "@/app/components/Buttons/SaveButton";
import { useParams } from "next/navigation";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Calendar from "@/app/components/Calendar";
import { ourServicesData } from "@/data/ourServicesData";
import PetCareModal from "@/app/components/PetCareModal";

const CompanyDetails = () => {
  const { company } = useParams() as { company: string };
  const rawTitle = company;
  const decodedTitle = decodeURIComponent(rawTitle as string); // avkoda

  const [bookEvent, setBookEvent] = useState<boolean | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const foundCompany = ourServicesData.find((s) => s.company === decodedTitle);

  const handleBookDate = () => {
    setOpenModal(true);
  };

  return (
    <div className="my-5">
      <div className=" flex flex-col bg-petCare-myWhite rounded-lg px-2 lg:px-10 py-5 md:mx-7 lg:mx-3 text-petCare-sapphireTeal-dark">
        {foundCompany?.img && (
          <div className="w-full mb-5 flex justify-center">
            <img
              src={foundCompany.img}
              alt="bild på företag"
              className="w-full h-auto rounded-lg object-contain max-h-96"
            />
          </div>
        )}
        <div className="flex flex-col lg:flex-row">
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
                onClick={() => handleBookDate()}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <PetCareModal
        text="Här kommer du kunna se lediga tider och göra bokningar i framtiden"
        modalState={openModal}
        setModalState={setOpenModal}
      />
    </div>
  );
};
export default CompanyDetails;
