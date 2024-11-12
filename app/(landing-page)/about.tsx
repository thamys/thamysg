"use client";
import { Button, Card, Col, Flex, Row, theme, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { primaryColor } from "@/constants/theme";
import { JavaScriptOutlined, Html5Outlined } from "@ant-design/icons";
import SectionTitle from "@/ui/SectionTitle";

const AboutSection = () => {
  const {
    token: { colorBgElevated },
  } = theme.useToken();
  return (
    <Row
      gutter={[24, 24]}
      className="px-8"
      style={{
        backgroundColor: colorBgElevated,
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Col sm={24} md={8}>
        <Image
          src="/designer-girl.svg"
          alt="About me"
          width={434}
          height={352}
          className="!w-full !h-auto"
        />
      </Col>
      <Col
        sm={24}
        md={16}
        className="flex flex-col gap-4 justify-center items-start"
      >
        <div className="flex gap-4 justify-center">
          <JavaScriptOutlined
            style={{ fontSize: "1rem", color: primaryColor }}
          />
          <Html5Outlined style={{ fontSize: "1rem", color: primaryColor }} />
          <JavaScriptOutlined
            style={{ fontSize: "1rem", color: primaryColor }}
          />
          <Html5Outlined style={{ fontSize: "1rem", color: primaryColor }} />
          <JavaScriptOutlined
            style={{ fontSize: "1rem", color: primaryColor }}
          />
          <Html5Outlined style={{ fontSize: "1rem", color: primaryColor }} />
        </div>
        <header>
          <SectionTitle>About me</SectionTitle>
          <Typography.Title level={3} className="!mt-0">
            Crafting Impactful User Experiences
          </Typography.Title>
        </header>
        <Typography.Paragraph>
          Beyond front-end development, I’m an avid storyteller, currently
          writing my own book, a passionate RPG gamer, and a cat lover. I enjoy
          sharing insights through talks and exploring new projects in my free
          time, from building online apps to crafting fanfic reader tools.
        </Typography.Paragraph>
        <Button type="primary" href="#contact">
          Get a quote
        </Button>
      </Col>
    </Row>
  );
};

export default AboutSection;
