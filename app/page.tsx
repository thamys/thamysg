'use client';
import { Button, Col, Row, Typography } from "antd";
import React from "react";

const LandingPage = () => {
  return (
    <main>
      <section id="hero">
        <Row>
          <Col span={16}>
            <Typography.Title>
              I’m Thamys Guedes Front-end Developer{" "}
            </Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </Typography.Paragraph>
            <Button type="primary">Contact me</Button>
          </Col>
          <Col span={8}>
            <img src="https://via.placeholder.com/300" alt="Thamys Guedes" />
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default LandingPage;
