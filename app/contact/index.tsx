"use client";
import { Avatar, Button, Card, Col, Flex, Image, List, Row, Typography } from "antd";
import React from "react";
import { contacts, medias } from "./constants";
import Link from "next/link";
import { FilePdfOutlined } from "@ant-design/icons";

const ContactMeComponent = () => {
  return (
    <Col span={24} id="services">
      <Row gutter={[60, 0]} align="bottom">
        <Col span={14}>
          <Typography.Title level={3}>Contact Me </Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </Typography.Paragraph>
          <Flex gap={24}>
            <Flex vertical gap={24} className="grow">
              <Card>
                <Typography.Title level={5}>Contact</Typography.Title>
                <List
                  itemLayout="horizontal"
                  dataSource={contacts}
                  renderItem={(item) => (
                    <Link href={item.link}>
                      <List.Item>
                        <List.Item.Meta
                          avatar={<item.icon />}
                          title={item.name}
                        />
                      </List.Item>
                    </Link>
                  )}
                />
              </Card>
              <Button type="primary" size="large" className="w-full h-16 bg-slate-600 flex items-center justify-center">
                <FilePdfOutlined />
                Download my CV
              </Button>
            </Flex>
            <Card className="grow">
              <Typography.Title level={5}>Social Media</Typography.Title>
              <List
                itemLayout="horizontal"
                dataSource={medias}
                renderItem={(item) => (
                  <Link href={item.link}>
                    <List.Item>
                      <List.Item.Meta
                        avatar={<item.icon />}
                        title={item.name}
                      />
                    </List.Item>
                  </Link>
                )}
              />
            </Card>
          </Flex>
        </Col>
        <Col span={10}>
          <Avatar size={350} src="https://via.placeholder.com/350" />
        </Col>
      </Row>
    </Col>
  );
};

export default ContactMeComponent;
