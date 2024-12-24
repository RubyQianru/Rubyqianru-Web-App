import Title from "antd/es/typography/Title";
import DataTable from "./components/Table";
import { getCoinList } from "@/apis/crypto";
import TreeMap from "./components/TreeMap";
import { Crypto } from "@/types/crypto";

export default async function page() {
  const cryptoData = await getCoinList();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 ">
      <div className="w-full flex items-start">
        <Title>Dashboard</Title>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <div className="w-full overflow-auto gap-8 flex flex-col items-center justify-center md:w-10/12 overflow-auto ">
          {cryptoData && cryptoData.length > 0 ? (
            <>
              <TreeMap
                data={{
                  name: "Market Cap",
                  children: cryptoData.map((item: Crypto) => {
                    return {
                      name: item.name.split(" ")[0],
                      value: item.volume,
                    };
                  }),
                }}
                colorData={cryptoData.map((item: Crypto) => {
                  return {
                    name: item.name.split(" ")[0],
                    value: item.delta_price / item.price,
                  };
                })}
                width={1250}
                height={400}
              />
              <DataTable data={cryptoData} />
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}
