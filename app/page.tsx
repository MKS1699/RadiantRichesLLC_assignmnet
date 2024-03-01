import {
  MastHead,
  NavBar,
  SiteRouteMap,
  BuilderComponent,
  RelatedDeals,
} from "./components";
import { DATA, DATAType } from "./data/data";
export default function Home() {
  return (
    <main className="justify-self-center w-full h-full md:w-4/5 lg:w-3/5 flex flex-col md:mx-auto mb-20">
      <MastHead />
      <NavBar />
      <SiteRouteMap />
      <div className="w-full h-full grid grid-flow-row grid-cols-1 gap-4 px-3 py-2">
        {DATA.map((data: DATAType, index: number) => {
          return (
            <BuilderComponent
              data={data}
              index={index}
              key={`Builder Component ${index}`}
            />
          );
        })}
      </div>
      <RelatedDeals />
    </main>
  );
}
