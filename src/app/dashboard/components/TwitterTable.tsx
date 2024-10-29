"use client";
import React from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import { Twitter } from "@/types/twitter";

const TweetTable = ({ data }: { data: Twitter[] }) => {
  const columns = [
    {
      title: "User",
      dataIndex: "screen_name",
      key: "screen_name",
    },
    {
      title: "Text",
      dataIndex: "text",
      key: "text",
      width: 300,
      // ellipsis: true,
    },
    {
      title: "Bookmarks",
      dataIndex: "bookmarks",
      key: "bookmarks",
      sorter: (a: Twitter, b: Twitter) => a.bookmarks - b.bookmarks,
    },
    {
      title: "Favorites",
      dataIndex: "favorites",
      key: "favorites",
      sorter: (a: Twitter, b: Twitter) => a.favorites - b.favorites,
    },
    {
      title: "Quotes",
      dataIndex: "quotes",
      key: "quotes",
      sorter: (a: Twitter, b: Twitter) => a.quotes - b.quotes,
    },
    {
      title: "Replies",
      dataIndex: "replies",
      key: "replies",
      sorter: (a: Twitter, b: Twitter) => a.replies - b.replies,
    },
    {
      title: "Retweets",
      dataIndex: "retweets",
      key: "retweets",
      sorter: (a: Twitter, b: Twitter) => a.retweets - b.retweets,
    },
    {
      title: "Language",
      dataIndex: "lang",
      key: "lang",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (text: string) => dayjs(text).format("YYYY-MM-DD HH:mm:ss"),
      sorter: (a: Twitter, b: Twitter) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text: string) => dayjs(text).format("YYYY-MM-DD HH:mm:ss"),
      sorter: (a: Twitter, b: Twitter) =>
        new Date(a.time).getTime() - new Date(b.time).getTime(),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="_id"
      scroll={{ x: true }}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default TweetTable;
