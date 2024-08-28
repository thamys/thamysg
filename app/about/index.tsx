"use client";
import { Card, Col, Image, Row, Typography } from "antd";
import React from "react";

const AboutComponent = () => {
  return (
    <Col span={24} id="about" className="text-justify px-8">
      <Typography.Title className="text-center" level={2}>
        About me
      </Typography.Title>
      <Typography.Paragraph>
        With over 10 years of experience, I bring extensive knowledge in leading
        website design projects from start to finish. My work in software houses
        has allowed me to successfully manage diverse projects across various
        industries. I have a strong command of HTML, CSS, JavaScript, and UI
        frameworks, and I’m always eager to learn new technologies.
      </Typography.Paragraph>

      <Typography.Paragraph>
        I excel in overseeing the entire project lifecycle, ensuring every
        detail aligns with the client’s vision. My ability to gather and direct
        product information, much like a product owner, helps me create
        user-focused solutions. I am also skilled in writing clean, secure code
        and resolving complex coding issues.
      </Typography.Paragraph>

      <Typography.Paragraph>
        My leadership abilities have enabled me to guide teams effectively,
        delivering projects on time and to the highest standards. Whether
        working on small or large-scale projects, I am committed to exceeding
        expectations.
      </Typography.Paragraph>
    </Col>
  );
};

export default AboutComponent;
