"use client";
import React from "react";
import { Card } from "antd";
import GaugeChart from "../Chart/GaugeChart";
import { Report } from "@/types/report";

const IndexCard = ({ data }: { data: Report[] }) => {
  const confidence =
    data && data.length > 0
      ? (data[data.length - 1].mean_vd_neutral * 2 +
          data[data.length - 1].mean_vd_negative) /
        3
      : 0;

  return (
    <>
      <Card
        title={"Sentiment Index"}
        style={{
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <br />
        <div className="h-[200px] overflow-hidden w-full flex justify-center text-center">
          <GaugeChart value={parseFloat(confidence.toFixed(2))} />
        </div>
      </Card>
    </>
  );
};

export default IndexCard;
