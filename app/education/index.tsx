"use client";
import { Col, Row, theme, Typography, Card } from "antd";
import { BookOutlined } from "@ant-design/icons";
import React from "react";
import { educationList } from "./constants";
import { contrastColor } from "@/constants/theme";
import SectionTitle from "@/ui/SectionTitle";

const EducationComponent = () => {
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
      <Col span={24} className="text-center">
        <SectionTitle>Education</SectionTitle>
        <Typography.Paragraph className="text-lg">
          Academic background that shaped my technical foundation in computer
          science and systems development.
        </Typography.Paragraph>
      </Col>
      {educationList.map((item, index) => (
        <Col sm={24} md={12} key={index}>
          <Card
            style={{
              backgroundColor: colorBgElevated,
              height: "100%",
            }}
            className="border"
          >
            <div className="flex gap-4 items-start">
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: contrastColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BookOutlined style={{ fontSize: "2rem", color: "#fff" }} />
              </div>
              <div className="flex flex-col gap-2">
                <Typography.Title level={5} className="!mb-0">
                  {item.title}
                </Typography.Title>
                <Typography.Text style={{ color: contrastColor }}>
                  {item.location}
                </Typography.Text>
                <Typography.Paragraph className="!mb-0">
                  {item.description}
                </Typography.Paragraph>
                <Typography.Text className="text-sm uppercase">
                  {item.date}
                </Typography.Text>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default EducationComponent;
