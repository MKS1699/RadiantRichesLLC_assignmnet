"use client";

import Link from "next/link";

const TitleNavBar = () => {
  return (
    <nav className="w-full h-auto px-2 grid grid-rows-1 grid-flow-col gap-[2px] text-[#D1D6DA] cursor-pointer text-xs lg:text-lg">
      <Link href={"#"} className="self-center justify-self-center w-full p-1">
        Categories
      </Link>
      <Link href={"#"} className="self-center justify-self-center w-full p-1">
        Website Builders
      </Link>
      <Link href={"#"} className="self-center justify-self-center w-full p-1">
        Today&apos;s Deals
      </Link>
    </nav>
  );
};

export default TitleNavBar;
