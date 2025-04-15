"use client";
import DayToggle from "../DayToggle";
import LineChart from "../Chart/LineChart";
import { Crypto } from "@/types/crypto";
import { useEffect, useState } from "react";
import { ReportBTC } from "@/types/report";
import BTCLineChart from "../Chart/BTCLineChart";
import EmojiIndicator from "../Chart/EmojiIndicator";

const PriceCard = ({
  cryptoData,
  reportData,
}: {
  cryptoData: Crypto[];
  reportData?: ReportBTC[];
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [priceData, setPriceData] = useState<Crypto[]>([]);
  const [report, setReport] = useState<ReportBTC[]>([]);

  useEffect(() => {
    if (cryptoData.length > 0) {
      const oneDayData = cryptoData.slice(-24);
      setPriceData(oneDayData);
    }
    if (reportData && reportData.length > 0) {
      const oneDayData = reportData.slice(-1);
      setReport(oneDayData);
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  }, [cryptoData, reportData]);

  useEffect(() => {
    if (selectedDay === 1) {
      const oneDayData = cryptoData.slice(-24);
      setPriceData(oneDayData);
      const onDayReportData = reportData?.slice(-1);
      setReport(onDayReportData || []);
    } else if (selectedDay === 3) {
      const threeDayData = cryptoData.slice(-72);
      setPriceData(threeDayData);
      const threeDayReportData = reportData?.slice(-3);
      setReport(threeDayReportData || []);
    } else if (selectedDay === 7) {
      const sevenDayData = cryptoData.slice(-168);
      setPriceData(sevenDayData);
      const sevenDayReportData = reportData?.slice(-7);
      setReport(sevenDayReportData || []);
    } else if (selectedDay === 30) {
      const thirtyDayData = cryptoData.slice(-720);
      setPriceData(thirtyDayData);
      const thirtyDayReportData = reportData?.slice(-30);
      setReport(thirtyDayReportData || []);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [selectedDay]);

  return (
    <div className="w-full h-full col col-span-2 flex items-center flex-col gap-4 ">
      {priceData?.length > 0 && (
        <>
          <div className="w-full flex justify-end">
            <DayToggle setSelectedDay={setSelectedDay} />
          </div>
          <div className="w-full">
            {reportData && reportData.length > 0 ? (
              <>
                <BTCLineChart data={priceData} />
                <div className="w-full flex justify-center">
                  <div className="w-[calc(100%-120px)] ml-[60px]">
                    <EmojiIndicator data={priceData} report={report} />
                  </div>
                </div>
              </>
            ) : (
              <LineChart data={priceData} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PriceCard;
