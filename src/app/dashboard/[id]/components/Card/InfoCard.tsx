"use client";
import React from "react";
import { Crypto } from "@/types/crypto";
import { Card, Row, Col, Typography } from "antd";
import dayjs from "dayjs";
import { formatToDollarPrice } from "@/app/utils/price";

const { Title, Text } = Typography;

const InfoCard = ({ data }: { data: Crypto[] }) => {
  const latestData = data ? data[data.length - 1] : "";

  return (
    <Card
      title={
        <Title level={3} style={{ margin: 0 }}>
          {latestData ? latestData.name : ""}
        </Title>
      }
      style={{
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {latestData && (
        <div style={{ padding: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Current Price</Text>
              <div
                style={{
                  fontSize: "1.2em",
                  color: latestData.delta_price >= 0 ? "green" : "red",
                }}
              >
                {formatToDollarPrice(latestData.price)}
              </div>
            </Col>
            <Col span={12}>
              <Text strong>Market Cap</Text>
              <div style={{ fontSize: "1.2em" }}>
                {formatToDollarPrice(latestData.volume)}
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
            <Col span={12}>
              <Text strong>Day High</Text>
              <div style={{ color: "green" }}>
                {formatToDollarPrice(latestData.dayHigh)}
              </div>
            </Col>
            <Col span={12}>
              <Text strong>Day Low</Text>
              <div style={{ color: "red" }}>
                {formatToDollarPrice(latestData.dayLow)}
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "16px" }}>
            <Col span={24}>
              <Text type="secondary">
                Updated at: {dayjs(latestData.time).format("MM-DD HH:mm")}
              </Text>
            </Col>
          </Row>
        </div>
      )}
    </Card>
  );
};

export default InfoCard;
