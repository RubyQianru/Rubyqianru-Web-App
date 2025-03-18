"use client";
import DayToggle from "../DayToggle";
import LineChart from "../Chart/LineChart";
import { Crypto } from "@/types/crypto";
import { useEffect, useState } from "react";

const PriceCard = ({ cryptoData }: { cryptoData: Crypto[] }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [priceData, setPriceData] = useState<Crypto[]>([]);

  useEffect(() => {
    if (cryptoData.length > 0) {
      const oneDayData = cryptoData.slice(-24);
      setPriceData(oneDayData);
      setPriceData(cryptoData);
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  }, [cryptoData]);

  useEffect(() => {
    if (selectedDay === 1) {
      const oneDayData = cryptoData.slice(-24);
      setPriceData(oneDayData);
    } else if (selectedDay === 3) {
      const threeDayData = cryptoData.slice(-72);
      setPriceData(threeDayData);
    } else if (selectedDay === 7) {
      const sevenDayData = cryptoData.slice(-168);
      setPriceData(sevenDayData);
    } else if (selectedDay === 30) {
      const thirtyDayData = cryptoData.slice(-720);
      setPriceData(thirtyDayData);
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  }, [selectedDay]);

  return (
    <div className="w-full h-full col col-span-2 flex items-center flex-col gap-4 ">
      {priceData?.length > 0 && (
        <>
          <div className="w-full flex justify-end">
            <DayToggle setSelectedDay={setSelectedDay} />
          </div>
          <div className="w-full">
            <LineChart data={priceData} />
          </div>
        </>
      )}
    </div>
  );
};

export default PriceCard;
