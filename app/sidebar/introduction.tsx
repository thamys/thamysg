"use client";
import React from "react";
import { Kalam } from "next/font/google";
import { FileOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Typography } from "antd";
import SocialMediaLinks from "@/ui/SocialMediaLinks";
import { useTheme } from "@/hooks/useThemeMode";
import { contrastColor, primaryColor } from "@/constants/theme";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const IntroComponent = () => {
  const { isDarkMode } = useTheme();
  return (
    <Col span={24} className="flex flex-col items-center gap-4">
      <Avatar size={120} src="/avatar.svg" />
      <Typography.Title
        level={2}
        className={"text-gradient-horizontal " + kalam.className}
      >
        Hi, I&rsquo;m Thamys
      </Typography.Title>
      <Typography.Title level={5} className="!mt-2">
        Front-end Developer
      </Typography.Title>
      <Typography.Paragraph className="text-center">
        Over a Decade of Shaping Digital Innovation
      </Typography.Paragraph>
      <div className="flex flex-col justify-stretch items-stretch gap-4">
        <SocialMediaLinks />
        <Button
          type="text"
          size="large"
          download={"Thamyres - Front-End Developer - Resume.pdf"}
          href="/cv.pdf"
          style={{
            backgroundColor: isDarkMode ? contrastColor : primaryColor,
            color: isDarkMode ? "#171023" : "#F5F6F6",
          }}
        >
          <FileOutlined />
          My resume
        </Button>
      </div>
    </Col>
  );
};

export default IntroComponent;
