"use client";
import { Card, Col, Row, Tag, theme, Typography, Button } from "antd";
import React from "react";
import SectionTitle from "@/ui/SectionTitle";
import { projects } from "./data";
import { CodeOutlined, StarFilled, GithubOutlined } from "@ant-design/icons";
import { contrastColor, primaryColor } from "@/constants/theme";

const ProjectsSection = () => {
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    // Separate portfolio project from others
    const portfolioProject = projects.find(p => p.name === "Portfolio Website");
    const otherProjects = projects.filter(p => p.name !== "Portfolio Website");

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
                <SectionTitle>Open Source Projects</SectionTitle>
                <Typography.Paragraph className="text-lg">
                    Public repositories and open source contributions on GitHub.
                </Typography.Paragraph>
            </Col>

            {/* Featured Portfolio Project */}
            {portfolioProject && (
                <Col span={24}>
                    <Card
                        style={{
                            backgroundColor: colorBgElevated,
                            border: `2px solid ${primaryColor}`,
                            position: "relative",
                        }}
                        className="shadow-lg"
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-12px",
                                left: "24px",
                                backgroundColor: primaryColor,
                                padding: "4px 16px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <StarFilled style={{ color: "#fff", fontSize: "14px" }} />
                            <Typography.Text style={{ color: "#fff", fontWeight: "bold" }}>
                                This Website!
                            </Typography.Text>
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex gap-3 items-start">
                                <CodeOutlined
                                    style={{ fontSize: "2rem", color: primaryColor }}
                                />
                                <div className="flex flex-col gap-2 flex-1">
                                    <Typography.Title level={3} className="!mb-0">
                                        {portfolioProject.name}
                                    </Typography.Title>
                                    <Typography.Text
                                        className="text-sm uppercase"
                                        style={{ color: contrastColor }}
                                    >
                                        {portfolioProject.period}
                                    </Typography.Text>
                                </div>
                            </div>
                            <Typography.Paragraph className="text-lg">
                                <strong>Like this website?</strong> It's open source! 🎉
                                <br />
                                {portfolioProject.description}
                            </Typography.Paragraph>
                            {portfolioProject.technologies && (
                                <div className="flex flex-wrap gap-2">
                                    {portfolioProject.technologies.map((tech, techIndex) => (
                                        <Tag key={techIndex} color={primaryColor} className="rounded-full">
                                            {tech}
                                        </Tag>
                                    ))}
                                </div>
                            )}
                            <Button
                                type="primary"
                                size="large"
                                icon={<GithubOutlined />}
                                href={portfolioProject.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get the code on GitHub
                            </Button>
                        </div>
                    </Card>
                </Col>
            )}

            {/* Other Projects */}
            {otherProjects.map((project, index) => (
                <Col sm={24} md={12} key={index}>
                    <Card
                        style={{
                            backgroundColor: colorBgElevated,
                            height: "100%",
                        }}
                        className="border"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3 items-start">
                                <CodeOutlined
                                    style={{ fontSize: "1.5rem", color: primaryColor }}
                                />
                                <div className="flex flex-col gap-1">
                                    <Typography.Title level={4} className="!mb-0">
                                        {project.name}
                                    </Typography.Title>
                                    <Typography.Text
                                        className="text-sm uppercase"
                                        style={{ color: contrastColor }}
                                    >
                                        {project.period}
                                    </Typography.Text>
                                </div>
                            </div>
                            <Typography.Paragraph className="!mb-2">
                                {project.description}
                            </Typography.Paragraph>
                            {project.technologies && (
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Tag key={techIndex} className="rounded-full">
                                            {tech}
                                        </Tag>
                                    ))}
                                </div>
                            )}
                            <Button
                                type="default"
                                icon={<GithubOutlined />}
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                block
                            >
                                View Repository
                            </Button>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProjectsSection;
