"use client";

import React from "react";
import Menu from "antd/lib/menu";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import Sider from "antd/lib/layout/Sider";

const Sidebar = () => {
  return (
    <>
      <Sider breakpoint="lg" collapsedWidth="0" theme="light" trigger={null}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />}>
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link href="/about">About Me</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
