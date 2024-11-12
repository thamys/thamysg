"use client";
import { Col, Row, theme, Typography } from "antd";
import React from "react";
import SectionTitle from "@/ui/SectionTitle";
import Image from "next/image";
import TimelinePerTitle from "./timeline";

const WorkHistorySection = () => {
  const {
    token: { colorBgElevated },
  } = theme.useToken();

  return (
    <Row
      gutter={[24, 24]}
      style={{
        backgroundColor: colorBgElevated,
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Col sm={24} md={8} className="text-center flex flex-col gap-6">
        <SectionTitle>Professional Journey</SectionTitle>
        <Image
          src="/computer.svg"
          title="Programing hands"
          alt="Programing hands"
          width={284}
          height={208}
        />
        <Typography.Paragraph className="text-lg">
          Follow my journey through roles where I’ve worked across diverse
          industries.
        </Typography.Paragraph>
      </Col>
      <Col sm={24} md={16}>
        <TimelinePerTitle />
      </Col>
    </Row>
  );
};

export default WorkHistorySection;
