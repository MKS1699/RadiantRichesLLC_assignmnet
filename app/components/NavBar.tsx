import React from "react";

const NavBar = () => {
  return (
    <div className=" px-2 w-full h-fit grid grid-flow-col items-center justify-items-center text-[#4B5665] gap-4 text-xs md:text-sm lg:text-lg">
      <h3 className="cursor-pointer">Tools</h3>
      <h3 className="cursor-pointer">AWS Builder</h3>
      <h3 className="cursor-pointer">Start Build</h3>
      <h3 className="cursor-pointer">Build Supplies</h3>
      <h3 className="cursor-pointer">Tooling</h3>
      <h3 className="cursor-pointer">Blue Hosting</h3>
    </div>
  );
};

export default NavBar;
