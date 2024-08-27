"use client";
import { Button, Col, Row, Typography } from "antd";
import React from "react";
import RecommendationsComponent from "../recommendations";
import ServicesComponent from "../services";
import EducationComponent from "../education";
import WorkHistoryComponent from "../work-history";
import ContactMeComponent from "../contact";
import Image from "next/image";

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
            <Button type="primary" className="h-16 bg-slate-600 px-8">
              Contact me
            </Button>
          </Col>
          <Col span={8}>
            <Image width={350} height={350} src="https://via.placeholder.com/300" alt="Thamys Guedes" />
          </Col>
        </Row>
      </Col>
      <ServicesComponent />
      <RecommendationsComponent />
      <EducationComponent />
      <WorkHistoryComponent />
      <ContactMeComponent />
    </Row>
  );
};

export default LandingPage;
