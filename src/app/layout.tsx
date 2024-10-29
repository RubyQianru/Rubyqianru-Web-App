import type { Metadata } from "next";
import "./globals.css";
import Layout from "antd/lib/layout";
import Content from "antd/lib/layout/layout";
import Sidebar from "../components/Sidebar";
import Footer from "antd/lib/layout/layout";
import FooterMenu from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ruby Qianru",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
            <Footer style={{ textAlign: "center" }}>
              <FooterMenu />
              <br />
              Ruby Qianru ©{new Date().getFullYear()} Created by Ruby Qianru
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
