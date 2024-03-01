"use client";
import BuilderComponentTitleDesc from "./BuilderComponentTitleDesc";
import BuilderComponentMainHighlights from "./BuilderComponentMainHighlights";
import { BuilderComponentRatings } from "./BuilderComponentRatings";
import BuilderComponentShowMoreButton from "./BuilderComponentShowMoreButton";
import Image from "next/image";
import builderIcon from "@/public/builder-icon.svg";
import { DATAType } from "../data/data";
import { useState } from "react";

import trophyIcon from "@/public/trophy-icon.svg";
import diamondIcon from "@/public/diamond-icon.svg";

const BuilderComponent = ({
  data,
  index,
}: {
  data: DATAType;
  index: number;
}) => {
  const [showAdditionalContent, setAdditionalContent] =
    useState<boolean>(false);
  const {
    title,
    builderName,
    description,
    isBestChoice,
    isBestDeal,
    mainHighLightsText,
    mainHighLightsNumberValues,
    ratings,
    additionalContent,
    discounts,
  } = data;
  return (
    <div className="w-full h-auto grid grid-rows-1 grid-cols-[15%_60%_25%] relative">
      <div className="w-full h-full self-center justify-self-center grid grid-cols-1 grid-rows-[80%_20%]">
        <Image
          src={builderIcon}
          sizes="100vw"
          alt={builderName}
          className="self-end justify-self-center h-fit"
        />
        <div className="text-xs text-[#626E79] justify-self-center self-start">
          {builderName}
        </div>
      </div>
      <div className="w-full h-fit p-1 grid grid-flow-row">
        {/* Builder Title & Description */}
        <BuilderComponentTitleDesc title={title} description={description} />
        {/* Discounts */}
        {discounts && (
          <div className="text-[#074786] rounded-md bg-[#F2F4F7] p-2 w-fit text-xs">
            {discounts}
          </div>
        )}
        {/* Main Highlights Component */}
        <BuilderComponentMainHighlights
          mainHighLightsText={mainHighLightsText}
          mainHighLightsNumberValues={mainHighLightsNumberValues}
          additionalContent={additionalContent}
          showAdditionalContent={showAdditionalContent}
        />
        {/* show more */}
        <BuilderComponentShowMoreButton
          showAdditionalContent={showAdditionalContent}
          handleAdditionalContent={() =>
            setAdditionalContent(!showAdditionalContent)
          }
        />
      </div>
      {/* Ratings Section */}
      <BuilderComponentRatings ratings={ratings} />
      {/* Best Choice label */}
      {isBestChoice && (
        <div className="absolute top-0 left-0 bg-[#FF7724] rounded-tr-md rounded-br-md p-2 grid grid-flow-col gap-1">
          <Image
            src={trophyIcon}
            sizes="100vw"
            alt="Best Choice Icon"
            className="text-white"
          />
          <div className="hidden lg:inline-block text-white text-xs 2xl:text-base">
            Best Choice
          </div>
        </div>
      )}
      {/* Best Deal label */}
      {isBestDeal && (
        <div className="absolute top-0 left-0 bg-[#FF7724] rounded-tr-md rounded-br-md p-2 grid grid-flow-col gap-1">
          <Image
            src={diamondIcon}
            sizes="100vw"
            alt="Best Deal Icon"
            className="text-white"
          />
          <div className="hidden lg:inline-block text-white text-xs 2xl:text-base">
            Best Deal
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderComponent;
