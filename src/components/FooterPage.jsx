import React from "react";
import { Layout } from "antd";

export default function FooterPage() {
  const { Footer } = Layout;

  return (
    <Footer style={{ backgroundColor: "black" }}>
      <div
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
        <div style={{ display: "flex", flexDirection: "column",margin:"0px auto" }}>
          <p>My project using Reactjs</p>
          <p>Redux</p>
          <p>Thunk</p>
          <p>Ant Design</p>
          <p>React-router</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Contact me:</p>
          <p>Facebook</p>
          <p>Github</p>
          <p>Instagram</p>
          <p>Gmail</p>
        </div>
      </div>
    </Footer>
  );
}
