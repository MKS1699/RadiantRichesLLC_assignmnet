import builderIcon from "@/public/builder-icon.svg";
import Image from "next/image";

const RelatedDealsBuilder = () => {
  return (
    <div className="w-full h-full grid grid-flow-row gap-2">
      <Image
        src={builderIcon}
        alt="builder icon"
        sizes="100vw"
        className="self-center justify-self-center"
      />
      <div className="grid grid-flow-col text-[#074786] text-xs self-start">
        <div className="bg-[#F2F4F7] rounded-sm px-2 self-start">20% Off</div>
        <div className="bg-[#F2F4F7] rounded-sm px-2 self-start">
          Limited Time
        </div>
      </div>
      <div className="text-base lg:text-lg text-[#626E79] font-bold justify-self-center">
        Web Builder 1
      </div>
      <div className="text-sm lg:text-base text-[#626E79]">
        Computer Modern classic with wix support
      </div>
      <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1">
        <div className="text-base lg:text-lg text-[#5C6874] col-span-2 self-end">
          $39.96
        </div>
        <div className="text-sm text-[#9FA9B3] lg:text-base self-end">
          $49.96
        </div>
        <div className="text-xs text-[#EF4C5D] self-end">(20% Off)</div>
      </div>
      <div className="w-full h-auto py-1 bg-[#1B88F4] text-white rounded-md text-center cursor-pointer">
        View Deal
      </div>
    </div>
  );
};

export default RelatedDealsBuilder;
