/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Spin, Table, Button } from "antd";
import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Repo } from "@/types/github";
import dayjs from "dayjs";

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
      render: (text: string) => dayjs(text).format("YYYY-MM-DD HH:mm:ss"),
      sorter: (a: Repo, b: Repo) =>
        new Date(a.s_created_at).getTime() - new Date(b.s_created_at).getTime(),
    },
    {
      title: "Updated At",
      dataIndex: "s_updated_at",
      width: 200,
      key: "s_updated_at",
      defaultSortOrder: "descend",
      render: (text: string) => dayjs(text).format("YYYY-MM-DD HH:mm:ss"),
      sorter: (a: Repo, b: Repo) =>
        new Date(a.s_updated_at).getTime() - new Date(b.s_updated_at).getTime(),
    },
    {
      title: "Link",
      dataIndex: "s_url",
      width: 100,
      render: (item: string) => (
        <>
          <Button type="primary">
            <a href={item}>GitHub</a>
          </Button>
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
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Table dataSource={dataSource} columns={columns as any} />
      </Spin>
    </>
  );
}
