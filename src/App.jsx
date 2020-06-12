import React from "react";
import "./App.css";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Contact from "./components/Contact";
import NotFound from "./components/notFound";
import ProfileUser from "./components/profileUser/ProfileUser";
import MenuHeader from "./components/MenuHeader";
import Home from "./components/home/Home";
import FooterPage from "./components/FooterPage";

function App() {
  const { Content } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <MenuHeader />
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={ProfileUser} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Content>
        <FooterPage/>
      </Layout>
    </Router>
  );
}

export default App;
