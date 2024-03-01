import { DATAType } from "../data/data";
import fullStarImg from "@/public/full-star.svg";
import halfStarImg from "@/public/half-star.svg";
import Image from "next/image";
import BuilderComponentRatingsStar from "./BuilderComponentRatingsStar";

type BuilderComponentRatingsPropsTypes = {
  ratings: DATAType["ratings"];
};

export function BuilderComponentRatings({
  ratings,
}: BuilderComponentRatingsPropsTypes) {
  const { stars } = ratings;
  return (
    <div className="w-full h-full text-[#074786] grid grid-rows-[80%_20%]">
      <div className="bg-[#F3F9FF] h-3/5 text-center pt-2 px-2 rounded-b-md">
        <div className="text-sm">{ratings.number}</div>
        <div className="text-sm">{ratings.status}</div>
        <BuilderComponentRatingsStar stars={stars} />
      </div>
      <div className="w-full h-fit self-end text-center rounded-md bg-[#1B88F4] text-white text-base grid grid-cols-1 grid-rows-1 py-1 cursor-pointer">
        <div className="self-center justify-self-center">View</div>
      </div>
    </div>
  );
}
