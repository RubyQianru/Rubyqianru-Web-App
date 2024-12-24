"use client";

import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { UserOutlined, HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
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
      </Drawer>
    </nav>
  );
};
export default NavBar;
