"use client";
import { Spin, Table } from "antd";
import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Crypto } from "@/types/crypto";
import Link from "next/link";
import dayjs from "dayjs";
import { formatToDollarPrice } from "@/app/utils/price";

export default function DataTable({ data }: { data: Crypto[] }) {
  const [dataSource, setDataSource] = useState<Crypto[]>([]);

  useEffect(() => {
    setDataSource(data);
  }, [data]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 400,
      key: "name",
      render: (name: string, record: Crypto) => (
        <Link href={`/dashboard/${record.symbol}`}>{name}</Link>
      ),
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      width: 200,
      key: "symbol",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 200,
      render: (price: number) => <>{formatToDollarPrice(price)}</>,
      key: "price",
    },
    {
      title: "Day High",
      dataIndex: "dayHigh",
      width: 200,
      render: (price: number) => <>{formatToDollarPrice(price)}</>,
      key: "dayHigh",
    },
    {
      title: "Day Low",
      dataIndex: "dayLow",
      width: 200,
      render: (price: number) => <>{formatToDollarPrice(price)}</>,

      key: "dayLow",
    },
    {
      title: "Open",
      dataIndex: "open",
      width: 200,
      render: (price: number) => <>{formatToDollarPrice(price)}</>,
      key: "open",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      width: 200,
      render: (price: number) => <>{formatToDollarPrice(price)}</>,
      key: "volume",
    },
    {
      title: "Updated At",
      dataIndex: "time",
      width: 200,
      key: "time",
      render: (text: string) => dayjs(text).format("YYYY-MM-DD HH:mm:ss"),
      sorter: (a: Crypto, b: Crypto) =>
        new Date(a.time).getTime() - new Date(b.time).getTime(),
    },
  ];

  return (
    <>
      <Spin
        indicator={<LoadingOutlined spin />}
        size="large"
        spinning={dataSource.length == 0}
      >
        <Table
          dataSource={dataSource}
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          columns={columns as any}
          bordered={false}
        />
      </Spin>
    </>
  );
}
