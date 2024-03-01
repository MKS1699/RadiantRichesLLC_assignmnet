import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
const MastHeadMenu = ({}) => {
  return (
    <div className="w-full h-fit p-2 border-y-2 border-y[#E1E4E6] mt-4 text-base grid grid-flow-col gap-4">
      {/* update */}
      <div className="w-auto h-fit grid grid-flow-col items-center gap-1">
        <div className="w-full h-fit grid grid-cols-[10%_90%] gap-1 cursor-pointer">
          <CiCircleCheck
            size={"1rem"}
            className="self-center justify-self-start text-gray-500"
          />
          <h3 className="self-center justify-self-start text-[#4B5665] text-xs lg:text-base">
            Last Updated - February 22,2020
          </h3>
        </div>
        {/* advertising */}
        <div className="w-full h-fit grid grid-cols-[10%_90%] gap-2 cursor-pointer justify-self-start">
          <CiCircleInfo
            size={"1rem"}
            className="self-center justify-self-start text-gray-500"
          />
          <h3 className="self-center justify-self-start text-[#4B5665] text-xs lg:text-base">
            Advertising Disclosures
          </h3>
        </div>
      </div>
      {/* top relevant */}
      <div className="w-full h-fit self-center justify-self-end grid grid-cols-[90%_10%] cursor-pointer gap-1">
        <h3 className="self-center justify-self-end text-[#727D87] text-xs lg:text-base">
          Top Relevant
        </h3>
        <FaChevronDown
          size={"1rem"}
          className="self-center justify-self-center text-gray-600"
        />
      </div>
    </div>
  );
};

export default MastHeadMenu;
