import Title from "antd/es/typography/Title";
import { getCryptoDataByDay } from "./[id]/utils/getCryptoData";
import DataTable from "./components/Table";
export default async function page() {
  const cryptoData = await getCryptoDataByDay("1", "BTC");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 ">
      <div className="w-full flex items-start">
        <Title>Dashboard</Title>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <div className="w-full overflow-auto gap-8 flex flex-col justify-center md:w-10/12 overflow-auto ">
          {cryptoData.length > 0 ? (
            <DataTable data={[cryptoData[cryptoData.length - 1]]} />
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}
