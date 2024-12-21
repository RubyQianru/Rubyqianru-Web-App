import LineChart from "./components/LineChart";
import TweetTable from "./components/TwitterTable";
import InfoCard from "./components/InfoCard";
import IndexCard from "./components/IndexCard";
import { getCryptoDataByDay } from "./utils/getCryptoData";
import { getTwitterData } from "./utils/getTwitterData";
import { getReportData } from "./utils/getReportData";
import Title from "antd/es/typography/Title";
import Divider from "antd/lib/divider";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default async function page({ params }: { params: any }) {
  const symbol = params.id;

  const cryptoData = await getCryptoDataByDay(symbol as string, "1");
  const twitterData = await getTwitterData(symbol as string, "1");
  const reportData = await getReportData(symbol as string, "1");

  return (
    <div className="min-h-screen p-6 md:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <Title>
          {cryptoData.length > 0 ? cryptoData[0].name : symbol} ({symbol})
        </Title>
        <main className="space-y-8">
          <section className="grid gap-8 overflow-x-auto grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-4 w-full col-span-2 md:col-span-1">
              <InfoCard data={cryptoData} />
              <IndexCard data={reportData} price={cryptoData} />
            </div>
            <div className="w-full h-full col col-span-2 flex items-center">
              <LineChart data={cryptoData} />
            </div>
          </section>
          <Divider />
          <section className="overflow-x-auto">
            <h1 className="text-l mb-6 md:text-3xl mb-8">Recent top Tweets</h1>
            <TweetTable data={twitterData} />
          </section>
        </main>
      </div>
    </div>
  );
}
