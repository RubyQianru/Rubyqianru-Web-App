import Title from "antd/es/typography/Title";
import DataTable from "./components/Table";
import { getCoinList } from "@/apis/crypto";
import TreeMap from "./components/TreeMap";
import { Crypto } from "@/types/crypto";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default async function page() {
  const cryptoData = await getCoinList();
  return (
    <div className="min-h-screen p-6 md:p-8 pb-20">
      <div className="w-full flex items-start">
        <Title className="flex items-center gap-2">
          Dashboard
          <Tooltip
            placement="top"
            title="Welcome to the dashboard! 
            Here you can monitor cryptocurrency market data and detailed market sentiment analysis."
          >
            <QuestionCircleOutlined className="text-2xl flex items-center" />
          </Tooltip>
        </Title>
      </div>
      <main className="space-y-8">
        <section className="grid gap-8 overflow-x-auto grid-cols-2 md:grid-cols-2">
          {cryptoData && cryptoData.length > 0 ? (
            <>
              <div className="overflow-x-auto col-span-2 ">
                <div className="w-full flex justify-center">
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
