"use client";
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Image,
  Rate,
  Row,
  Typography,
} from "antd";
import React from "react";
import RecommendationsComponent from "./recommendations";

const LandingPage = () => {
  return (
    <Row gutter={[24, 24]} className="w-full">
      <Col span={24} id="hero">
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Typography.Title>
              I’m Thamys Guedes Front-end Developer{" "}
            </Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </Typography.Paragraph>
            <Button type="primary">Contact me</Button>
          </Col>
          <Col span={8}>
            <img src="https://via.placeholder.com/300" alt="Thamys Guedes" />
          </Col>
        </Row>
      </Col>
      <Col span={24} id="services">
        <Row>
          <Col span={24}>
            <Typography.Title level={3}>Services</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </Typography.Paragraph>
          </Col>
          <div className="grid grid-flow-row grid-cols-3 gap-4 grow">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Card className="w-full flex-grow text-center">
                  <Image src="https://via.placeholder.com/150" alt="Service" />
                  <Typography.Title level={5}>Service {index}</Typography.Title>
                  <Typography.Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    volutpat feugiat placerat lobortis. Natoque rutrum semper
                    sed suspendisse nunc lectus.
                  </Typography.Paragraph>
                </Card>
              ))}
          </div>
        </Row>
      </Col>
      <RecommendationsComponent />
    </Row>
  );
};

export default LandingPage;
