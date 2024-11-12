import React from "react";
import { Kalam } from "next/font/google";
import { FileOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Flex, Tooltip, Typography } from "antd";
import { medias } from "@/constants/links";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const IntroComponent = () => {
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
        <Button
          type="text"
          size="large"
          download={"Thamyres - Front-End Developer - Resume.pdf"}
          href="/cv.pdf"
          style={{
            backgroundColor: "#413A4F",
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
