import React from "react";
import { Button, Avatar, Popconfirm, Popover } from "antd";
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

  const onProfile = () => {
    history.push("/profile/page1");
  };
  const onAddress = () => {
    history.push("/profile/page3");
  };

  const loginMenu = () => (
    <div style={{ display: "flex" }}>
      <ModalFormLogin />
      <ModalFormSignin />
    </div>
  );
  const logoutMenu = () => (
    <div style={{ display: "flex" }}>
      <Popover
        placement="bottom"
        // title={text}
        content={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button type="link" onClick={() => onProfile()}>
              View Profile
            </Button>
            <Button type="link" onClick={() => onAddress()}>Address Management</Button>
          </div>
        }
        trigger="click"
      >
        <Avatar
          style={{
            backgroundColor: "#87d068",
            cursor: "pointer",
            margin: "0px 20px",
          }}
          icon={<UserOutlined />}
        />
      </Popover>
      <Popconfirm
        placement="bottomRight"
        onConfirm={() => dispatch(isLogin())}
        title="Are you sure Logout？"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button type="primary">LOGOUT</Button>
      </Popconfirm>
    </div>
  );
  return <div style={{}}>{login ? logoutMenu() : loginMenu()}</div>;
}
