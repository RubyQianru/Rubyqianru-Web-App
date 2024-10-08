"use client";
import { Spin, Table } from "antd";
import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";

export default function DataTable({ data }: { data: any[] }) {
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    setDataSource(data);
  }, [data]);

  const columns = [
    {
      title: "Title",
      dataIndex: "s_title",
      width: 200,
      key: "s_title",
    },
    {
      title: "Company",
      dataIndex: "s_company",
      width: 300,
      key: "s_company",
    },
    {
      title: "Link",
      dataIndex: "s_link",
      width: 400,
      key: "s_link",
    },
  ];

  return (
    <>
      <Spin
        indicator={<LoadingOutlined spin />}
        size="large"
        spinning={dataSource.length == 0}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Spin>
    </>
  );
}
