"use client";
import { useRouter } from "next/navigation";
import DropDownList from "@/app/components/DropDownList";
import { OurServicesOptions } from "../../../../types/types";
import { useState } from "react";
import { ourServicesData } from "@/data/ourServicesData";

const OurServicesLayout = ({ children }: { children: React.ReactNode }) => {
  const [clickedService, setClickedService] = useState("Alla tjänster");
  const router = useRouter();

  const serviceOptions: OurServicesOptions[] = [
    "Kurs",
    "Pälsvård",
    "Veterinär",
  ];
  const dropDownItems = ["Alla tjänster", ...serviceOptions];

  const allOurServices = ourServicesData;

  const handleClickOnCompany = (company: string) => {
    console.log("Vad skickas som params?", company);
    router.push(`/info/ourServices/${company}`);
  };

  return (
    <div className=" bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col md:grid grid-cols-2 md:grid-flow-col md:grid-cols-3 ">
      <div className="col-span-1 border-b-2 md:border-r-2 md:border-b-0 border-petCare-sapphireTeal-superLight mt-5">
        <div className="flex text-petCare-sapphireTeal-dark py-5">
          <div className="flex flex-col gap-2 mx-5 sm:ml-10">
            <h1 className="text-xl font-semibold sm:text-3xl md:text-3xl">
              Våra tjänster
            </h1>
            <h3 className="text-sm md:text-xl mb-5">
              Här kan du bläddra bland våra sammarbetspartners för att boka in
              besök för ditt husdjur
            </h3>
            <DropDownList
              listItems={dropDownItems}
              state={clickedService}
              setState={setClickedService}
            />
          </div>
        </div>
        <aside className="flex flex-row md:flex-wrap border-2 gap-4 md:gap-7 overflow-auto bg-petCare-myWhite rounded-lg px-6 md:px-10 mb-7 py-7 m-2 md:mx-7 text-petCare-sapphireTeal-dark ">
          <ul className=" flex flex-col gap-3">
            {clickedService === "Alla tjänster" ? (
              <>
                {allOurServices
                  .sort((a, b) => a.company.localeCompare(b.company))
                  .map((s) => {
                    return (
                      <li
                        key={s._id}
                        className="font-bold cursor-pointer hover:text-petCare-sapphireTeal-superLight"
                        onClick={() => handleClickOnCompany(s.company)}
                      >
                        {s.company}
                      </li>
                    );
                  })}
              </>
            ) : (
              <>
                {allOurServices
                  .sort((a, b) => a.company.localeCompare(b.company))
                  .map((s) => {
                    if (s.typeOfServive === clickedService) {
                      return (
                        <li
                          key={s._id}
                          className="font-bold cursor-pointer hover:text-petCare-sapphireTeal-superLight"
                          onClick={() => handleClickOnCompany(s.company)}
                        >
                          {s.company}
                        </li>
                      );
                    }
                    return null;
                  })}
              </>
            )}{" "}
          </ul>
        </aside>
      </div>
      <main className="col-span-2">{children}</main>
    </div>
  );
};

export default OurServicesLayout;
