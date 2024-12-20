import LineChart from "./components/LineChart";

import TweetTable from "./components/TwitterTable";
import { getCryptoDataByDay } from "./utils/getCryptoData";
import { getTwitterData } from "./utils/getTwitterData";
import Title from "antd/es/typography/Title";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default async function page({ params }: { params: any }) {
  const symbol = params.id;

  const cryptoData = await getCryptoDataByDay("3", symbol as string);
  const twitterData = await getTwitterData();

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 ">
        <div className="w-full flex items-start">
          <Title>
            {symbol} ({symbol})
          </Title>
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
    </>
  );
}
