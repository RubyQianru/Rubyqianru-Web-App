import LineChart from "./components/LineChart";
import TweetTable from "./components/TwitterTable";
import { getCryptoData } from "./utils/getCryptoData";
import { getTwitterData } from "./utils/getTwitterData";
import Title from "antd/es/typography/Title";

export default async function Dashboard() {
  const cryptoData = await getCryptoData();
  const twitterData = await getTwitterData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <Title>BTC</Title>
        <LineChart data={cryptoData} />
        <TweetTable data={twitterData} />
      </main>
    </div>
  );
}
