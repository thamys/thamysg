"use client";
import { Col, Row, Typography } from "antd";
import React, { useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import SocialMediaLinks from "@/ui/SocialMediaLinks";

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
        <SocialMediaLinks />
      </Col>
    </Row>
  );
};

export default ContactSection;
