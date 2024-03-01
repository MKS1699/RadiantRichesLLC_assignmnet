import React from "react";
import { DATAType } from "../data/data";
import { FaCheck } from "react-icons/fa6";

const BuilderComponentMainHighlights = ({
  mainHighLightsText,
  mainHighLightsNumberValues,
  showAdditionalContent,
  additionalContent,
}: {
  mainHighLightsText: DATAType["mainHighLightsText"];
  mainHighLightsNumberValues: DATAType["mainHighLightsNumberValues"];
  additionalContent: DATAType["additionalContent"];
  showAdditionalContent: boolean;
}) => {
  return (
    <div className="block">
      <div className="text-[#2C384A] font-bold text-sm md:text-base lg:text-lg">
        Main highlights -{" "}
      </div>

      {mainHighLightsText && (
        <div className="text-[#4B5665] text-xs md:text-sm lg:text-base">
          {" "}
          {mainHighLightsText}{" "}
        </div>
      )}

      {mainHighLightsNumberValues && (
        <div className="grid grid-cols-2 grid-flow-row text-xs md:text-sm lg:text-base">
          {mainHighLightsNumberValues &&
            mainHighLightsNumberValues.map((values: any, index: number) => {
              const { rating, text } = values;
              return (
                <div key={`Main Component Highlight Values ${index}`}>
                  <div className="text-[#1B88F4]">{rating}</div>
                  <div className="text-[#4B5665]">{text}</div>
                </div>
              );
            })}
        </div>
      )}

      {showAdditionalContent && additionalContent && (
        <div>
          <h5>Why we love it</h5>
          <div className="w-full h-auto grid grid-cols-[10%_90%] grid-flow-row gap-2 md:gap-1 text-xs md:text-sm lg:text-base">
            {additionalContent?.map((content: string) => {
              return (
                <>
                  <div className="bg-[#EBF5FF] self-center justify-self-end rounded-full w-6 h-6 grid grid-rows-1 grid-cols-1">
                    <FaCheck className="self-center justify-self-center text-[#0855A1]" />
                  </div>
                  <div className="self-center text-[#4B5665]">{content}</div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderComponentMainHighlights;
