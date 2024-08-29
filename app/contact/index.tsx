"use client";
import {
  Button,
  Card,
  Col,
  Flex,
  List,
  Typography,
} from "antd";
import React from "react";
import { contacts, medias } from "./constants";
import Link from "next/link";
import { FilePdfOutlined } from "@ant-design/icons";

const ContactMeComponent = () => {
  return (
    <Col span={24} id="services" className="px-12 mb-10">
      <Typography.Title level={3}>Stay Connected</Typography.Title>
      <Typography.Paragraph>
        I’m always open to discussing new opportunities, collaborations, or
        simply connecting to share insights. Feel free to reach out via any of
        the methods below:.
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
                    <List.Item.Meta avatar={<item.icon />} title={item.name} />
                  </List.Item>
                </Link>
              )}
            />
          </Card>
          <Button
            href={"/cv.pdf"}
            target="_blank"
            type="primary"
            size="large"
            className="w-full h-16 bg-slate-600 flex items-center justify-center"
          >
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
                  <List.Item.Meta avatar={<item.icon />} title={item.name} />
                </List.Item>
              </Link>
            )}
          />
        </Card>
      </Flex>
      {/* <Col span={10}>
          <Avatar size={350} src="https://via.placeholder.com/350" />
        </Col> */}
    </Col>
  );
};

export default ContactMeComponent;
