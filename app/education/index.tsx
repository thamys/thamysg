"use client";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Flex,
  List,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { educationList } from "./constants";
const EducationComponent = () => {
  return (
    <Col id="education" span={24}>
      <Row>
        <Col span={24} className="text-center">
          <Typography.Title level={3}>Education</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <List
            className="w-full"
            itemLayout="horizontal"
            dataSource={educationList}
            renderItem={(item) => (
              <List.Item className="w-full">
                <Flex gap={24}>
                  <Col className="min-w-60">
                    <Flex gap={12}>
                      <Avatar src="https://via.placeholder.com/60" />
                      <Flex gap={8} vertical>
                        <Typography.Title level={5} className="!mb-0">
                          {item.title}
                        </Typography.Title>
                        <Typography.Text className="!mt-0">
                          {item.location}
                        </Typography.Text>
                        <Badge status="success" count={item.date} />
                      </Flex>
                    </Flex>
                  </Col>
                  <Col className="w-full grow">
                    <Typography.Text>{item.description}</Typography.Text>
                  </Col>
                </Flex>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default EducationComponent;
