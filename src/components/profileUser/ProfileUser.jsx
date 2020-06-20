import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Profile from "./ProfileView";
import Notification from "./Notification";
import AddressManagement from "./AddressManagement";
import NotFound from "../NotFound";
import { Menu, Layout, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectMenuX } from "../../action/SelectMenu";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  ProfileOutlined,
  NotificationOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function ProfileUser() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const selectMenu = useSelector((state) => state.selectMenu);
  const onClickMenu = (e) => {
    dispatch(selectMenuX(e.key));
  };
  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <div
        style={{
          display: "flex",
          border: "0.2px solid grey",
          padding: 20,
          margin: "20px 0px",
          background: "#fff",
          borderRadius: 10,
        }}
      >
        <div>
          <Button
            type="primary"
            onClick={() => toggleCollapsed()}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            onClick={(e) => onClickMenu(e)}
            selectedKeys={[selectMenu]}
            mode="inline"
            inlineCollapsed={collapsed}
            // theme="dark"
          >
            <Menu.Item key={4} icon={<ProfileOutlined />}>
              <Link to={`${match.url}/profile`}>Your Profile</Link>
            </Menu.Item>
            <Menu.Item key={5} icon={<NotificationOutlined />}>
              <Link to={`${match.url}/notification`}>Notifications</Link>
            </Menu.Item>
            <Menu.Item key={6} icon={<HomeOutlined />}>
              <Link to={`${match.url}/addressManagement`}>
                Address management
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <Content style={{ minHeight: 700 }}>
          <Switch>
            <Route exact path={`${match.url}/profile`} component={Profile} />
            <Route
              path={`${match.url}/notification`}
              component={Notification}
            />
            <Route
              path={`${match.url}/addressManagement`}
              component={AddressManagement}
            />
            <Route path={`${match.url}/*`} component={NotFound} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}
