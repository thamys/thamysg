import {
  GithubFilled,
  LinkedinFilled,
  MediumCircleFilled,
} from "@ant-design/icons";
import { Avatar, Button, Col, Row, Space, Tooltip, Typography } from "antd";
import React from "react";
import IntroComponent from "./introduction";
import DetailsComponent from "./details";
import LanguagesComponent from "./languages";

const SidebarComponent = () => {
  return (
    <Row justify="center" className="p-4">
      <IntroComponent/>
      <DetailsComponent/>
      <LanguagesComponent/>
    </Row>
  );
};

export default SidebarComponent;
