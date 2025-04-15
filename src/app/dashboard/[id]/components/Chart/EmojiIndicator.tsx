"use client";
import React from "react";
import { ReportBTC } from "@/types/report";
import { Crypto } from "@/types/crypto";
import dayjs from "dayjs";

interface EmojiIndicatorProps {
  data: Crypto[];
  report: ReportBTC[];
}

const EmojiIndicator = ({ data, report }: EmojiIndicatorProps) => {
  const updatedData = data.map((item: Crypto) => ({
    time: dayjs(item.time).format("MM-DD HH:mm"),
    price: item.price,
    type: "Current Price",
  }));

  const findClosestDataPoint = (reportTime: string) => {
    const reportDate = dayjs(reportTime);
    let closestPoint = updatedData[0];
    let minDiff = Infinity;

    updatedData.forEach((point) => {
      const pointDate = dayjs(point.time);
      const diff = Math.abs(pointDate.diff(reportDate));
      if (diff < minDiff) {
        minDiff = diff;
        closestPoint = point;
      }
    });

    return closestPoint;
  };

  return (
    <div className="relative w-full h-8">
      {report.map((item, index) => {
        const dataPoint = findClosestDataPoint(item.time);
        if (dataPoint) {
          return (
            <div
              key={index}
              className="absolute transform -translate-x-4"
              style={{
                left: `${(index / (report.length - 1)) * 100}%`,
              }}
            >
              <span className="text-2xl">
                {item.predict === "Increase" ? "😊" : "😭"}
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default EmojiIndicator;
