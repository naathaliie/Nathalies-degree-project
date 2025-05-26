"use client";
import React from "react";

const About = () => {
  const text = [
    {
      title: "Grunden",
      text: "PetCare grundades blabal Lorem ipsum dolor sit amet, consecteturadipisicing elit. Facilis vero nihil, voluptas aperiam adipiscieaque consequuntur accusamus odit? Mollitia, consectetur. Iureasperiores hic earum quod a doloremque quaerat aspernaturaccusantium.",
    },
    {
      title: "Varför",
      text: "PetCare grundades blabal Lorem ipsum dolor sit amet, consecteturadipisicing elit. Facilis vero nihil, voluptas aperiam adipiscieaque consequuntur accusamus odit? Mollitia, consectetur. Iureasperiores hic earum quod a doloremque quaerat aspernaturaccusantium.",
    },
    {
      title: "Iden föddes",
      text: "PetCare grundades blabal Lorem ipsum dolor sit amet, consecteturadipisicing elit. Facilis vero nihil, voluptas aperiam adipiscieaque consequuntur accusamus odit? Mollitia, consectetur. Iureasperiores hic earum quod a doloremque quaerat aspernaturaccusantium.",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#C5E3E9] to-[#F9FCFD] bg-opacity-25 flex flex-col items-center pb-5">
      <div className="w-3/4 h-36 flex flex-col justify-center text-petCare-sapphireTeal-dark">
        <div className="flex flex-col gap-2 ml-10">
          <h1 className="text-xl font-semibold sm:text-3xl md:text-5xl">
            Läs mer om vår historia
          </h1>
        </div>
      </div>

      <div className="bg-petCare-myWhite rounded-lg px-10 pb-10 pt-5 m-2 w-3/4 h-auto text-petCare-sapphireTeal-dark">
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <div>
              <img
                src="/images/kittens.jpg"
                alt="kittens"
                className="w-full h-[30rem] object-scale-down "
              />
            </div>
            <div className="flex flex-col gap-10">
              {text.map((t, i) => {
                return (
                  <div key={i}>
                    <h1 className=" font-bold text-xl">{t.title}</h1>
                    <p>{t.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
