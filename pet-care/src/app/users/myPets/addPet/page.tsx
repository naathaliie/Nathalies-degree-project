import React from "react";
import RegisterPetForm from "@/app/components/Forms/RegisterPetForm";

const AddPet = () => {
  return (
    <div className="m-5">
      <div className=" col-span-1 border-r-2 border-petCare-sapphireTeal-superLight mt-5">
        <div className=" flex text-petCare-sapphireTeal-dark py-5">
          <div className="flex flex-col ml-10">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
              Registrera nytt husdjur
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-col bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 mx-7 text-petCare-sapphireTeal-dark">
          <div>
            <RegisterPetForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
