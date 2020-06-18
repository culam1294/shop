import React from "react";
import ButtonCart from "./ButtonCart";
import Search from "./Search";
import Notification from "./Notification";
import LoginNavbar from "./LoginNavbar";
import { Affix } from "antd";

export default function MenuSecond(props) {
  return (
    <Affix offsetTop={0}>
      <div style={{ display: "flex", padding: 15, backgroundColor: "black" }}>
        <ButtonCart />
        <Search placeholder={props.placeholder} />
        <Notification />
        <LoginNavbar />
      </div>
    </Affix>
  );
}
