"use client";
import React, { PropsWithChildren, useState } from "react";
import { Affix, Anchor, AnchorProps, Button, Flex, Layout, theme } from "antd";
import SidebarComponent from "../sidebar";
import Image from "next/image";
import { SunOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Content, Footer, Sider, Header } = Layout;

type MenuItem = Required<AnchorProps>["items"][number];
const items: MenuItem[] = [
  {
    title: "About",
    key: "about",
    href: "#about",
  },
  {
    title: "Services",
    key: "services",
    href: "#services",
  },
  {
    title: "Capabilities",
    key: "capabilities",
    href: "#capabilities",
  },
  {
    title: "Journey",
    key: "journey",
    href: "#journey",
  },
  {
    title: "Contact",
    key: "contact",
    href: "#contact",
  },
];

const AppTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer, colorBgLayout },
  } = theme.useToken();

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Sider
          className="h-screen hidden lg:block"
          style={{
            backgroundColor: colorBgContainer,
          }}
          width={280}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <SidebarComponent />
        </Sider>
      </Affix>
      <Layout>
        <Affix offsetTop={0}>
          <Header
            className="w-screen md:w-full flex flex-row justify-between items-center gap-4 p-4 !h-20"
            style={{
              backgroundColor: colorBgLayout,
            }}
          >
            <Image
              src="/logos/dark.svg"
              alt="logo"
              className="h-full w-auto"
              width={406}
              height={88}
            />
            <Flex
              gap="small"
              className="flex flex-row justify-between items-center"
            >
              <Anchor
                className="!bg-transparent mr-4 hidden md:block"
                direction="horizontal"
                targetOffset={120}
                items={items}
              />
              <Button type="default">PT</Button>
              <Button type="default" icon={<SunOutlined />} />
            </Flex>
          </Header>
        </Affix>
        <Content className="py-8 px-12">{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          thamys.dev ©2024 Created by{" "}
          <Link href="https://github.com/thamys" target="_blank">
            Thamyres Guedes
          </Link>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppTemplate;
