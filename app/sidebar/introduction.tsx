import {
  GithubFilled,
  LinkedinFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import { Avatar, Button, Col, Flex, Space, Tooltip, Typography } from "antd";
import React from "react";

const IntroComponent = () => {
  return (
    <Col span={24} className="flex flex-col items-center">
      <Avatar size={120} src="https://via.placeholder.com/150" />
      <Typography.Title level={4} className="!mb-0 !mt-4">Thamys Guedes</Typography.Title>
      <Typography.Title level={5} className="!mt-2">Front-end Developer</Typography.Title>
      <Flex gap="small">
        <Tooltip title="Linkedin">
          <Button
            style={{
              backgroundColor: "#0A66C2",
            }}
            type="primary"
            shape="circle"
            icon={<LinkedinFilled />}
          />
        </Tooltip>
        <Tooltip title="Github">
          <Button
            style={{
              backgroundColor: "#24292E",
            }}
            type="primary"
            shape="circle"
            icon={<GithubFilled />}
          />
        </Tooltip>
        <Tooltip title="Medium">
          <Button
            style={{
              backgroundColor: "#00AB6C",
            }}
            type="primary"
            shape="circle"
            icon={<MediumCircleFilled />}
          />
        </Tooltip>
      </Flex>
    </Col>
  );
};

export default IntroComponent;
