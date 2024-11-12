"use client";
import skiils from "@/constants/skills";
import { contrastColor } from "@/constants/theme";
import SectionTitle from "@/ui/SectionTitle";
import { Card, Col, Flex, Image, Row, Tag, Typography } from "antd";
import React from "react";

const CapabilitiesSection = () => {
  return (
    <Col
      span={24}
      id="capabilities"
      className="text-center max-w-full flex flex-col items-center justify-center gap-4"
    >
      <SectionTitle>
        My Capabilities
      </SectionTitle>
      <Typography.Paragraph className="text-lg">
        In these years, I’ve become proficient in front-end technologies,
        including React, Next.js, and TypeScript, with hands-on experience in UI
        frameworks like Ant Design and TailwindCSS.
      </Typography.Paragraph>
      <div className="flex flex-row flex-shrink-0 flex-wrap gap-4 justify-center items-center text-center">
        {skiils.map((skill, index) => (
          <Tag
            key={index}
            className="border rounded-full px-8 py-4 text-md uppercase"
          >
            {skill.name}
          </Tag>
        ))}
      </div>
    </Col>
  );
};

export default CapabilitiesSection;
