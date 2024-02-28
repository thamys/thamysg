import {
  DownloadOutlined,
  GithubFilled,
  LinkedinFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import { Avatar, Button, Col, Row, Space, Tooltip, Typography } from "antd";
import React from "react";
import IntroComponent from "./introduction";
import DetailsComponent from "./details";
import LanguagesComponent from "./languages";
import SkillsComponent from "./skills";

const SidebarComponent = () => {
  return (
    <Row justify="center" gutter={[24, 24]} className="p-4">
      <IntroComponent />
      <DetailsComponent />
      <LanguagesComponent />
      <SkillsComponent />
      <Button type="primary" className="w-full m-4" icon={<DownloadOutlined />}>
        Download CV
      </Button>
    </Row>
  );
};

export default SidebarComponent;
