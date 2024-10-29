"use client";
import React from "react";
import { Line } from "@ant-design/charts";
import dayjs from "dayjs";
import { Crypto } from "@/types/crypto";

const LineChart = ({ data }: { data: Crypto[] }) => {
  const chartData = data.flatMap((item: Crypto) => [
    {
      time: dayjs(item.time).format("MM-DD HH:mm"),
      price: item.price,
      type: "Current Price",
    },
    {
      time: dayjs(item.time).format("MM-DD HH:mm"),
      price: item.dayHigh,
      type: "Day High",
    },
    {
      time: dayjs(item.time).format("MM-DD HH:mm"),
      price: item.dayLow,
      type: "Day Low",
    },
  ]);

  const config = {
    data: chartData,
    width: 1200,
    xField: "time",
    yField: "price",
    seriesField: "type",
    smooth: true,
    line: {
      visible: true,
      size: 2,
    },
    point: {
      visible: true,
      size: 4,
      shape: "circle",
    },
    yAxis: {
      title: {
        text: "Price (USD)",
      },
    },
    xAxis: {
      title: {
        text: "Time",
      },
    },
    tooltip: {
      formatter: (datum: { price: number; type: string }) => {
        return { name: datum.type, value: `$${datum.price}` };
      },
    },
    legend: {
      position: "top",
    },
    color: ["#1890ff", "#52c41a", "#faad14"], // Blue for current, Green for high, Orange for low
  };

  return <Line {...config} />;
};

export default LineChart;
