"use client";
import React from "react";
import { Card } from "antd";
import GaugeChart from "./GaugeChart";
import { Report } from "@/types/report";

const IndexCard = ({ data }: { data: Report[] }) => {
  const value =
    data && data.length > 0
      ? (data[0].mean_vd_neutral * 2 + data[0].mean_vd_negative) / 3
      : 0;
  return (
    <>
      <Card title={"Confidence"}>
        <div className="h-[200px] overflow-hidden flex justify-center">
          <GaugeChart value={parseFloat(value.toFixed(2))} />
        </div>
      </Card>
    </>
  );
};

export default IndexCard;
