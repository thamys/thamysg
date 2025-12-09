"use client";
import { Badge, Card, Col, Row, theme, Typography } from "antd";
import React from "react";
import SectionTitle from "@/ui/SectionTitle";
import { certifications } from "./data";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { contrastColor } from "@/constants/theme";

const CertificationsSection = () => {
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    return (
        <Row
            gutter={[24, 24]}
            style={{
                backgroundColor: colorBgElevated,
                borderRadius: "1rem",
                padding: "2rem",
            }}
        >
            <Col span={24} className="text-center">
                <SectionTitle>Certifications</SectionTitle>
                <Typography.Paragraph className="text-lg">
                    Professional certifications demonstrating expertise and commitment to
                    continuous learning.
                </Typography.Paragraph>
            </Col>
            {certifications.map((cert, index) => (
                <Col sm={24} md={12} key={index}>
                    <Card
                        style={{
                            backgroundColor: colorBgElevated,
                            height: "100%",
                        }}
                        className="border"
                    >
                        <div className="flex gap-4 items-start">
                            <SafetyCertificateOutlined
                                style={{ fontSize: "2rem", color: contrastColor }}
                            />
                            <div className="flex flex-col gap-2">
                                <Typography.Title level={5} className="!mb-0">
                                    {cert.name}
                                </Typography.Title>
                                <Typography.Text style={{ color: contrastColor }}>
                                    {cert.issuer}
                                </Typography.Text>
                                <Typography.Text className="text-sm">
                                    {cert.date}
                                </Typography.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default CertificationsSection;
