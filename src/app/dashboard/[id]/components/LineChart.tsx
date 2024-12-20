"use client";
import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import dayjs from "dayjs";
import { Crypto } from "@/types/crypto";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LineChart = ({ data }: { data: Crypto[] }) => {
  const [chartData, setChartData] = useState<Crypto[]>([]);
  const [color, setColor] = useState<string>("red");

  useEffect(() => {
    setChartData(data);
    setColor(data[data.length - 1].price > data[0].price ? "green" : "red");
  }, [data]);

  const updatedData = chartData.map((item: Crypto, index: number) => ({
    time: dayjs(item.time).format("MM-DD HH:mm"),
    price: item.price,
    type: "Current Price",
  }));

  const config = {
    data: updatedData,
    xField: "time",
    yField: "price",
    seriesField: "type",
    colorField: "value",
    style: {
      gradient: "y",
      lineWidth: 2,
    },
    yAxis: {
      title: {
        text: "Price (USD)",
      },
    },
    scale: {
      color: {
        range: [color],
      },
    },
    xAxis: {
      title: {
        text: "Time",
      },
    },
    legend: {
      position: "top",
    },
  };

  return (
    <Spin
      indicator={<LoadingOutlined spin />}
      size="large"
      spinning={chartData.length == 0}
    >
      <Line {...config} />
    </Spin>
  );
};

export default LineChart;
