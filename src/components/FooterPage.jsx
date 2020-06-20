import React from "react";
import { Layout } from "antd";
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p>Nguyen Lam</p>
          <p>Fresher Front End</p>
          <p>Date of birth: Feb 01, 1994</p>
          <p>Gender: Male</p>
          <p>Phone: 0987169208</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0px auto",
            alignItems: "start",
          }}
        >
          <p>My project using Reactjs</p>
          <p>+Redux</p>
          <p>+Thunk</p>
          <p>+Ant Design</p>
          <p>+React-router</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p>Contact me:</p>
          <p>
            <a href="https://www.facebook.com/thebluenguyen">
              <FacebookOutlined /> Facebook
            </a>
          </p>
          <p>
            <a href="https://github.com/culam1294">
              <GithubOutlined /> Github
            </a>
          </p>
          <p>
            <a href>
              <InstagramOutlined /> Instagram
            </a>
          </p>
          <p>
            <a href>
              <MailOutlined /> lamsphue@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Footer>
  );
}
