import { TitleNavBar, SearchBar } from ".";

const TitleBar = () => {
  return (
    <div className=" bg-[#212731] h-fit p-1 w-full grid grid-rows-1 grid-flow-col px-2">
      <div className="self-center justify-self-center grid grid-cols-[30%_70%] gap-3">
        <SearchBar />
        <TitleNavBar />
      </div>
    </div>
  );
};

export default TitleBar;
