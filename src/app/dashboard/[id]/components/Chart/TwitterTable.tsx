"use client";
import React from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import { Twitter } from "@/types/twitter";
import styled from "styled-components";

const StyledTable = styled(Table<Twitter>)`
  .ant-table {
    background: transparent;
    border-radius: 12px;
    overflow: hidden;
  }

  .ant-table-thead > tr > th {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #8b8b8b;
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

const UserCell = styled.span`
  font-weight: 600;
`;

const TextCell = styled.span``;

const TweetTable = ({ data }: { data: Twitter[] }) => {
  const columns = [
    {
      title: "User",
      dataIndex: "screen_name",
      key: "screen_name",
      render: (name: string) => <UserCell>{name}</UserCell>,
    },
    {
      title: "Text",
      dataIndex: "text",
      key: "text",
      width: 500,
      render: (text: string) => <TextCell>{text}</TextCell>,
    },
    {
      title: "Bookmarks",
      dataIndex: "bookmarks",
      key: "bookmarks",
      render: (value: number) => <TextCell>{value}</TextCell>,
      sorter: (a: Twitter, b: Twitter) => a.bookmarks - b.bookmarks,
    },
    {
      title: "Favorites",
      dataIndex: "favorites",
      key: "favorites",
      render: (value: number) => <TextCell>{value}</TextCell>,
      sorter: (a: Twitter, b: Twitter) => a.favorites - b.favorites,
    },
    {
      title: "Quotes",
      dataIndex: "quotes",
      key: "quotes",
      render: (value: number) => <TextCell>{value}</TextCell>,
      sorter: (a: Twitter, b: Twitter) => a.quotes - b.quotes,
    },
    {
      title: "Replies",
      dataIndex: "replies",
      key: "replies",
      render: (value: number) => <TextCell>{value}</TextCell>,
      sorter: (a: Twitter, b: Twitter) => a.replies - b.replies,
    },
    {
      title: "Retweets",
      dataIndex: "retweets",
      key: "retweets",
      render: (value: number) => <TextCell>{value}</TextCell>,
      sorter: (a: Twitter, b: Twitter) => a.retweets - b.retweets,
    },
    {
      title: "Language",
      dataIndex: "lang",
      key: "lang",
      render: (lang: string) => <TextCell>{lang}</TextCell>,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (text: string) => (
        <TextCell>{dayjs(text).format("YYYY-MM-DD HH:mm:ss")}</TextCell>
      ),
      sorter: (a: Twitter, b: Twitter) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text: string) => (
        <TextCell>{dayjs(text).format("YYYY-MM-DD HH:mm:ss")}</TextCell>
      ),
      sorter: (a: Twitter, b: Twitter) =>
        new Date(a.time).getTime() - new Date(b.time).getTime(),
    },
  ];

  return (
    <StyledTable
      columns={columns}
      dataSource={data}
      rowKey="_id"
      scroll={{ x: true }}
      pagination={{ pageSize: 5 }}
      bordered={false}
    />
  );
};

export default TweetTable;
