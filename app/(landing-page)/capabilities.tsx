"use client";
import skiils from "@/constants/skills";
import { contrastColor } from "@/constants/theme";
import SectionTitle from "@/ui/SectionTitle";
import { Card, Col, Flex, Image, Row, Tag, Typography } from "antd";
import React from "react";

const CapabilitiesSection = () => {
  return (
    <div className="text-center max-w-full flex flex-col items-center justify-center gap-4">
      <SectionTitle>My Capabilities</SectionTitle>
      <Typography.Paragraph className="text-lg">
        In these years, I've become proficient in front-end and back-end
        technologies, including React, Next.js, TypeScript, Node.js, and
        NestJS, with hands-on experience in UI frameworks like Ant Design and
        TailwindCSS, database solutions like Firebase, PostgreSQL, and MongoDB,
        as well as containerization with Docker and Kubernetes.
      </Typography.Paragraph>
      <div className="w-full flex flex-row flex-shrink-0 flex-wrap gap-2 md:gap-4 justify-center items-center text-center">
        {skiils.map((skill, index) => (
          <Tag
            key={index}
            className="border rounded-full md:px-8 md:py-4 px-4 py-2 text-md uppercase"
          >
            {skill.name}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesSection;
