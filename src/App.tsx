import { useState } from "react";
import type { MenuProps } from "antd";
import "./App.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation } from "react-router";

type MenuInfo = Parameters<NonNullable<MenuProps["onClick"]>>[0];

const { Header, Sider, Content } = Layout;

function App({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const current = pathname;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick: MenuProps["onClick"] = (e: MenuInfo) => {
    navigate(e.key as string);
    // setCurrent(e.key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["/home"]}
          onClick={handleClick}
          selectedKeys={[current]}
          items={[
            {
              key: "/home",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "/about",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
