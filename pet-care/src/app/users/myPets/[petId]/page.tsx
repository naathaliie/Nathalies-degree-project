"use client";
import SaveButton from "@/app/components/Buttons/SaveButton";
import { useAppSelector } from "@/lib/hooks";
import { useParams } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import RemovePetModal from "@/app/components/RemovePetModal";
import Tooltip from "@mui/material/Tooltip";
import Calendar from "@/app/components/Calendar";

const PetDetails = () => {
  const { petId } = useParams() as { petId: string };
  const allPets = useAppSelector((state) => state.pets.pets);
  const [SaveButtonState, setSaveButtonState] = useState<boolean | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const foundPet = allPets.find((p) => {
    return p._id === petId || null;
  });

  const removePet = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    return () => {
      setOpenModal(false);
    };
  }, []);

  return (
    <>
      {foundPet ? (
        <div className="md:m-5">
          <div>
            <div className=" flex text-petCare-sapphireTeal-dark py-2 md:py-5">
              <div className="flex flex-col ml-10 my-5 md:mb-14">
                <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
                  {foundPet.name}
                </h1>
                <p>{foundPet.species}</p>
              </div>
            </div>
            <div className=" flex flex-col-reverse md:grid md:grid-cols-2 md:grid-flow-col bg-petCare-myWhite rounded-lg px-10 py-5 mx-3 mb-5  md:mx-7 text-petCare-sapphireTeal-dark">
              <div>
                <div className="border-b-2 border-petCare-sapphireTeal-superLight pb-7 flex flex-col gap-7 flex-wrap">
                  <div>
                    <h2 className=" font-bold text-lg">Ras:</h2>
                    <p>{foundPet.breed}</p>
                  </div>
                  <div>
                    <h2 className=" font-bold text-lg">Kön:</h2>
                    <p>{foundPet.gender}</p>
                  </div>
                  <Tooltip title="Tryck här om du vill avregistrera husdjuret (du blir tillfrågad med Ja eller Nej).">
                    <SaveButton
                      label="Ta bort "
                      icon={<DeleteIcon fontSize="small" />}
                      state={SaveButtonState}
                      setState={setSaveButtonState}
                      size="small"
                      onClick={() => removePet()}
                    />
                  </Tooltip>
                </div>
                <div className="pt-5">
                  <h2 className=" font-bold text-lg">Inbokade besök</h2>
                  <Calendar pet={foundPet} />
                </div>
              </div>

              <img
                src={foundPet.img ? foundPet.img : "/images/noImgFound.png"}
                width={40}
                alt={"Bild av husdjur"}
                className=" h-52 w-72 object-scale-down rounded-3xl pb-5 md:pb-0"
              ></img>
            </div>
          </div>
          <RemovePetModal
            modalState={openModal}
            petId={foundPet._id}
            setModalState={setOpenModal}
          />
        </div>
      ) : (
        <div> Hoppsan något gick fel, försök igen</div>
      )}
    </>
  );
};
export default PetDetails;
