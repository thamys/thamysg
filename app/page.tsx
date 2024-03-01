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
import ServicesComponent from "./services";
import EducationComponent from "./education";

const LandingPage = () => {
  return (
    <Row gutter={[0, 60]} className="w-full">
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
      <ServicesComponent />
      <RecommendationsComponent />
      <EducationComponent/>
    </Row>
  );
};

export default LandingPage;
