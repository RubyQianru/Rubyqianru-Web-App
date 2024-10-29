"use client";
import { Spin, Table, Button } from "antd";
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
    {
      title: "Link",
      dataIndex: "s_url",
      width: 400,
      render: (item: string) => (
        <>
          <Button type="primary"></Button>
        </>
      ),
      key: "s_url",
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
