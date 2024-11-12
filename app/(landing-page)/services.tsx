"use client";
import { contrastColor, primaryColor } from "@/constants/theme";
import SectionTitle from "@/ui/SectionTitle";
import { Card, Col, Image, Row, theme, Typography } from "antd";
import { Kalam } from "next/font/google";
import React from "react";
const services = [
  {
    title: "Front-End Development",
    description:
      "I create responsive, user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React.js and Next.js.",
  },
  {
    title: "Full Project Lifecycle Management",
    description:
      "I manage every aspect of the project lifecycle, from initial client meetings to final delivery, ensuring timely and quality solutions.",
  },
  {
    title: "API Integration and Backend Connectivity",
    description:
      "I connect front-end applications with backend systems through seamless API integration, ensuring smooth data flow and functionality.",
  },
];

const ServicesSection = () => {
  const {
    token: { colorBgElevated },
  } = theme.useToken();
  return (
    <Col span={24} id="services">
      <Row gutter={[24, 24]}>
        <Col span={24} className="text-center">
          <SectionTitle>Services Offered</SectionTitle>
          <Typography.Title level={5} className="text-lg">
            Expert solutions tailored to your project needs.
          </Typography.Title>
        </Col>
        <Col span={24}>
          <div className="grid grid-flow-row grid-cols-3 gap-4 grow">
            {services.map((service, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: colorBgElevated,
                }}
                className="w-full flex-grow text-center"
              >
                <Typography.Title
                  level={5}
                  className="
text-gradient-horizontal"
                >
                  {service.title}
                </Typography.Title>
                <Typography.Paragraph>
                  {service.description}
                </Typography.Paragraph>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ServicesSection;
