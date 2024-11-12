"use client";
import { contrastColor } from "@/constants/theme";
import { Card, Col, Image, Row, Typography } from "antd";
import { Kalam } from "next/font/google";
import React from "react";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

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

const ServicesComponent = () => {
  return (
    <Col span={24} id="services">
      <Row>
        <Col span={24} className="text-center">
        <Typography.Title
            className={`!text-sm !mb-0 !text-[${contrastColor}]`}
            style={{
              fontFamily: kalam.style.fontFamily,
            }}
            level={2}
          >
            Services Offered
          </Typography.Title>
          <Typography.Paragraph className="text-lg">
            Expert solutions tailored to your project needs.
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <div className="grid grid-flow-row grid-cols-3 gap-4 grow">
            {services.map((service, index) => (
              <Card key={index} className="w-full flex-grow text-center">
                <Typography.Title level={5}>{service.title}</Typography.Title>
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

export default ServicesComponent;
