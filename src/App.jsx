import React from "react";
import "./App.css";
import { Layout, BackTop } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Volcano from "./components/Volcano";
import Green from "./components/Green";
import Blue from "./components/Blue";
import NotFound from "./components/NotFound";
import ProfileUser from "./components/profileUser/ProfileUser";
import MenuHeader from "./components/MenuHeader";
import FooterPage from "./components/FooterPage";
import Home from "./components/home/Home";

function App() {
  const { Content, Header } = Layout;
  return (
    <Router>
      <BackTop />
      <Layout className="layout">
        <Header>
        <MenuHeader />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/volcano" component={Volcano} />
            <Route path="/green" component={Green} />
            <Route path="/blue" component={Blue} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={ProfileUser} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Content>
        <FooterPage />
      </Layout>
    </Router>
  );
}

export default App;
