"use client";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import RecommendationsComponent from "../recommendations";
import ServicesComponent from "../services";
import EducationComponent from "../education";
import WorkHistoryComponent from "../work-history";
import ContactMeComponent from "../contact";
import Image from "next/image";
import { MailOutlined } from "@ant-design/icons";
import AboutComponent from "../about";

const { Meta } = Card;

const LandingPage = () => {
  return (
    <Row gutter={[0, 60]} className="w-full">
      <Col span={24} id="hero" className="pt-8 px-8">
        <Typography.Title>Hi, I’m Thamys Guedes!</Typography.Title>
        <Typography.Paragraph className="text-lg">
          I’m a full stack developer passionate about creating modern and
          efficient web solutions. With a specialization in front-end
          development, I turn ideas into intuitive and responsive interfaces,
          always with a focus on detail and performance.
        </Typography.Paragraph>
        <Space size="large" className="mt-4">
          <Card>
            <Meta
              title="Get a Quote"
              description="Ready to turn your vision into reality? Let’s discuss your project
            needs and find the best solution tailored to your goals."
            />
            <Button
              type="primary"
              icon={<MailOutlined />}
              className="h-10 bg-slate-600 px-8 mt-4"
            >
              Schedule a Call
            </Button>
          </Card>
          <Card>
            <Meta
              title="Explore My Work"
              description="Curious about what I’ve created? Take a look at my portfolio to see
            the projects I’ve worked on and how I can bring your ideas to life."
            />
            <Button
              type="primary"
              icon={<MailOutlined />}
              className="h-10 bg-slate-600 px-8  mt-4"
            >
              View Portfolio
            </Button>
          </Card>
        </Space>
      </Col>
      <AboutComponent />
      <ServicesComponent />
      <WorkHistoryComponent />
      {/* <EducationComponent />
      <RecommendationsComponent /> */}
      <ContactMeComponent />
    </Row>
  );
};

export default LandingPage;
