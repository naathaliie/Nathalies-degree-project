import React from "react";

const ImageAndText = () => {
  return (
    <div className=" relative w-full flex flex-col justify-center items-center ">
      <div className="w-full flex flex-col gap-5 justify-center items-center ">
        <img
          src="/images/catAndDogGrass.jpg"
          alt="cat and dog on grass"
          className=" w-full h-[30rem] object-cover"
        />
        <div className=" absolute text-petCare-myWhite">
          <h1 className=" font-bold text-3xl sm:text-5xl md:text-7xl">
            Välkommen till Petcare!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageAndText;
