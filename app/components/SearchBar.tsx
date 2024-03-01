import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className="w-full h-auto grid grid-rows-1 grid-cols-[10%_90%] bg-white rounded-md gap-1 pr-1">
      <CiSearch
        size={"1rem"}
        className="text-gray-600 justify-self-start self-center"
      />
      <input
        type="text"
        name="searchField"
        id="searchField"
        className="outline-none indent-1 w-full text-xs bg-transparent mr-1 lg:text-base"
      />
    </div>
  );
};

export default SearchBar;
