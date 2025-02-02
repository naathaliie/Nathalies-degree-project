import React from "react";

const NavBar = () => {
  const navItems: String[] = [
    "Alternativ 1",
    "Alternativ 2",
    "Alternativ 3",
    "Alternativ 4",
    "Alternativ 5",
  ];
  return (
    <nav className="NavBar w-full h-1/3 flex justify-center bg-petCare-darkBlue text-white">
      <div className=" flex items-center">
        <ul className="flex gap-5">
          {navItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
