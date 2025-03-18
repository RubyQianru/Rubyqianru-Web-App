"use client";

import { Select } from "antd";

const DayToggle = ({
  setSelectedDay,
}: {
  setSelectedDay: (value: number) => void;
}) => {
  return (
    <Select
      defaultValue={1}
      onChange={(value) => setSelectedDay(value)}
      options={[
        { value: 1, label: "24H" },
        { value: 3, label: "3D" },
        { value: 7, label: "7D" },
        { value: 30, label: "30D" },
      ]}
    />
  );
};

export default DayToggle;
