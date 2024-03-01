'use client';
import { Card, Col, Image, Row, Typography } from "antd";
import React from "react";

const ServicesComponent = () => {
  return (
    <Col span={24} id="services">
      <Row>
        <Col span={24} className="text-center">
          <Typography.Title level={3}>Services</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </Typography.Paragraph>
        </Col>
        <Col span={24}>
          <div className="grid grid-flow-row grid-cols-3 gap-4 grow">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Card className="w-full flex-grow text-center">
                  <Image src="https://via.placeholder.com/150" alt="Service" />
                  <Typography.Title level={5}>Service {index}</Typography.Title>
                  <Typography.Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    volutpat feugiat placerat lobortis. Natoque rutrum semper
                    sed suspendisse nunc lectus.
                  </Typography.Paragraph>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ServicesComponent;
