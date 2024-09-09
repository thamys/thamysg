"use client";
import { Button, Card, Col, Flex, List, Typography } from "antd";
import React, { useEffect } from "react";
import { contacts, medias } from "./constants";
import Link from "next/link";
import { FilePdfOutlined } from "@ant-design/icons";

const ContactMeComponent = () => {
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
    <Col span={24} id="services" className="px-12 mb-10">
      <Typography.Title level={3}>Stay Connected</Typography.Title>
      <Typography.Paragraph>
        I’m always open to discussing new opportunities, collaborations, or
        simply connecting to share insights. Feel free to reach out via any of
        the methods below:.
      </Typography.Paragraph>
      <Flex gap={24}>
        <Flex vertical gap={24} className="grow">
          <div className="w-full max-w-lg">
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="large"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="thamyres-guedes-reis-correa"
              data-version="v1"
            />
          </div>
          <Button
            href={"/cv.pdf"}
            target="_blank"
            type="primary"
            size="large"
            className="w-full max-w-lg h-12 bg-slate-600 flex items-center justify-center"
          >
            <FilePdfOutlined />
            Download my CV
          </Button>
        </Flex>
        <Card className="w-full grow">
          <Typography.Title level={5}>Social Media</Typography.Title>
          <List
            itemLayout="horizontal"
            dataSource={[...contacts, ...medias]}
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
