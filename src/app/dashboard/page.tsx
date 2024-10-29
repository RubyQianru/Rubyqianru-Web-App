import LineChart from "./components/LineChart";
import TweetTable from "./components/TwitterTable";
import { getCryptoData } from "./utils/getCryptoData";
import { getTwitterData } from "./utils/getTwitterData";
import Title from "antd/es/typography/Title";

export default async function Dashboard() {
  const cryptoData = await getCryptoData();
  const twitterData = await getTwitterData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 ">
      <div className="w-full flex items-start">
        <Title>Bitcoin (BTC)</Title>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <div className="w-full overflow-auto gap-8 flex flex-col justify-center md:w-10/12 overflow-auto ">
          <div>
            <LineChart data={cryptoData} />
          </div>
          <TweetTable data={twitterData} />
        </div>
      </main>
    </div>
  );
}
