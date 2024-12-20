"use client";
import React from "react";
import { Card } from "antd";
import GaugeChart from "./GaugeChart";

const IndexCard = () => {
  return (
    <>
      <Card title={"Confidence"}>
        <div className="h-[200px] overflow-hidden flex justify-center">
          <GaugeChart />
        </div>
      </Card>
    </>
  );
};

export default IndexCard;
