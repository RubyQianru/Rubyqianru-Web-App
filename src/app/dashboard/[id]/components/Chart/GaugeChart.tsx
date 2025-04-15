"use client";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const GaugeChart = ({ value }: { value: number }) => {
  return (
    <ReactSpeedometer
      value={value}
      minValue={0}
      maxValue={1}
      needleColor="steelblue"
      needleTransitionDuration={2000}
      currentValueText="Model Confidence"
    />
  );
};

export default GaugeChart;
