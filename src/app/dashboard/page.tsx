import Title from "antd/es/typography/Title";
import DataTable from "./components/Table";
import { getCoinList } from "@/apis/crypto";
import TreeMap from "./components/TreeMap";
import { Crypto } from "@/types/crypto";

export default async function page() {
  const cryptoData = await getCoinList();
  return (
    <div className="min-h-screen p-6 md:p-8 pb-20">
      <div className="w-full flex items-start">
        <Title>Dashboard</Title>
      </div>
      <main className="space-y-8">
        <section className="grid gap-8 overflow-x-auto grid-cols-2 md:grid-cols-2">
          {cryptoData && cryptoData.length > 0 ? (
            <>
              <div className="overflow-x-auto col-span-2 ">
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
                />
              </div>
              <section className="overflow-x-auto col-span-2 ">
                <DataTable data={cryptoData} />
              </section>
            </>
          ) : (
            <></>
          )}
        </section>
      </main>
    </div>
  );
}
