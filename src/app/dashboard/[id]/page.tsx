import TweetTable from "./components/Chart/TwitterTable";
import InfoCard from "./components/Card/InfoCard";
import IndexCard from "./components/Card/IndexCard";
import { getCryptoDataByDay } from "./utils/getCryptoData";
import { getTwitterData } from "./utils/getTwitterData";
import { getReportData } from "./utils/getReportData";
import Title from "antd/es/typography/Title";
import Divider from "antd/lib/divider";
import BTCCard from "./components/Card/BTCCard";
import PriceCard from "./components/Card/PriceCard";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default async function page({ params }: { params: any }) {
  const symbol = params.id;
  const cryptoData = await getCryptoDataByDay(symbol as string, "30");
  const twitterData = await getTwitterData(symbol as string, "1");
  const reportData = await getReportData(symbol as string, "30");

  return (
    <div className="min-h-screen p-6 md:p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <Title>
          <div className="flex items-center gap-2">
            <a
              href="/dashboard"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              ←
            </a>
            {cryptoData.length > 0 ? cryptoData[0].name : symbol} ({symbol})
          </div>
        </Title>
        <main className="space-y-8">
          <section className="grid gap-8 overflow-x-auto grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-4 w-full col-span-2 md:col-span-1">
              <InfoCard data={cryptoData} />
              {symbol !== "BTC" && <IndexCard data={reportData} />}
              {symbol === "BTC" && <BTCCard data={reportData} />}
            </div>
            {symbol !== "BTC" && <PriceCard cryptoData={cryptoData} />}
            {symbol === "BTC" && (
              <PriceCard cryptoData={cryptoData} reportData={reportData} />
            )}
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
