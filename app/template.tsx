"use client";
import React, { PropsWithChildren, useState } from "react";
import { Affix, Button, Flex, Layout, Menu, MenuProps, theme } from "antd";
import SidebarComponent from "./sidebar";
import Image from "next/image";
import { SunOutlined } from "@ant-design/icons";

const { Content, Footer, Sider, Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: "About",
    key: "about",
  },
  {
    label: "Journey",
    key: "journey",
  },
  {
    label: "Projects",
    key: "projects",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

const AppTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [current, setCurrent] = useState("about");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Sider
          className="h-screen"
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
          <Header className="flex flex-row justify-between items-center gap-4 p-4 !h-20">
            <Image
              src="/logos/dark.svg"
              alt="logo"
              className="h-full w-auto"
              width={406}
              height={88}
            />
            <Flex gap="small" className="flex flex-row justify-between items-center">
              <Menu
                inlineCollapsed={false}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
              <Button type="default">PT</Button>
              <Button type="default" icon={<SunOutlined />} />
            </Flex>
          </Header>
        </Affix>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppTemplate;
