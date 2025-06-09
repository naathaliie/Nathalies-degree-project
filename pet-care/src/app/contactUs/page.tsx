import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";

const ContactUsPage = () => {
  const contactWays = [
    {
      icon: <SupportAgentIcon sx={{ width: "10rem", height: "10rem" }} />,
      title: "Telefon",
      wayOfContact: "phone",
      contact: "0707 12 34 56",
      informativeText: "Du når oss via telefon helgfria vardagar mellan 9-16",
    },
    {
      icon: <EmailIcon sx={{ width: "10rem", height: "10rem" }} />,
      title: "Mail",
      wayOfContact: "mail",
      contact: "PetCare@care.se",
      informativeText:
        "Vi svarar alltid på dina frågor inom 24 timmar (Helgfria vardagar)",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center pb-5">
      <div className=" w-full sm:w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
        <div className="flex flex-col gap-2 ml-10">
          <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
            Kontakta oss
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center gap-12 md:gap-7 flex-col md:flex-row flex-wrap bg-petCare-myWhite rounded-lg px-2 sm:px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
        {contactWays.map((contact, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center text-center gap-4 py-5 px-2 w-80 h-[30rem] border-4 border-petCare-sapphireTeal-superLight rounded-md shadow-[8px_8px_15px_rgba(14,76,86,0.20)]"
          >
            <p>{contact.icon}</p>
            <div>
              <h1 className=" text-xl sm:text-2xl">{contact.title}</h1>
              {contact.wayOfContact === "mail" ? (
                <a
                  href="mailto:PetCare@care.se"
                  className=" block my-8 font-bold text-md text-petCare-sapphireTeal-dark hover:text-petCare-sapphireTeal-superLight"
                >
                  PetCare@care.se
                </a>
              ) : (
                <a
                  href={`tel:${contact.contact.replace(/\s/g, "")}`}
                  className="block my-8 font-bold text-md text-petCare-sapphireTeal-dark hover:text-petCare-sapphireTeal-superLight"
                >
                  {contact.contact}
                </a>
              )}
              <p>{contact.informativeText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsPage;
