import { Col, Descriptions, DescriptionsProps, Flex, Progress, Row, Typography } from "antd";
import React from "react";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Portuguese",
    children: <Typography.Text className="text-right w-full">Native</Typography.Text>,
    span: 3,
  },
  {
    key: "2",
    label: "English",
    children: <Typography.Text className="text-right w-full">Advanced</Typography.Text>,
    span: 3,
  },
];

const LanguagesComponent = () => {
  return (
    <Col span={24}>
      <Typography.Title level={5}>Languages</Typography.Title>
      <Descriptions items={items} />
    </Col>
  );
};

export default LanguagesComponent;
