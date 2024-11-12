"use client";
import { Button, Card, Col, Flex, List, Row, Tooltip, Typography } from "antd";
import React, { useEffect } from "react";
import { contacts, medias } from "./constants";
import Link from "next/link";
import {
  FilePdfOutlined,
  GithubFilled,
  LinkedinFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";

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
        <Flex gap="small">
          <Tooltip title="Linkedin">
            <Button
              style={{
                backgroundColor: "#0A66C2",
              }}
              type="default"
              icon={<LinkedinFilled />}
            />
          </Tooltip>
          <Tooltip title="Github">
            <Button
              style={{
                backgroundColor: "#24292E",
              }}
              type="default"
              icon={<GithubFilled />}
            />
          </Tooltip>
          <Tooltip title="Medium">
            <Button
              style={{
                backgroundColor: "#00AB6C",
              }}
              type="default"
              icon={<MediumCircleFilled />}
            />
          </Tooltip>
        </Flex>
      </Col>
    </Row>
  );
};

export default ContactSection;
