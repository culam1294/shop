import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
  useHistory,
  Link,
} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import NotFound from "../notFound";
import { Menu, Layout } from "antd";

export default function ProfileUser() {
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  console.log(history);
  console.log(params);
  console.log(match);
  // const handleClick = () => {
  //   history.push("/");
  // };
  const { Content } = Layout;
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Menu
          // onClick={this.handleClick}
          style={{ width: 200 }}
          defaultSelectedKeys={["0"]}
          // defaultOpenKeys={["0"]}
          mode="inline"
        >
          <Menu.Item key="0">
            <Link to={`${match.url}/page1`}>Your Profile</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to={`${match.url}/page2`}>Notification</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`${match.url}/page3`}>address management</Link>
          </Menu.Item>
        </Menu>
        <Content style={{minHeight: 700}}>
        <Switch>
          <Route exact path={`${match.url}/page1`} component={Page1} />
          <Route path={`${match.url}/page2`} component={Page2} />
          <Route path={`${match.url}/page3`} component={Page3} />
          <Route path={`${match.url}/*`} component={NotFound} />
        </Switch>
        </Content>
      </div>
    </Router>
  );
}
