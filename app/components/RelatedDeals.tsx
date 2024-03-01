import RelatedDealsBuilder from "./RelatedDealsBuilder";

const RelatedDeals = () => {
  return (
    <div className="w-full h-auto px-2 text-[#2C384A] grid grid-cols-1 grid-rows-[20%_80%]">
      <h2>Related deals you might like for</h2>
      <div className="w-full h-full self-center grid grid-flow-col gap-4">
        <RelatedDealsBuilder />
        <RelatedDealsBuilder />
        <RelatedDealsBuilder />
      </div>
    </div>
  );
};

export default RelatedDeals;
