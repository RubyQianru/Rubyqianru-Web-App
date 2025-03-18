"use client";
import { Spin, Table } from "antd";
import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Crypto } from "@/types/crypto";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { formatToDollarPrice } from "@/app/utils/price";
import styled from "styled-components";

const StyledTable = styled(Table<Crypto>)`
  .ant-table {
    background: transparent;
    border-radius: 12px;
    overflow: hidden;
  }

  .ant-table-thead > tr > th {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 500;
    padding: 16px;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px;
    transition: all 0.3s ease;
  }

  .ant-table-tbody > tr:hover > td {
    background: rgba(255, 255, 255, 0.05);
  }

  .ant-table-tbody > tr {
    transition: all 0.3s ease;
  }

  .ant-table-tbody > tr:hover {
    transform: translateY(-2px);
  }
`;

interface PriceCellProps {
  isPositive: boolean;
}

const PriceCell = styled.span<PriceCellProps>`
  color: ${(props: PriceCellProps) => (props.isPositive ? "red" : "green")};
  font-weight: 500;
`;

const SymbolCell = styled.span`
  font-weight: 600;
`;

const NameCell = styled.span`
  font-weight: 500;
`;

export default function DataTable({ data }: { data: Crypto[] }) {
  const [dataSource, setDataSource] = useState<Crypto[]>([]);
  const router = useRouter();

  useEffect(() => {
    setDataSource(data);
  }, [data]);

  const handleRowClick = (record: Crypto) => {
    router.push(`/dashboard/${record.symbol}`);
  };

  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      width: 100,
      key: "symbol",
      render: (symbol: string) => <SymbolCell>{symbol}</SymbolCell>,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
      key: "name",
      render: (name: string) => <NameCell>{name.split(" ")[0]}</NameCell>,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 200,
      render: (price: number, record: Crypto) => (
        <PriceCell isPositive={record.delta_price >= 0}>
          {formatToDollarPrice(price)}
        </PriceCell>
      ),
      key: "price",
    },
    {
      title: "Day High",
      dataIndex: "dayHigh",
      width: 200,
      render: (price: number) => <span>{formatToDollarPrice(price)}</span>,
      key: "dayHigh",
    },
    {
      title: "Day Low",
      dataIndex: "dayLow",
      width: 200,
      render: (price: number) => <span>{formatToDollarPrice(price)}</span>,
      key: "dayLow",
    },
    {
      title: "Open",
      dataIndex: "open",
      width: 200,
      render: (price: number) => <span>{formatToDollarPrice(price)}</span>,
      key: "open",
    },
    {
      title: "24H Volume",
      dataIndex: "volume",
      width: 250,
      render: (price: number) => <span>{formatToDollarPrice(price)}</span>,
      key: "volume",
    },
    {
      title: "Updated At",
      dataIndex: "time",
      width: 200,
      key: "time",
      render: (text: string) => (
        <span>{dayjs(text).format("YYYY-MM-DD HH:mm:ss")}</span>
      ),
      sorter: (a: Crypto, b: Crypto) =>
        new Date(a.time).getTime() - new Date(b.time).getTime(),
    },
  ];

  return (
    <Spin
      indicator={<LoadingOutlined spin />}
      size="large"
      spinning={dataSource.length === 0}
    >
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        bordered={false}
        onRow={(record: Crypto) => ({
          onClick: () => handleRowClick(record),
          style: { cursor: "pointer" },
        })}
        scroll={{ x: true }}
        pagination={false}
      />
    </Spin>
  );
}
