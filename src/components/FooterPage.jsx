import React from "react";
import { Layout } from "antd";
import "./FooterPage.css";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function FooterPage() {
  const { Footer } = Layout;
  return (
    <Footer style={{ backgroundColor: "black" }}>
      <div
        className="footer"
        style={{
          display: "flex",
          color: "white",
          margin: 20,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Project using Reactjs</p>
          <p>Redux</p>
          <p>Thunk</p>
          <p>Ant Design</p>
          <p>React-router</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0px auto",
          }}
        >
          <p>My project using Reactjs</p>
          <p>Redux</p>
          <p>Thunk</p>
          <p>Ant Design</p>
          <p>React-router</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Contact me:</p>
          <p><a href>
            <FacebookOutlined /> Facebook
          </a></p>
          <a href>
            <GithubOutlined /> Github
          </a>
          <a href>
            <InstagramOutlined /> Instagram
          </a>
          <a href>
            <MailOutlined /> Gmail
          </a>
        </div>
      </div>
    </Footer>
  );
}
