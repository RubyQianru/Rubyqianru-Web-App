"use client";
import { Spin, Table } from "antd";
import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Repo } from "@/types/github";

export default function DataTable({ data }: { data: Repo[] }) {
  const [dataSource, setDataSource] = useState<Repo[]>([]);

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
      title: "Description",
      dataIndex: "s_desc",
      width: 400,
      key: "s_desc",
    },
    {
      title: "Link",
      dataIndex: "s_url",
      width: 400,
      key: "s_url",
    },
    {
      title: "Created At",
      dataIndex: "s_created_at",
      width: 200,
      key: "s_created_at",
    },
    {
      title: "Updated At",
      dataIndex: "s_updated_at",
      width: 200,
      key: "s_updated_at",
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
