import Image from "next/image";
import { DATAType } from "../data/data";
import fullStarImg from "@/public/full-star.svg";
import halfStarImg from "@/public/half-star.svg";
import { useEffect, useState } from "react";

const BuilderComponentRatingsStar = ({
  stars,
}: {
  stars: DATAType["ratings"]["stars"];
}) => {
  const [wholeStarsArr, setWholeStarsArr] = useState<number[] | []>([]);
  const [halfStarsArr, setHalfStarsArr] = useState<number[] | []>([]);

  useEffect(() => {
    const wholeStars = Math.floor(stars);
    const halfStars = Math.floor((stars - wholeStars) * 2);
    const wArr = [];
    const hArr = [];
    for (var i = 1; i <= wholeStars; i++) {
      wArr[wArr.length] = i;
    }
    setWholeStarsArr(wArr);
    for (var i = 0; i < halfStars; i++) {
      hArr[hArr.length] = i;
    }
    setHalfStarsArr(hArr);
  }, []);

  return (
    <div className="w-full md:w-4/5 lg:w-3/5 2xl:w-1/2 mx-auto px-2 h-auto justify-self-center bg-transparent grid grid-rows-1 grid-flow-col-dense">
      {wholeStarsArr.map((_, index: number) => {
        return (
          <Image
            src={fullStarImg}
            alt={`Full Star Count ${index + 1}`}
            key={`Full Star Count ${index + 1}`}
            sizes="100vw"
          />
        );
      })}
      {halfStarsArr.map((_, index: number) => {
        return (
          <Image
            src={halfStarImg}
            alt={`Half Star Count ${index + 1}`}
            key={`Half Star Count ${index + 1}`}
            sizes="100vw"
          />
        );
      })}
    </div>
  );
};

export default BuilderComponentRatingsStar;
