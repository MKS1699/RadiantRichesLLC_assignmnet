"use client";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const BuilderComponentShowMoreButton = ({
  showAdditionalContent,
  handleAdditionalContent,
}: {
  showAdditionalContent: boolean;
  handleAdditionalContent: () => void;
}) => {
  return (
    <div
      className="text-[#1B88F4] w-fit grid grid-rows-1 grid-cols-[90%_10%] gap-0 items-center text-sm cursor-pointer"
      onClick={handleAdditionalContent}
    >
      <div>Show More</div>
      {showAdditionalContent ? <FaAngleDown /> : <FaAngleUp />}
    </div>
  );
};

export default BuilderComponentShowMoreButton;
