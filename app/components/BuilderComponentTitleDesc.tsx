import React from "react";
import { DATAType } from "../data/data";
const BuilderComponentTitleDesc = ({
  title,
  description,
}: {
  title: DATAType["title"];
  description: DATAType["description"];
}) => {
  return (
    <>
      {" "}
      <div className="text-[#2C384A] font-bold text-sm md:text-base lg:text-lg">
        {title} -{" "}
      </div>
      <div className="text-[#4B5665] text-xs md:text-sm lg:text-base">
        {description}
      </div>
    </>
  );
};

export default BuilderComponentTitleDesc;
