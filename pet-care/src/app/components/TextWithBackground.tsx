import React from "react";

const TextWithBackground = () => {
  return (
    <div className="bg-[#C5E3E9] w-full py-20 px-7 sm:px-16 text-petCare-sapphireTeal-dark flex flex-col justify-center items-center ">
      <div className=" w-full sm:w-2/3  flex flex-col gap-5 justify-center items-center ">
        <h1 className="font-bold text-lg sm:text-2xl">
          Samlingsplatsen för alla husdjursägare!
        </h1>
        <p>
          Vi som jobbar på PetCare är själva djurägare och delar din passion för
          husdjur. Tillsammans har vi mer än 100 års erfarenhet av djur och vet
          hur man på bästa sätt tar hand om sin pälskling. Vi vet också hur
          vanligt det är att glömma bort när man senast gjorde en vaccination
          eller vilket datum kloklippningen är bokad till. Men du kan vara lugn,
          vi samlar allt om ditt husdjur på en och samma plats, så att du kan
          luta dig tillbaka och känna dig trygg med att all viktig dokumentation
          finns samlat och att vi påminner dig om kloklippningen eller
          veterinärbesöket.
        </p>
        <p className="text-center sm:text-start">
          Ring oss på <b>0707 - 12 34 56</b> om du undrar över något.
        </p>
      </div>
    </div>
  );
};

export default TextWithBackground;
