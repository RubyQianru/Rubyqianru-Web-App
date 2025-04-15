"use client";
import React from "react";
import { Card } from "antd";
import GaugeChart from "../Chart/GaugeChart";
import { ReportBTC } from "@/types/report";

const IndexCard = ({ data }: { data: ReportBTC[] }) => {
  const prediction =
    data && data.length > 0 && data[data.length - 1].predict
      ? data[data.length - 1].predict
      : 0;
  const confidence =
    data && data.length > 0 ? data[data.length - 1].accuracy : 0;

  return (
    <>
      <Card
        title={"Sentiment Index"}
        style={{
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {prediction !== 0 && (
          <div className="text-center">
            <span
              style={{ color: prediction === "Increase" ? "green" : "red" }}
              className="text-2xl"
            >
              <b>{prediction === "Increase" ? "Positive" : "Negative"}</b>
              {prediction === "Increase" ? " 😊" : " 😭"}
            </span>
          </div>
        )}
        <br />
        <div className="h-[200px] overflow-hidden w-full flex justify-center text-center">
          <GaugeChart
            value={parseFloat(confidence ? confidence.toFixed(2) : "")}
          />
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-gray-500 text-center">
            Powered by Random Forest machine learning model, the sentiment index
            is calculated using Twitter sentiments and price movements.
          </p>
        </div>
      </Card>
    </>
  );
};

export default IndexCard;
