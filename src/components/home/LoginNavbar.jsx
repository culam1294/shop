import React from "react";
import { Button, Avatar, Popconfirm, Badge, Space } from "antd";
import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import ModalFormLogin from "./ModalFormLogin";
import ModalFormSignin from "./ModalFormSignin";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../../action/IsLogin";
import { useHistory } from "react-router-dom";

export default function LoginNavbar() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickAvatar = () => {
    history.push("/profile/page1");
  };

  const loginMenu = () => (
    <>
      <ModalFormLogin />
      <ModalFormSignin />
    </>
  );
  const logoutMenu = () => (
    <Space>
      <Badge count={1}>
        <Avatar
          onClick={() => onClickAvatar()}
          style={{ backgroundColor: "#87d068", cursor: "pointer" }}
          icon={<UserOutlined />}
        />
      </Badge>
      <Popconfirm
        placement="bottomRight"
        onConfirm={() => dispatch(isLogin())}
        title="Are you sure Logout？"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button type="link" style={{ fontSize: "1.5em" }}>
          Logout
        </Button>
      </Popconfirm>
    </Space>
  );
  return (
    <Space style={{ marginBottom: 3, marginLeft: 30 }}>
      {login ? logoutMenu() : loginMenu()}
    </Space>
  );
}
