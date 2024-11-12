import React from "react";
import { Kalam } from "next/font/google";
import {
  DownloadOutlined,
  FileOutlined,
  GithubFilled,
  LinkedinFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import { Avatar, Button, Col, Flex, Tooltip, Typography } from "antd";

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
      <Button type="default" size="large" download={'Thamyres - Front-End Developer - Resume.pdf'} href="/cv.pdf">
        <FileOutlined />
        My resume
      </Button>
    </Col>
  );
};

export default IntroComponent;
