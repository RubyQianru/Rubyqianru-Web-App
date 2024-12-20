"use client";
import React from "react";
import { Crypto } from "@/types/crypto";
import { Card, Row, Col } from "antd";
import dayjs from "dayjs";
import { formatToDollarPrice } from "@/app/utils/price";

const InfoCard = ({ data }: { data: Crypto[] }) => {
  const latestData = data ? data[data.length - 1] : "";
  return (
    <>
      <Card title={latestData ? latestData.name : ""}>
        {latestData && (
          <>
            <Row>
              <Col>
                <b>Current Price: </b>
              </Col>
              <Col>{formatToDollarPrice(latestData.price)}</Col>
            </Row>
            <Row>
              <Col>
                <b>Day High: </b>
              </Col>
              <Col>{formatToDollarPrice(latestData.dayHigh)}</Col>
            </Row>
            <Row>
              <Col>
                <b>Day Low: </b>
              </Col>
              <Col>{formatToDollarPrice(latestData.dayLow)}</Col>
            </Row>
            <Row>
              <Col>
                <b>Market Cap: </b>
              </Col>
              <Col>{formatToDollarPrice(latestData.volume)}</Col>
            </Row>
            <Row>
              <Col>
                <b>Updated at: </b>
              </Col>
              <Col>{dayjs(latestData.time).format("MM-DD HH:mm")}</Col>
            </Row>
          </>
        )}
      </Card>
    </>
  );
};

export default InfoCard;
