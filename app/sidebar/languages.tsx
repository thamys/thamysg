import { Col, Flex, Progress, Typography } from "antd";
import React from "react";

const LanguagesComponent = () => {
  return (
    <Col span={24}>
      <Typography.Title level={5}>Languages</Typography.Title>
      <Flex gap="small" vertical>
        <Progress percent={30} />
        <Progress percent={30} />
      </Flex>
    </Col>
  );
};

export default LanguagesComponent;
