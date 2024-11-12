"use client";
import { Button, Col, Flex, Row, Tooltip, Typography } from "antd";
import React, { useEffect } from "react";
import {
  GithubFilled,
  LinkedinFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import { medias } from "@/constants/links";

const ContactSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Limpeza do script se o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Row gutter={[24, 24]}>
      <Col sm={24} md={8}>
        <Image src="/avatar.svg" alt="Contact" width={160} height={160} />
      </Col>
      <Col sm={24} md={16}>
        <SectionTitle>Contact me</SectionTitle>
        <Typography.Title level={5}>
          Enjoyed my work? Let’s work together
        </Typography.Title>
        <Typography.Paragraph>
          I’m always up for a chat. Pop me an email at{" "}
          <a href="mailto:contato@thamys.dev">contato@thamys.dev</a> or give me
          a shout on social media.
        </Typography.Paragraph>
        <Flex gap="middle">
          {medias.map((media, index) => (
            <Tooltip title={media.name} key={index}>
              <Button
                style={{
                  backgroundColor: media.color,
                }}
                type="text"
                icon={React.createElement(media.icon)}
              />
            </Tooltip>
          ))}
        </Flex>
      </Col>
    </Row>
  );
};

export default ContactSection;
