"use client";
import { Badge, Card, Col, Row, theme, Typography } from "antd";
import React from "react";
import SectionTitle from "@/ui/SectionTitle";
import { articles } from "./data";
import { FileTextOutlined, GlobalOutlined } from "@ant-design/icons";
import { contrastColor, primaryColor } from "@/constants/theme";

const ArticlesSection = () => {
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
                <SectionTitle>Articles & Publications</SectionTitle>
                <Typography.Paragraph className="text-lg">
                    Technical articles sharing insights on web development, Web3, and
                    software engineering.
                </Typography.Paragraph>
            </Col>
            {articles.map((article, index) => (
                <Col sm={24} md={12} lg={8} key={index}>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                    >
                        <Card
                            hoverable
                            style={{
                                backgroundColor: colorBgElevated,
                                height: "100%",
                            }}
                            className="border transition-all hover:shadow-lg"
                        >
                            <div className="flex flex-col gap-3 h-full">
                                <div className="flex gap-3 items-start">
                                    <FileTextOutlined
                                        style={{ fontSize: "1.5rem", color: primaryColor }}
                                    />
                                    <Badge
                                        count={article.language.toUpperCase()}
                                        style={{
                                            backgroundColor: contrastColor,
                                            color: "#fff",
                                        }}
                                    />
                                </div>
                                <Typography.Title level={5} className="!mb-2 !mt-0">
                                    {article.title}
                                </Typography.Title>
                                <Typography.Paragraph
                                    ellipsis={{ rows: 3 }}
                                    className="!mb-2 flex-grow"
                                >
                                    {article.description}
                                </Typography.Paragraph>
                                <div className="flex items-center gap-2 mt-auto">
                                    <GlobalOutlined style={{ color: contrastColor }} />
                                    <Typography.Text
                                        className="text-sm"
                                        style={{ color: contrastColor }}
                                    >
                                        Read on LinkedIn
                                    </Typography.Text>
                                </div>
                            </div>
                        </Card>
                    </a>
                </Col>
            ))}
        </Row>
    );
};

export default ArticlesSection;
