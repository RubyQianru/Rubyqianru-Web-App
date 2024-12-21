"use client";
import React from "react";
import { Card } from "antd";
import GaugeChart from "./GaugeChart";
import { Report } from "@/types/report";
import { Crypto } from "@/types/crypto";
import { formatToDollarPrice } from "@/app/utils/price";

const IndexCard = ({ data, price }: { data: Report[]; price: Crypto[] }) => {
  const prediction =
    data && data.length > 0 && data[0].predict_price
      ? data[0].predict_price
      : 0;
  const confidence =
    data && data.length > 0
      ? (data[0].mean_vd_neutral * 2 + data[0].mean_vd_negative) / 3
      : 0;
  const currentPrice =
    price && price.length > 0 ? price[price.length - 1].price : 0;
  const predictionStyle = {
    color: prediction > currentPrice ? "green" : "red",
  };

  return (
    <>
      <Card title={"Sentiment Index"}>
        {prediction !== 0 && (
          <div className="text-center">
            <b>Predicted Price: </b>
            <span style={predictionStyle}>
              {formatToDollarPrice(prediction)}
            </span>
          </div>
        )}
        <br />
        <div className="h-[200px] overflow-hidden w-full flex justify-center text-center">
          <GaugeChart value={parseFloat(confidence.toFixed(2))} />
        </div>
      </Card>
    </>
  );
};

export default IndexCard;
