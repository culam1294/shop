import React from "react";
import { Menu } from "antd";
import { selectMenuX } from "../action/SelectMenu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MenuHeader() {
  const selectMenu = useSelector((state) => state.selectMenu);
  const dispatch = useDispatch();

  const onClickMenu = (e) => {
    dispatch(selectMenuX(e.key));
  };
  return (
    <Menu
      onClick={(e) => onClickMenu(e)}
      subMenuCloseDelay={0}
      theme="light"
      mode="horizontal"
      selectedKeys={[selectMenu]}
      defaultSelectedKeys={["0"]}
      style={{ fontSize: 20 }}
    >
      <Menu.Item key={0}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key={1}>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
}
