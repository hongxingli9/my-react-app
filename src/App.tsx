// import type { MenuProps } from "antd";
import "./App.css";
// import { useNavigate, useLocation } from "react-router";

// type MenuInfo = Parameters<NonNullable<MenuProps["onClick"]>>[0];

function App({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;

  // return (
  //   <Layout style={{ height: "100vh" }}>
  //     <Sider trigger={null} collapsible collapsed={collapsed}>
  //       <div className="demo-logo-vertical" />
  //       <Menu
  //         mode="inline"
  //         defaultSelectedKeys={["/home"]}
  //         onClick={handleClick}
  //         selectedKeys={[current]}
  //         items={[
  //           {
  //             key: "/home",
  //             icon: <UserOutlined />,
  //             label: "nav 1",
  //           },
  //           {
  //             key: "/about",
  //             icon: <VideoCameraOutlined />,
  //             label: "nav 2",
  //           },
  //           {
  //             key: "3",
  //             icon: <UploadOutlined />,
  //             label: "nav 3",
  //           },
  //         ]}
  //       />
  //     </Sider>
  //     <Layout>
  //       <Header style={{ padding: 0, background: colorBgContainer }}>
  //         <Button
  //           type="text"
  //           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  //           onClick={() => setCollapsed(!collapsed)}
  //           style={{
  //             fontSize: "16px",
  //             width: 64,
  //             height: 64,
  //           }}
  //         />
  //       </Header>
  //       <Content
  //         style={{
  //           margin: "24px 16px",
  //           padding: 24,
  //           minHeight: 280,
  //           background: colorBgContainer,
  //           borderRadius: borderRadiusLG,
  //         }}
  //       >
  //         {children}
  //       </Content>
  //     </Layout>
  //   </Layout>
  // );
}

export default App;
