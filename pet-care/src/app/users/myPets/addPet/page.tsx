import React from "react";
import RegisterPetForm from "@/app/components/Forms/RegisterPetForm";

const AddPet = () => {
  return (
    <div className="md:m-5">
      <div className=" col-span-1 md:border-r-2 md:border-petCare-sapphireTeal-superLight mt-5">
        <div className=" flex text-petCare-sapphireTeal-dark py-5">
          <div className="flex flex-col ml-10">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
              Registrera nytt husdjur
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 border-2 md:border-0grid-flow-col bg-petCare-myWhite rounded-lg px-5 md:px-10 py-7 mx-3 md:mx-7 mb-5 md:mb-0 text-petCare-sapphireTeal-dark">
          <RegisterPetForm />
        </div>
      </div>
    </div>
  );
};

export default AddPet;
