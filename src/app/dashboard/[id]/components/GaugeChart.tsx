"use client";
import React, { useEffect, useRef } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const GaugeChart = () => {
  return (
    <ReactSpeedometer
      value={333}
      minValue={0}
      maxValue={500}
      needleColor="steelblue"
      needleTransitionDuration={4000}
    />
  );
};

export default GaugeChart;
