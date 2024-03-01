import MastHeadMenu from "./MastHeadMenu";
const MastHead = () => {
  return (
    <div className="w-full h-fit grid grid-flow-row">
      {/* Main Page Title */}
      <h1 className="pt-5 lg:pt-10 text-2xl lg:text-5xl text-justify w-full px-1 text-[#2C384A]">
        Best Website builders in the US
      </h1>
      {/* Menu below title */}
      <MastHeadMenu />
    </div>
  );
};

export default MastHead;
