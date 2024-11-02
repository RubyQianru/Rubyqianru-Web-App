"use client";
import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import dayjs from "dayjs";
import { Crypto } from "@/types/crypto";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LineChart = ({ data }: { data: Crypto[] }) => {
  const [chartData, setChartData] = useState<Crypto[]>([]);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  const updatedData = chartData.map((item: Crypto) => ({
    time: dayjs(item.time).format("MM-DD HH:mm"),
    price: item.price,
    type: "Current Price",
  }));

  const config = {
    data: updatedData,
    xField: "time",
    yField: "price",
    seriesField: "type",
    smooth: true,
    line: {
      visible: true,
      size: 5,
      smooth: true,
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
